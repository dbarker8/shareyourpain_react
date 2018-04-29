import React from 'react'

class Story extends React.PureComponent {


    handleStoryPress() {
        alert('story pressed')
    }

    render() {
        let imageSource = this.props.item.type == 'hope' ?
            this.props.heart : this.props.brokenHeart;

        // let customStyle = JSON.parse(this.props.item.style);

        return (
            <p class='lightText' style={styles.bodyText}>{this.props.item.body}</p>
        )
    }
}

export default Story

const styles = {
    mainContainer: {
        flexDirection: 'row',
        // width: '100%',
        minHeight: 100
    },
    bodyText: {
        marginTop: 40
    },
    heart: {
        margin: 5,
        height: 20,
        width: 20
    }
}
