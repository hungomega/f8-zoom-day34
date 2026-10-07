import { useState, useEffect } from "react";
import styles from "./Products.module.scss";

function ProductList() {
    const [posts, setPosts] = useState([]);
    const [selectedPost, setSelectedPost] = useState(null);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts?_limit=12")
            .then((res) => res.json())
            .then((data) => {
                setPosts(data);
            });
    }, []);

    return (
        <>
            <h1>Product List</h1>

            {posts.map((post) => (
                <div className={styles.post} key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>

                    <button onClick={() => setSelectedPost(post)}>
                        Xem chi tiết
                    </button>
                </div>
            ))}

            {selectedPost && (
                <div className={styles.modal}>
                    <div className={styles["modal-content"]}>
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

export default ProductList;