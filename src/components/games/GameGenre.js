import React from 'react'
import { Button } from 'react-bootstrap'


const GameGenre = (props) => {
    var genres = props.data.genres.map(r => (
        <Button href={`/genres/${r.id}`} variant="outline-secondary" className="nes-btn" style={{ marginRight: "3px", marginTop: "3px" }} size="sm">
            {r.name}
        </Button>
    ))  
    // return <ul style={{listStyleType: "none"}}>{genres}</ul>
    return genres
}

export default GameGenre
