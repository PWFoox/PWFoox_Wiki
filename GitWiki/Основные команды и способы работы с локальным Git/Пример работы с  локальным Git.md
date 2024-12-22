## 1. Создание проекта и первый коммит

```bash
# Инициализируем Git репозиторий
git init

# Проверяем статус репозитория
git status
```

![[Инициализация git.png]]

```bash
# Добавляем файл в индекс
git add README.md

# Создаём первый коммит
git commit -m "Первый commint: add README.md"
```

![[git commit m Первый commint addREADME.png]]
## 2. Добавление кода и второй коммит

```bash
# Создаём файл с кодом
index.py

# Проверяем статус
git status
```

![[git status.png]]

```bash
# Добавляем и коммитим новый файл
git add index.py
git commit -m "Добавлена строка Hello world"
```

## 3. Внесение изменений в существующий файл

```bash
# Изменяем код в index.py
index.py

# Смотрим изменения
git diff
```

![[Внесение изменений в существующий файл.png]]

```bash
# Коммитим изменения
git add index.py
git commit -m "Изменение строки"
```

## 4. Работа с ветками

```bash
# Смотрим текущие ветки
git branch
```

![[Работа с ветками.png]]

```bash
# Создаём новую ветку для новой функции
git branch feature/goodbye
```

![[Создаём новую ветку для новой функции.png]]

```bash
# Проверяем список веток
git branch
```

![[Проверяем список веток.png]]

```bash
# Переключаемся на новую ветку
git checkout feature/goodbye
```

![[Переключаемся на новую ветку.png]]

```bash
# изменяем файл в этой ветке
index.py

# Смотрим изменения
git status
```

![[Проверка изменений в новой ветке.png]]

```bash
# Коммитим изменения в новой ветке
git add index.js
git commit -m "Add goodbye function"
```

![[Коммитим изменения в новой ветке.png]]

```bash
# Проверяем лог
git log --oneline
```

![[Проверяем лог.png]]
## 5. Слияние веток

```bash
# Возвращаемся в основную ветку
git checkout master

# Сливаем изменения из feature-ветки
git merge feature/goodbye-function
```

![[GitWiki/Исходники/Исходники Пример работы/Слияние веток.png]]

## 6. Работа с конфликтами

```bash
# Смотрим на какой мы ветке
git branch
```

![[Работа с конфликтами.png]]

```bash
# Создаём новую ветку
git branch new
```

![[Создаём новую ветку git branch new.png]]

```bash
# Переключаемся на новую ветку
git checkout new
```

![[Переключаемся на новую ветку git checkout new.png]]

```bash
# Изменяем файл функцию в первой ветке
index.py

# Смотрим статус изменений
git status
```

![[Изменяем файл функцию в первой ветке index.py.png]]

```bash
# Добавляем изменения в индекс
git add index.py
```

![[Добавляем изменения в индекс git add index.py.png]]

```bash
# Создаём коммит в первой ветке
git commit -m "Change"
```

![[Создаём коммит в первой ветке git commit -m Change.png]]

```bash
# Переключаемся обратно в main
git checkout master
```

![[Переключаемся обратно в main git checkout master.png]]

```bash
# Создаём конфликтующие изменения в master
index.py

# Проверяем статус
git status
```

![[Создаём конфликтующие изменения в master index.py.png]]

```bash
# Добавляем изменения в индекс
git add index.py

# Создаём коммит в main
git commit -m "Change 2"
```

![[Создаём коммит в main git commit -m Change 2.png]]

```bash
# Пытаемся слить ветку new в main
git merge new
```

![[Пытаемся слить ветку new в main git merge new.png]]

```bash
# Проверяем статус после конфликта
git status
```

![[Проверяем статус после конфликта git status.png]]

```bash
# Открываем файл и видим конфликт
cat index.py
```
![[Открываем файл и видим конфликт cat index.py.png]]
```
<<<<<<< HEAD
print("hello world")
=======
print("sdsd")
printe("hi worled and hello world")
>>>>>>> new
```


```bash
# Решаем конфликт, выбирая нужную версию или объединяя их
# Например, делаем такую версию:
print("sdsd")
print("hello world")
 > index.py

# Проверяем изменения
git status
```

![[Решаем конфликт, выбирая нужную версию или объединяя их.png]]

```bash
# Добавляем решенный файл в индекс
git add index.py
```

![[Добавляем решенный файл в индекс git add index.py.png]]

```bash
# Завершаем слияние создавая коммит
git commit -m "Решение слияния"
```

![[Завершаем слияние создавая коммит git commit -m Решение слияния.png]]

```bash
# Проверяем историю
git log --oneline
```

![[Проверяем историю git log --oneline.png]]

```bash
# Проверяем финальное содержимое файла
cat index.py
```

![[Проверяем финальное содержимое файла cat index.py.png]]

```bash
# Проверяем, что все чисто
git status
```

![[Проверяем, что все чисто git status.png]]

## 7. Просмотр истории

```bash
# Просмотр истории коммитов с графом
git log --graph --oneline --all
```

![[Просмотр истории коммитов с графом git log --graph --oneline --all.png]]

## 8. Работа с тегами

```bash
# Просмотр существующих тегов
git tag
```

![[Просмотр существующих тегов git tag.png]]

```bash
# Создание аннотированного тега
git tag -a v1.0 -m "Version 1.0 release"
```

![[Создание аннотированного тега git tag -a v1.0 -m Version 1.0 release.png]]

```bash
# Просмотр информации о конкретном теге
git show v1.0
```

![[Просмотр информации о конкретном теге git show v1.0.png]]

```bash
# Создание легковесного тега
git tag v1.0-beta
```

![[Создание легковесного тега git tag v1.0-beta.png]]

```bash
# Просмотр тегов с шаблоном
git tag --list "v1.*"
```

![[Просмотр тегов с шаблоном git tag --list v1..png]]

```bash
# Создание тега для определённого коммита
git tag -a v0.9 5e0eeba -m "начало"
```

![[Создание тега для определённого коммита git tag -a v0.9 5e0eeba -m начало.png]]

```bash
# Удаление тега
git tag --delete v1.0-beta
```

![[Удаление тега git tag --delete v1.0-beta.png]]

```bash
# Проверка тегов после удаления
git tag
```

![[Проверка тегов после удаления git tag.png]]

```bash
# Поиск коммита по тегу
git checkout v1.0
```

![[Поиск коммита по тегу git checkout v1.0.png]]

```bash
# Возврат к последнему состоянию main
git checkout main
```

![[Возврат к последнему состоянию main git checkout main.png]]

```bash
# Просмотр истории с тегами
git log --oneline --decorate
```

![[Просмотр истории с тегами git log --oneline --decorate.png]]

## 9. Итоговая структура проекта:

```
my-project/
├── README.md
└── index.py
```

## 10. Проверка статуса в конце

```bash
git status
git log --oneline
```

![[Проверка статуса в конце.png]]
