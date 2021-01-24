import React, { useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import PlatformDesc from './PlatformDesc'
import PlatformImg from './PlatformImage'
import PlatformTopGames from './PlatformTopGames'
// import GameHeaderDesc from './GameHeaderDesc'
import { useParams } from 'react-router-dom'

const PlatformDetail = (props) => {
    const { id } = useParams();
    const [data, setData] = useState(null)
    const [dataIsReady, setDataIsReady] = useState(false)
    const [topgames, setTopGames] = useState(null)
    const [topgamesIsReady, setTopGamesIsReady] = useState(false)

    const getRawgApi = useCallback(async () => {
        axios.get(`https://rawg.io/api/platforms/${id}`)
          .then(({ data }) => {
            setData(data);
            setDataIsReady(true);
          })
    }, [id])

    useEffect(() => {
        getRawgApi()
    }, [getRawgApi]);


    const getTopGames = useCallback(async () => {
        axios.get(`https://rawg.io/api/games?platforms=${id}&page_size=10`)
          .then(({ topgames }) => {
            setTopGames(topgames);
            setTopGamesIsReady(true);
          })
    }, [id]);

    useEffect(() => {
        getTopGames()
    }, [getTopGames]);


    // Wait for the data to load, else show message of waiting for response
    if (dataIsReady) {
        return (
            <div>
                {/* <h1>HEY {data.name}</h1>
                <br></br>
                <h3>I NEED TO ADD COMPONENTS FOR THE DIFFERENT INFO HERE</h3> */}
                <h1>{data.name}</h1>
                <div>
                    <div className="platform-detail-img" style={{ float: "left", width: "30%" }}>
                        <PlatformImg data={data} height={275} width={375}/>
                    </div>
                    <div className="platform-detail-desc" style={{ width: "65%", paddingLeft: "385px" }}>
                        <PlatformDesc data={data}/>
                    </div>
                </div>
                <div>
                    <h3>Add in Top Games and other stuff</h3>
                    <div className="platform-detail-topgames">
                        <p>Top 10 Games (not working yet)</p>
                        <PlatformTopGames data={data} />
                    </div>
                </div>
                
            </div>
        )
    } else {
        return (
            <h1>Waiting</h1>
        )
    }
    
}

export default PlatformDetail
