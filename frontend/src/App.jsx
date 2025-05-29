import './css/App.css'
import MovieCard from "./components/MovieCard"
import Favorites from './pages/Favorites.jsx'
import Home from "./pages/Home.jsx"
import { Route, Routes } from "react-router-dom"
import NavBar from './components/NavBar.jsx'
import { MovieProvider } from './contexts/MovieContexts.jsx'

// function App() {  // This is a component: A component is basically a function that returns a jsx or say react code!

//   return (         // Return should only have one parent element so two divs won't be returned
//     // But we can return it using a fragment "<> </>" i.e., empty html tag
//     <>
//       <Text name = "Ujjwal"/>
//     </>
//   )
// }

// function Text({name})  // {name} is called prop i.e., property like basically saying arguments of a function (which is what it is XD)
// {
//   return(
//     <div>
//       <p>Hello {name} from Text!</p>
//     </div>
//   )
// }

function App() {

  return (
    <MovieProvider>
      <NavBar />
      <main className='main'>
        {/* This is called conditional rendering */}
        {/* {movieNumber === 1 ? <MovieCard movie={{ title: "Ujjwal Karki Don", release_date: "2025" }} /> :  
        <MovieCard movie={{ title: "Don ho Ujjwal Karki", release_date: "2020" }} />} */}

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/favorites' element={<Favorites />} />
        </Routes>
      </main>
    </MovieProvider>
)}

export default App
