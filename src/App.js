import axios from "axios";
import { useEffect, useState } from "react";
import WeatherCard from "./components/weatherCard";

//https://api.openweathermap.org/data/2.5/weather?q=ajmer&appid=dd4d0b177cd47a819da3e014e0ca8d4d
//http://openweathermap.org/img/w/01d.png

const App = () => {
  const [city, setCity] = useState("");
  const [hover, setHover] = useState(false);
  const [data, setData] = useState();
  const [datas, setDatas] = useState();

  const getWeatherData = async (cityName) => {
    if (cityName) {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=dd4d0b177cd47a819da3e014e0ca8d4d&units=metric`
      );
      setData(response.data);
      localStorage.setItem("cityName", response.data.name);
      console.log("data=> ", data);
    }
  };

  const getMultipleCitiesData = async () => {
    let cities = ["Ajmer", "Delhi", "New York", "Paris"];
    let datas = [];
    for (let i = 0; i < cities.length; i++) {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`
      );
      datas.push(response.data);
    }
    setDatas(datas);
    console.log("datas=>", datas);
  };

  useEffect(() => {
    getMultipleCitiesData();
  }, []);

  return (
    <>
      <div style={styles.main}>
        {data ? (
          <WeatherCard city={data} />
        ) : (
          <div style={styles.blankDiv}></div>
        )}
        <div style={styles.inputDiv}>
          <input
            style={styles.input}
            placeholder="enter city..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button
            style={hover ? styles.submit.hover : styles.submit.normal}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onClick={() => getWeatherData(city)}
          >
            Submit
          </button>
        </div>
      </div>
      {/* {data && <WeatherCard data={data} />} */}
      <div style={styles.cards}>
        {datas &&
          datas.map((city) => <WeatherCard city={city} key={city.name} />)}
      </div>
    </>
  );
};

export default App;

const styles = {
  main: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  blankDiv: {
    width: "15rem",
    height: "15rem",
    borderRadius: "10px",
    padding: "5px",
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    background:
      "radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 0%, rgba(0,212,255,1) 100%)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 20,
  },
  inputDiv: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: 20,
    width: "15rem",
  },
  input: {
    width: 150,
    height: 40,
    background: "#fff",
    padding: 4,
    maring: 5,
    fontSize: 20,
  },
  submit: {
    normal: {
      width: 100,
      height: 40,
      outline: "none",
      border: "none",
      color: "#fff",
      fontSize: 16,
      fontWeight: 600,
      background:
        "radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 0%, rgba(0,212,255,1) 100%)",
    },
    hover: {
      cursor: "pointer",
      width: 100,
      height: 40,
      fontSize: 16,
      fontWeight: 600,
      outline: "none",
      border: "none",
      color: "#fff",
      background:
        "radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(9,100,121,1) 0%, rgba(0,212,255,1) 100%)",
    },
  },
  cards: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    marginTop: 50,
  },
};
