
import React, {useState}from 'react'

const arr=[{ name:"Bread",price:25},
           { name:"Milk",price:30},
           { name:"Soup",price:40},
           { name:"Butter",price:50},
           { name:"Cheese",price:22}
          ]

const Home = () => {

  const [cardItem, setcardItem] =useState([])
  const [qty, setQty] =useState({})


  const addItem=(price)=>{
       
    const productData=arr.find((item)=>{
           return item.price==price
       })
       if(productData){
        if(qty[productData.name]){
          setQty({...qty,[productData.name]:qty[productData.qty]+1})
        }else{
          setQty({...qty,[productData.name]:1})
        }
       }
         setcardItem([...cardItem,productData])
  }

  const addQty=(name)=>{
        setQty({...qty, [name]:qty[name]+1})
  }


  const subQty=(name)=>{
    if(qty[name]>1){
      setQty({...qty, [name]:qty[name]-1})
    }
  }

     const totalPrice=cardItem.reduce((total,item)=>{
        return total=total+(item.price) * (qty[item.name])
     },0)
    
    
       
  return (
    <div className="productCard">
      <table style={{fontSize:"25px", margin:"20px"}} className='col-md-3' id='tablestyle'>
      
        <tr>
        <th>Product</th>
        </tr>
       
   {
       
       arr.map((item,index)=>{
          return(
            <tr key={index}> 
                <td>{item.name}</td>
                <td>Rs. {item.price}</td>
                <td>
                  <button key={index}  onClick={()=>addItem(item.price)} style={{marginLeft:"15px"}} className='btn btn-success'>
                      Add
                   </button>
                </td>
            </tr>          
          )
        })
   }
      </table>

      <div className='col-md-4' id='liststyle'>

        <p className='cardstyle'>Carditem</p>
      
      {
           cardItem.map((item,index) => (
            <div class="card">
           
            <ul class="list-group list-group-flush">
                   <li class="list-group-item" id='productName'>{item.name} Rs.{item.price}</li>
            
             <li class="list-group-item">
                <button key={index} onClick={()=>addQty(item.name)} class="btn btn-primary" id='btn'>
                     + 
                 </button>
                     {qty[item.name]}
                 <button onClick={()=>subQty(item.name)} class="btn btn-primary" id='btn'> - </button>
             </li>
          
                  <li class="list-group-item">Total= {item.price* qty[item.name]}</li>
          
            </ul>
       </div>
            
          ))
          
          }
               <div class="card-footer" id='footer'>  
                Total Amount  Rs.{totalPrice} 
                  </div>
         
        

      </div>
     
    </div>
  )
}

export default Home










