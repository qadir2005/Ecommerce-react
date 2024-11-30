import { Rating } from '@mui/material'
import axios from 'axios'
import ReactStars from 'react-stars'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function ProductDetail() {
const {id} = useParams()
const [data,SetData] =useState([]);
const [discount,SetDiscount] = useState(null)
const [selectedImage,SetSelectedImage]=useState(null)

const fetchingData = async ()=>{
  const apiKey = `https://dummyjson.com/products/${id}`
  let Data = await axios(apiKey)
  SetData(Data.data)
  console.log("16",Data);
  const discountPrice = data.discountPercentage* (data.price / 100)
  SetDiscount(discountPrice)
  
}
useEffect(()=> {fetchingData()},[])

    return (
      <div>
    <div className='flex bg-blue-50 gap-7 justify-center'>
{data?.images?.length> 1 ? (
<div className='w-[100px]'>
  
  {data.images?.map((img,i)=>(
    <img src={img} key={i} alt="is" className='bg-slate-600 cursor-pointer mt-2' onClick={(e)=>(SetSelectedImage(img)
    )}  /> 
  ))
}</div>
):null}
      <div className='w-[40%] bg-blue-200 rounded-lg'>
       <img src={selectedImage|| data.thumbnail} height={200} className='mx-auto  max-h-[600]'  /> 
       </div>
       <div className='bg-blue relative w-[40%] flex flex-col text-start justify-center'>
        <span className="absolute top-5 px-4 py-1 rounded-md bg-blue-500 text-white">{data.availabilityStatus}</span>
      <span className='text-2xl font-bold'>{data.title}</span>
      <span className='text-lg '>Category {data.category} </span>
      <span className='font-bold'>Price :{data.price} </span>
      <span className='font-bold line-through'>{(data.price-discount).toFixed(2)}</span>
      <span>Hurry up only "{data.stock}" available </span>
      
      <ReactStars
  count={5}
  onChange={null}
  size={24}
  value={data.rating}
  
  color2={'#ffd700'} />
       </div>
    </div>
    <div className="mt-6">
  <h1 className="text-2xl font-bold text-gray-800">Reviews</h1>
  <div className="mt-4 space-y-4 " >
    {data.reviews?.length > 0 ? (
      data.reviews.map((item, index) => (
        <div
          key={index}
          className="p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
        >
          <h2 className="text-lg font-semibold text-blue-700">
            {item.reviewerName || "Anonymous"}
          </h2>
          <p className="text-gray-700 mt-2 ">{item.comment}</p>
          <span className="block mt-2 text-sm text-gray-500">
            Rating: {item.rating   || "No rating"}
          </span>
        </div>
      ))
    ) : (
      <p className="text-gray-500 italic">No reviews available.</p>
    )}
  </div>
</div>


    </div>
  )
}

export default ProductDetail
