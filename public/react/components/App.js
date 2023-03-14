import React, { useState, useEffect } from 'react';
import { PagesList } from './PagesList';
import {Footer } from './Footer'

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

	return (
		<main>
	  		<div className='header'>
      			<h1>WikiVerse</h1>
				<h2>An interesting 📚</h2>
			</div>	
			<div className="pageList">
				<PagesList pages={pages} setPages={setPages} setIsStatus={setIsStatus}/>
			</div>

			
				
			<div>
				<Footer isStatus={isStatus} setIsStatus={setIsStatus} fetchPages={fetchPages}/>
			</div>

			
		

			


		</main>
	)
}