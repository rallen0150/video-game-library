import React from 'react'

const Suggestions = (props) => {
  var options = "";
    options = props.results.map(r => (
        <a href={`/${props.category}/${r.id}`}>
          <li key={r.slug} style={{ border: "0.5px solid black", backgroundColor: "silver" }}>
              <img src={r.background_image !== null ? r.background_image : '/images/image-not-found.jpg'} alt={r.slug} height="35" width="35" />
              <span className="gameNameSuggestion">{r.name}</span>
          </li>
        </a>      
    ))
  
  return <ul className="suggested-games">{options}</ul>
}

export default Suggestions
