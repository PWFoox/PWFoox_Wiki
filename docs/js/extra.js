// Переключение темы
function toggleTheme() {
    const body = document.body;
    const isDark = body.getAttribute('data-md-color-scheme') === 'slate';
    
    if (isDark) {
        body.setAttribute('data-md-color-scheme', 'default');
        localStorage.setItem('theme', 'light');
    } else {
        body.setAttribute('data-md-color-scheme', 'slate');
        localStorage.setItem('theme', 'dark');
    }
}

// Кнопка "Наверх"
function createScrollTopButton() {
    const btn = document.createElement('button');
    btn.id = 'scroll-top';
    btn.innerHTML = '↑';
    btn.title = 'Наверх';
    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    document.body.appendChild(btn);
    
    window.addEventListener('scroll', () => {
        btn.style.display = window.scrollY > 500 ? 'block' : 'none';
    });
}

// Инициализация
document.addEventListener('DOMContentLoaded', () => {
    // Восстановление темы
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.setAttribute('data-md-color-scheme', 'default');
    }

    // Добавляем кнопку темы в навигацию
    const nav = document.querySelector('.md-header__inner');
    if (nav) {
        const themeBtn = document.createElement('button');
        themeBtn.className = 'theme-toggle';
        themeBtn.innerHTML = '🌓';
        themeBtn.addEventListener('click', toggleTheme);
        nav.appendChild(themeBtn);
    }

    createScrollTopButton();
});