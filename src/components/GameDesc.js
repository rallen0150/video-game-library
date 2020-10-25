import React, { Component } from 'react'

class GameDesc extends Component {
    render() {
        return (
            <div dangerouslySetInnerHTML={{ __html: this.props.data.description }}></div>
        )
    }
}

export default GameDesc