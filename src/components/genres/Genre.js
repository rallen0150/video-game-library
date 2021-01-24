import React, { useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import GenreDesc from './GenreDesc'
import GenreImg from './GenreImage'
import { useParams } from 'react-router-dom'

const GenreDetail = (props) => {
    const { id } = useParams();
    const [data, setData] = useState(null)
    const [dataIsReady, setDataIsReady] = useState(false)

    const getRawgApi = useCallback(async () => {
        axios.get(`https://rawg.io/api/genres/${id}`)
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
                    <div className="genre-detail-img" style={{ float: "left", width: "30%" }}>
                        <GenreImg data={data} height={275} width={375}/>
                    </div>
                    <div className="genre-detail-desc" style={{ width: "65%", paddingLeft: "385px" }}>
                        <GenreDesc data={data}/>
                    </div>
                </div>
                <div>
                    <h3>Add in Top Games and other stuff</h3>
                </div>
                
            </div>
        )
    } else {
        return (
            <h1>Waiting</h1>
        )
    }
    
}

export default GenreDetail
