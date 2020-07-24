import React, { Component } from 'react'
import './index.scss';
import axios from 'axios'
import List from '../List'

export default class Search extends Component {
    constructor(props) {
        super(props)

        this.state = {
            value: '',
            issues: [],
            filterList: []
        }
    }

    onChangeValue = (event) => {
        const { issues } = this.state
        event.preventDefault()
        let value = event.target.value;
        let filterList = issues.filter(issue => issue.title.includes(value))
        console.log('filterList', filterList)
        this.setState({ value, filterList })
    }

    componentDidMount() {
        axios.get(`https://api.github.com/repos/facebook/react/issues`)
            .then(res => {
                console.log('issues', res)
                this.setState({ issues: res.data })
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        const { value, filterList, issues } = this.state
        return (
            <div className='search-container'>
                <input onChange={this.onChangeValue} value={value} type='text' placeholder='Search' />
                <List filterList={filterList.length === 0 ? issues: filterList} />
            </div>
        )
    }
}
