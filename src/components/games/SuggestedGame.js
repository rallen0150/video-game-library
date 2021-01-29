import React, { useState, useEffect, useCallback } from 'react'
import { Card, Col } from 'react-bootstrap'
import axios from 'axios'
import '../../App.css'

const SuggestedGames = (props) => {
    const slug = props.data.slug;
    const [data, setData] = useState(null)
    const [dataIsReady, setDataIsReady] = useState(false)

    const getRawgApi = useCallback(async () => {
        axios.get(`https://rawg.io/api/games/${slug}/suggested?page_size=12`)
          .then(({ data }) => {
            setData(data);
            setDataIsReady(true);
          })
    }, [slug])

    useEffect(() => {
        getRawgApi()
    }, [getRawgApi]);

    if (dataIsReady) {
        // console.log(data)
        var stores = data.results.map(r => (
            <Col md={4}>
                <a  href={`/games/${r.id}`}>
                    <Card className="d-block h-100">
                        <Card.Img variant="top" src={r.background_image} style={{ height: "45%" }} />
                        <Card.Body>
                            <Card.Title><a href={`/games/${r.id}`}>{r.name}</a></Card.Title>
                            <Card.Text>
                                <div className="h-100" style={{ maxHeight: "180px", overflow: "scroll" }}>
                                    <p dangerouslySetInnerHTML={{ __html: r.short_description }}></p>
                                    <p>{r.rating}/5</p>
                                </div>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </a>
            </Col>
        ))
        return stores
    } else {
        return ""
    }
}

export default SuggestedGames
