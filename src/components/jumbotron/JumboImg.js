import React from 'react'
import '../../App.css'

const JumboImg = (props) => {
    console.log(props)
    return (
        <img src={props.image != null ? props.image : '/images/image-not-found.jpg'} alt={props.alt} className="jumbo-img"/>
    )
}

export default JumboImg