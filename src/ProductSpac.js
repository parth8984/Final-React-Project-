// import React, {useEffect, useState} from 'react'
// import { json, useParams } from 'react-router-dom';
// import axios from 'axios';
// import "./index.css"

// function ProductSpac() {
//     let params = useParams();
//     let [product,setProduct] = useState({})
//     useEffect(() =>{
//         axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=cfe422613b250f702980a3bbf9e90716${params.id}`)
//         .then((res) =>{
//            setProduct(res.data)
//         }) 
//     },[])
//   return (
   
//     <div id='productspac'>
//      <img id='productdeailsimg'
//      src= {product.thumbnail} />
//      <p> Titel : {product.title}</p>
//      <p> price : {product.price}</p>
//      <p> Description : {product.description}</p>
//      <p> Stock : {product.stock}</p>
//      <p> DiscountPercentage : {product.discountPercentage}</p>
//     </div>

//   )
// }

// export default ProductSpac ; 