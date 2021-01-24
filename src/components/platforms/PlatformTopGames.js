import React, { useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const PlatformTopGames = (props) => {
    const { id } = useParams();
    const [data, setData] = useState(null)
    const [dataIsReady, setDataIsReady] = useState(false)

    const getTopGamesPlatform = useCallback(async () => {
        axios.get(`https://rawg.io/api/games?platforms=${id}&page_size=10`)
          .then(({ data }) => {
            setData(data);
            setDataIsReady(true);
          })
    }, [id])

    useEffect(() => {
        getTopGamesPlatform()
    }, [getTopGamesPlatform]);

    
    // Wait for the data to load, else show message of waiting for response
    if (dataIsReady) {
        var games = data.results.map(r => {
            <li key={r.slug}>
                <img src={r.image_background} alt={r.slug} height="75" width="75" />
                <p>{r.name}</p>
            </li>
        })
        console.log(games);
        return (
            <ul style={{listStyleType: "none"}}>{games}</ul>
        )
    } else {
        return (
            // <h1>Waiting</h1>
            <span>&nbsp;</span>
        )
    }
}

export default PlatformTopGames