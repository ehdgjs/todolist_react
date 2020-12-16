import React from 'react'
import $ from 'jquery'

const setName = () => {
	let name = $("#name").val();
	localStorage.setItem('name', name);
	window.location.reload();
}

const Inputname = () => {
	if(localStorage.getItem('name') === null){
		return  <div id="div_name">
							<input type="text" id="name" placeholder="이름을 입력하세요"/>
							<input type="button" value="등록" onClick={() => setName()}/>
						</div>
	}else{
		return null;
	}
}

const Home = () => {
	return (
		<div>
			<h2>Home</h2>
			<Inputname/>
		</div>
	)
}

export default Home;