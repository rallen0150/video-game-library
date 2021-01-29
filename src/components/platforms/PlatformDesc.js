import React, { Component } from 'react'

class PlatformDesc extends Component {
    render() {
        return (
            <div className="detail-desc" dangerouslySetInnerHTML={{ __html: this.props.data.description }}></div>
        )
    }
}

export default PlatformDesc