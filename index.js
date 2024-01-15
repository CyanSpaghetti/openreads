document.addEventListener('DOMContentLoaded', function () {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const readingModeToggle = document.getElementById('readingModeToggle');
    const body = document.body;

    darkModeToggle.addEventListener('click', function () {
        body.classList.toggle('dark-mode');
    });

    readingModeToggle.addEventListener('click', function () {
        body.classList.toggle('reading-mode');
    });
});
