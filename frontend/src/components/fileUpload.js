import React, { useState } from 'react';
import axios from 'axios';
import './index.scss';

const FileUpload = () => {
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleFileUpload = async () => {
        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await axios.post('http://localhost:8081/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log('file uploaded', response.data);
        } catch (error) {
            console.error('file not uploaded', error);
        }
    };

    return (
        <div className="file-upload-container">
            <input type="file" className='frosted-button' onChange={handleFileChange} />
            <button className='frosted-button' onClick={handleFileUpload}>Upload</button>
        </div>
    );
};

export default FileUpload;