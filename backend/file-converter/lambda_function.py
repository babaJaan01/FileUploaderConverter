import boto3
import os
from pydub import AudioSegment
from io import BytesIO
import logging
import subprocess
import json
import pydub.utils

s3_client = boto3.client('s3')

os.environ["PATH"] += os.pathsep + "/opt/bin"
# need to configure ffmpeg and ffprobe layer in lambda layers to work
# logging
# ;( lotta debugging
logging.basicConfig(level=logging.DEBUG)

def lambda_handler(event, context):
    
    bucket_name = event['Records'][0]['s3']['bucket']['name']
    file_key = event['Records'][0]['s3']['object']['key']
    
    try:
        response = s3_client.get_object(Bucket=bucket_name, Key=file_key)
        file_stream = response['Body'].read()
        logging.debug("File Stream (first 100 bytes): %s", file_stream[:100])
    except Exception as e:
        logging.error("Error downloading file from S3: %s", e)
        raise e
    
    try:
        mp4_audio = AudioSegment.from_file(BytesIO(file_stream), format="mp4")
        mp3_stream = BytesIO()
        mp4_audio.export(mp3_stream, format="mp3")
        mp3_stream.seek(0)
        
        mp3_file_key = file_key.rsplit('.', 1)[0] + '.mp3'
        
        s3_client.put_object(
            Bucket=bucket_name,
            Key=mp3_file_key,
            Body=mp3_stream,
            ContentType='audio/mpeg'
        )
        
        return {
            'statusCode': 200,
            'body': f'MP3 file successfully created and uploaded as {mp3_file_key}'
        }
    except Exception as e:
        logging.error("Error processing file: %s", e)
        raise e
