# 🎬 React Intro Movie Search

A beginner-friendly React app for searching movies using the TMDb API. Users can search for movies, view popular titles, and manage a list of favorites that persist across sessions using local storage.

> 🚀 First React project built with basic JavaScript knowledge.

---

## ✨ Features

- 🔍 Search movies by keyword
- 🎞️ View popular movies on page load
- ❤️ Add or remove movies from your favorites list
- 💾 Favorites persist using local storage
- 📱 Responsive UI with simple styling

---

## 🛠️ Tech Stack

- React (with Hooks)
- React Router
- Context API
- TMDb API
- CSS
- Vite

---

## 📂 Folder Structure

```
React_Intro_Movie_Search/
├── components/       # Reusable UI components
├── contexts/         # Global state with React Context
├── css/              # Component-level styles
├── pages/            # Page-level components
├── services/         # API communication logic
├── App.jsx           # Root app component
├── main.jsx          # React entry point
└── index.css         # Global styles
```

---

## 🔧 Setup Instructions

1. **Clone the repository:**

   ```bash
   git clone https://github.com/UjjwalKarkeyy/React_Intro_Movie_Search.git
   cd React_Intro_Movie_Search
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up TMDb API Key:**

   - Get your API key from [TMDb](https://www.themoviedb.org/)
   - Create a `.env` file in the root:

     ```
     VITE_TMDB_API_KEY=your_api_key_here
     ```

4. **Start the development server:**

   ```bash
   npm run dev
   ```

   Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

---

## 🔍 How It Works

### `MovieCard.jsx`
Displays individual movie info with a heart button to add/remove from favorites.

### `MovieContexts.js`
Provides global context with:
- `addToFavorites()`
- `removeFromFavorites()`
- `isFavorite()`

Also handles persistence using local storage.

### `Home.jsx`
Handles:
- Popular movies (on load)
- Search functionality
- Renders `MovieCard` components

### `api.js`
Handles communication with TMDb API:
- `searchMovies(query)`
- `getPopularMovies()`

---

## 💡 Future Improvements

- 🔄 Pagination for search results
- 📝 Movie detail pages
- 🔐 Authentication and user accounts
- 🌐 Improved responsiveness and accessibility

---

## 🧠 Lessons Learned

This project helped build a foundational understanding of:
- React components and state
- Context API
- Basic API integration
- Real-world app structure and data flow

---
## 🙌 Acknowledgements

- [TMDb API](https://www.themoviedb.org/)
- [React Docs](https://reactjs.org/)
- Built by [@UjjwalKarkeyy](https://github.com/UjjwalKarkeyy)
---

## Home Page View:
![Screenshot 2025-05-29 190637](https://github.com/user-attachments/assets/1738b573-0935-40c3-9849-a5d51b52bdf5)

## Pavorites Page View:
![Screenshot 2025-05-29 190705](https://github.com/user-attachments/assets/ee7505f6-dc31-4b74-a387-7010695d52b7)

  
