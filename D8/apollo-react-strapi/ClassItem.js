import React from 'react';
// import Card from '@bit/campgladiator.cgui.components.atoms.card';
// import Button from '@bit/campgladiator.cgui.components.atoms.button';



export default function ClassItem({item}){
    return(
        <div>
			<img src ={`http://localhost:1337${item.image[0].url}`}/>
			<h1>{item.classname}</h1>
			<p>It starts at {item.startdate} and ends at {item.enddate}.</p>
			<button>{item.classname}</button>
        </div>
        
        // <Card style={{ width: '80%', maxWidth: '400px', margin: '20px auto'}}>
		// <img 
		// 	src={`https://localhost:1337${item.image[0].url}`} 
		// 	style={{ maxWidth: '100%' }} 
		// />
		// <div style={{padding: '10px 30px 30px'}}>
		// 	<p>It starts at {item.startdate} and ends at {item.enddate}.</p>
		// 	<Button primary solid>{item.classname}</Button>
		// </div>
        // </Card>
        )
}
//use Mutation to visualize class creation