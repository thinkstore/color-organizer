import React, {Component} from 'react';
import Star from './Star';

class StarRating extends Component {

    constructor(props){
        super(props)
        this.state = { starsSelected : 0 }
        this.change = this.change.bind(this)
    }

    change(starsSelected){
        this.setState( { starsSelected });
    }

    render() {

        const {totalStars} = this.props;
        const {starsSelected} = this.state;

        return (
            <div>
            <div className="star-rating">
                {[...Array(totalStars)].map( ( n, i ) => 
                    <Star key={i} selected={i< starsSelected } onClick = { () => this.change(i+1) }/>)}
            </div>
            <h4>{starsSelected} of {totalStars} stars</h4>
            </div>
        )
    }
}





export default StarRating;

