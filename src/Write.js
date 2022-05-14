import { useState } from "react";
import axios from 'axios';

function Write() {
    const [title, setTitle] = useState('');
    const [detail, setDetail] = useState('');


    function onChangeTitle(e) {
        setTitle(e.target.value);
        console.log(e.target.value);
    }

    function onChangeDetail(e) {
        setDetail(e.target.value);
        console.log(e.target.value);
    }

    const onSubmit = async () => {
        const response = await axios.post('https://localhost:5000/article', [title, detail]);
        console.log(response);
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