import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { MovieDetails } from "./pages/MovieDetails";
import { LandingPage } from "./pages/LandingPage";
import styles from "./App.module.css";

export function App() {
    return (
      <Router>
        <header>
          <Link to="/"><h1 className={styles.title}>Movies UNIR</h1></Link>
        </header>
        <main>
          <Routes>
            <Route path="/movies/:movieId" element={<MovieDetails/>} />
            <Route path="/" element={ <LandingPage />} />
            {/* <Route path="/">404</Route>  */}
          </Routes>
        </main>
      </Router>    );
  }