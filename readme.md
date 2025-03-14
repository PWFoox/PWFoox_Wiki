<p align="center">
    <img src="https://img.shields.io/badge/Version-v2.0.0-blue" alt="Версия">
    <img src="https://img.shields.io/badge/License-PWFL-success" alt="Лицензия">
    <img src="https://img.shields.io/badge/Platform-MkDocs-9cf" alt="Платформа">
    <img src="https://api.netlify.com/api/v1/badges/f531e971-c877-4609-b446-ef199d65513d/deploy-status">
</p>

> [!NOTE]
> **Хаб-знаний** - это интерактивная документация для разработчиков, собранная с помощью MkDocs. Проект предоставляет структурированные материалы по работе с Git, инструментами разработки и DevOps-практиками в формате удобного веб-сайта.

## О проекте

- **Тема оформления**: Material for MkDocs с кастомными настройками
- **Цветовая схема**: Темный режим (`slate`) с акцентами GitHub
- **Особенности**:
  - Адаптивный дизайн
  - Подсветка синтаксиса
  - Интерактивные диаграммы Mermaid
  - Встроенный поиск
  - Кастомные информационные блоки

## Быстрый старт

### Предварительные требования

- Python 3.8+
- pip

2. Установите зависимости:

   ```bash
   pip install -r requirements.txt
   ```

### Запуск локально

```bash
mkdocs serve
```

Сайт будет доступен по адресу: `http://localhost:8000`

### Сборка проекта

```bash
mkdocs build
```

Результат: папка `site/` с готовым статическим сайтом.

## Структура документации

```text
├── docs/                 # Основная документация
│   ├── Git-system/      # Материалы по Git
│   └── DevOps/          # Инструменты разработки
├── mkdocs.yml           # Конфигурация сайта
├── stylesheets/         # Кастомные стили
└── requirements.txt     # Зависимости
```

## Особенности оформления

- **Информационные блоки** с иконками Font Awesome
- **Тёмная тема** с акцентами GitHub Dark
- **Анимации** подсветки кода
- **Оптимизированная навигация** с вкладками

## Технологии

- [MkDocs](https://www.mkdocs.org/)
- [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/)
- [Mermaid.js](https://mermaid-js.github.io/)
- [PyMdown Extensions](https://facelessuser.github.io/pymdown-extensions/)

## Лицензия

Проект распространяется под лицензией [PWFL](https://github.com/PWFoox/GitWiki/blob/main/docs/LICENSE).

> [!TIP]
> Для локальной разработки используйте `mkdocs serve --dirtyreload` для мгновенного обновления изменений.
