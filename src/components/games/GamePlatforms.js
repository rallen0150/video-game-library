// import { Carousel } from 'bootstrap'
import React from 'react'
import { Button } from 'react-bootstrap'
// import Carousel from 'react-bootstrap'

const GamePlatforms = (props) => {
    var platforms = props.data.platforms.map(r => (
        <Button variant="outline-primary" href={`/platforms/${r.platform.id}`} style={{ marginRight: "3px" }}>{r.platform.name}</Button>
    ))  
    return platforms
}

export default GamePlatforms
