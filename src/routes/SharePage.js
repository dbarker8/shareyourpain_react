import React, { Component } from 'react';
import MyNavbar from '../components/MyNavbar';
import { Redirect } from 'react-router-dom';

class SharePage extends Component {
    constructor(props){
        super(props);
        this.state={
            storyText: '',
            submitted: false
        }
    }

    handleSubmitStory(){

        //TODO implement custom story styles. copy from mobile

        fetch('https://shareyourpain.herokuapp.com/enterstory', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            storyBody: this.state.storyText,
            // color: this.state.selectedColor, 
            // font: this.state.selectedFont,
            // type: this.props.navigation.state.params.storyType,
            // style: storyStyle
          }),
        }).then(result => {
            this.setState({submitted: true});
          if(result.status==200){ //if request went OK, tell the user
            alert('Your story has been submitted.');
          }else{ //something went wrong
            alert('Story was not submitted. Please check your internet connection, or try again');
          }
          this.setState({ storyText: '' });          

        }).catch((error) => {
          console.log(error);
        });
    }

    render() {
        return (
            this.state.submitted ? <Redirect to="/stories" /> :
            <div class='chalkboard'>
                <MyNavbar/>
                <div class='container mx-auto' style={styles.container}>
                    <h1 class='lightText text-center' >Share</h1>
                    <p class='lightText text-center' >some text here...</p>
                    <textarea class='form-control col-12 col-md-6 mx-auto' style={styles.textArea} value={this.state.storyText} onChange={x => this.setState({ storyText: x.target.value })} />
                    <button class='btn btn-light col-12 col-md-6 offset-md-3' onClick={this.handleSubmitStory.bind(this)}>Share</button>
                </div>
            </div>
        );
    }
}

const styles = {
    textArea: {
        minHeight: 150,
        marginBottom:10,
        backgroundColor: '#f5f5f5'
    },
    container: {
        paddingTop: 70
    }
}

export default SharePage;
