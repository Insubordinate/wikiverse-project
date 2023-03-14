import React,{useState} from 'react';
import { Page } from './Page';


import apiURL from '../api';


export const PagesList = (props) => {

	const [currentPage,setCurrentPage] = useState([])

	async function fetchPage(page){
		try{
			const response = await fetch(`${apiURL}/wiki/${page.page.slug}`)
			const pageData = await response.json()
			props.setPages([pageData])
			props.setIsStatus(1)
			setCurrentPage(pageData)
		} catch(err){
			console.log("Oh no an error!",err)
		}
	}

	async function goToHome(){
		props.fetchPages()
		props.setIsStatus(0)
	}

	async function deletePage(){
		const response = await fetch(`${apiURL}/wiki/${currentPage.slug}`,{
			method:"DELETE"
		})
		const data = await response.json()
		console.log('Entry Deleted')
		setCurrentPage([])
		goToHome()
	}

	if(props.isStatus===0){
		return <>
			{
				props.pages.map((page, idx) => {
					return <div onClick={()=>fetchPage({page})} className='page'> <Page  page={page} key={idx} /> </div>
				})
			}
			</>
	}else{
		return <>
		{
			props.pages.map((page, idx) => {
				return <>
				<div onClick={()=>fetchPage({page})} className='page'> <Page  page={page} key={idx} /> 
				</div>
				<button onClick={()=>deletePage()}className='delete_button'>DELETE</button>
				<button onClick={()=>goToHome()} className='delete_button'>GO BACK</button>
				</>
			})
		}
		</>
	}
	
} 
