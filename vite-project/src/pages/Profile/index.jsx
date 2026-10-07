import { useState, useEffect } from "react";
import styles from "./Profile.module.scss";

function Profile() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users/1")
            .then((res) => res.json())
            .then((data) => {
                setUser(data);
            });
    }, []);

    return (
        <div className={styles.profile}>
            <h1 className={styles.title}>Profile</h1>

            {!user ? (
                <p>Đang tải...</p>
            ) : (
                <div className={styles.profileCard}>
                    <p>
                        <strong>Tên:</strong> {user.name}
                    </p>

                    <p>
                        <strong>Username:</strong> {user.username}
                    </p>

                    <p>
                        <strong>Email:</strong> {user.email}
                    </p>

                    <p>
                        <strong>Phone:</strong> {user.phone}
                    </p>

                    <p>
                        <strong>Website:</strong> {user.website}
                    </p>

                    <div className={styles.address}>
                        <strong>Address:</strong>
                        <p>{user.address.street}</p>
                        <p>{user.address.city}</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Profile;