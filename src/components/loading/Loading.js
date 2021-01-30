import React, { Component } from 'react'
import './loading.css'

class LoadingScreen extends Component {
    render() {
        return (
            <div class="loading">
                <div class="pills"></div>
                <div class="paco">
                    <div class="head"></div>
                </div>
            </div>
        )
    }
}

export default LoadingScreen