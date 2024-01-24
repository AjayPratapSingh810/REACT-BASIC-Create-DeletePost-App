import { MdDelete } from "react-icons/md";
import { useContext } from "react";
import { PostListContext } from "../store/post-list-store";

function Post({ post }) {
    const { deletePost } = useContext(PostListContext);
    return <>
        <div className="post-card">
            <div className="card-body post position-relative">
                <span className="delete-btn position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick={() => { deletePost(post.id) }}>
                    <MdDelete />
                </span>
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.body}</p>
                <div className="tags">
                    {post.tags.map(item => <span key={item} className="badge text-bg-primary">{item}</span>)}
                </div>
                <div className="alert alert-success reactions" role="alert">
                    This post has been reacted by {post.reactions} people.
                </div>

            </div>
        </div>
    </>
}

export default Post;