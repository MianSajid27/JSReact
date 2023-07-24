import React,{useEffect,useState} from 'react'

function  Get ()  {
  const [data,setData] = useState([])

  
useEffect(()=>{


  fetch("https://dummyjson.com/products").then((result)=>{
    result.json().then((resp)=>{
      // console.warn("result",resp)
    setData(resp.products)
    console.warn("result",data)
    })
    
      })
},[])
 console.warn(data)
  return (
    <div className='get'>
        <h1 className='text-center'>Get Api Call</h1>

        <table style={{marginLeft:"px"}} border="2">
       
<tr>

<td>ID</td>
            <td>BRAND</td>
            <td>TITTLE</td>
            <td>PRICE</td>
            <td>RATING</td>
            <td>STOCK</td>
            <td>DISCRIPTION
</td>
</tr>

{
  data.map((item)=>
  
  <tr>
<td>{item.id}</td>
                    <td>{item.brand}</td>
                    {/* <td>{item.title}</td>
                    <td>{item.price}</td>
                    <td>{item.rating}</td>
                    <td>{item.stock}</td>
                    <td>{item.description}</td> */}

</tr>

  )
}

        </table>
      
    </div>
  )
}

export default Get;
