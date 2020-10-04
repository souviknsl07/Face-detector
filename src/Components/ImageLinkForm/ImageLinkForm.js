import React from 'react';
import  './form.css';

const ImageLinkForm=({onInputChange, onButtonSubmit})=> {
	return(
		<div>
			
			<p className='f4'>This magic brain will recognise face in the image. Enter the image url below.</p>
		  <div className='center'>
			  <div className=' form pa3 br2 shadow-5 center '>
			  	<input className='f6 pa2 w-70 center' type='text' onChange={onInputChange}/>
			  	<button className='w-30 grow f6 ph3 pv2 link dib white bg-light-purple'
			  	onClick={onButtonSubmit}
			  	>Detect</button>
		   </div>
		 </div>	  
		</div>
	)
}

export default ImageLinkForm;