import React, { Component } from 'react';
import Story from '../components/Story';
import MyNavbar from '../components/MyNavbar';

import heart from '../assets/img/heart.png';
import broken_heart from '../assets/img/broken_heart.png';

const testStories = [
    { body: 'asd ad asd asdhjkas kjdha fjkasdhf auisdfhu hudsafui asiudfhuiasdufi asudihf asiudfgaguisdfuigasd' },
    { body: 'asd ad asd asdhjkas kjdha fjkasdhf auisdfhu hudsafui asiudfhuiasdufi asudihf asiudfgaguisdfuigasd' },
    { body: 'asd ad asd asdhjkas kjdha fjkasdhf auisdfhu hudsafui asiudfhuiasdufi asudihf asiudfgaguisdfuigasd' },
    { body: 'asd ad asd asdhjkas kjdha fjkasdhf auisdfhu hudsafui asiudfhuiasdufi asudihf asiudfgaguisdfuigasd' },
    { body: 'asd ad asd asdhjkas kjdha fjkasdhf auisdfhu hudsafui asiudfhuiasdufi asudihf asiudfgaguisdfuigasd' },
    { body: 'asd ad asd asdhjkas kjdha fjkasdhf auisdfhu hudsafui asiudfhuiasdufi asudihf asiudfgaguisdfuigasd' },
    {body: 'asd ad asd asdhjkas kjdha fjkasdhf auisdfhu hudsafui asiudfhuiasdufi asudihf asiudfgaguisdfuigasd'},
]

class ViewStoriesPage extends Component {
    constructor(props){
        super(props);
        this.state={
            stories: testStories
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
        return (
            <div class='chalkboard'>
                <MyNavbar />
                <div class='container' style={styles.container}>
                    <div class='row'>
                        {/* <h1 class='lightText'>ViewStoriesPage</h1> */}
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
    }
}
