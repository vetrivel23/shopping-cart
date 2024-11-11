
import React, { useState } from 'react'
import "./style.css"


export const Producte = ({ setdatas,datas ,setValue,value}) => {


 function Add(){
    setValue((pre)=> pre + 1)
 
 }

 function Remove(){
    setValue((pre)=> pre - 1)
    
 }

 function HandClick(index){
    if(datas[index].button){
        datas[index].button = false
        Remove();

    }
    else{
        datas[index].button=true;
        Add();

    }

 }

  return (
   <>
         <section class="py-5">
            <div class="container px-4 px-lg-5 mt-5">
                <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">

               {datas.map((ele,index)=>{
                 return(
                    <div key={index} class="col mb-5">
                    <div class="card h-100">
                   {ele.sale && <div class="badge bg-dark text-white position-absolute sale" >Sale</div>}


                        <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..."/>
                        <div class="card-body p-4">
                            <div class="text-center">
                                <h5 class="fw-bolder">{ele.name}</h5>

                                {ele.uderline? <span className='underline'>  {ele.price1}</span> : <span className=''>  {ele.price1}</span>}
    
                                <span>{ele.price2}</span>
                              
                                <br />

                            {ele.star &&     <div class="d-flex justify-content-center small text-warning mb-2">
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                </div>}

                            </div>
                        </div>

                        <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                            {ele.viewbtn? <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#"  >View options</a></div> :  
                            
                            <div   class="text-center"> <button className='btn btn-outline-dark mt-auto' onClick={()=>{HandClick(index)}} > {ele.button?"Remove":"Add Cart"}  </button> </div>}
                        </div>

                       

                    </div>
                </div>
                 )
               })}
                   

                    
                   
                </div>
            </div>
        </section>
   </>
  )
}
