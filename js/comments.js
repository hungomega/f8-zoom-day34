const root = ReactDOM.createRoot(document.querySelector("#root"));
function Comments() {
    const [comments, setComments] = React.useState([]);

    // form
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [body, setBody] = React.useState("");

    React.useEffect(() => {
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
        <>
            <form onSubmit={handleSubmit}>
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Tên"
                />
                <input
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    placeholder="Email"
                />
                <textarea
                    onChange={(e) => setBody(e.target.value)}
                    value={body}
                    placeholder="Comment"
                ></textarea>

                <button>Gửi bình luận</button>
            </form>

            <h1>Comments</h1>
            {comments.map((comment) => (
                <div className="comment" key={comment.id}>
               
                    <img
                        src={`https://ui-avatars.com/api/?name=${comment.name}&background=random`}
                    />
                    <h3>{comment.name}</h3>
                    <p>{comment.email}</p>
                    <p>{comment.body}</p>
                    <small>2 giờ trước</small>
                </div>
            ))}
        </>
    );
}

root.render(<Comments />);
