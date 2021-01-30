import React, { useState, useEffect, useCallback } from 'react'
import { Button } from 'react-bootstrap'
import axios from 'axios'

const GameStore = (props) => {
    const slug = props.data.slug;
    // const { slug } = props.slug;
    const [data, setData] = useState(null)
    const [dataIsReady, setDataIsReady] = useState(false)

    const getRawgApi = useCallback(async () => {
        axios.get(`https://rawg.io/api/games/${slug}`)
          .then(({ data }) => {
            setData(data);
            setDataIsReady(true);
          })
    }, [slug])

    useEffect(() => {
        getRawgApi()
    }, [getRawgApi]);

    if (dataIsReady) {
        var stores = data.stores.map(r => (
            <Button variant="outline-primary" href={r.url} style={{ marginRight: "3px" }} target="_blank">{r.store.name}</Button>
        ))
        return stores
    } else {
        return ""
    }
}

export default GameStore
