const styles = {
  inputDiv: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  input: {
    width: 200,
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
      marginLeft: 20,
      outline: "none",
      border: "none",
      color: "#fff",
      background:
        "radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 0%, rgba(0,212,255,1) 100%)",
    },
    hover: {
      cursor: "pointer",
      width: 100,
      height: 40,
      marginLeft: 20,
      outline: "none",
      border: "none",
      color: "#fff",
      background:
        "radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 0%, rgba(0,212,255,1) 100%)",
    },
  },
  weatherCard: {
    width: "20rem",
    height: "20rem",
    borderRadius: "10px",
    padding: "5px",
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    // background: 'rgb(2,0,36)',
    background:
      "radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 0%, rgba(0,212,255,1) 100%)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 20,
  },
  city: {
    color: "#fff",
    fontSize: 20,
    fontWeight: 600,
    background: "none",
  },
  weather: {
    main: {
      color: "#fff",
      fontSize: 16,
      fontWeight: 600,
      background: "none",
    },
    sub: {
      color: "#fff",
      fontSize: 8,
      background: "none",
    },
  },
};

export default styles;
