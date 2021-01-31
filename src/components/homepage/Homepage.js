import React, { useState, useEffect, useCallback } from 'react'
import axios from 'axios'
// import { useParams } from 'react-router-dom'
import { Container, Row, Col, Jumbotron } from 'react-bootstrap'
import TrendingGames from './TrendingGames'
import '../../App.css'
import LoadingScreen from '../loading/Loading'
import Search from '../search/Search'

const HomepageDetail = (props) => {
    const [data, setData] = useState(null)
    const [dataIsReady, setDataIsReady] = useState(false)

    var date = new Date();
    var day = String(date.getDate()).padStart(2, '0');
    var month = String(date.getMonth() + 1).padStart(2, '0');
    var year = date.getFullYear();
    var pastYear = date.getFullYear() - 1;
    var date1 = year+"-"+month+"-"+day;
    var date2 = pastYear+"-"+month+"-"+day;

    const getData = useCallback(async () => {
        axios.get(`https://rawg.io/api/games?dates=${date2},${date1}&ordering=-added`)
          .then(({ data }) => {
            setData(data);
            setDataIsReady(true);
          })
    }, [date1, date2]);

    useEffect(() => {
        getData()
    }, [getData]);

    if (dataIsReady) {
        return (
            <div>
                <Jumbotron>
                    <Container className="jumbotron-div">
                        <h1 style={{ textAlign: 'center', color: 'white' }}>Search Video Game</h1>
                        <p style={{ textAlign: 'center', color: 'white' }}>You can search a video game to get the information, images and suggested games relating to the selected game.</p>
                        <Search />
                    </Container>
                </Jumbotron>
                <Container>
                    <Row>
                        <Col><h1 className="headerCenter">Top/Trending Games</h1></Col>
                    </Row>
                    <Row>
                        <TrendingGames data={data} />
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

export default HomepageDetail