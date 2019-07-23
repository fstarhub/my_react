import React, { Component } from 'react'
import PropTypes from 'prop-types'


class Counter extends Component {

  static propTypes={
    count:PropTypes.object.isRequired,
    increment:PropTypes.func.isRequired,
    decrement:PropTypes.func.isRequired,
    incrementAsync:PropTypes.func.isRequired
  }

  increment=()=>{
    const haha =this.refs.numberSelect.value*1
    this.props.increment(haha)
  }

  decrement=()=>{
    const haha =this.refs.numberSelect.value*1
    this.props.decrement(haha)
  }

  incrementIfOdd=()=>{
    const haha =this.refs.numberSelect.value*1
    const count=this.props.count
    if(count%2===1){
      this.props.increment(haha)
    }
  }

  incrementAsync=()=>{
    const haha =this.refs.numberSelect.value*1
    setTimeout(()=>{
      this.props.incrementAsync(haha)
    },1000)
  }

  render() {

    console.log('reducer')
    const count=this.props.count
    
    return (
      <div>
        <p>click{count}times</p>
        <select ref='numberSelect'>
          <option value='1'>1</option>
          <option value='3'>3</option>
          <option value='5'>5</option>
          <option value='7'>7</option>
        </select>&nbsp;
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.incrementIfOdd}>increment if odd</button>
        <button onClick={this.incrementAsync}>increment async</button>
      </div>
    )
  }
}

export default Counter