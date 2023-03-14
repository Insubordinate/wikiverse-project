import React from 'react';

export const Footer = (props) => {
  const buttonText = ['Add Page','Next','Go Back','Delete','Submit']

  async function goToHome(){

    props.fetchPages()
    props.setIsStatus(0)
  }

  

  if(props.isStatus === 0){
    //"Default State"
    //Buttons say "Add Page" and "Next"
    return <>
        
        <div className='footer'>
            <button className='button'>{buttonText[0]}</button>
            <button className='button'>{buttonText[1]}</button>
        </div>
    </>
  }
  //Page Highlighted State
  //Buttons say "Delete" and "Go Back"
  else if (props.isStatus === 1){
    return <>
        <div className='footer'>
            <button className='button'>{buttonText[3]}</button>
            <button className='button' onClick={()=>goToHome()}>{buttonText[2]}</button>
        </div>
    </>
  }
  //Adding Page State
  //Buttons say Submit and Go Back
  else{
    return <>
        <div className='footer'>
            <button className='button'>{buttonText[4]}</button>
            <button className='button'>{buttonText[2]}</button>
        </div>
    </>
  }
} 