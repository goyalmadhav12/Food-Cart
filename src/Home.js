import React from 'react'
import './index.css'
import {Link} from 'react-router-dom';
import ShoppingCartSharpIcon from '@material-ui/icons/ShoppingCartSharp';
import Card from './Card';
import { connect } from 'react-redux';


function Home(props) {
         let arr=[{name:'Burger',price:50,coupon:'Burg',image:'https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8YnVyZ2Vyc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'},
           {name:'Ice Cream',price:100,coupon:'Buy1Get2',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Ice_cream_with_whipped_cream%2C_chocolate_syrup%2C_and_a_wafer_%28cropped%29.jpg/1200px-Ice_cream_with_whipped_cream%2C_chocolate_syrup%2C_and_a_wafer_%28cropped%29.jpg'},
           {name:'HotDog',price:200,coupon:'EatMe',image:'https://static.toiimg.com/thumb/54478818.cms?width=1200&height=900'},
           {name:'Sandwhich',price:500,coupon:'Sand40',image:'https://img-global.cpcdn.com/recipes/002daa18f189f68b/751x532cq70/chicken-fajita-sandwhich-recipe-main-photo.jpg'},
           {name:'Pizza',price:100,coupon:'Friday',image:'https://b.zmtcdn.com/data/pictures/4/90384/ba50a5176f9b3abf84a4b734543474a2.jpg'},
           {name:'Pop Corn',price:50,coupon:'PopIt',image:'https://food.unl.edu/recipes/Popcorn.jpg'},
           {name:'Drinks',price:90,coupon:'Drunk',image:'https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/publications/food-beverage-nutrition/beveragedaily.com/article/2020/01/02/2020-trends-to-watch-in-us-beverage/10484034-2-eng-GB/2020-trends-to-watch-in-US-beverage_wrbm_large.jpg'},]
  return (
    <div style={{display:'flex',flexDirection:'column',height:'100%',width:'100%'}}>
      <div style={{display:'flex',width:'100%',alignItems:'center',justifyContent:'center'}}>
        <h1 style={{color:'blue'}}>Food Ordering App</h1>
        <div style={{display:'flex',alignItems:'center',position:'absolute',right:20}}>
          <ShoppingCartSharpIcon style={{fontSize:40,color:'blue'}}/>
          <span style={{fontSize:40,color:'blue'}}>{props.myfetchedData.length}</span>
        </div>
      </div>
       <div style={{width:'100%' ,alignSelf:'center',display:'flex',justifyContent:'space-around'}}>
        {arr.map(items=>{
          return <Card data={items}/>
        })}
        </div>
        <Link to='/summary' style={{textDecoration:'none',alignSelf:'center',justifySelf:'center',marginTop:40}}><div style={{borderRadius:20,color:'white',padding:15,backgroundColor:'blue'}} className='btn' >Checkout</div></Link>
        {/* <div style={{display:'flex'}}>
          {props.myfetchedData.map((items)=>{
            return (
              <div>
                <p>{items.name}</p>
                <p>{items.price}</p>
              </div>
            )
            })}
        </div> */}
    </div>
  )
}

const mapStateToProps=(state)=>{
  return {
    myfetchedData:state.countReducer,
  }
}


export default connect(mapStateToProps)(Home);

