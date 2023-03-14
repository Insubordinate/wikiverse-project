import React, { useState, useEffect } from 'react';
import { PagesList } from './PagesList';
import { SubmitForm } from './SubmitForm';

// import and prepend the api url to any fetch calls
import apiURL from '../api';

export const App = () => {

	const [pages, setPages] = useState([]);
	const [isStatus,setIsStatus] = useState(0)
	






	async function fetchPages(){
		try {
			const response = await fetch(`${apiURL}/wiki`);
			const pagesData = await response.json();
			setPages(pagesData);
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}


	

	useEffect(() => {
		fetchPages();
	}, []);

	if(isStatus===0){
		return (
			<main>
				<div className='header'>
					<h1>WikiVerse</h1>
					<h2>An interesting 📚</h2>
				</div>	
				<div className="pageList">
					<PagesList pages={pages} setPages={setPages} fetchPages={fetchPages} isStatus={isStatus} setIsStatus={setIsStatus}/>
					<button onClick={()=>setIsStatus(2)} className='button'>Add a Page</button>
				</div>
				


			</main>
		)
	}else if(isStatus===2){
		return (
		<main>
		<div className='header'>
			<h1>Please Help us!</h1>
			<h2>Add accurate info</h2>
		</div>	
	

		<SubmitForm 
			fetchPages={fetchPages}
			setIsStatus={setIsStatus} 
		/>
					


	</main>

	)}else{
		return(
		<main>
		<div className='header'>
			<h1>I SEE YOU LIKE READING</h1>
			<h2>INTERESTING TOPIC 📚</h2>
		</div>	
		<div className="pageList">
			<PagesList pages={pages} setPages={setPages} fetchPages={fetchPages} isStatus={isStatus} setIsStatus={setIsStatus}/>
		</div>
		


	</main>

	)}
}
