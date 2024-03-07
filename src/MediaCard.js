import React, {Component} from 'react';
import './MediaCard.css'

class MediaCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            logo: '',
            username: '',
            numFollowers: '',
            change: ''
        }
    }
    render() {
        let imgSrc = `images/icon-${this.props.logo}.svg`;
        let altText = `${this.props.logo} icon`
        return (
            <div className="card">
                <p>
                    <img src={imgSrc} alt={altText} />
                    {this.props.username}
                </p>
                <p className="followers">{this.props.numFollowers}</p>
                <p>followers</p>
                <p>{this.props.change} today</p>
            </div>
        );
    }
}

export default MediaCard;