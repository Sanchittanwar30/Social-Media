import { useReducer } from "react";
import { createContext } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  addInitPosts: () => {},
  deletePost: () => {},
});

const postListreducer = (currPostlist, action) => {
  let newPostList = currPostlist;
  if (action.type === "Del_Post") {
    newPostList = currPostlist.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "Add_Init_Posts") {
    newPostList = action.payload.posts;
  } else if (action.type === "Add_Post") {
    newPostList = [action.payload, ...currPostlist];
  }

  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchpostList] = useReducer(postListreducer, []);

  const addPost = (userId, postTitle, postBody, Reactions, tags) => {
    dispatchpostList({
      type: "Add_Post",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reaction: Reactions,
        userId: userId,
        tags: tags,
      },
    });
  };

  const addInitPosts = (posts) => {
    dispatchpostList({
      type: "Add_Init_Posts",
      payload: {
        posts,
      },
    });
  };

  const deletePost = (postId) => {
    dispatchpostList({
      type: "Del_Post",
      payload: {
        postId,
      },
    });
  };
  return (
    <PostList.Provider value={{ postList, addPost, addInitPosts, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
