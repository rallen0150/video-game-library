import React from 'react'
import { Button } from 'react-bootstrap'
import '../../App.css'


const GameTags = (props) => {
    var tags = props.data.tags.map(r => (
        <Button variant="outline-secondary" style={{ marginRight: "3px", marginTop: "3px", marginBottom: "3px" }} className="tagBtn" size="sm">
            <span style={{ fontSize: "12px" }}>{r.name}</span>
        </Button>
    ))  
    // return <ul style={{listStyleType: "none"}}>{genres}</ul>
    return tags
}

export default GameTags