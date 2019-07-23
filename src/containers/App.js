// import React, { Component } from 'react'
import {connect} from 'react-redux'
import Counter from '../components/counter'

import {increment,decrement,incrementAsync} from '../redux/actions'


//传给UI组件store.getState()的值
// const mapStateToProps=(state)=>({
//   counter:state,
//   data:state+1
// })

//传递给UI逐渐store.dispatch的值
// const mapDispatchToProps=(dispatch)=>({
//   increment:(haha)=>{dispatch(increment(haha))}
//   decrement:(haha)=>{dispatch(decrement(haha))}
//   incrementAsync:(haha)=>{dispatch(incrementAsync(haha))}
// })

export default connect(
  state=>({count:state}),
  {increment,decrement,incrementAsync}
)(Counter)
// class App extends Component {

//   static propTypes={
//     store:PropTypes.object.isRequired
//   }

//   increment=()=>{
//     const haha =this.refs.numberSelect.value*1
//     this.props.store.dispatch(increment(haha))
//   }

//   decrement=()=>{
//     const haha =this.refs.numberSelect.value*1
//     this.props.store.dispatch(decrement(haha))
//   }

//   incrementIfOdd=()=>{
//     const haha =this.refs.numberSelect.value*1
//     const count=this.props.store.getState()
//     if(count%2===1){
//       this.props.store.dispatch(increment(haha))
//     }
//   }

//   incrementAsync=()=>{
//     const haha =this.refs.numberSelect.value*1
//     setTimeout(()=>{
//       this.props.store.dispatch(increment(haha))
//     },1000)
//   }

//   render() {

//     console.log('reducer')
//     const count=this.props.store.getState()

//     return (
//       <div>
//         <p>click{count}times</p>
//         <select ref='numberSelect'>
//           <option value='1'>1</option>
//           <option value='3'>3</option>
//           <option value='5'>5</option>
//           <option value='7'>7</option>
//         </select>&nbsp;
//         <button onClick={this.increment}>+</button>
//         <button onClick={this.decrement}>-</button>
//         <button onClick={this.incrementIfOdd}>increment if odd</button>
//         <button onClick={this.incrementAsync}>increment async</button>
//       </div>
//     )
//   }
// }

// export default App