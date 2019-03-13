import React from 'react'

const Box = (props) =>{
   
  
   console.log(props);
  
  
  
   return (
    <div className="infobox">
        <div className="image">
            <img src={props.info.hdurl} alt={props.info.date} width={500} />
        </div>

        <div className="inner">
            <h1 className="title">{props.info.title}</h1>
            <p className="date">{props.info.date}</p>
            <p>{props.info.explanation}</p>
            <a className="btn" href={props.info.url} >View Details</a>
        </div>
    </div>
  )
}

export default Box
