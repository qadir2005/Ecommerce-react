import { style } from '@mui/system'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ReactStars from 'react-stars'

function Products() {
    const API_KEY = "https://dummyjson.com/products"

    const [loading,setLoading]=useState(true)
    const [search, setSearch] = useState("")

    const [products,setProducts] = useState([])
    const getApiData = async ()=>{
      try {
        
        const API_data =  await axios(API_KEY)
        console.log(API_KEY);
        
        const Data = API_data?.data?.products
        
        setProducts(Data);
        
    setLoading(false)
          
        
      } catch (error) {
        console.log(error);
          
      }
    }
    useEffect(()=>{
      getApiData()  

    }, []) 

    const searchProducts = ()=>{
      const result = products?.filter((item)=>{

        return item.title.toLowerCase().includes(search)
      }
      )
      return result || []
    }
    const priceLowToHigh = ()=>{
      const ans =  products.sort((a,b)=>{
        return a.price - b.price
      })
      return ans || []
    }
     
  return (  
    <div>
      <div className='bg-slate-500 w-48' onClick={()=>priceLowToHigh
      }>High to Low</div>
      <div className='bg-slate-500 mt-4 w-48' onClick={()=>console.log("high")
      }>Low to High</div>

<input type="text" placeholder='search Products ' onChange={(e)=>{
setSearch(e.target.value)

} } className='bg-black h-10 w-[80%] my-auto pl-2  text-white' />

    <div className='flex flex-wrap  justify-center '>
      {loading?"loading":null}
      {
        searchProducts().map((item)=>(
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
    </div>
  )
}

export default Products
