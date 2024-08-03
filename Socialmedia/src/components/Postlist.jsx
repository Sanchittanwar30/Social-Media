import { useContext } from "react";
import { PostList as PostListData } from "../store/post-list";
import PostPic from "./PostPic";

const Postlist = () => {
  const { postList } = useContext(PostListData);

  return (
    <>
      {postList.map((post) => (
        <PostPic key={post.id} post={post} />
      ))}
    </>
  );
};

export default Postlist;
