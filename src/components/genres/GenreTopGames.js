import React, { useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import TopGames from '../topGames/TopGameList'

const GenreTopGames = (props) => {
    const { id } = useParams();
    const [data, setData] = useState(null)
    const [dataIsReady, setDataIsReady] = useState(false)

    const getTopGamesGenres = useCallback(async () => {
        axios.get(`https://rawg.io/api/games?genres=${id}&ordering=-rating&page_size=12`)
          .then(({ data }) => {
            setData(data);
            setDataIsReady(true);
          })
    }, [id])

    useEffect(() => {
        getTopGamesGenres()
    }, [getTopGamesGenres]);

    
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

export default GenreTopGames