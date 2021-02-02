import React from 'react'
import { Card, Col } from 'react-bootstrap'
import '../../App.css'

const TopGames = (props) => {
    var topGames = props.data.results.map(r => (
        <Col md={4}>
            <a href={`/games/${r.id}`}>
                <Card className="d-block h-100">
                    <Card.Img variant="top" src={r.background_image !== null ? r.background_image : '/images/image-not-found.jpg'} style={{ height: "60%" }} />
                    <Card.Body>
                        <Card.Title><a href={`/games/${r.id}`}>{r.name}</a></Card.Title>
                        <Card.Text>
                            {/* <p dangerouslySetInnerHTML={{ __html: r.short_description }} style={{ height: "100px", overflowY: "scroll" }}></p> */}
                            <p>{r.rating}/5</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </a>
        </Col>
    ))  
    return topGames
}

export default TopGames