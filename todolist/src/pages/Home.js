import React from 'react'
import $ from 'jquery'

const Home = () => {
    const setName = () => {
        let name = $("#name").val();
        localStorage.setItem('name', name);
        window.location.reload();
    }
    
    const delName = () => {
        localStorage.removeItem('name');
        window.location.reload();
    }    
    return (
        <div>
            <h2>Home</h2>
            <div>
                <input type="text" id="name" placeholder="이름을 입력하세요"/>
                <input type="button" value="등록" onClick={() => setName()}/>
                <input type="button" value="삭제" onClick={() => delName()}/>
            </div>
        </div>
    )
}

export default Home;