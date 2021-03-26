import React from 'react'
import {connect} from 'react-redux';
import { cntAction } from './actions/cntAction';
function Third(props) {
    return (
        <div>
            <button onClick={()=>props.changeCount(props.myCount)}>Add to cart3</button>
        </div>
    )
}

const mapStateToProps=(state)=>{
    return {
      myCount:state.countReducer
    }
  }
  const mapDispatchToProps=(dispatch)=>{
    return {
      changeCount:(data)=>{dispatch(cntAction(data))}
    }
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(Third);