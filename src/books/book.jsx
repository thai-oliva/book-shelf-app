import React, {Component} from 'react'
import axios from 'axios'

import PageHeader from '../template/pageHeader'
import BookForm from './bookForm'
import BookList from './bookList'

const URL = 'https://www.googleapis.com/books/v1/volumes';

export default class Book extends Component {
    constructor(props) {
        super(props)
        this.state = {description: '', list: [] }

        this.handleChange = this.handleChange.bind(this)
        this.handleSearch = this.handleSearch.bind(this)

    }

    refresh(description = '') {
        if(description) {
            const search =encodeURIComponent(`${description}`)
            axios.get(`${URL}?q=${search}`)
                .then(resp => this.setState({...this.state, description: '', list: resp.data}))
        }
    }

    handleChange(e){
        this.setState({...this.state, description: e.target.value})
    }

    handleSearch(e){
        this.refresh(this.state.description)
    }


    render(){
        return (
            <div>
                <PageHeader name='Search'></PageHeader>
                <BookForm 
                    description={this.state.description}
                    handleChange={this.handleChange}
                    handleSearch={this.handleSearch}/>
                <BookList list={this.state.list}/>
            </div>
        )
    }
}