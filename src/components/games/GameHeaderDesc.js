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
            let begin = `<a href='/publishers/${this.props.data.publishers[x].id}'>`;
            if (x > 0) {
                begin = `, <a href='/publishers/${this.props.data.publishers[x].id}'>`;
            }
            let end = "</a>";
            publishers += begin+this.props.data.publishers[x].name+end;
        }
        const released_date = dateFormat(this.props.data.released, "mmmm dS, yyyy")
        return (
            <div>
                <p><b>Released: </b> {released_date}</p>
                <p><b>Developers: </b> {developers}</p>
                <p><b>Publishers: </b> <span dangerouslySetInnerHTML={{ __html: publishers }}></span></p>
                <p><b>MetaCritic: </b> {this.props.data.metacritic}</p>
                <p><b>Rating: </b> {this.props.data.rating}/5</p>
                <p><b>Website: </b> <a href={this.props.data.website} target="_blank">{this.props.data.website}</a></p>
            </div>
        )
    }
}

export default GameHeaderDesc