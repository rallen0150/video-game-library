import React, { useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import GenreDesc from './GenreDesc'
import GenreImg from './GenreImage'
import GenreTopGames from './GenreTopGames'
import { useParams } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import '../../App.css'

const GenreDetail = (props) => {
    const { id } = useParams();
    const [data, setData] = useState(null)
    const [dataIsReady, setDataIsReady] = useState(false)

    const getRawgApi = useCallback(async () => {
        axios.get(`https://rawg.io/api/genres/${id}`)
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
                        <GenreImg data={data} height={355} width={475}/>
                    </Col>
                    <Col xs={12} md={7}>
                        <GenreDesc data={data}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        &nbsp;
                    </Col>
                </Row>
                <Row>
                    <Col><h3 className="headerCenter">Top Games</h3></Col>
                </Row>
                <Row>
                    <GenreTopGames data={data} />
                </Row>
            </Container>
        )
    } else {
        return (
            <h1 className="headerCenter">Waiting</h1>
        )
    }
    
}

export default GenreDetail
