import React,{useState,useEffect} from 'react'
import './card.css'
import {connect} from 'react-redux'
import {IncreaseAction,DecreaseAction} from './actions/countAction'
import AddSharpIcon from '@material-ui/icons/AddSharp';
import RemoveSharpIcon from '@material-ui/icons/RemoveSharp';
function Card(props) {
  const [count,setCount]=useState(0);
  useEffect(() => {
      let cont=0;
      for(let i=0;i<props.myfetchedData.length;i++)
      {
          if(props.myfetchedData[i].name===props.data.name)
          {
            cont++;
          }
      }
      setCount(cont);
  },[props.myfetchedData])
  return (
    <div className='crd'>
      <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
      <img src={props.data.image} alt='Use internet' style={{borderRadius:50,height:100,width:100}}/>
      <h1 className='cntclass'>  {props.data.name}</h1>
      <h4 className='cntclass'> Price: {props.data.price} </h4>
      <h4 className='cntclass'> Coupon Code: {props.data.coupon}</h4>
      <div style={{margin:20,display:'flex',justifyContent:'space-around',width:'100%'}}>
        <RemoveSharpIcon style={{fontSize:30,marginTop:20,color:'blue',cursor:'pointer'}} onClick={()=>props.decrement(props.data)} />
        <span style={{fontSize:30,marginTop:20,color:'blue'}}>
          {count}
        </span>
        <AddSharpIcon style={{fontSize:30,marginTop:20,color:'blue',cursor:'pointer'}} onClick={()=>props.increment(props.data)}/>
      </div>
      </div>
    </div>
  )
}
const mapStateToProps=(state)=>{
  return {
    myfetchedData:state.countReducer,
  }
}
const mapDispatchToProps=(dispatch)=>{
  return {
    increment:(data)=>{dispatch(IncreaseAction(data))},
    decrement:(data)=>{dispatch(DecreaseAction(data))}
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Card);















