import React, { Component } from 'react';
import Story from '../components/Story';
import MyNavbar from '../components/MyNavbar';
import { PulseLoader } from 'react-spinners';

import heart from '../assets/img/heart.png';
import broken_heart from '../assets/img/broken_heart.png';


class ViewStoriesPage extends Component {
    constructor(props){
        super(props);
        this.state={
            stories: [],
            loadingStories: true
        }
    }

componentWillMount(){
    fetch('/getstories', {
      method: 'GET',
      credentials: 'same-origin',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }).then(result => result.json())
    .then(result => {
        this.setState({loadingStories: false});
        if(result){
            this.setState({stories: result.stories})
        }else{
            alert("Error getting stories. Please check your internet connection or try again");
        }
    }).catch((error) => {
      console.log(error);
        // alert("Error getting stories. Please check your internet connection or try again");     
        alert(error)     
    });
}

    render() {
        let spinner = this.state.loadingStories ? <PulseLoader style={styles.loader} color='#c7c7c7' /> : null;

        return (
            <div class='chalkboard'>
                <MyNavbar />
                <div class='container' style={styles.container}>
                    <div class='row'>
                    {spinner}
                        {this.state.stories.map((item, index) => {
                            return(
                                <Story
                                    item={item}
                                    heart={heart}
                                    brokenHeart={broken_heart}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default ViewStoriesPage

const styles = {
    container: {
        paddingTop: 70
    },
    loader: {
    }
}
