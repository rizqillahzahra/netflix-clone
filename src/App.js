import './App.css';
import Movie from './components/Movie';
import API from './api';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Movie title="Netflix Original" url={API.fetchNetflixOriginals}/>
        <Movie title="Trending Now" url={API.fetchTrending}/>
        <Movie title="Top Rated" url={API.fetchTopRated}/>
        <Movie title="Action Movies" url={API.fetchActionMovies}/>
        <Movie title="Comedy Movies" url={API.fetchComedyMovies}/>
        <Movie title="Horror Movies" url={API.fetchHorrorMovies}/>
        <Movie title="Romance Movies" url={API.fetchRomanceMovies}/>
        <Movie title="Documentary" url={API.fetchDocumentaries}/>

      </header>
    
    </div>
  );
}

export default App;
