import React, { useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import GameDesc from './GameDesc'
// import GameImg from './GameImage'
import GameHeaderDesc from './GameHeaderDesc'
import GamePlatforms from './GamePlatforms'
import GameStore from './GameStore'
import GameGenre from './GameGenre'
import GameScreenshot from './GameScreenshots'
// import GameTags from './GameTags'
import SuggestedGames from './SuggestedGame'
import { useParams } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import '../../App.css'
import LoadingScreen from '../loading/Loading'
import JumboImg from '../jumbotron/JumboImg'
import SearchSmall from '../search/SearchSmall'

const VideogameDetail = (props) => {
    console.log(props)
    const { id } = useParams();
    const [data, setData] = useState(null)
    const [dataIsReady, setDataIsReady] = useState(false)

    const getRawgApi = useCallback(async () => {
        axios.get(`https://rawg.io/api/games/${id}`)
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
        var hasVideo = (data.clip != null) ? true : false;
        console.log(hasVideo)
        return (
            <div>
                <JumboImg image={data.background_image} alt={data.slug} />
                {/* <input type="text" placeholder="Search Game" size="40" className="search-games-sm"/> */}
                <SearchSmall />
                <div className="title"><span>{data.name}</span></div>
                <Container className="detail-container">
                    <Row>
                        <Col xs={6} md={5}>
                            <div className="game-detail-img">
                                {/* <GameImg data={data} height={300} width={405}/> */}
                                <GameGenre data={data} />
                                <GameHeaderDesc data={data} />
                            </div>
                        </Col>
                        <Col xs={12} md={7}>
                            <div className="detail-desc">
                                <GameDesc data={data}/>
                                <br/>
                                <h4>Systems:</h4>
                                <GamePlatforms data={data} />
                                <br />
                                <h4>Find at: </h4>
                                <GameStore data={data} />
                            </div>
                        </Col>
                    </Row>
                    <Row><Col>&nbsp;</Col></Row>
                    <Row>
                        <Col>
                            {hasVideo ? (
                                <GameScreenshot data={data.slug} video={data.clip.clip}/>
                            ) : (
                                <GameScreenshot data={data.slug}/>
                            )}
                        </Col>
                    </Row>
                    <Row><Col>&nbsp;</Col></Row>
                    <Row>
                        <Col><h3 className="headerCenter">Suggested Games</h3></Col>
                    </Row>
                    <Row>
                        <SuggestedGames data={data} />
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

export default VideogameDetail
