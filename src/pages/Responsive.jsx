import React from 'react'
import {  BsCart2 } from "react-icons/bs";
import {  AiOutlineDesktop } from "react-icons/ai";
import { AiOutlineLock  } from "react-icons/ai";
// import  Face from "./images/Face.jpg";
import "../App.css"
const Responsive = () => {
  return (
    <>
    <div>
      
<div class="bgimg">
    <nav class="navbar navbar-expand-md bg-dark navbar-dark">
<div class="container">
    <a href=" " class="navbar-brand text-warning font-weight-bold">Garment </a>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsenavbar">

<span class="navbar-toggler-icon"></span>

</button>
<div class="collapse navbar-collapse text-center" id="collapsenavbar">
<ul class="navbar-nav ml-auto ">

    <li class="nav-item"> 
        <a href="" class="nav-link text-white">SERVICE</a>
    </li>
    <li class="nav-item"> 
        <a href="" class="nav-link text-white">PROTFOLIO</a>
    </li>
    <li class="nav-item"> 
        <a href="" class="nav-link text-white">ABOUT</a>
    </li>
    <li class="nav-item"> 
        <a href="" class="nav-link text-white">TEAM</a>
    </li>
    <li class="nav-item"> 
        <a href="" class="nav-link text-white">CONTUCT</a>
    </li>
</ul>
</div>

</div>

    </nav>



</div>

<section class="container ourservices text-center">
<h1>SERVICES</h1>
<p>Lorem ipsum dolor sit amet consectetur.</p>

<div class="row rowsetting">
<div class="col-lg-4 col-md-4 col-sm-4 col-10 m-auto d-block">
<div class="imgsetting d-block m-auto bg-warning">
    <i class="fa fa-shopping-cart fa-3x text-white bs"><BsCart2/></i>

</div>
<h2>Ecommerce</h2>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad vitae ea aspernatur deleniti voluptate?</p>
</div>
<div class="col-lg-4 col-md-4 col-sm-4 col-10 m-auto d-block">
    <div class="imgsetting d-block m-auto bg-warning">
        <i class="fa fa-desktop fa-3x text-white bs"><AiOutlineDesktop/></i>
    
    </div>
    <h2>Responsive Design</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad vitae ea aspernatur deleniti voluptate?</p>
    </div>
    <div class="col-lg-4 col-md-4 col-sm-4 col-10 m-auto d-block ">
        <div class="imgsetting d-block m-auto bg-warning">
            <i class="fa fa-lock fa-3x text-white bs"> <AiOutlineLock/></i>
        
        </div>
        <h2>Web Security</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad vitae ea aspernatur deleniti voluptate?</p>
        </div>

</div>

</section>

{/* <section class="m-sm-4 ">

    <div class="container text-center">
        <h1>PROTFOLIO</h1>
        <p>Lorem ipsum dolor sit amet consectetur.</p>

        <div class="row">
<div class="col-lg-4 col-md-4 col-sm-12 col-10 d-block m-auto">
<div class="card ">
<img src="../index/img/Shirt.jfif">
<div class="card-body">
    <h2 class="card-tittle">Shirt</h2>


</div>

</div>
</div><div class="col-lg-4 col-md-4 col-sm-12 col-10 d-block m-auto">
    <div class="card">
    <img src="../index/img/han.jfif">
    <div class="card-body">
        <h2 class="card-tittle">Shirt</h2>
    
    </div>
    
    </div>
    </div>
    <div class="col-lg-4 col-md-4 col-sm-12 col-10 d-block m-auto">
        <div class="card">
        <img src="../index/img/Shirt.jfif">
        <div class="card-body">
            <h2 class="card-tittle">Shirt</h2>
            
            </div>
            
            </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-4 col-md-4 col-sm-12 col-10 d-block m-auto">
            <div class="card ">
            <img src="../index/img/Shirt.jfif">
            <div class="card-body">
                <h2 class="card-tittle">Shirt</h2>
            
            
            </div>
            
            </div>
            </div><div class="col-lg-4 col-md-4 col-sm-12 col-10 d-block m-auto">
                <div class="card">
                <img src="../index/img/han.jfif">
                <div class="card-body">
                    <h2 class="card-tittle">Shirt</h2>
                
                </div>
                
                </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-12 col-10 d-block m-auto">
                    <div class="card">
                    <img src="../index/img/Shirt.jfif">
                    <div class="card-body">
                        <h2 class="card-tittle">Shirt</h2>
                        
                        </div>
                        
                        </div>
                        </div>
                    </div>
           
                        
    <section/> */}
    {/* <section class="m-sm-4 "> */}
<div>
<div class="container text-center">
    <h1>PROTFOLIO</h1>
    <p>Lorem ipsum dolor sit amet consectetur.</p>

    <div class="row">
<div class="col-lg-4 col-md-4 col-sm-12 col-10 d-block m-auto">
<div class="card ">
{/* <img src={ Face } /> */}
<img src={Face}/>
<div class="card-body">
<h2 class="card-tittle">Shirt</h2>


</div>

</div>
</div><div class="col-lg-4 col-md-4 col-sm-12 col-10 d-block m-auto">
<div class="card">
{/* <img src="../index/img/han.jfif"> */}
<div class="card-body">
    <h2 class="card-tittle">Shirt</h2>

</div>

</div>
</div>
<div class="col-lg-4 col-md-4 col-sm-12 col-10 d-block m-auto">
    <div class="card">
    {/* <img src="../index/img/Shirt.jfif"> */}
    <div class="card-body">
        <h2 class="card-tittle">Shirt</h2>
        
        </div>
        
        </div>
        </div>
    </div>
    <div class="row">
        <div class="col-lg-4 col-md-4 col-sm-12 col-10 d-block m-auto">
        <div class="card ">
        {/* <img src="../index/img/Shirt.jfif"> */}
        <div class="card-body">
            <h2 class="card-tittle">Shirt</h2>
        
        
        </div>
        
        </div>
        </div><div class="col-lg-4 col-md-4 col-sm-12 col-10 d-block m-auto">
            <div class="card">
            {/* <img src="../index/img/han.jfif"> */}
            <div class="card-body">
                <h2 class="card-tittle">Shirt</h2>
            
            </div>
            
            </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12 col-10 d-block m-auto">
                <div class="card">
                {/* <img src="../index/img/Shirt.jfif"> */}
                <div class="card-body">
                    <h2 class="card-tittle">Shirt</h2>
                    
                    </div>
                    
                    </div>
                    </div>
                </div>
       
                        </div>
</div>
{/* </section> */}
</div>

 
        <section>

            <h3 class="new text-center"> Address: New Anarkali Sultan market</h3>
   
     </section>
     
     </>
  )
}

export default Responsive;
