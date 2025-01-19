import React, { Component } from "react"
import axios from 'axios'
import Myform from './MyForm.js'
import CustomerList from "./CustomerList.js";
import Loader from "./Loader.js";
import './style.css'

class App extends Component {
    state = {
        customers: [],
        customer: {},
        loader: false,
        url: "http://127.0.0.1:8000/api/customers"
    }   // membuat array kosong customers
        // menerima api melalui url postman

    getCustomers = async () => {
        this.setState({ loader: true })
        const customers = await axios.get(this.state.url)
        this.setState({ customers: customers.data, loader: false })
    }
    
    deleteCustomer = async id => {
        this.setState({ loader: true })
        await axios.delete(`${this.state.url}/${id}`)

        this.getCustomers()
    }

    createCustomer = async data => {
        this.setState({ loader: true })
        await axios.post(this.state.url, {
            first_name: data.first_name,
            last_name: data.last_name,
            email: data.email,
        })

        this.getCustomers()
    }

    editCustomer = async (data) => {
        // clear customer obj
        this.setState({ customer: {}, loader: true })
        await axios.put(`${this.state.url}/${data.id}`, {
            first_name: data.first_name,
            last_name: data.last_name,
            email: data.email,
        })

        this.getCustomers()
    }

    componentDidMount() {
        this.getCustomers()
    }

    onDelete = id => {
        // console.log('app: ', id)
        this.deleteCustomer(id);
    }

    onEdit = data => {
        // console.log('app: ', data)
        this.setState({ customer: data })
    }

    onFormSubmit = data => {
        // console.log('app: ', data)
        if(data.isEdit) {
            // if edit true
            this.editCustomer(data)
        } else {
            this.createCustomer(data)
        }
    }

    render() {
        return(
            <div>
                <div className="ui fixed inverted menu">
                    <div className="ui container">
                        <a href="#/" className="header item">
                            React JS CRUD with Laravel API
                        </a>
                    </div>
                </div>
                
                <div className="ui main container">
                    <Myform 
                    customer={this.state.customer} 
                    onFormSubmit={this.onFormSubmit}/>
                    { this.state.loader ? <Loader /> : "" }
                    <CustomerList 
                        customers={this.state.customers} 
                        onDelete={this.onDelete}
                        onEdit={this.onEdit} 
                    />
                </div>
            </div>
        );
    }
}

export default App