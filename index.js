document.addEventListener('DOMContentLoaded', function () {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const readingModeToggle = document.getElementById('readingModeToggle');
    const readingOptions = document.getElementById('readingOptions');
    const increaseFontSize = document.getElementById('increaseFontSize');
    const decreaseFontSize = document.getElementById('decreaseFontSize');
    const changeFontFamily = document.getElementById('changeFontFamily');
    const body = document.body;
    const article = document.querySelector('article');

    darkModeToggle.addEventListener('click', function () {
        body.classList.toggle('dark-mode');
        body.classList.remove('reading-mode');
        hideReadingOptions();
        showArticle();
    });

    readingModeToggle.addEventListener('click', function () {
        body.classList.toggle('reading-mode');
        toggleReadingOptions();
        calculateReadingTime();
        toggleArticleVisibility();
    });

    increaseFontSize.addEventListener('click', function () {
        changeFontSize(2);
    });

    decreaseFontSize.addEventListener('click', function () {
        changeFontSize(-2);
    });

    changeFontFamily.addEventListener('click', function () {
        changeFont();
    });

    function changeFontSize(amount) {
        const currentSize = parseFloat(window.getComputedStyle(body).fontSize);
        body.style.fontSize = `${currentSize + amount}px`;
    }

    function changeFont() {
        const currentFont = window.getComputedStyle(body).fontFamily;
        const newFont = currentFont === 'Arial, sans-serif' ? 'Georgia, serif' : 'Arial, sans-serif';
        body.style.fontFamily = newFont;
    }

    function hideReadingOptions() {
        readingOptions.style.display = 'none';
    }

    function toggleReadingOptions() {
        readingOptions.style.display = readingOptions.style.display === 'none' ? 'block' : 'none';
    }

    function calculateReadingTime() {
        const wordsPerMinute = 238;
        const wordsInArticle = countWords(article.textContent);
        const readingTime = Math.ceil(wordsInArticle / wordsPerMinute);

        showReadingTimeNotification(readingTime);
    }

    function countWords(text) {
        const trimmedText = text.trim();
        const words = trimmedText.split(/\s+/);
        return words.length;
    }

    function showReadingTimeNotification(minutes) {
        const notification = document.createElement('div');
        notification.classList.add('reading-time-notification');
        notification.textContent = `Estimated Reading Time: ${minutes} min`;

        document.body.appendChild(notification);

        // Hide the notification after a few seconds (adjust as needed)
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 5000);
    }

    function toggleArticleVisibility() {
        article.style.display = body.classList.contains('reading-mode') ? 'block' : 'none';
    }

    function showArticle() {
        article.style.display = 'block';
    }
});
