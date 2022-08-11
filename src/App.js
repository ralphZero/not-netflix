import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';

import { API_KEY } from './secret';
import './App.css';

function App() {

  const [movies, setMovies] = useState();
  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=' + API_KEY)
      .then(response => response.json())
      .then(data => setMovies(data.results))
      .catch(console.log)
  }, []);

  return (
    <div className="App">
      {movies ? <>
        <Header />
        <Hero movies={movies} />
      </> :
        <h1>Loading...</h1>
      }

    </div>
  );
}

export default App;
