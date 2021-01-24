import React, { Component } from 'react'

class PublisherImg extends Component {
    render() {
        return (
            <img src={this.props.data.image_background} alt={this.props.data.slug} height={this.props.height} width={this.props.width}/>
        )
    }
}

export default PublisherImg