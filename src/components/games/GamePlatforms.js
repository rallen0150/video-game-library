// import { Carousel } from 'bootstrap'
import React from 'react'
import { Button } from 'react-bootstrap'
// import Carousel from 'react-bootstrap'

const GamePlatforms = (props) => {
    var platforms = props.data.platforms.map(r => (
        // <Carousel.Item>
        //     <img 
        //         className="d-block w-100"
        //         src={r.platform.image_background}
        //         alt={r.platform.slug}
        //     />
        //     <Carousel.Caption>
        <Button variant="outline-primary" href={`/platforms/${r.platform.id}`}>{r.platform.name}</Button>
        //     </Carousel.Caption>
        // </Carousel.Item>
        
    ))  
    // return <Card><Card.Body><Card.Title><h1>Platforms</h1></Card.Title><Carousel>{platforms}</Carousel></Card.Body></Card>
    return platforms
}

export default GamePlatforms
