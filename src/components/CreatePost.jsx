import { useContext, useRef } from "react";
import { PostListContext } from "../store/post-list-store"

function CreatePost() {
    const { addPost } = useContext(PostListContext);

    const userIdElement = useRef("");
    const postTitleElement = useRef("");
    const postBodyElement = useRef("");
    const postTagsElement = useRef("");
    const postReactionsElement = useRef("");

    const handleSubmit = (event) => {
        event.preventDefault();
        const userId = userIdElement.current.value;
        const postTitle = postTitleElement.current.value;
        const postBody = postBodyElement.current.value;
        const postTags = postTagsElement.current.value.split(" ");
        const postReactions = postReactionsElement.current.value;
        userIdElement.current.value = "";
        postTitleElement.current.value = "";
        postBodyElement.current.value = "";
        postTagsElement.current.value = '';
        postReactionsElement.current.value = "";

        addPost(userId, postTitle, postBody, postTags, postReactions);
    }
    return <>
        <form className="create-post" onSubmit={handleSubmit}>
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Enter ID of Post</label>
                <input type="text" ref={userIdElement} className="form-control" id="exampleFormControlInput1" placeholder="Enter id " />
            </div>
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Enter Title of Post</label>
                <input type="text" ref={postTitleElement} className="form-control" id="exampleFormControlInput1" placeholder="Enter Title" />
            </div>
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Enter Body of Post</label>
                <input type="text" ref={postBodyElement} className="form-control" id="exampleFormControlInput1" placeholder="Enter Body" />
            </div>
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Enter Tags</label>
                <input type="text" ref={postTagsElement} className="form-control" id="exampleFormControlInput1" placeholder="Enter tags with space" />
            </div>
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Enter Number of reactions</label>
                <input type="text" ref={postReactionsElement} className="form-control" id="exampleFormControlInput1" placeholder="Enter number of rections" />
            </div>
            <button type="submit" className="btn btn-primary">
                Post
            </button>
        </form>
    </>
}
export default CreatePost;