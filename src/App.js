import logo from "./logo.svg";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import MovieList from "./components/MovieList";
import AddMovie from "./components/AddMovie";
import { useState } from "react";
import Filter from "./components/Filter";

const movies = [
  {
    id: uuidv4(),
    movieName: "John Wick 1",
    movieImg:
      "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_SX300.jpg",
    movieRating: 5,
    trailer: "https://www.youtube.com/embed/C0BMx-qxsP4",
  },
  {
    id: uuidv4(),
    movieName: "Creed",
    movieImg: "https://upload.wikimedia.org/wikipedia/en/2/24/Creed_poster.jpg",
    movieRating: 4,
    trailer: "https://www.youtube.com/embed/Uv554B7YHk4",
  },
  {
    id: uuidv4(),
    movieName: "Avengers Endgame",
    movieImg:
      "https://images-na.ssl-images-amazon.com/images/I/81ExhpBEbHL._SY445_.jpg",
    movieRating: 3,
    trailer: "https://www.youtube.com/embed/TcMBFSGVi1c",
  },
  {
    id: uuidv4(),
    movieName: "Spiderman Homecoming",
    movieImg:
      "https://upload.wikimedia.org/wikipedia/en/f/f9/Spider-Man_Homecoming_poster.jpg",
    movieRating: 3,
    trailer: "https://www.youtube.com/embed/n9DwoQ7HWvI",
  },
];
function App() {
  const [movieList, setMovieList] = useState(movies);
  const [searchInput, setsearchInput] = useState("");
  const [star, setstar] = useState(0);
  const getData = (info) => {
    setMovieList([...movieList, info]);
  };
  const FilterIn = (info) => {
    setsearchInput(info);
  };
  const filterStar = (info) => {
    setstar(info);
  };

  return (
    <div className="App">
      <AddMovie getData={getData} />
      <Filter FilterIn={FilterIn} filterStar={filterStar} />
      <MovieList
        movies={
          movieList.filter((movie) =>
            movie.movieName
              .toLowerCase()
              .includes(searchInput.toLowerCase().trim())
          ) && movieList.filter((movie) => movie.movieRating >= star)
        }
      />
    </div>
  );
}

export default App;
