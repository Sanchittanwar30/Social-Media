import { useContext } from "react";
import { useRef } from "react";
import { PostList } from "../store/post-list";

const CreatePost = () => {
  const { addPost } = useContext(PostList);
  const userIdEle = useRef();
  const postTitleEle = useRef();
  const postBodyEle = useRef();
  const reactionsEle = useRef();
  const tagsEle = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdEle.current.value;
    const postTitle = postTitleEle.current.value;
    const postBody = postBodyEle.current.value;
    const reactions = reactionsEle.current.value;
    const tags = tagsEle.current.value.split(" ");

    userIdEle.current.value = "";
    postTitleEle.current.value = "";
    postBodyEle.current.value = "";
    reactionsEle.current.value = "";
    tagsEle.current.value = "";

    addPost(userId, postTitle, postBody, reactions, tags);
  };

  return (
    <form className="create-post" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          Username
        </label>
        <input
          type="text"
          ref={userIdEle}
          className="form-control"
          id="userId"
          placeholder="Enter your username"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          ref={postTitleEle}
          className="form-control"
          id="title"
          placeholder="How are you feeling today ..."
        />
      </div>

      <div className="mb-3">
        <label htmlFor="Body" className="form-label">
          Post Content
        </label>
        <textarea
          type="text"
          ref={postBodyEle}
          rows="4"
          className="form-control"
          id="body"
          placeholder="Share here !!"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Reactions
        </label>
        <input
          type="text"
          ref={reactionsEle}
          className="form-control"
          id="reactions"
          placeholder="Number of people reacted on this post"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Enter your tags here
        </label>
        <input
          type="text"
          ref={tagsEle}
          className="form-control"
          id="tags"
          placeholder="Enter tags"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};

export default CreatePost;
