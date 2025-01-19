import React, { Component } from 'react'

class Myform extends Component {
    state = {
        form: {
            first_name: '',
            last_name: '',
            email: '',
            isEdit: false
        },
        btnName: "Save",
        btnClass: "ui primary button submit-button"
    }

    isEmpty(obj) {
        return Object.entries(obj).length === 0 && obj.constructor === Object
    }

    componentDidUpdate(prevProps) {
        if(prevProps !== this.props && !this.isEmpty(this.props.customer)) {
            this.setState({
                form: {...this.props.customer, isEdit: true},
                btnName: "Update",
                btnClass: "ui orange button submit-button"
            })
            // console.log('update')
        }
    }

    handleChange = event => {
        const { name, value } = event.target
        let form = this.state.form
        form[name] = value
        this.setState({ form })
    }

    onFormSubmit = (event) => {
        event.preventDefault()

        if(this.formValidation()) {
            // console.log('ready to create')
            // send form data to app
            this.props.onFormSubmit(this.state.form)
        }

        this.clearFormFields()
    }

    formValidation = () => {
        // first name
        if(document.getElementsByName("first_name")[0].value === "") {
            alert('enter first name')
            return false
        }

        // last name
        if(document.getElementsByName("last_name")[0].value === "") {
            alert('enter last name')
            return false
        }

        // email
        if(document.getElementsByName("email")[0].value === "") {
            alert('enter email')
            return false
        }

        return true
    }

    clearFormFields = () => {
        // change form state
        this.setState({
            form: {
                first_name: '',
                last_name: '',
                email: '',
                isEdit: false
            }
        })

        // change button to save after update
        this.setState({
            btnName: "Save",
            btnClass: "ui primary button submit-button"
        })

        // clear form fields
        document.querySelector(".form").reset()
    }

    render() {
        return(
            <form className='ui form'>
                <div className='fields'>
                    <div className='four wide field'>
                        <label>Email</label>
                        <input 
                        type='text' 
                        name='first_name' 
                        placeholder='First Name' 
                        onChange={this.handleChange}
                        value={this.state.form.first_name}></input>
                    </div>

                    <div className='four wide field'>
                        <label>Last Name</label>
                        <input 
                        type='text' 
                        name='last_name' 
                        placeholder='Last Name' 
                        onChange={this.handleChange}
                        value={this.state.form.last_name}></input>
                    </div>

                    <div className='four wide field'>
                        <label>Email</label>
                        <input 
                        type='email' 
                        name='email' 
                        placeholder='Email'  
                        onChange={this.handleChange}
                        value={this.state.form.email}></input>
                    </div>

                    <div className='four wide field'>
                        <button className={this.state.btnClass} onClick={this.onFormSubmit}>
                            {this.state.btnName}
                        </button>
                    </div>
                </div>
            </form>
        )
    }
}

export default Myform