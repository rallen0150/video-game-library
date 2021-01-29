import React from 'react'


const Suggestions = (props) => {
  var options = "";
  if (props.category === "games") {
    options = props.results.map(r => (
      <a href={`/${props.category}/${r.id}`}>
        <li key={r.slug}>
            <img src={r.background_image} height="35" width="35" />
            <span className="gameNameSuggestion">{r.name}</span>
        </li>
      </a>
    ))
  } else if (props.category === "platforms") {
    options = props.results.map(r => (
      <a href={`/${props.category}/${r.id}`}>
        <li key={r.slug}>
            <img src={r.image_background} alt={r.slug} height="35" width="35" />
          {r.name}
        </li>
      </a>
    ))
  } else if (props.category === "genres") {
    options = props.results.map(r => (
      <a href={`/${props.category}/${r.id}`}>
        <li key={r.slug}>
            <img src={r.image_background} alt={r.slug} height="35" width="35" />
          {r.name}
        </li>
      </a>
    ))
  } else {
    options = props.results.map(r => (
      <a href={`/${props.category}/${r.id}`}>
        <li key={r.slug}>
            <img src={r.image_background} alt={r.slug} height="35" width="35" />
          {r.name}
        </li>
      </a>
    ))
  }
  
  return <ul style={{listStyleType: "none", width: "55%"}}>{options}</ul>
}

export default Suggestions
