document.addEventListener('DOMContentLoaded', function() {
    // Initialize Video.js player
    var player = videojs('productVideo', {
        controls: true, // Show default controls
        autoplay: false, // Disable autoplay
        preload: 'auto', // Preload video metadata
        fluid: true, // Enable fluid resizing
        controlBar: {
            volumePanel: {
                inline: false, // Show volume panel as inline
            },
        },
    });

    // Add event listeners
    player.on('play', function() {
        console.log('Video is playing');
    });

    player.on('pause', function() {
        console.log('Video is paused');
    });

    player.on('timeupdate', function() {
        console.log('Current time:', player.currentTime());
    });

    player.on('volumechange', function() {
        console.log('Volume changed to:', player.volume());
    });

    // Customize player controls
    player.controlBar.playToggle.addClass('custom-play-button');
    player.controlBar.currentTimeDisplay.addClass('custom-time-display');

    // Add custom buttons
    player.controlBar.addChild('button', {
        text: 'Custom Button',
        className: 'custom-button',
        clickHandler: function() {
            console.log('Custom button clicked');
        },
    });
});
