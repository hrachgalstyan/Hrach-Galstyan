import { Col, Row, Form, FormGroup, Input } from 'reactstrap';
import React, {Component} from 'react';

class Send extends Component {
    state = {
        name: '',
        email: '',
        subject: '',
        message: '',
    };

    // handle the value
    handleCHange = input => e => {
        this.setState({[input]: e.target.value});
    }

    // when submit btn is clicked
    submitForm = (e) => {
        const {name, email, subject, message} = this.state;
        console.log(this.state);


        // create a new XMLHttpRequest
        var xhr = new XMLHttpRequest();
    
        // get a callback when the server responds
        xhr.addEventListener('load', () => {
            // update the response state and the step
            
            this.setState ({
                emailStatus: xhr.responseText
            });
        });
        // open the request with the verb and the url
        xhr.open('GET', 'https://hrachgalstyan.com/sendemail/index.php?sendto=' + email + 
                                '&name=' + name + '&subject=' + subject + 
                                '&message=' + message, true);
        // send the request
        xhr.send();

        // reset the fields
        this.setState({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
        e.preventDefault();
    }

    render(){
        const {name, email, subject, message} = this.state;
        return(
            <>
            <div className="d-flex justify-content-center w-100 flex-wrap py-5 bg-white">
                <p className="contact-title mt-4 w-100">Contact me</p>
                <h5 className="font-weight-light w-100 text-center py-2">If you have any suggestions for me, please let me know</h5>
                <Form className="px-5 px-sm-0 form mb-4"  onSubmit={this.submitForm}>
                    <Row form>
                        <Col md={6}>
                            <FormGroup>
                                <Input type="text" name="name" value={name} onChange={this.handleCHange('name')} placeholder="Name" />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Input type="email" name="email" value={email} onChange={this.handleCHange('email')} id="examplePassword" placeholder="Email" />
                            </FormGroup>
                        </Col>
                    </Row>
                    <FormGroup>
                        <Input type="text" name="subject" value={subject} onChange={this.handleCHange('subject')} placeholder="Subject"/>
                    </FormGroup>
                    <FormGroup>
                        <Input type='textarea' name='message' value={message} onChange={this.handleCHange('message')} className="textarea" placeholder="Message..."></Input>
                    </FormGroup>
                    <button className="cv-button mx-auto">Send</button>
                </Form>
            </div>
        </>
        );
    }
}

export default Send;
