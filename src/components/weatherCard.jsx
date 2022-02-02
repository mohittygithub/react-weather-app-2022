//http://openweathermap.org/img/w/01d.png

const WeatherCard = ({ city }) => {
  return (
    <div style={styles.weatherCard}>
      <p style={styles.city}>
        {city.name} - {city.sys.country}
      </p>
      <p style={styles.weather.main}>{city.weather[0].main}</p>
      <img
        src={`http://openweathermap.org/img/w/${city.weather[0].icon}.png`}
        alt={city.weather[0].description}
        style={styles.icon}
      />
      <p style={styles.weather.sub}>{city.weather[0].description}</p>
      <p style={styles.weather.main}>
        {city.main.temp_max} <span>&#x2103;</span> Max
      </p>
      <p style={styles.weather.main}>
        {city.main.temp_min} <span>&#x2103;</span> Min
      </p>
    </div>
  );
};

export default WeatherCard;
const styles = {
  weatherCard: {
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
  icon: {},
  city: {
    color: "#fff",
    fontSize: 20,
    fontWeight: 600,
  },
  weather: {
    main: {
      color: "#fff",
      fontSize: 16,
      fontWeight: 600,
    },
    sub: {
      color: "#fff",
      fontSize: 10,
    },
  },
};
