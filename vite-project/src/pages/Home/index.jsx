import { Link } from "react-router";
import styles from "./Home.module.scss";

function Home() {
    return (
        <div className={styles.home}>
            <h1>Trang Home</h1>

            <div className={styles.links}>
                <Link to="/counter">Counter</Link>
                <Link to="/todo">Todo</Link>
                <Link to="/profile">Profile</Link>
                <Link to="/products">Products</Link>
                <Link to="/comments">Comments</Link>
                <Link to="/weather">Weather</Link>
                <Link to="/buttons">Buttons</Link>
            </div>
        </div>
    );
}

export default Home;