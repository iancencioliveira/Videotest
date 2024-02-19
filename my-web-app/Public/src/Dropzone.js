Dropzone.autoDiscover = false; // Disable auto-discovery of dropzone elements

// Initialize Dropzone with custom options
var myDropzone = new Dropzone("#myDropzone", {
    url: "/upload", // URL for file upload endpoint
    maxFilesize: 10, // Maximum file size in megabytes
    acceptedFiles: "video/*", // Accepted file types
    addRemoveLinks: true, // Add remove links for uploaded files
    dictDefaultMessage: "Drop videos here or click to upload", // Default message
    dictRemoveFile: "Remove", // Text for remove file link
    // Add more options as needed
});

// Listen for success event when file upload is successful
myDropzone.on("success", function(file, response) {
    console.log("File uploaded successfully: ", file, response);
});

// Listen for error event when file upload encounters an error
myDropzone.on("error", function(file, errorMessage) {
    console.error("Error uploading file: ", file, errorMessage);
});

import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

function MyDropzone() {
    const onDrop = useCallback(acceptedFiles => {
        // Do something with the accepted files
        console.log(acceptedFiles);
    }, []);

    const {getRootProps, getInputProps} = useDropzone({onDrop});

    return (
        <div {...getRootProps()} style={{border: '1px solid #ccc', padding: '20px', textAlign: 'center'}}>
            <input {...getInputProps()} />
            <p>Drag 'n' drop some video files here, or click to select files</p>
        </div>
    );
}

export default MyDropzone;
