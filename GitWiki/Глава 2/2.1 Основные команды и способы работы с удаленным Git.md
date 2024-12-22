## 1. Клонирование удаленного репозитория

```bash
# Базовое клонирование репозитория - создает локальную копию удаленного репозитория
git clone https://github.com/username/repository.git

# Клонирование конкретной ветки - создает копию репозитория с определенной веткой
git clone https://github.com/username/repository.git
git checkout -b branch-name origin/branch-name

# Клонирование с ограниченной историей - полезно для больших репозиториев
git clone https://github.com/username/repository.git
git config --global fetch.depth 1
```

**Клонирование удаленного репозитория**:
   - `git clone https://github.com/username/repository.git` - базовое клонирование репозитория, создает локальную копию удаленного репозитория.
   - `git clone https://github.com/username/repository.git` и `git checkout -b branch-name origin/branch-name` - клонирование конкретной ветки, создает копию репозитория с указанной веткой.
   - `git clone https://github.com/username/repository.git` и `git config --global fetch.depth 1` - клонирование с ограниченной историей, полезно для больших репозиториев.
## 2. Работа с удаленными репозиториями

```bash
# Просмотр списка настроенных удаленных репозиториев с их URL
git remote -v

# Добавление нового удаленного репозитория с именем origin
git remote add origin https://github.com/username/repository.git

# Удаление удаленного репозитория из списка удаленных репозиториев
git remote remove origin

# Изменение имени удаленного репозитория
git remote rename old-name new-name

# Просмотр подробной информации об удаленном репозитории
git remote show origin
```

**Работа с удаленными репозиториями**:
   - `git remote -v` - просмотр списка настроенных удаленных репозиториев с их URL.
   - `git remote add origin https://github.com/username/repository.git` - добавление нового удаленного репозитория с именем "origin".
   - `git remote remove origin` - удаление удаленного репозитория из списка.
   - `git remote rename old-name new-name` - изменение имени удаленного репозитория.
   - `git remote show origin` - просмотр подробной информации об удаленном репозитории.
## 3. Получение изменений с удаленного репозитория

```bash
# Получение всех изменений с удаленного репозитория без слияния
git fetch origin

# Получение изменений с определенной ветки удаленного репозитория
git fetch origin branch-name

# Получение изменений и автоматическое слияние с текущей веткой
git pull origin

# Получение изменений с перебазированием текущей ветки
git fetch origin
git rebase origin/branch-name
```

**Получение изменений с удаленного репозитория**:
   - `git fetch origin` - получение всех изменений с удаленного репозитория без слияния.
   - `git fetch origin branch-name` - получение изменений с определенной ветки удаленного репозитория.
   - `git pull origin` - получение изменений и автоматическое слияние с текущей веткой.
   - `git fetch origin` и `git rebase origin/branch-name` - получение изменений с перебазированием текущей ветки.
## 4. Отправка изменений в удаленный репозиторий

```bash
# Отправка текущей ветки в удаленный репозиторий
git push origin

# Отправка определенной локальной ветки в удаленный репозиторий
git push origin local-branch-name

# Принудительная отправка изменений (использовать с осторожностью!)
git push --force origin branch-name

# Отправка всех веток в удаленный репозиторий
git push --all origin
```

**Отправка изменений в удаленный репозиторий**:
   - `git push origin` - отправка текущей ветки в удаленный репозиторий.
   - `git push origin local-branch-name` - отправка определенной локальной ветки в удаленный репозиторий.
   - `git push --force origin branch-name` - принудительная отправка изменений (использовать с осторожностью!).
   - `git push --all origin` - отправка всех веток в удаленный репозиторий.
## 5. Работа с удаленными ветками

```bash
# Просмотр только удаленных веток
git branch --remotes

# Просмотр всех веток (локальных и удаленных)
git branch --all

# Создание новой локальной ветки на основе удаленной
git checkout --track origin/remote-branch

# Привязка локальной ветки к удаленной для отслеживания
git branch --set-upstream-to=origin/remote-branch local-branch

# Удаление ветки в удаленном репозитории
git push origin --delete remote-branch-name
```

 **Работа с удаленными ветками**:
   - `git branch --remotes` - просмотр только удаленных веток.
   - `git branch --all` - просмотр всех веток (локальных и удаленных).
   - `git checkout --track origin/remote-branch` - создание новой локальной ветки на основе удаленной.
   - `git branch --set-upstream-to=origin/remote-branch local-branch` - привязка локальной ветки к удаленной для отслеживания.
   - `git push origin --delete remote-branch-name` - удаление ветки в удаленном репозитории.
## 6. Работа с тегами на сервере

```bash
# Создание аннотированного тега
git tag -a v1.0 -m "Version 1.0"

# Отправка конкретного тега в удаленный репозиторий
git push origin v1.0

# Отправка всех локальных тегов в удаленный репозиторий
git push origin --tags

# Удаление тега в удаленном репозитории
git push origin --delete refs/tags/tag-name
```

**Работа с тегами на сервере**:
   - `git tag -a v1.0 -m "Version 1.0"` - создание аннотированного тега.
   - `git push origin v1.0` - отправка конкретного тега в удаленный репозиторий.
   - `git push origin --tags` - отправка всех локальных тегов в удаленный репозиторий.
   - `git push origin --delete refs/tags/tag-name` - удаление тега в удаленном репозитории.
## 7. Работа с форками и Pull Request

