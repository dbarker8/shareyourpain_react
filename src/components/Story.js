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
            <div class='col-12 col-md-6 offset-md-3'>
            {/* <div class='row'> */}
                    <div style={{
                        ...styles.wrapper

                        }} class='row'>
                        <div class='col-1'>
                            <img src={imageSource} style={styles.heart} />
                        </div>
                        <p class='lightText col-11' style={styles.bodyText}>{this.props.item.body}</p>
                    </div>
                {/* </div> */}
            </div>
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
        margin: 0
    },
    heart: {
        margin: 5,
        height: 20,
        width: 20,
        display: 'block'
    },
    wrapper: {
        margin: 40,
        alignItems: 'center',
        flex: 1
    }
}
