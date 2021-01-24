import React, { Component } from 'react'

class GameImg extends Component {
    render() {
        return (
            <img src={this.props.data.background_image} alt={this.props.data.slug} height={this.props.height} width={this.props.width}/>
        )
    }
}

export default GameImg