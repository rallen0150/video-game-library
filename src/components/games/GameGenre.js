import React from 'react'


const GameGenre = (props) => {
    var genres = props.data.genres.map(r => (
        <a href={`/genres/${r.id}`}>
            <li key={r.slug}>
                {r.name}
            </li>
        </a>
        
    ))  
    return <ul style={{listStyleType: "none"}}>{genres}</ul>
}

export default GameGenre
