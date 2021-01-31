import React, { useState, useEffect, useCallback } from 'react'
import { Carousel } from 'react-bootstrap'
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
        var shots = "";
        shots = data.results.map(r => (
            <Carousel.Item>
                <img
                    className="d-block w-100 h-50"
                    src={r.image}
                    alt={`screenshot`}
                />
            </Carousel.Item>
        ))
        if (shots.length > 0) {
            return <Carousel>
                        {shots}
                        {video_url !== "" && video_url != null && 
                            <Carousel.Item className="game-video" >
                                <ReactPlayer url={video_url} controls={true}/>
                            </Carousel.Item>
                        }
                    </Carousel>
        } else {
            return ""
        }
    } else {
        return ""
    }
}

export default GameScreenshot
