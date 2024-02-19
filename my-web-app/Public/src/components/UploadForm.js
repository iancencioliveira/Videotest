function uploadVideo() {
    // Get the file input element
    const input = document.getElementById('videoInput');

    // Check if files were selected
    if (input.files && input.files.length > 0) {
        // Get the first selected file (assuming only one file is selected)
        const file = input.files[0];

        // Check if the selected file is a video
        if (file.type.startsWith('video/')) {
            // You can perform additional checks or validation here

            // Display a message to the user indicating that the file is being uploaded
            console.log('Uploading video:', file.name);

            // Here, you would typically send the file to your server for further processing
            // For example, you can use the Fetch API or XMLHttpRequest to send the file via a POST request
            // Example:
            /*
            const formData = new FormData();
            formData.append('video', file);

            fetch('/upload', {
                method: 'POST',
                body: formData
            })
            .then(response => {
                if (response.ok) {
                    console.log('Video uploaded successfully');
                    // Optionally, you can display a success message to the user
                } else {
                    console.error('Failed to upload video');
                    // Optionally, you can display an error message to the user
                }
            })
            .catch(error => {
                console.error('Error uploading video:', error);
                // Optionally, you can display an error message to the user
            });
            */
        } else {
            // Display an error message if the selected file is not a video
            console.error('Please select a valid video file');
            // Optionally, you can display an error message to the user
        }
    } else {
        // Display an error message if no files were selected
        console.error('Please select a video file');
        // Optionally, you can display an error message to the user
    }
}

// Get the file input element
const input = document.getElementById('videoInput');
// Get the container to display selected video information
const selectedVideosContainer = document.getElementById('selectedVideos');

// Add event listener for file selection
input.addEventListener('change', handleFileSelect);

function handleFileSelect(event) {
    // Get the selected files
    const files = event.target.files;

    // Clear the selectedVideosContainer
    selectedVideosContainer.innerHTML = '';

    // Loop through the selected files
    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        
        // Check if the selected file is a video
        if (file.type.startsWith('video/')) {
            // Display information about the selected video
            const videoInfo = document.createElement('p');
            videoInfo.textContent = `Name: ${file.name}, Size: ${formatBytes(file.size)}, Type: ${file.type}`;
            selectedVideosContainer.appendChild(videoInfo);
        } else {
            // Display an error message if the selected file is not a video
            const errorInfo = document.createElement('p');
            errorInfo.textContent = `File '${file.name}' is not a valid video file`;
            errorInfo.style.color = 'red';
            selectedVideosContainer.appendChild(errorInfo);
        }
    }
}

// Function to format file size
function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}