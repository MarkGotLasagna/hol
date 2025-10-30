// Load SVG inline to make it interactive
fetch('Timeline.svg')
    .then(response => response.text())
    .then(svgContent => {
        const container = document.getElementById('svg-container');
        container.innerHTML = svgContent;
        
        // Make sure the SVG scales properly
        const svg = container.querySelector('svg');
        if (svg) {
            svg.style.width = '100%';
            svg.style.height = 'auto';
            svg.style.display = 'block';
        }
    })
    .catch(error => {
        console.error('Error loading SVG:', error);
        // Fallback to img tag if loading fails
        const container = document.getElementById('svg-container');
        container.innerHTML = '<img src="Timeline.svg" alt="History of Linux Timeline">';
    });
