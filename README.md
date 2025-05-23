# React Educational Project "Learning Platform"

![Project Preview](https://ekaterinasky.github.io/react-01/) 

## Описание проекта

Это учебное React-приложение, демонстрирующее современные подходы к созданию веб-интерфейсов. Проект включает систему вкладок, форму обратной связи(без работы с сервером) и интерактивные компоненты. По умолчанию отрисовывает страничку Обратной связи, но всё кликабельно.

## Ключевые особенности

- 🚀 **Компонентная архитектура**: Четкое разделение на переиспользуемые компоненты
- ⏱ **Реальное время**: Отображение текущего времени в хедере
- 📝 **Интерактивная форма**: Валидация полей в режиме реального времени
- 🎚 **Управление состоянием**: Использование React Hooks (useState)
- 💅 **Стилизация**: Комбинация CSS Modules и Styled Components

## Технологический стек

- ![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=white)
- ![Vite](https://img.shields.io/badge/-Vite-646CFF?logo=vite&logoColor=white)
- ![GitHub Pages](https://img.shields.io/badge/-GitHub%20Pages-222?logo=github)

## Структура проекта

src/
├── components/
│ ├── Button/ # Переиспользуемый компонент кнопки
│ ├── Header/ # Шапка с лого и временем
│ ├── DifferensecSection/ # Блок "Наши отличия"
│ ├── FeedbackSection/ # Форма обратной связи
│ ├── TeachingSection/ # Методы обучения
│ └── TabsSection/ # Переключение вкладок
├── data.js # Мок-данные приложения
├── App.jsx # Корневой компонент
└── main.jsx # Точка входа


## Установка и запуск

1. Клонировать репозиторий:
```bash
git clone https://github.com/ekaterinasky/react-01.git

Установить зависимости:

bash
npm install
Запустить в режиме разработки:

bash
npm run dev
Собрать production-версию:

bash
npm run build
Демо-версия
Живая версия проекта доступна на GitHub Pages:
👉 Открыть приложение - https://ekaterinasky.github.io/react-01/

Как можно улучшить проект
Добавить обработку ошибок формы

Реализовать адаптивную верстку

Подключить state-менеджер (Redux/Zustand)

Добавить тесты (Jest/React Testing Library)

Екатерина Склярова