import { useState } from "react";

function Write() {
    const [title, setTitle] = useState('');
    const [detail, setDetail] = useState('');


    function onChangeTitle(e) {
        setTitle(e.target.value);
    }

    function onChangeDetail(e) {
        setDetail(e.target.value);
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
            <button>완료</button>
        </div>
        </>
    );
}

export default Write;