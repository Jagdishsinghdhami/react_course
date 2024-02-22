import { useEffect, useState } from "react";
import axios from "axios";

const Post = () => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setData(response.data);
    } catch (error) {
      console.log("error axios methods", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <h1>This is post data</h1>
      {data.map((postData) => (
        <div key={postData.id}>{postData.title}</div>
      ))}
    </div>
  );
};

export default Post;
