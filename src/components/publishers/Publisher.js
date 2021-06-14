import React, { useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import PublisherDesc from './PublisherDesc.js'
import PublisherImg from './PublisherImage'
import PublisherTopGames from './PublisherTopGames'
import { useParams } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import '../../App.css'
import LoadingScreen from '../loading/Loading'
import SearchSmall from '../search/SearchSmall'

const PublisherDetail = (props) => {
    const { id } = useParams();
    const [data, setData] = useState(null)
    const [dataIsReady, setDataIsReady] = useState(false)

    const getRawgApi = useCallback(async () => {
        axios.get(`https://rawg.io/api/publishers/${id}?key=${process.env.REACT_APP_RAWG_KEY}`)
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
            <div>
                <h1>{data.name}</h1>
                <SearchSmall />
                <Container>
                    <Row>
                        <Col xs={6} md={5}>
                            <PublisherImg data={data} height={355} width={475}/>
                        </Col>
                        <Col xs={12} md={7}>
                            <PublisherDesc data={data} />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h3 className="headerCenter">Top Games</h3>
                        </Col>
                    </Row>
                    <Row>
                        <PublisherTopGames data={data}/>
                    </Row>
                </Container>
            </div>
        )
    } else {
        return (
            <Container>
                <LoadingScreen />
            </Container>
        )
    }
    
}

export default PublisherDetail
