import React from 'react';

export const Page = (props) => {

  return <>
    <h1>{props.page.title}</h1>
    <h3>{props.page.author}</h3>
    <h3>{props.page.content}</h3>
    <h3>{props.page.tags}</h3>
    <h3>{props.page.createdAt}</h3>
  </>
} 
	