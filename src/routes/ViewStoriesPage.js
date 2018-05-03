import React, { Component } from 'react';
import Story from '../components/Story';
import MyNavbar from '../components/MyNavbar';
import { PulseLoader } from 'react-spinners';
import { connect } from 'react-redux';
import { updateLoggedInUser, updateSuicideModal } from '../redux/actions';

import heart from '../assets/img/heart.png';
import broken_heart from '../assets/img/broken_heart.png';

class ViewStoriesPage extends Component {
    constructor(props){
        super(props);
        this.state={
            stories: [],
            loadingStories: true,
            fadeClass: 'fadeanim',
            showSuicideModal: true
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

componentDidMount(){
    setTimeout(() => this.setState({fadeClass: 'fadeanim show'}), 50);    
}

    render() {
        let spinner = this.state.loadingStories ? <PulseLoader style={styles.loader} color='#c7c7c7' /> : null;

        return (
            <div class='chalkboard'>
                <MyNavbar />
                <div class={'container '+this.state.fadeClass} style={styles.container}>
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

const mapStateToProps = state => ({
    loggedInUser: state.loggedInUser,
    suicideModal: state.suicideModal
})

const mapActionsToProps = {
    onUpdateLoggedInUser: updateLoggedInUser, //to prevent variable collisions with naming, use on
    onSuicideModal: updateSuicideModal
}

export default connect(mapStateToProps, mapActionsToProps)(ViewStoriesPage);

const styles = {
    container: {
        paddingTop: 70
    },
    loader: {
    }
}
