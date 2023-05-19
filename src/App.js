import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { addPost, deletePost } from "./features/Posts";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  const postList = useSelector((state) => state.posts.value);
  console.log(postList);

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(
      addPost({
        id: postList.length,
        name: name,
        content: content,
      })
    );
    setName("");
    setContent("");
  };

  return (
    <div className="App">
      <div>
        <h1>React-Redux掲示板</h1>
      </div>
      <div className="addPost">
        <input
        value={name}
          type="text"
          placeholder="お名前"
          onChange={(e) => setName(e.target.value)}
        />
        <input
        value={content}
          type="text"
          placeholder="投稿内容"
          onChange={(e) => setContent(e.target.value)}
        />
        <button onClick={() => handleClick()}>投稿</button>
      </div>
      <div className="displayPosts">
        {postList.map((post) => (
          <div className="post" key={post.id}>
            <h1 className="postName">{post.name}</h1>
            <h1 className="postContent">{post.content}</h1>
            <button onClick={() => dispatch(deletePost({id:post.id}))}>削除</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
