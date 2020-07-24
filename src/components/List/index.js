import React, { Component } from 'react'
import './index.scss'
import moment from 'moment'

export default class List extends Component {
    render() {
        const { filterList } = this.props
        return (
            <div className='list-container'>
                <div className='issues-container'>
                    {
                        filterList.map(issue => <div className='issue'>
                            <div className='about'>
                                <div className='labels'>
                                    <h4><img src={require('../../static/images/alert.png')} height='20px' /> {issue.title}</h4>
                                    {
                                        issue.labels.map(label =>
                                            <p style={{ backgroundColor: `#${label.color}` }}>{label.name}</p>)
                                    }
                                </div>
                                <img src={require('../../static/images/comment.png')} height='20px' />
                            </div>
                            <div className='info-below'>
                                <p>{issue.number}</p>
                                <p>{moment(issue.updated_at).startOf('day').fromNow()}</p>
                                <p>By {issue.user.login}</p>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        )
    }
}
