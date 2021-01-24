import React from 'react'


const GameStore = (props) => {
    var stores = props.data.stores.map(r => (
        <li key={r.store.slug}>
            <img src={r.store.image_background} alt={r.store.slug} height="35" width="35" />
            {r.store.name}
        </li>
    ))  
    return <ul style={{listStyleType: "none"}}>{stores}</ul>
}

export default GameStore
