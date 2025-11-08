# REACT MOVIES PET PROJECT

- [🇷🇺](#ru)
- [🇺🇸](#en)


## ru

Данная система является моим пет-проектом, в котором собраны мои текущие знания HTML, CSS, JavaScript и React. Каталог фильмов реализован в формате одностраничного приложения (SPA), что позволяет менять контент на странице без её перезагрузки.

При создании проекта использовался принцип реализации всей логики приложения с использованием контекста + редьюсера, как централизованных элементов хранения и обработки данных соответственно. Для сохранения части информации на клиенте используется `localStorage`. Логика работы SPA была реализована с помощью библиотеки `react-router`. Приложение адаптировано под работу на мобильных устройствах.

Для получения данных о фильмах использовалось открытое API [OMDb](https://www.omdbapi.com).

Каталог фильмов позволяет:

- Искать фильмы в БД OMDb как по имени, так и по типу (полнометражный фильм, сериал, эпизод)
- Получать спискок фильмов в формате каталога с пагинацией
- Получать подробную информацию о фильме в отдельном окне
- Добавлять фильмы в список для просмотра. Этот список будет хранится в `localStorage`.
- Управлять фильмами в списке - удалять, отмечать как просмотренные, добавлять новые и получать информацию о суммарном времени просмотренных фильмов
- Делиться информацией о фильмах и результатах поиска с помощью URL (реализовано через `Clipboard API`)

Демоверсия каталога: [https://leohoneymone.github.io/react-movies](https://leohoneymone.github.io/react-movies)

---

## en

This system is my pet-project created for demonstration of my knowledge of HTML, CSS, JavaScript и React. Movie catalog is made as a Single-Page Application (SPA), which allows to change content on the page without reloading.

The principle of using context + reducer was implemented while creating the app serving as centralized elemetns for data storage and processing respectively. For storing part of information on the client side `localStorage` is used. SPA's logic was implemented using `react-router` library. The application has mobile devices support.

For movie data reception [OMDb](https://www.omdbapi.com) open API was used.

Movie catalog allows it's users to:

- Search movies in OMDb by both their name and type (full-length movie, series, episodes)
- Get movie list as catalog with pagination
- Get detailed information about selected movie in separate window
- Add movies to watch list. The list will be stored in `localStorage`.
- Control watch list - remove movies, mark as wathced, add new and get summary watched runtime information
- Share movie info or selection via URL (using `Clipboard API`)

Catalog Demo: [https://leohoneymone.github.io/react-movies](https://leohoneymone.github.io/react-movies)

