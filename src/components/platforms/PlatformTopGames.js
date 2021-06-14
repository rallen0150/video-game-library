import React, { useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import TopGames from '../topGames/TopGameList'

const PlatformTopGames = (props) => {
    const { id } = useParams();
    const [data, setData] = useState(null)
    const [dataIsReady, setDataIsReady] = useState(false)

    const getTopGamesPlatform = useCallback(async () => {
        axios.get(`https://rawg.io/api/games?platforms=${id}&ordering=-rating&page_size=12&key=${process.env.REACT_APP_RAWG_KEY}`)
          .then(({ data }) => {
            setData(data);
            setDataIsReady(true);
          })
    }, [id])

    useEffect(() => {
        getTopGamesPlatform()
    }, [getTopGamesPlatform]);

    
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

export default PlatformTopGames