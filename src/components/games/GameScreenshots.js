import React, { useState, useEffect, useCallback } from 'react'
import { Card, Carousel } from 'react-bootstrap'
import axios from 'axios'
import ReactPlayer from 'react-player'

const GameScreenshot = (props) => {
    const slug = props.data;
    const video_url = props.video;
    const [data, setData] = useState(null)
    const [dataIsReady, setDataIsReady] = useState(false)

    const getRawgApi = useCallback(async () => {
        axios.get(`https://rawg.io/api/games/${slug}/screenshots`)
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
        var shots = data.results.map(r => (
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={r.image}
                    alt={`screenshot`}
                />
            </Carousel.Item>
        ))
        return <Carousel>
                    {shots}
                    <Carousel.Item>
                        <ReactPlayer url={video_url} controls={true}/>
                    </Carousel.Item>
                </Carousel>
    } else {
        return ""
    }
}

export default GameScreenshot
