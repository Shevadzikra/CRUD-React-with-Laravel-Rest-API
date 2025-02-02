import React, { Component } from 'react'
import Customer from './Customer'

class CustomerList extends Component {
    onDelete = id => {
        // console.log('customer list: ', id)
        this.props.onDelete(id)
    }

    onEdit = data => {
        this.props.onEdit(data)
        // console.log('customer list: ', id)
    }

    render() {
        const customers = this.props.customers
        return(
            <div className='data'>
                <table className='ui celled table'>
                    <thead>
                        <tr>
                            <th style={{ width: '50px', textAlign: 'center' }}>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th style={{ width: '150px'}}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        customers.map((customer) => {
                                return <Customer 
                                    customer={customer} 
                                    key={customer.id} 
                                    onDelete={this.onDelete}
                                    onEdit={this.onEdit} 
                                />
                            })}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default CustomerList