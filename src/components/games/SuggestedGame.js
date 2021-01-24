import React, { useState, useEffect, useCallback } from 'react'
import { Button, Card, Col } from 'react-bootstrap'
import axios from 'axios'

const SuggestedGames = (props) => {
    const slug = props.data.slug;
    const [data, setData] = useState(null)
    const [dataIsReady, setDataIsReady] = useState(false)

    const getRawgApi = useCallback(async () => {
        axios.get(`https://rawg.io/api/games/${slug}/suggested`)
          .then(({ data }) => {
            setData(data);
            setDataIsReady(true);
          })
    }, [slug])

    useEffect(() => {
        getRawgApi()
    }, [getRawgApi]);

    if (dataIsReady) {
        console.log(data)
        var stores = data.results.map(r => (
            <Col md={4}>
                <Card>
                    <Card.Img variant="top" src={r.background_image} />
                    <Card.Body>
                        <Card.Title><a href={`/games/${r.id}`}>{r.name}</a></Card.Title>
                        <Card.Text>
                            <p dangerouslySetInnerHTML={{ __html: r.short_description }} style={{ height: "100px", overflow: "scroll" }}></p>
                            <p>{r.rating}/{r.rating_top}</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        ))
        return stores
    } else {
        return ""
    }
}

export default SuggestedGames
