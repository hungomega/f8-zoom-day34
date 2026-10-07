import React from "react";
import styles from "./Counter.module.scss";

function Counter() {
    const [value, setValue] = React.useState(0);

    const textColor =
        value > 0 ? "green" : value < 0 ? "red" : "grey";

    const textState =
        value > 0 ? "positive" : value < 0 ? "negative" : "zero";

    return (
        <div className={styles.counterCard}>
            <div className={styles.counterInfo}>
                <div
                    className={styles.counterValue}
                    style={{ color: textColor }}
                >
                    {value}
                </div>

                <div className={styles.counterState}>
                    {textState}
                </div>
            </div>

            <div className={styles.counterControl}>
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
    );
}

export default Counter;