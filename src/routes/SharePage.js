import React, { Component } from 'react';
import MyNavbar from '../components/MyNavbar';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateLoggedInUser, updateSuicideModal } from '../redux/actions';
import SuicideModal from '../components/SuicideModal';

class SharePage extends Component {
    constructor(props){
        super(props);
        this.state={
            storyText: '',
            submitted: false,
            storyType: '',
            submitting: false,
            fadeClass: 'fadeanim',
            showSuicideModal: false,
            alreadyShownSuicideModal: false
        }
    }

    componentDidMount(){
        setTimeout(() => this.setState({fadeClass: 'fadeanim show'}), 50);
    }

    handleTextChange(x){
        this.setState({ storyText: x.target.value });
        if(this.suicide(x.target.value) & !this.state.alreadyShownSuicideModal){
            this.setState({showSuicideModal: true, alreadyShownSuicideModal: true});
            setTimeout(() => {
                this.setState({showSuicideModal: false});
            }, 200);
        }
    }

    //returns true if typed message is deemed suicidal
    suicide(x){
        let suicideVal=false;
        let suicideWords = ['suicide', 'kill myself', 'i want to die', 'suicidal'];
        suicideWords.forEach((item, index) => {
            if(x.toLowerCase().indexOf(item)>-1){
                suicideVal=true
            }
        })
        return suicideVal
    }

    handleSubmitStory(){
        if(this.state.submitting){ return };
        this.setState({submitting: true});
        let randomWidth = Math.floor(Math.random() * Math.floor(20)) + 70;
        let storyStyle = JSON.stringify({
            tiltAngle: Math.floor(Math.random() * Math.floor(20))-10, //int between -10 and 10
            randomMargin: Math.floor(Math.random() * Math.floor(20))+40, //int between 5 and 25
            randomWidth: randomWidth,
            randomFontSize: Math.floor(Math.random() * Math.floor(6)) + 16,
            leftBoxWidth: Math.floor(Math.random() * Math.floor(100-randomWidth)), //move so they arent aligned on left always
        });

        fetch('/enterstory', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            storyBody: this.state.storyText,
            color: null, 
            font: null,
            type: this.state.storyType,
            style: storyStyle
          }),
        }).then(result => {
          this.setState({submitted: true});
          if(result.status==200){ //if request went OK, tell the user
            // alert('Your story has been submitted.');
          }else{ //something went wrong
            alert('Story was not submitted. Please check your internet connection, or try again');
          }
          this.setState({ storyText: '' });       

        }).catch((error) => {
          console.log(error);
        });
    }

    render() {
        let buttonContent = this.state.submitting ? <span>...</span> : <span>Share</span>;

        let middle =  this.state.storyType=='' ? 
            <div style={{marginTop: '20vh'}} class={this.state.fadeClass}>
                <div style={styles.shareButton} class='col-12 col-md-4 offset-md-4' onClick={() => this.setState({storyType: 'pain'})}>
                    <img class='mx-auto' src={require('../assets/img/broken_heart.png')} style={styles.heart} />
                    <h4 style={styles.shareButtonTitle}>Share Your Pain</h4>
                </div>
                <div style={{height:20}}></div>
                <div style={styles.shareButton} class='col-12 col-md-4 offset-md-4' onClick={() => this.setState({storyType: 'hope'})}>
                    <img class='mx-auto' src={require('../assets/img/heart.png')} style={styles.heart} />
                    <h4 style={styles.shareButtonTitle}>Share Hope</h4>
                </div>
            </div>
            :
            <div class={this.state.storyType=='' ? 'fadeanim' : this.state.fadeClass}>
                <h1 class='lightText text-center' >Share {this.state.storyType=='pain' ? 'your pain': 'hope'}</h1>
                <p class='lightText text-center' >Don't pause, dont hesitate. Share something...</p>
                <textarea class='form-control col-12 col-md-6 mx-auto' style={styles.textArea} value={this.state.storyText} onChange={this.handleTextChange.bind(this)} />
                <button class='btn btn-light col-12 col-md-6 offset-md-3' onClick={this.handleSubmitStory.bind(this)}>{buttonContent}</button>
            </div>;

        return (
            this.state.submitted ? <Redirect to="/stories" /> :
            <div class='chalkboard'>
                <MyNavbar/>
                <SuicideModal show={this.state.showSuicideModal} />                
                <div class='container mx-auto' style={styles.container}>
                    {middle}
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
    },
    shareButton: {
        alignItems: 'center',
        paddingTop: 40,
        cursor: 'pointer'
    },
    shareButtonTitle: {
        color: '#f7f7f7',
        textAlign: 'center'
    },
    heart: {
        height: 30,
        display: 'block'

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

export default connect(mapStateToProps, mapActionsToProps)(SharePage);