import React, { useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import GenreDesc from './GenreDesc'
import GenreImg from './GenreImage'
import GenreTopGames from './GenreTopGames'
import { useParams } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import '../../App.css'
import LoadingScreen from '../loading/Loading'
import SearchSmall from '../search/SearchSmall'

const GenreDetail = (props) => {
    const { id } = useParams();
    const [data, setData] = useState(null)
    const [dataIsReady, setDataIsReady] = useState(false)

    const getRawgApi = useCallback(async () => {
        axios.get(`https://rawg.io/api/genres/${id}?key=${process.env.REACT_APP_RAWG_KEY}`)
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
                <SearchSmall />
                <h1>{data.name}</h1>
                <Container>
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

export default GenreDetail
