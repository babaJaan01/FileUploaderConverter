# File Uploader -> Converter

Upload a file and then convert it to a different file type.

It sends the file to an AWS S3 bucket which is a trigger for an AWS Lambda Function with a layer for [FFmpeg](https://www.ffmpeg.org/) that handles the processing and conversion.

The frontend has some simple styles borrowed from my [portfolio website](https://shayaant.vercel.app).

# Demo




https://github.com/user-attachments/assets/f17280f2-a239-4c3e-a258-2fdbf65033e0



One of the main reasons I used AWS for this project instead of using something like flask is so I can get some experience with AWS. Also this is more scalable and I don't have to maintain server infastructure for file uploads, conversions and such.

However, I won't be hosting this due to unwanted AWS billing costs. ☹️ 😢
