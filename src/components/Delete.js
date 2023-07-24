import React,{useEffect,useState} from 'react'

function  Delete ()  {
  const [users,setUser] = useState([])
useEffect(()=>{
    getUsers();
},[])

function getUsers()
{
    fetch("https://dummyjson.com/products").then((result)=>{
        result.json().then((resp)=>{
            setUser(resp.products)
              console.warn("result",users)
        })
          })
}
// console.warn()
 console.warn(users)
 
 function deleteUser(id)
 {
    fetch(`https://dummyjson.com/products/${id} ` ,{

    method: 'DELETE'
    }).then((result)=>{

        result.json().then((resp)=>{

            console.warn(resp)
            getUsers()
        })
    })

 }
  return (
    <div className='get'>
        <h1 className='text-center'> Delete Api Call</h1>

        <table border="1">
         <thead> 
<tr>

<th>ID</th>
<th>BRAND</th>
            <th>TITTLE</th>
            <th>PRICE</th>
            <th>STOCK</th>
            <th>OPERATION</th>
</tr>
</thead>
{
  users.map((item,i)=>
<tbody> 
  <tr key={i}>
<td>{item.id}</td>
<td>{item.brand}</td>
                    <td>{item.title}</td>
                    <td>{item.price}</td>
                    <td>{item.stock}</td>
                    <td><button className='btn btn-danger' onClick={()=>deleteUser(item.id)}>Delete</button></td>
</tr>
</tbody>
  )
}

        </table>
      
    </div>
  )
}

export default Delete;