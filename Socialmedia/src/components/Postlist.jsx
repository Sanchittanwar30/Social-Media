import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { PostList as PostListData } from "../store/post-list";
import Defmessage from "./Defmessage";
import LoadingSpinner from "./loadSpinner";
import PostPic from "./PostPic";

const Postlist = () => {
  const { postList, addInitPosts } = useContext(PostListData);
  const [Fetching, setFetching] = useState(false);

  useEffect(() => {
    setFetching(true);

    const controller = new AbortController();
    const signal = controller.signal;

    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        addInitPosts(data.posts);
        setFetching(false);
      });

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <>
      {Fetching && <LoadingSpinner />}
      {!Fetching && postList.length === 0 && <Defmessage />}
      {!Fetching &&
        postList.map((post) => <PostPic key={post.id} post={post} />)}
    </>
  );
};

export default Postlist;
