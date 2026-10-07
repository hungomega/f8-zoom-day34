import { NavLink } from "react-router";
import styles from "./Navigation.module.scss";

const navItems = [
    { to: "/", title: "Home" },
    { to: "/counter", title: "Counter" },
    { to: "/todo", title: "Todo" },
    { to: "/profile", title: "Profile" },
    { to: "/products", title: "Products" },
    { to: "/comments", title: "Comments" },
    { to: "/weather", title: "Weather" },
    { to: "/buttons", title: "Buttons" },
];

function Navigation() {
    return (
        <nav className={styles.navigation}>
            {navItems.map((item) => (
                <NavLink
                    key={item.to}
                    to={item.to}
                    className={({ isActive }) =>
                        isActive ? styles.active : ""
                    }
                >
                    {item.title}
                </NavLink>
            ))}
        </nav>
    );
}

export default Navigation;