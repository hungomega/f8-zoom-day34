import { useState } from "react";
import styles from "./Weather.module.scss";
function Weather() {
    const weatherData = {
        hanoi: {
            city: "Hà Nội",
            temp: 28,
            weather: "Nắng",
            humidity: 65,
        },
        hcm: {
            city: "TP.HCM",
            temp: 32,
            weather: "Có mây",
            humidity: 78,
        },
        danang: {
            city: "Đà Nẵng",
            temp: 30,
            weather: "Mưa nhẹ",
            humidity: 82,
        },
    };

    const [selectedCity, setSelectedCity] = useState("hanoi");
    const weather = weatherData[selectedCity];

    const [temp, setTemp] = useState(weatherData.hanoi.temp);
    const [humidity, setHumidity] = useState(weatherData.hanoi.humidity);

    const handleRefresh = () => {
        setTemp(temp + Math.floor(Math.random() * 11) - 5);
        setHumidity(humidity + Math.floor(Math.random() * 11) - 5);
    };

    return (
        <div className={styles.weather}>
            <select
                className={styles.select}
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
            >
                <option value="hanoi">Hà Nội</option>
                <option value="hcm">TP.HCM</option>
                <option value="danang">Đà Nẵng</option>
            </select>

            <div>
                <h2 className={styles.title}>{weather.city}</h2>

                <p className={styles.info}>Nhiệt độ: {temp}°C</p>

                <p className={styles.info}>
                    {weather.weather === "Nắng" && "☀️"}
                    {weather.weather === "Có mây" && "🌤️"}
                    {weather.weather === "Mưa nhẹ" && "🌧️"}
                    {weather.weather}
                </p>

                <p className={styles.info}>Độ ẩm: {humidity}%</p>

                <button className={styles.button} onClick={handleRefresh}>
                    <i className="fa-solid fa-shuffle"></i>
                </button>
            </div>
        </div>
    );
}

export default Weather;
