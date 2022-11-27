import React, { useState, useCallback } from 'react';
import style from './UploadBox.module.scss';
import { useDropzone } from 'react-dropzone';

const UploadBox = () => {
    const onDrop = useCallback((acceptedFiles) => {
        console.log(acceptedFiles);
    }, []);
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: {
            'text/*': ['.pdf', '.doc', '.docx']
        },
        maxSize: 153600
    });

    return (
        <div className={style.flexContainer} {...getRootProps()}>
            <input {...getInputProps()} />
            <img src="upload.png" alt="" />
            <p className={style.flexContainer_paragraph}>
                ( File accepted: pdf. doc/ docx -<br />
                Max file size : 150kb for demo limit )
            </p>
            <button className={style.flexContainer_btn}>
                Upload The Documents
            </button>
        </div>
    );
};

export default UploadBox;
