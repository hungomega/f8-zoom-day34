const root = ReactDOM.createRoot(document.querySelector("#root"));

function Profile() {
    const [user, setUser] = React.useState(null);
    React.useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users/1")
            .then((res) => res.json())
            .then((data) => {
                setUser(data);
            });
    }, []);
    return (
        <>
            <h1> Profile</h1>

            {!user ? (
                <p>Đang tải...</p>
            ) : (
                <div className="profile-card">
                    <p>
                        <strong>Tên:</strong> {user.name}
                    </p>
                    <p>
                        <strong>Username:</strong> {user.Username}
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
                    <div className="address">
                        <strong>Address:</strong>
                        <p>{user.address.street}</p>
                        <p>{user.address.city}</p>
                    </div>
                </div>
            )}
        </>
    );
}

root.render(<Profile />);
