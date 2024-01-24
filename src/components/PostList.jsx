import { useContext } from "react";
import WelcomeMessage from "./WelcomeMessage";
import { PostListContext } from "../store/post-list-store";
import Post from "./Post";
function PostList() {
    const { postList, addPostsInitially } = useContext(PostListContext);
    const handleIntialPosts = () => {
        fetch('https://dummyjson.com/posts')
            .then(res => res.json())
            .then(json => addPostsInitially(json.posts));
    }
    return <>
        {postList.length === 0 && (<WelcomeMessage onGetInitialPosts={handleIntialPosts} />)}
        {postList.map((post) => <Post key={post.id} post={post}></Post>)};
    </>
}

export default PostList;