const root = ReactDOM.createRoot(document.querySelector("#root"));

function Counter() {
    const [value, setValue] = React.useState(0);
    const textColor = value > 0 ? "green" : value < 0 ? "red" : "grey";
    const textState = value > 0 ? "positive" : value < 0 ? "negative" : "zero";
    return (
        <>
            <div className="counter-card">
                <div className="counter-info">
                    <div className="counter-value" style={{ color: textColor }}>
                        {value}
                    </div>
                    <div className="counter-state">{textState}</div>
                </div>
                <div className="counter-control">
                    <button onClick={() => setValue(value - 1)}>
                        <i className="fa-solid fa-minus"></i>
                    </button>
                    <button onClick={() => setValue(0)}>
                        <i className="fa-solid fa-rotate-left"></i>
                    </button>
                    <button onClick={() => setValue(value + 1)}>
                        <i className="fa-solid fa-plus"></i>
                    </button>
                </div>
            </div>
        </>
    );
}
root.render(<Counter />);
