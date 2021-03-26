import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import ShoppingCartSharpIcon from '@material-ui/icons/ShoppingCartSharp';
import './summary.css'
function Summary(props) {
    let main=props.myfetchedData;
    const [arr,setArr]=useState([]);
    let brr=[];
    useEffect(()=>{
        while(main.length!=0)
        {
            let count=0;
            let check=main[0].name;
            let price=main[0].price;
            for(let i=0;i<main.length;i++)
            {
                if(check===main[i].name)
                {
                    main.splice(i,1);
                    count++;
                    console.log(check);
                    console.log(count);
                    i--;
                }
            }
            let total=price*count;
            if(brr.length!=0)
            {
                total=brr[brr.length-1].total+price*count;
            }
            brr=[...brr,{name:check,count:count,price:price,total:total}];
            console.log(brr);
            setArr(brr);
        }
    },[]);
    return (
        <div style={{display:'flex',height:'100%',width:'100%',alignItems:'center',justifyContent:'center',flexDirection:'column'}}>
            <div className='box' style={{backgroundColor:'aqua',minHeight:'20%',minWidth:'20%',display:'flex',flexDirection:'column',borderRadius:20,boxShadow:'10 20 20'}}>
            {(arr.length!=0)?arr.map((items)=>{
                return(
                    <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',margin:10,color:'blue',boxSizing:'border-box'}}>
                        <p className='cnt'>{items.name}:</p>
                        <p className='cnt'>{items.count}x{items.price}</p>
                        <p className='cnt'>Rs. {items.count*items.price}</p>
                    </div>
                )
            }):
            <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                <p style={{color:'red',fontSize:25,alignSelf:'center',padding:0}}>Cart is Empty</p>
                <ShoppingCartSharpIcon style={{fontSize:40,color:'red'}}/>
            </div>
            }
            </div>
            <div style={{color:'#337811',fontSize:35,backgroundColor:'aqua',margin:10,borderRadius:20,minWidth:'20%'}}>Grand Total:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rs. {(arr.length!=0)?arr[arr.length-1].total:0}</div>
        </div>
    )
}

const mapStateToProps=(state)=>{
    return {
      myfetchedData:state.countReducer,
    }
  }
  
  
  export default connect(mapStateToProps)(Summary);