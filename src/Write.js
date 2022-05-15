import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Write() {
    const [title, setTitle] = useState('');
    const [detail, setDetail] = useState('');

    const navigate = useNavigate(); 

    function onChangeTitle(e) {
        setTitle(e.target.value);
        console.log(e.target.value);
    }

    function onChangeDetail(e) {
        setDetail(e.target.value);
        console.log(e.target.value);
    }

    const onSubmit = async () => {
        try {
            const response = await axios.post('http://localhost:5000/article', {title, detail});
            // console.log(response);
            // console.log(parseInt(response.status/100));
            if (response.status == 201) {
                navigate("/article");
            }
        } catch (e) {
            console.error("안된다")
        }
    }

    return (
        <>
        <div>
            <label htmlFor="title">title</label>
            <input onChange={onChangeTitle} id="title" value={title}/>
        </div>
        <div>
            <label htmlFor="detail">detail</label>
            <input onChange={onChangeDetail} type="text" id="detail" value={detail}/>
        </div>
        <div>
            <button onClick={onSubmit}>완료</button>
        </div>
        </>
    );
}

export default Write;