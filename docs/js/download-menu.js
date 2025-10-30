// Download menu functionality
const downloadBtn = document.getElementById('downloadBtn');
const downloadMenu = document.getElementById('downloadMenu');

// Toggle menu on button click
downloadBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    downloadMenu.classList.toggle('show');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!downloadBtn.contains(e.target) && !downloadMenu.contains(e.target)) {
        downloadMenu.classList.remove('show');
    }
});

// Close menu after selecting an option
document.querySelectorAll('.download-option').forEach(option => {
    option.addEventListener('click', () => {
        downloadMenu.classList.remove('show');
    });
});
