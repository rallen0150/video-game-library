import React, { useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import PlatformDesc from './PlatformDesc'
import PlatformImg from './PlatformImage'
import PlatformTopGames from './PlatformTopGames'
// import GameHeaderDesc from './GameHeaderDesc'
import { useParams } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import '../../App.css'
import LoadingScreen from '../loading/Loading'
import SearchSmall from '../search/SearchSmall'

const PlatformDetail = (props) => {
    const { id } = useParams();
    const [data, setData] = useState(null)
    const [dataIsReady, setDataIsReady] = useState(false)
    // const [topgames, setTopGames] = useState(null)
    // const [topgamesIsReady, setTopGamesIsReady] = useState(false)

    const getRawgApi = useCallback(async () => {
        axios.get(`https://rawg.io/api/platforms/${id}?key=${process.env.REACT_APP_RAWG_KEY}`)
          .then(({ data }) => {
            setData(data);
            setDataIsReady(true);
          })
    }, [id])

    useEffect(() => {
        getRawgApi()
    }, [getRawgApi]);


    // const getTopGames = useCallback(async () => {
    //     axios.get(`https://rawg.io/api/games?platforms=${id}&page_size=12`)
    //       .then(({ topgames }) => {
    //         setTopGames(topgames);
    //         setTopGamesIsReady(true);
    //       })
    // }, [id]);

    // useEffect(() => {
    //     getTopGames()
    // }, [getTopGames]);


    // Wait for the data to load, else show message of waiting for response
    if (dataIsReady) {
        return (
            <div>
                <SearchSmall />
                <h1>{data.name}</h1>
                <Container>
                    <Row>
                        <Col xs={6} md={5}>
                            <PlatformImg data={data} height={355} width={475}/>
                        </Col>
                        <Col xs={12} md={7}>
                            <PlatformDesc data={data}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            &nbsp;
                        </Col>
                    </Row>
                    <Row>
                        <Col md={{ span: 8, offset: 2 }}>
                            <h3 className="headerCenter">Top Games</h3>
                        </Col>
                    </Row>
                    <Row>
                        <PlatformTopGames data={data} />
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

export default PlatformDetail
