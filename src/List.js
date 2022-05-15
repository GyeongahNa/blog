import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function List() {

  const [articles, setArticles] = useState([]);

  useEffect(() =>{
    getArticle();
  }, []);

  const getArticle = async () => {
    try {
        const response = await axios.get('http://localhost:5000/article');
        setArticles(response.data);

    } catch (e) {
        console.error("안된다")
    }
}


  return (
    <>
      <div>
       <Link to={`/article/write`}><button >글쓰기</button></Link>
      </div>
      <div>
        <ul>
          {articles && articles.map(article => 
            <Link to={`/article/${article.id}`}><li key={article.id}>{article.title}</li></Link>)}
        </ul>
      </div>
    </>
  );
}

export default List;
