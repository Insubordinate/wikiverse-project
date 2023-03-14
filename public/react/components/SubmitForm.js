import React, { useState, useEffect } from 'react';


import apiURL from '../api';

export const SubmitForm = (props) => {

 
    //Set values
    const [title,setTitle] = useState('')
	const [article,setArticle] = useState('')
	const [author,setAuthor] = useState('')
	const [email,setEmail] = useState('')
	const [tags,setTags] = useState('')


    





    const SubmitNewPage = async (e) => {
        e.preventDefault()


        //Add a new entry into the Database

        const response = await fetch(`${apiURL}/wiki`,{
            method:"POST",
            headers:{
                'Content-Type':'application/json'

            },
            body:JSON.stringify({
                title:title,
                content:article,
                name:author,
                email:email,
                tags:tags
            })
        })

        const data = await response.json()

        //Default out values
        setTitle('')
        setArticle('')
        setAuthor('')
        setEmail('')
        setTags('')
        // Go back to homepage
        props.fetchPages()
        props.setIsStatus(0)


    }


    
    return  <>
        <section id='controls'>

            <form onSubmit={(event)=>SubmitNewPage(event)}>     
            <ul className='list_of_fields'>
                <h1>FORM</h1>
                <input type='text' onChange={(event)=>setTitle(event.target.value)} className='field' placeholder='Title'></input>
                <textarea rows='2' onChange={(event)=>setArticle(event.target.value)}cols='25'className='field' placeholder='Article Content'></textarea>
                <input type='text' onChange={(event)=>setAuthor(event.target.value)}className='field' placeholder='Author Name'></input>
                <input type='text' onChange={(event)=>setEmail(event.target.value)}className='field' placeholder='Author Email'></input>
                <input type='text' onChange={(event)=>setTags(event.target.value)}className='field' placeholder='Tags'></input>
                <button className='submitButton' type="submit">SUBMIT</button>
                <button onClick={()=>props.setIsStatus(0)}className='submitButton'>GO BACK</button>
            </ul>
            </form>
        </section>
    
    </>
}