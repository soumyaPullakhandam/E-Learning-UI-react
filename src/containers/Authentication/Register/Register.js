import React, {Component} from 'react';
import axios from '../../../axios';
import AlertModal from '../../../hoc/UI/Modal/AlertModal';
import Reg from "../../../components/Authentication/Register/Register";

class Register extends Component {
    state = {
        regData: {
            first_name: '',
            last_name: '',
            username: '',
            email: '',
            password: '',
            phone: '',
            website: '',
            qualification: '',
            biography: '',
            groups: []
        },

        modal: {
            show: false,
            title: '',
            body: '',
            bodyCSS: '',
            size: ''
        },
        error: ''
    }


    handleSubmit(event) {
        event.preventDefault();

        const regObj = {...this.state.regData};
        regObj.username = regObj.email.split('@')[0];
        regObj.website = 'http://' + regObj.website;

        this.setState({
            regData: regObj
        });

        axios.post('/user/', regObj)
            .then(response => {
                this.setState({
                    modal: {
                        show: true,
                        body: 'Registration has been successfully',
                        bodyCSS: 'text-success',
                        title: 'Registration Status'
                    }
                })
            }).catch(error => {
            const errorMsg = Object.keys(error.response.data)
                .map(igKey => {
                    return error.response.data[igKey]
                }).reduce((sum, el) => {
                    return sum + el;
                }, '');

            this.setState({
                modal: {
                    show: true,
                    body: errorMsg,
                    bodyCSS: 'text-error',
                    title: 'Registration Status'
                }
            })
        });
    }

    handleChange = (event) => {

        const name = event.target.name;
        const value = event.target.value;
        const data = {...this.state.regData};

        data[name] = value;

        this.setState({
            regData: data
        });
    };

    handleGroupChange = (event) => {

        const value = event.target.dataset.groups;
        const userType = parseInt(value);
        const gr = [];
        gr.push(userType);

        const data = {...this.state.regData};
        data['groups'] = gr

        this.setState({regData: data})

    }

    onModalClose = () => {
        this.setState({modal: {show: false}})
    }

    render() {

        let reg = (<Reg first_name={this.state.regData.first_name}
                        last_name={this.state.regData.last_name}
                        username={this.state.regData.username}
                        email={this.state.regData.email}
                        password={this.state.regData.password}
                        phone={this.state.regData.phone}
                        website={this.state.regData.website}
                        qualification={this.state.regData.qualification}
                        biography={this.state.regData.biography}
                        groups={this.state.regData.groups}
                        onSubmit={(evt) => this.handleSubmit(evt)}
                        change={(evt) => this.handleChange(evt)}
                        groupsChange={(evt) => this.handleGroupChange(evt)}
        />)

        return (
            <AlertModal show={this.state.modal.show}
                        onModalClose={this.onModalClose}
                        body={this.state.modal.body}
                        bodyCSS={this.state.modal.bodyCSS}
                        title={this.state.modal.title}
                        submitVisiblity={'invisible'}
                        closeVisiblity={'visible'}
                        footerVisibility={'visible'}
                        size={'sm'}>
                {reg}
            </AlertModal>

        )
    }
}

export default Register