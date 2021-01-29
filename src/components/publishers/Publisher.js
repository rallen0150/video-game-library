import React, { useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import PublisherDesc from './PublisherDesc.js'
import PublisherImg from './PublisherImage'
import PublisherTopGames from './PublisherTopGames'
import { useParams } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import '../../App.css'

const PublisherDetail = (props) => {
    const { id } = useParams();
    const [data, setData] = useState(null)
    const [dataIsReady, setDataIsReady] = useState(false)

    const getRawgApi = useCallback(async () => {
        axios.get(`https://rawg.io/api/publishers/${id}`)
          .then(({ data }) => {
            setData(data);
            setDataIsReady(true);
          })
    }, [id])

    useEffect(() => {
        getRawgApi()
    }, [getRawgApi]);


    // Wait for the data to load, else show message of waiting for response
    if (dataIsReady) {
        return (
            <Container>
                <Row>
                    <Col><h1>{data.name}</h1></Col>
                </Row>
                <Row>
                    <Col xs={6} md={5}>
                        <PublisherImg data={data} height={355} width={475}/>
                    </Col>
                    <Col xs={12} md={7}>
                        <h3 className="headerCenter">Top Games</h3>
                        <PublisherTopGames data={data}/>
                    </Col>
                </Row>
            </Container>
        )
    } else {
        return (
            <h1 className="headerCenter">Waiting</h1>
        )
    }
    
}

export default PublisherDetail
