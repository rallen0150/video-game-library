import React from 'react'
import { Card, Col } from 'react-bootstrap'
import '../../App.css'
import GameGenre from '../games/GameGenre'

const TrendingGames = (props) => {
    console.log(props)
    var trendingGames = props.data.results.map(r => (
        <Col md={6}>
            <a href={`/games/${r.id}`}>
                <Card className="d-block h-100 mainCard">
                    <Card.Img variant="top" src={r.background_image} style={{ height: "60%" }} />
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