import { useReducer, createContext } from "react";
export const PostListContext = createContext({
    postList: [],
    addPost: () => { },
    addPostsInitially: () => { },
    deletePost: () => { },
});

const postListReducer = (currPostList, action) => {
    let newPostList = currPostList;
    if (action.type === "ADD_POST") {
        newPostList = [...newPostList, action.payload];
    } else if (action.type === "ADD_POSTS_INITIALLY") {
        newPostList = action.payload.posts;
    } else {
        newPostList = currPostList.filter(
            (post) => post.id !== action.payload.postId
        );
    }
    return newPostList;
};
const PostListProvider = ({ children }) => {

    const [postList, dispatchPostList] = useReducer(
        postListReducer,
        []
    );

    const addPost = (userId, postTitle, postBody, tags, reactions) => {
        dispatchPostList({
            type: "ADD_POST",
            payload: {
                id: Date.now(),
                title: postTitle,
                body: postBody,
                reactions: reactions,
                userId: userId,
                tags: tags,
            },
        });
    };
    const addPostsInitially = (posts) => {
        dispatchPostList({
            type: "ADD_POSTS_INITIALLY",
            payload: {
                posts
            },
        });
    }
    const deletePost = (postId) => {
        dispatchPostList({
            type: "DELETE_POST",
            payload: {
                postId
            },
        });
    };

    return <PostListContext.Provider value={{ postList, addPost, addPostsInitially, deletePost }}>
        {children}
    </PostListContext.Provider>
};

export default PostListProvider;