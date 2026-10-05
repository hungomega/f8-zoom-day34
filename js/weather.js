const root = ReactDOM.createRoot(document.querySelector("#root"));
function Weather() {
    const weatherData = {
        hanoi: { city: "Hà Nội", temp: 28, weather: "Nắng", humidity: 65 },
        hcm: { city: "TP.HCM", temp: 32, weather: "Có mây", humidity: 78 },
        danang: { city: "Đà Nẵng", temp: 30, weather: "Mưa nhẹ", humidity: 82 },
    };
    const [selectedCity, setselectedCity] = React.useState("hanoi");
    const weather = weatherData[selectedCity];

    const [temp, setTemp] = React.useState(weatherData.hanoi.temp);
    const [humidity, setHumidity] = React.useState(weatherData.hanoi.humidity);

    const handleRefresh = () => {
        setTemp(temp + Math.floor(Math.random() * 11) - 5);
        setHumidity(humidity + Math.floor(Math.random() * 11) - 5);
    };
    return (
        <>
            <select
                value={selectedCity}
                onChange={(e) => setselectedCity(e.target.value)}
            >
                <option value="hanoi">Hà Nội</option>
                <option value="hcm">TP.HCM</option>
                <option value="danang">Đà Nẵng</option>
            </select>

            <div>
                <h2>{weather.city}</h2>
                <p>Nhiệt độ: {temp}°C</p>
                <p>
                    {weather.weather === "Nắng" && "☀️"}
                    {weather.weather === "Có mây" && "🌤️"}
                    {weather.weather === "Mưa nhẹ" && "🌧️"}
                    {weather.weather}
                </p>
                <p>Độ ẩm: {humidity}%</p>

                <button onClick={handleRefresh}>
                    <i class="fa-solid fa-shuffle"></i>
                </button>
            </div>
        </>
    );
}

root.render(<Weather />);
