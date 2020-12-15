import React from 'react'
import $ from 'jquery'

const Home = () => {
    const setName = () => {
        let name = $("#name").val();
        localStorage.setItem('name', name);
        window.location.reload();
    }
    //조건부 렌더링 진행중
    const existName = () => {
        if(localStorage.getItem('name') === null){
            $('#div_name').show();
        }else{
            $('#div_name').hide();
        }
    }

    return (
        <div>
            <h2>Home</h2>
            <div id="div_name">
                <input type="text" id="name" placeholder="이름을 입력하세요"/>
                <input type="button" value="등록" onClick={() => setName()}/>
            </div>
        </div>
    )
}

const Inputname = () => {
    
}

export default Home;