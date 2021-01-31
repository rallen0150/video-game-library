import React, { Component } from 'react'
import dateFormat from 'dateformat'
import GameTags from './GameTags'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons'
import StarRatingComponent from 'react-star-rating-component'

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
                <p><b>MetaCritic: </b> 
                    {this.props.data.metacritic == null ? 'No Score' : this.props.data.metacritic+'%'}
                    {this.props.data.metacritic >= 60 ? (
                            <i className="img-span-positive" style={{ paddingLeft: '2px', color: 'green'}}>
                                <FontAwesomeIcon icon={faThumbsUp}/>
                            </i>
                        ) : (
                            <i className={this.props.data.metacritic == null ? "no-score" : "img-span-negative"} style={{ paddingLeft: '2px', color: 'red'}}>
                                <FontAwesomeIcon icon={faThumbsDown}/>
                            </i>
                        )
                    }
                </p>
                <p><b>Rating: </b> 
                <StarRatingComponent 
                    name="game-rating" 
                    starCount={5}
                    value={this.props.data.rating}
                />
                    {/* <Rating 
                        className="dv-star-rating"
                        start={0}
                        end={5}
                        step={1}
                        fractions={100}
                        placeholderRating={this.props.data.rating}
                        readonly={true}
                        emptySymbol="fa fa-star-o"
                        fullSymbol={() => (
                            <FontAwesomeIcon
                                icon={faStar}
                                style={{ color: "rgb(253, 186, 73)" }}
                            />
                        )}
                        renderStarIconHalf={() => (
                            <FontAwesomeIcon
                              icon={faStarHalfAlt}
                              style={{ color: "rgb(253, 186, 73)" }}
                            />
                        )}
                        renderEmptyStarIcon={() => (
                            <FontAwesomeIcon
                              icon={faStarEmpty}
                              style={{ color: "rgb(253, 186, 73)" }}
                            />
                        )}
                    /> */}
                </p>
                <p><b>Website: </b> <a href={this.props.data.website} target="_blank" rel="noreferrer">{this.props.data.website}</a></p>
                <p><b>Tags: </b> <GameTags data={this.props.data}/></p>
            </div>
        )
    }
}

export default GameHeaderDesc