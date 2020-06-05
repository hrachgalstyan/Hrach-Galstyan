import { Col, Row, Form, FormGroup, Input } from 'reactstrap';
import React, {Component } from 'react';
import { db } from '../Firebase/firebase'
import AOS from 'aos';
import 'aos/dist/aos.css';

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
        e.preventDefault();
        const {name, email, subject, message} = this.state;

        db.collection("Messages").add({
            name: name,
            email: email,
            subject: subject,
            message: message
        })
        .then(function(docRef) {
            var success = document.getElementById("success").style;
            success.display="block";
            setTimeout(function(){success.display = "none"}, 4000);
        })
        .catch(function(error) {
            var danger = document.getElementById("danger").style;
            danger.display="block";
            setTimeout(function(){danger.display = "none"}, 3000);
            console.log(error);
        });
        // reset the fields
        this.setState({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
    }

    componentDidMount(){
        AOS.init({});
    }

    render(){
        const {name, email, subject, message} = this.state;
        return(
            <>
            <div className="d-flex justify-content-center w-100 flex-wrap py-5 bg-white">
                <p data-aos="fade-up" className="contact-title mt-4 w-100">Contact me</p>
                <h5 data-aos="fade-up" className="font-weight-light w-100 text-center py-2">If you have any suggestions for me, please let me know</h5>
                <Form className="px-5 px-sm-0 form mb-4"  onSubmit={this.submitForm}>
                    <div className="alert alert-success text-center" id="success" role="alert" style={{display: "none", borderRadius: '0', background: '#181818', color: 'white', border: '1px solid rgba(112, 112, 112, 0.5)'}}>
                        Thank you for contacting me ․ I will reply to your letter very soon.
                    </div>
                    <div className="alert alert-danger text-center" id="danger" role="alert" style={{display: "none", borderRadius: '0', background: '#181818', color: 'white', border: '1px solid rgba(112, 112, 112, 0.5)'}}>
                        Please try again.
                    </div>
                    <Row form>
                        <Col md={6}>
                            <FormGroup>
                                <Input data-aos="fade-up" type="text" name="name" value={name} onChange={this.handleCHange('name')} placeholder="Name" required />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Input data-aos="fade-up" type="email" name="email" value={email} onChange={this.handleCHange('email')} id="examplePassword" placeholder="Email" required />
                            </FormGroup>
                        </Col>
                    </Row>
                    <FormGroup>
                        <Input data-aos="fade-up" type="text" name="subject" value={subject} onChange={this.handleCHange('subject')} placeholder="Subject" required />
                    </FormGroup>
                    <FormGroup>
                        <Input data-aos="fade-up" type='textarea' name='message' value={message} onChange={this.handleCHange('message')} className="textarea" placeholder="Message..." required></Input>
                    </FormGroup>
                    <button data-aos="fade-up" className="cv-button mx-auto">Send</button>
                </Form>
            </div>
        </>
        );
    }
}

export default Send;
