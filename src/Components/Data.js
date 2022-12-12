import React from 'react'

export default function Data(props) {
  return (
    <div className='dataComp'>
        <img src={props.imageUrl} alt="photo"/>
        <br/>
        <div>
        <h3>Earth Date : {props.earthDate}</h3>
        <h3>Rover : <strong>{props.roverName}</strong></h3>
        <p>Photo ID: {props.id}</p>
        <p>Launch Date : {props.launchDate}</p>
        <p>Landing Date : {props.landingDate}</p>
        <p>Status : <span className={props.status} >{props.status}</span></p>
        <p>Sol : {props.sol}</p>
        </div>
       

    </div>
  )
}
