import React from 'react'


const GamePlatforms = (props) => {
    var platforms = props.data.platforms.map(r => (
        <a href={`/platforms/${r.id}`}>
            <li key={r.platform.slug}>
                <img src={r.platform.image_background} alt={r.platform.slug} height="35" width="35" />
                {r.platform.name}
            </li>
        </a>
    ))  
    return <ul style={{listStyleType: "none"}}>{platforms}</ul>
}

export default GamePlatforms
