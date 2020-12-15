import React from 'react'
import $ from 'jquery'

const setName = () => {
    let name = $("#name").val();
    localStorage.setItem('name', name);
}

const delName = () => {
    localStorage.removeItem('name');
}

const Home = () => {
    
    return (
        <div>
            <h2>Home</h2>
            <div>
                <input type="text" id="name" placeholder="이름을 입력하세요"/>
                <input type="button" value="등록" onClick={() => setName()}/>
            </div>
            <div>
                <input type="button" value="삭제" onClick={() => delName()}/>
            </div>
        </div>
    )
}

export default Home;