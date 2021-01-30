import React, { Component } from 'react'

class GameImg extends Component {
    render() {
        return (
            <img src={this.props.data.background_image !== null ? this.props.data.background_image : '/images/image-not-found.jpg'} alt={this.props.data.slug} height={this.props.height} width={this.props.width}/>
        )
    }
}

export default GameImg