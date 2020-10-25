import React from 'react'


const Suggestions = (props) => {
  const options = props.results.map(r => (
    <a href={`/videogame/${r.id}`}>
      <li key={r.slug}>
          <img src={r.background_image} alt={r.slug} height="35" width="35" />
        {r.name}
      </li>
    </a>
  ))
  return <ul style={{listStyleType: "none"}}>{options}</ul>
}

export default Suggestions
