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

document.addEventListener('DOMContentLoaded', () => {
    let tg = window.Telegram.WebApp;
    
    // Расширяем на весь экран
    tg.expand();
    
    // Устанавливаем основной цвет
    tg.setHeaderColor('#0d1117');
    
    // Обработка внешних ссылок
    document.querySelectorAll('a[href^="http"]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            tg.openLink(e.target.href);
        });
    });
    
    // Улучшенная навигация
    const mainButton = tg.MainButton;
    mainButton.setText('Вернуться в меню');
    mainButton.onClick(() => {
        window.location.href = '/';
    });
    
    // Показываем кнопку только на внутренних страницах
    if (window.location.pathname !== '/') {
        mainButton.show();
    }
    
    // Поддержка жестов
    let touchStart = null;
    document.addEventListener('touchstart', e => {
        touchStart = e.touches[0].clientX;
    });
    
    document.addEventListener('touchend', e => {
        if (!touchStart) return;
        
        const touchEnd = e.changedTouches[0].clientX;
        const diff = touchStart - touchEnd;
        
        if (Math.abs(diff) > 100) {
            if (diff > 0) {
                // Свайп влево
                history.forward();
            } else {
                // Свайп вправо
                history.back();
            }
        }
        touchStart = null;
    });
});
