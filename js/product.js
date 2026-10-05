const root = ReactDOM.createRoot(document.querySelector("#root"));
function ProductList() {
    const [posts, setPosts] = React.useState([]); // lưu danh sách 12 bài viết
    const [selectedPost, setSelectedPost] = React.useState(null); // Lưu damh sách đang bấm hiện tại
    React.useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts?_limit=12")
            .then((res) => res.json())
            .then((data) => {
                setPosts(data);
            });
    }, []);
    return (
        <>
            <h1> Product List</h1>
            {posts.map((post) => (
                <div className="post" key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                    <button onClick={() => setSelectedPost(post)}>
                        Xem chi tiết
                    </button>
                </div>
            ))}
            {selectedPost && (
                <div className="modal">
                    <div className="modal-content">
                        <button onClick={() => setSelectedPost(null)}>
                            Đóng
                        </button>

                        <h2>{selectedPost.title}</h2>
                        <p>{selectedPost.body}</p>
                    </div>
                </div>
            )}
        </>
    );
}

root.render(<ProductList />);
