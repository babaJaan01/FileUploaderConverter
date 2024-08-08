# File Uploader -> Converter

This is where you can upload a file and then convert it to a different file type.

It sends the file to an AWS S3 bucket which is a trigger for an AWS Lambda Function with a layer that handles the processing and conversion.


One of the main reasons I used AWS for this is because with AWS I don't have to maintain server infastructure for file uploads and conversions and such.

However, I will not be hosting this as a website due to unwanted AWS billing costs.
