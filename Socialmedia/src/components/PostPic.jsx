import { useContext } from "react";
import { MdOutlineDeleteSweep } from "react-icons/md";
import { PostList } from "../store/post-list";
const PostPic = ({ post }) => {
  const { deletePost } = useContext(PostList);
  return (
    <div className="card post-card" style={{ width: "30rem" }}>
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <span
          className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
          onClick={() => deletePost(post.id)}
        >
          <MdOutlineDeleteSweep />
        </span>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span key={tag} className="badge text-bg-primary hashtag">
            {tag}
          </span>
        ))}
        <div className="alert alert-success reactions" role="alert">
          {post.reaction} people reacted
        </div>
      </div>
    </div>
  );
};

export default PostPic;
