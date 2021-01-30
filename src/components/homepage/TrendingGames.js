import React from 'react'
import { Card, Col } from 'react-bootstrap'
import '../../App.css'

const TrendingGames = (props) => {
    console.log(props)
    var trendingGames = props.data.results.map(r => (
        <Col md={3}>
            <a href={`/games/${r.id}`}>
                <Card className="d-block h-100 mainCard">
                    <Card.Img variant="top" src={r.background_image !== null ? r.background_image : '/images/image-not-found.jpg'} style={{ height: "60%" }} />
                    <Card.Body>
                        <Card.Title>{r.name}</Card.Title>
                        <Card.Text>
                            <p>{r.rating}/5</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </a>
        </Col>
    ))  
    return trendingGames
}

export default TrendingGames