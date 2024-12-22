## 1. Начальная настройка и клонирование

```bash
# Клонируем репозиторий
git clone https://github.com/username/repository.git
```

![[Начальная настройка и клонирование.png]]

```bash
# Переходим в директорию проекта
cd repository

# Проверяем статус репозитория
git status
```

![[Проверяем статус репозитория.png]]
## 2. Создание новой ветки и внесение изменений

```bash
# Создаем новую ветку для работы
git checkout -b feature/new-feature

# Проверяем, что мы находимся в новой ветке
git branch
```

![[Создание новой ветки и внесение изменений.png]]

```bash
# Вносим изменения в файлы
echo "New feature code" > feature.txt

# Проверяем статус изменений
git status
```

![[Вносим изменения в файлы echo New feature code  feature.txt.png]]
## 4. Фиксация изменений

```bash
# Добавляем изменения в индекс
git add feature.txt

# Создаем коммит
git commit -m "feat: добавлен новый функционал"

# Проверяем лог
git log --oneline
```

![[Фиксация изменений.png]]
## 5. Синхронизация с удаленным репозиторием

```bash
# Получаем последние изменения с удаленного репозитория
git fetch origin

# Проверяем наличие новых изменений
git log HEAD..origin/main --oneline
```

![[Синхронизация с удаленным репозиторием.png]]

```bash
# Обновляем основную ветку
git checkout main
git pull origin main

# Возвращаемся в ветку с функционалом
git checkout feature/new-feature
```

![[Возвращаемся в ветку с функционалом git checkout feature-new-feature.png]]
## 6. Отправка изменений в удаленный репозиторий

```bash
# Отправляем новую ветку в удаленный репозиторий
git push -u origin feature/new-feature
```

![[Отправка изменений в удаленный репозиторий.png]]

## 7. После создания Pull Request

```bash
# Вносим дополнительные изменения
echo "Additional changes" >> feature.txt

# Фиксируем изменения
git add feature.txt
git commit -m "fix: внесены правки по результатам code review"

# Отправляем обновления
git push origin feature/new-feature
```

![[После создания Pull Request.png]]

## 8. Разрешение конфликтов

```bash
# Пытаемся слить изменения из main
git merge main
```

![[Разрешение конфликтов.png]]

```bash
# Открываем конфликтующий файл
cat feature.txt
```

![[Открываем конфликтующий файл cat feature.txt.png]]

```bash
# После решения конфликта
git add feature.txt
git commit -m "resolve: разрешение конфликта слияния"
git push origin feature/new-feature
```

![[git commit -m resolve разрешение конфликта слияния.png]]

## 9. Завершение работы

```bash
# Удаляем ветки
git checkout main
git pull origin main
git branch -d feature/new-feature
git push origin --delete feature/new-feature
```

![[Завершение работы.png]]

## 10. Итоговое состояние

```bash
# Проверяем статус и историю
git status
git log --oneline --graph
```
