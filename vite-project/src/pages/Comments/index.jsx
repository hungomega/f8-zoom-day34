import { useState, useEffect } from "react";
import styles from "./Comments.module.scss";

function Comments() {
    const [comments, setComments] = useState([]);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [body, setBody] = useState("");

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/comments?postId=1")
            .then((res) => res.json())
            .then((data) => {
                setComments(data);
            });
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        const newComment = {
            id: Date.now(),
            name,
            email,
            body,
        };

        setComments([newComment, ...comments]);

        setName("");
        setEmail("");
        setBody("");
    };

    return (
        <div className={styles.comments}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <input
                    className={styles.input}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Tên"
                />

                <input
                    className={styles.input}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                />

                <textarea
                    className={styles.textarea}
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    placeholder="Comment"
                />

                <button className={styles.button}>Gửi bình luận</button>
            </form>

            <h1 className={styles.title}>Comments</h1>

            {comments.map((comment) => (
                <div className={styles.comment} key={comment.id}>
                    <img
                        src={`https://ui-avatars.com/api/?name=${comment.name}&background=random`}
                    />

                    <h3>{comment.name}</h3>

                    <p>{comment.email}</p>

                    <p>{comment.body}</p>

                    <small>2 giờ trước</small>
                </div>
            ))}
        </div>
    );
}

export default Comments;
