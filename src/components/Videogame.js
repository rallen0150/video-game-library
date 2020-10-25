import React, { useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import GameDesc from './GameDesc'
import GameImg from './GameImage'
import GameHeaderDesc from './GameHeaderDesc'
import { useParams } from 'react-router-dom'

const VideogameDetail = (props) => {
    const { id } = useParams();
    const [data, setData] = useState(null)
    const [dataIsReady, setDataIsReady] = useState(false)
    const [archiveIdentifier, setArchiveIdentifier] = useState(null)
    const [archiveOfferAvailable, setArchiveOfferAvailable] = useState(false)
    const [oldgameshelfIdentifier, setOldgameshelfIdentifier] = useState(null)
    const [oldgameshelfOfferAvailable, setOldgameshelfOfferAvailable] = useState(false)
    const [snesnowIdentifier, setSnesnowIdentifier] = useState(null)
    const [snesnowOfferAvailable, setSnesnowOfferAvailable] = useState(false)

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
        return (
            <div>
                {/* <h1>HEY {data.name}</h1>
                <br></br>
                <h3>I NEED TO ADD COMPONENTS FOR THE DIFFERENT INFO HERE</h3> */}
                <h1>{data.name}</h1>
                <div>
                    <div className="game-detail-img" style={{ float: "left", width: "30%" }}>
                        <GameImg data={data} height={275} width={375}/>
                        <GameHeaderDesc data={data} />
                    </div>
                    <div className="game-detail-desc" style={{ width: "65%", paddingLeft: "385px" }}>
                        <GameDesc data={data}/>
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


export default VideogameDetail
