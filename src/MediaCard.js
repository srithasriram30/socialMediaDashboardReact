import React, {Component} from 'react';

class MediaCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            logo: '',
            username: '',
            numFollowers: 0,
            change: 0
        }
    }
    render() {
        let imgSrc = `images/icon-facebook.svg`;
        console.log(imgSrc);
        return (
            <div>
                <p>
                    <img src="../images/icon-facebook.svg" alt="facebook icon"/>
                    {this.props.username}
                </p>
                <p>{this.props.numFollowers}</p>
                <p>followers</p>
                <p>{this.props.change} today</p>
            </div>
        );
    }
}

export default MediaCard;