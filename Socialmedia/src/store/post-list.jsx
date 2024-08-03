import { useReducer } from "react";
import { createContext } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListreducer = (currPostlist, action) => {
  let newPostList = currPostlist;
  if (action.type === "Del_Post") {
    newPostList = currPostlist.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "Add_Post") {
    newPostList = [action.payload, ...currPostlist];
  }

  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchpostList] = useReducer(postListreducer, DefPostList);

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
  const deletePost = (postId) => {
    dispatchpostList({
      type: "Del_Post",
      payload: {
        postId,
      },
    });
  };
  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

const DefPostList = [
  {
    id: "1",
    title: "planning for a trip",
    body: "looking for a  good one week long trek",
    reaction: 100,
    userId: " user-4",
    tags: ["trek", "mountains"],
  },
  {
    id: "2",
    title: "Cycle",
    body: "Bought a cycle for daily commute",
    reaction: 140,
    userId: "user-7",
    tags: ["cycle", "transport"],
  },
];
export default PostListProvider;
