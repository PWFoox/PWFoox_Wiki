## **1. Где скачать VS Code?**
**Официальный источник**: [code.visualstudio.com](https://code.visualstudio.com/)
## **2. Установка на Windows**

### **2.1. Шаги**
1. Перейдите на [страницу загрузки](https://code.visualstudio.com/download).
2. Нажмите кнопку **Windows x64 User Installer** (или **System Installer** для всех пользователей).
3. Запустите скачанный файл `.exe`.
4. Следуйте инструкциям мастера установки:
   - Отметьте **«Добавить в PATH»** для доступа к `code` из командной строки.
   - Создайте ярлык на рабочем столе.

### **2.2. Portable-версия**
Для использования без установки:
1. Скачайте **.zip**-архив с сайта.
2. Распакуйте в любую папку (например, на флешку).
3. Запустите `Code.exe` из папки.

!!! TIP "Совет"
    Используйте portable-версию, если у вас нет прав администратора.

---

## **3. Установка на Linux**

### **3.1. Debian/Ubuntu**
```bash
# Скачайте .deb-пакет
wget https://code.visualstudio.com/sha/download?build=stable&os=linux-deb-x64 -O vscode.deb
# Установите
sudo apt install ./vscode.deb
```

### **3.2. Fedora/RHEL**
```bash
sudo rpm --import https://packages.microsoft.com/keys/microsoft.asc
echo -e "[code]\nname=Visual Studio Code\nbaseurl=https://packages.microsoft.com/yumrepos/vscode\nenabled=1\ngpgcheck=1\ngpgkey=https://packages.microsoft.com/keys/microsoft.asc" | sudo tee /etc/yum.repos.d/vscode.repo
sudo dnf install code
```

### **3.3. Snap (для всех дистрибутивов)**
```bash
sudo snap install --classic code
```

!!! WARNING "Ошибки прав"
    Если возникли проблемы с правами, используйте `sudo` или добавьте пользователя в группу `sudoers`.

## **4. Первая настройка**

### **4.1. Выбор языка**
1. Откройте VS Code.
2. Нажмите `Ctrl + Shift + P` → введите `Configure Display Language`.
3. Выберите **Русский** и перезапустите редактор.

### **4.2. Проверка установки**
Запустите команду в терминале:
```bash
code --version
# Пример вывода: 1.82.0 (Universal)
```

---

> Что делать после установки?  
    1. Установите расширения:  
       - **Russian Language Pack** — русский интерфейс.  
       - **Settings Sync** — синхронизация настроек.  
       2. Настройте тему: `Ctrl + K` → `Ctrl + T`.
