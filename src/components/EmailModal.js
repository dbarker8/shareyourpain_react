import React, { Component } from 'react';

class EmailModal extends Component {

    constructor(props){
        super(props);
        this.state={
            email: ''
        }
    }

    submitEmail(){
        fetch('/acceptemail', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: this.state.email
          }),
        }).then(result => {
            this.setState({submitted: true});
          if(result.status==200){ //if request went OK, tell the user
            alert('Success!');
          }else{ //something went wrong
            alert('Sorry, there was an error with submission. Please check your internet connection or try again.');
          }
          this.setState({ email: '' });          

        }).catch((error) => {
          console.log(error);
        });
    }


    render() {
        return (
            <div>
                <div class="modal fade" id="emailModal" tabindex="-1" role="dialog" >
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">Early Access</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                            <p>Sign up below to be notified when our app is live! We will never share your information with anyone.</p>
                                <input class='form-control col-12' type='email' onChange={x => this.setState({ email: x.target.value })} placeholder='email...'/>
                                <br/>
                                <div class='btn btn-primary col-12' data-dismiss="modal" onClick={this.submitEmail.bind(this)}>Submit</div>
                            </div>
                            {/* <div class="modal-footer">
                <a class="btn btn-secondary" href={'mailto:'+this.props.class.professorEmail+'?Subject=Question'} >Email Professor</a>
              </div> */}
                        </div>
                    </div>
                </div>

            </div>
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

export default EmailModal;