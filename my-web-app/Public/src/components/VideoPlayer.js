function uploadVideo(file) {
    // Create a FormData object to send the file
    const formData = new FormData();
    formData.append('video', file);

    // Make a POST request to your backend endpoint
    fetch('/upload', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (response.ok) {
            // Video uploaded successfully
            console.log('Video uploaded successfully');
        } else {
            // Video upload failed
            console.error('Failed to upload video');
        }
    })
    .catch(error => {
        console.error('Error uploading video:', error);
    });
}

// Example usage:
const input = document.getElementById('videoInput');
input.addEventListener('change', function(event) {
    const files = event.target.files;
    if (files && files.length > 0) {
        uploadVideo(files[0]);
    }
});