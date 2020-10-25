import React, { Component } from 'react'
import dateFormat from 'dateformat'

class GameHeaderDesc extends Component {
    render() {
        let developers = "";
        for (let x = 0; x < this.props.data.developers.length; x++) {
            let begin = "";
            if (x > 0) {
                begin = ", ";
            }
            developers += begin+this.props.data.developers[x].name;
        }
        let publishers = "";
        for (let x = 0; x < this.props.data.publishers.length; x++) {
            let begin = "";
            if (x > 0) {
                begin = ", ";
            }
            publishers += begin+this.props.data.publishers[x].name;
        }
        const released_date = dateFormat(this.props.data.released, "mmmm dS, yyyy")
        return (
            <div>
                <p><b>Released: </b> {released_date}</p>
                <p><b>Developers: </b> {developers}</p>
                <p><b>Publishers: </b> {publishers}</p>
                <p><b>MetaCritic: </b> {this.props.data.metacritic}</p>
                <p><b>Rating: </b> {this.props.data.rating}/{this.props.data.rating_top}</p>
                <p><b>Website: </b> <a href={this.props.data.website}>{this.props.data.website}</a></p>
            </div>
        )
    }
}

export default GameHeaderDesc