import React, { Component } from 'react'

class Myform extends Component {
    render() {
        return(
            <form className='ui form'>
                <div className='fields'>
                    <div className='four wide field'>
                        <label>Email</label>
                        <input type='text' name='first_name' placeholder='First Name'></input>
                    </div>

                    <div className='four wide field'>
                        <label>Last Name</label>
                        <input type='text' name='last_name' placeholder='Last Name'></input>
                    </div>

                    <div className='four wide field'>
                        <label>Email</label>
                        <input type='email' name='email' placeholder='Email'></input>
                    </div>

                    <div className='four wide field'>
                        <button className='ui primary button submit-button'>Save</button>
                    </div>
                </div>
            </form>
        )
    }
}

export default Myform