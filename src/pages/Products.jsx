import { style } from '@mui/system'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ReactStars from 'react-stars'

function Products() {
    const API_KEY = "https://dummyjson.com/products"

    const [loading,setLoading]=useState(true)

    const [products,setProducts] = useState([])
    const getApiData = async ()=>{
      try {
        
        const API_data =  await axios(API_KEY)
        console.log(API_KEY);
        
        const Data = API_data?.data?.products
        
        setProducts(Data);
        console.log(Data);
        
    setLoading(false)
          
        
      } catch (error) {
        console.log(error);
          
      }
    }
    useEffect(()=>{
      getApiData()  

    }, []) 
      

     
  return (  
    <div className='flex flex-wrap  justify-center '>
      {loading?"loading":null}
      {
        products.map((item)=>(
          <div key={item.id}>
            <img src={item.thumbnail} alt="" />
            <span style={item.availabilityStatus==="Low Stock" ? {color: "red" } :  {color:"blue"} }>
              {item.availabilityStatus}
            </span>
            <div>{item.title}</div>
            <span>{item.price}</span> <span className='from-orange-300'>{(item.price-item.discountPercentage*item.price/100).toFixed(2)}</span>
            <ReactStars
               count={5} value={item.rating}
               size={"100px"}
               color2={'#ffd700'} />
          </div>
        ))
    }
    </div>
  )
}

export default Products
