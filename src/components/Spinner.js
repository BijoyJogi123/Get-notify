import React, { Component } from 'react'
import loading from './Walk.gif'
export default class Spinner extends Component {
  render() {
    return (
      <div className='flex justify-center '>
        <img src={loading} alt="loading"/>
      </div>
    )
  }
}
