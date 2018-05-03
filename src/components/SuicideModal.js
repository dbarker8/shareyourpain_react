import React, { Component } from 'react';
import $ from 'jquery';
import '../../node_modules/bootstrap/dist/js/bootstrap'

class SuicideModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentWillUpdate(){
        if(this.props.show)
            $('#suicideModal').modal('show');
    }


    render() {
        return (
            // <div>
                <div class="modal fade" tabindex="-1" role="dialog" id='suicideModal'>
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title"></h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <p>Please consider calling 1-800-273-8255, we would love to talk to you</p>
                            </div>
                            {/* <div class="modal-footer">
                <a class="btn btn-secondary" href={'mailto:'+this.props.class.professorEmail+'?Subject=Question'} >Email Professor</a>
              </div> */}
                        </div>
                    </div>
                </div>

            // </div>
        );
    }
}

const styles = {
    profileText: {
        // textAlign: 'center'
    },
    icon: {
        marginRight: 10,
    }
}

export default SuicideModal;