import axios from "axios";

const API_DAY_URL =
  "https://api.open-meteo.com/v1/forecast?latitude=-33.4569&longitude=-70.6483&current=temperature_2m&timezone=auto&forecast_days=1";
const API_URL =
  "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m";

export const getTemperatura = async () => {
  const respuesta = await axios.get(API_DAY_URL);
  const nuevaTemperatura = respuesta.data.current.temperature_2m;
  return nuevaTemperatura;
};

export const getWeatherData = async () => {
  try {
    const response = await axios.get(API_URL);
    const data = response.data;

    // Procesar los datos según el formato de la API
    const time = data.hourly.time;
    const temperature = data.hourly.temperature_2m;
    const labels = time.map((t) =>
      new Date(t).toLocaleString([], {
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      })
    );

    return {
      labels,
      temperatures: temperature,
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