```bash
# Создание форка происходит через веб-интерфейс GitHub/GitLab/Bitbucket

# Клонирование своего форка
git clone https://github.com/your-username/repository.git

# Переход в директорию проекта
cd repository

# Добавление оригинального репозитория как удаленного
git remote add upstream https://github.com/original-owner/repository.git

# Проверка настроенных удаленных репозиториев
git remote -v

# Создание новой ветки для работы над функционалом
git checkout -b feature/new-feature

# Получение последних изменений из оригинального репозитория
git fetch upstream

# Обновление главной ветки локального репозитория
git checkout main
git merge upstream/main

# Обновление ветки feature относительно обновленной main
git checkout feature/new-feature
git merge main

# Внесение изменений и создание коммита
git add .
git commit -m "Подробное описание внесенных изменений"

# Отправка ветки в свой форк
git push origin feature/new-feature

# Если нужно обновить существующий Pull Request
git add .
git commit -m "Дополнительные изменения после code review"
git push origin feature/new-feature

# После принятия Pull Request, удаление локальной ветки
git checkout main
git branch -d feature/new-feature

# Удаление ветки в удаленном репозитории (вашем форке)
git push origin --delete feature/new-feature
```

**Работа с форками и Pull Request**:
   - Создание форка происходит через веб-интерфейс GitHub/GitLab/Bitbucket.
   - `git clone https://github.com/your-username/repository.git` - клонирование своего форка.
   - `git remote add upstream https://github.com/original-owner/repository.git` - добавление оригинального репозитория как удаленного.
   - `git remote -v` - проверка настроенных удаленных репозиториев.
   - `git checkout -b feature/new-feature` - создание новой ветки для работы над функционалом.
   - `git fetch upstream` - получение последних изменений из оригинального репозитория.
   - `git checkout main` и `git merge upstream/main` - обновление главной ветки локального репозитория.
   - `git checkout feature/new-feature` и `git merge main` - обновление ветки feature относительно обновленной main.
   - `git add .`, `git commit -m "..."` и `git push origin feature/new-feature` - внесение изменений, создание коммита и отправка ветки в свой форк.
   - `git push origin feature/new-feature` - обновление существующего Pull Request.
   - `git checkout main`, `git branch -d feature/new-feature` и `git push origin --delete feature/new-feature` - удаление локальной и удаленной ветки после принятия Pull Request.
### Рекомендации по работе с форками и Pull Request:

1. Структура сообщений коммитов:
```bash
# Формат
<тип>: <описание>

Подробное описание при необходимости

# Пример
feat: добавлена функция автоматической валидации email

Добавлена проверка формата email при регистрации
Реализована проверка на существующие адреса
Добавлены unit-тесты
```

2. Типы коммитов:
- `feat:` - новая функциональность
- `fix:` - исправление ошибки
- `docs:` - изменения в документации
- `style:` - форматирование, отступы и т.д.
- `refactor:` - рефакторинг кода
- `test:` - добавление тестов
- `chore:` - обновление зависимостей и подобные изменения

3. Процесс создания Pull Request:
- Убедитесь, что ваша ветка обновлена относительно основного репозитория
- Проверьте все изменения перед отправкой
- Напишите понятное описание Pull Request
- Укажите связанные задачи или проблемы
- Добавьте скриншоты для визуальных изменений
- Ответьте на все комментарии в code review

4. Работа с code review:
- Внимательно читайте все комментарии
- Отвечайте на каждый комментарий
- Вносите изменения в ту же ветку
- Используйте функцию Force Push с осторожностью

5. Синхронизация с основным репозиторием:
```bash
# Регулярно выполняйте синхронизацию
git fetch upstream
git checkout main
git merge upstream/main
git push origin main
```

6. Разрешение конфликтов: ^8e7f7b
```bash
# При возникновении конфликтов
git fetch upstream
git merge upstream/main
# Решите конфликты в редакторе
git add .
git commit -m "resolve: разрешение конфликтов с основной веткой"
git push origin feature/new-feature
```

## Справочная таблица серверных команд Git

| Команда | Описание | Основные флаги |
|---------|----------|----------------|
| `git clone [url]` | Создание локальной копии удаленного репозитория | `--depth=1` - клонирование с ограниченной историей<br>`--branch=name` - клонирование определенной ветки<br>`--recursive` - клонирование с подмодулями |
| `git remote` | Управление удаленными репозиториями | `-v` - показать URL репозиториев<br>`show origin` - детальная информация<br>`prune origin` - удаление устаревших ссылок |
| `git fetch` | Загрузка изменений из удаленного репозитория | `--all` - загрузка со всех репозиториев<br>`--prune` - удаление устаревших ссылок<br>`--tags` - загрузка всех тегов |
| `git pull` | Получение и слияние изменений | `--rebase` - применить изменения через rebase<br>`--no-commit` - без автоматического коммита<br>`--verbose` - подробный вывод |
| `git push` | Отправка изменений в удаленный репозиторий | `--force` - принудительная отправка<br>`--tags` - отправка всех тегов<br>`--all` - отправка всех веток |
| `git branch` | Работа с ветками | `--remotes` - список удаленных веток<br>`--all` - все ветки<br>`--contains` - ветки, содержащие коммит |
| `git tag` | Работа с тегами | `-a` - создание аннотированного тега<br>`-d` - удаление тега<br>`-l` - список тегов |
