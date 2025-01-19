import React, { Component } from "react"
import axios from 'axios'
import Myform from './MyForm.js'
import CustomerList from "./CustomerList.js";
import Loader from "./Loader.js";
import './style.css'

class App extends Component {
    state = {
        customers: [],
        loader: false,
        url: "http://127.0.0.1:8000/api/customers"
    }   // membuat array kosong customers
        // menerima api melalui url postman

    getCustomers = async () => {
        this.setState({ loader: true })
        const customers = await axios.get(this.state.url)
        this.setState({ customers: customers.data, loader: false })
    } 

    componentDidMount() {
        this.getCustomers()
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
                    <Myform />
                    { this.state.loader ? <Loader /> : "" }
                    <CustomerList customers={ this.state.customers }/>
                </div>
            </div>
        );
    }
}

export default App