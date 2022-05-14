import { Link } from "react-router-dom";

function List() {
  return (
    <>
      <div>
       <Link to={`/article/write`}><button >글쓰기</button></Link>
      </div>
      <div>
        <ul>
          <li>글 1</li>
          <li>글 2</li>
          <li>글 3</li>
        </ul>
      </div>
    </>
  );
}

export default List;
