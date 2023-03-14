import React from 'react';
import { Page } from './Page';


import apiURL from '../api';


export const PagesList = (props) => {

	async function fetchPage(page){
		try{
			const response = await fetch(`${apiURL}/wiki/${page.page.slug}`)
			const pageData = await response.json()
			console.log(pageData)
			props.setPages([pageData])
			props.setIsStatus(1)
		} catch(err){
			console.log("Oh no an error!",err)
		}
	}

	return <>
		{
			props.pages.map((page, idx) => {
				return <div onClick={()=>fetchPage({page})} className='page'> <Page  page={page} key={idx} /> </div>
			})
		}
	</>
} 
