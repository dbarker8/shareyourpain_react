import React, { Component } from 'react';
import MyNavbar from '../components/MyNavbar';
import { Redirect } from 'react-router-dom';

class HelpPage extends Component {

    render() {

        return (
            <div>
                <div class='chalkboard'>
                    <MyNavbar />
                    <div class='container' style={styles.container}>
                        <h1 class='lightText text-center'>Get Help</h1>
                        <p class='lightText text-center'>US Suicide Prevention Hotline: 1-800-273-8255</p>
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    textArea: {
        minHeight: 150,
        marginBottom: 10,
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

export default HelpPage;
