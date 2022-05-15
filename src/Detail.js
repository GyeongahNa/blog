import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";

function Detail() {

  const [article, setArticle] = useState([]);

  useEffect(() =>{
    getArticle();
  }, []);

  let params = useParams();
//   console.log(params);

  const getArticle = async () => {
    try {
        const response = await axios.get(`http://localhost:5000/article/${params.id}`);
        console.log(params.id);
        setArticle(response.data[0]);
        console.log(response.data[0]);

    } catch (e) {
        console.error("안된다")
    }
}


  return (
    <>
      <div>
          <h1>{article.title}</h1>
          <p>{article.detail}</p>
      </div>
    </>
  );
}

export default Detail;
