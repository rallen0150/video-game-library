import React, { Component } from 'react'

class GenreImg extends Component {
    render() {
        return (
            <img src={this.props.data.image_background} alt={this.props.data.slug} height={this.props.height} width={this.props.width}/>
        )
    }
}

export default GenreImg