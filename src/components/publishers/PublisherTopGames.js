import React, { useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import TopGames from '../topGames/TopGameList'

const PublisherTopGames = (props) => {
    const { id } = useParams();
    const [data, setData] = useState(null)
    const [dataIsReady, setDataIsReady] = useState(false)

    const getTopGamesPublisher = useCallback(async () => {
        axios.get(`https://rawg.io/api/games?publishers=${id}&ordering=-rating&page_size=12&key=${process.env.REACT_APP_RAWG_KEY}`)
          .then(({ data }) => {
            setData(data);
            setDataIsReady(true);
          })
    }, [id])

    useEffect(() => {
        getTopGamesPublisher()
    }, [getTopGamesPublisher]);

    
    if (dataIsReady) {
        return (
            <TopGames data={data} />
        )
    } else {
        return (
            <span>&nbsp;</span>
        )
    }
}

export default PublisherTopGames