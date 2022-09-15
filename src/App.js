import { useState, useEffect } from "react";
import "./App.css";
import Tours from "./components/Tours";
import Loading from "./components/Loading";
import Blob from "./components/Blob";

function App() {
  const [loading, setLoading] = useState(false);
  const [tours, setTours] = useState([]);
  const URL = "https://6322591b362b0d4e7dcc4e29.mockapi.io/tour"; //for fetchind our data

  //function for removing tours
  const removeTour = (id) => {
    const newTourList = tours.filter((tour) => tour.id !== id);
    setTours(newTourList);
  };

  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(URL);
      const tourData = await response.json();
      setLoading(false);
      setTours(tourData);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return (
      <main className="container">
        <section className="contents">
          <Loading />
        </section>
      </main>
    );
  }
  if (tours.length === 0) {
    return (
      <main className="container">
        <section className="contents refresh-page">
          <Blob />
          <h2 className="heading">There is no more tour</h2>
          <button className="refreshButton" onClick={() => fetchTours(tours)}>
            refresh
          </button>
        </section>
      </main>
    );
  }
  return (
    <main className="container">
      <section className="contents">
        <Blob />
        <Tours tours={tours} removeTour={removeTour} />
      </section>
    </main>
  );
}

export default App;
