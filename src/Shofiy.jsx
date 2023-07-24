import React, { useState } from "react";
import "./App.css";
import {AiOutlineMinus } from "react-icons/ai";
import { GoPlus } from "react-icons/go";
import { GrSubtractCircle } from "react-icons/gr";
import Shopify from "./images/Shopify.png";
import Collapsible from "react-collapsible";
import Sho1 from "./images/Sho1.svg";
import Sh2 from "./images/Sh2.svg";
import Sh3 from "./images/Sh3.svg";
import Sh4 from "./images/Sh4.svg";
import Sh5 from "./images/Sh5.svg";
import Sh6 from "./images/Sh6.svg";
import Sh8 from "./images/Sh8.svg";
import Sh7 from "./images/Sh7.svg";
import Sh9 from "./images/Sh9.svg";
import Sh10 from "./images/Sh10.svg";
import Sh11 from "./images/Sh11.svg";
import Sh12 from "./images/Sh12.svg";
import Sh13 from "./images/Sh13.svg";
import Sh14 from "./images/Sh14.svg";

import { HiShoppingBag } from "react-icons/hi";

const Shofiy = () => {
  const [show, setshow] = useState(false );
  const [close, setclose] = useState(false);
  const [open, setopen] = useState(false);
  const [even, seteven] = useState(false);
  return (
    <>
      <div className="ch ">
        <div className="">
          <h1 className="mb-10 pt-4 pb-2 text-center fst-italic fw-bold">
            <img style={{ width: "60px" }} src={Shopify} />
            shopify
          </h1>
          <p className="display-1 text-center fw-bold mb-5 ">
            Bring your ideas to life
            <br />
            for $1/month
          </p>
          <p className="text-center dispaly mb-5">
            The future of business is yours to shape. Sign up for a free trial
            and enjoy 3 months of Shopify
            <br />
            for $1/month on select plans.
          </p>
        </div>
        <div className=" ">
          <div className="Main1 d-flex mb-4">
            <div>
              <input
                className="Email"
                type="text"
                placeholder="Enter your email address"
              />
            </div>
            <div>
              <button className="Start">Start free trail</button>
            </div>
          </div>

          <p className="text-center dispay pb-3">
            Try Shopify for card no credit card required. By entering your
            email, you agree to receive
            <br />
            marketing emails from Shopify.
          </p>
        </div>

        <div>
          <img className="mx-auto w-10 d-block mt-5" src={Sho1} />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-3 mx-5">
              <img className="mb-2 mt-5" src={Sh2} />
              <h4 className=" pl-10 fw-bold custom fz-1">
                Customizable templates
              </h4>
              <p className=" display-7">
                Free website designs to launch your store quickly and easily.
              </p>
            </div>
            <div className="col-3  mx-5">
              <img className="mb-2 mt-5" src={Sh3} />
              <h4 className="fw-bold">All in one</h4>
              <p className="display-7">
                {" "}
                quickly and easily. Shipping Box Shopify takes care of
                everything  and shipping.
              </p>
            </div>
            <div className="col-3 mx-5 ">
              <img className="mb-2 mt-5" src={Sh4} />
              <h4 className="fw-bold  ">A safe efficient platform</h4>
              <p className="display-7">
                {" "}
                Millions of users trust Shopify to manage their online stores..
              </p>
            </div>
          </div>
        </div>
        <hr className="mx-5 fw-bold mt-5 mb-5"></hr>
        <div className="container">
          <div className="row">
            <div className="col-2 mx-4 mb-4">
              <img src={Sh5} />
            </div>
            <div className="col-2  mx-2 mb-4">
              <img src={Sh6} />
            </div>
            <div className="col-2 mx-2  mb-4">
              <img src={Sh7} />
            </div>
            <div className="col-2  mx-3 mb-4">
              <img src={Sh8} />
            </div>
            <div className="col-2  mx-5 mb-4">
              <img src={Sh9} />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-2 mx-4 mt-4">
              <img src={Sh10} />
            </div>
            <div className="col-2  mx-2 mt-4">
              <img src={Sh11} />
            </div>
            <div className="col-2 mx-2  mt-4">
              <img src={Sh12} />
            </div>
            <div className="col-2  mx-3 mt-4">
              <img src={Sh13} />
            </div>
            <div className="col-2  mx-5 mt-4">
              <img src={Sh14} />
            </div>
          </div>
        </div>
        <hr className="mx-5 fw-bold mt-5 pb-5 hr"></hr>

        <p className="text-center display-4 pt-5 fw-bold">
          "Shopify is better than any other platform
          <br /> we've played with, and we've played with
          <br /> them all."
        </p>
        <p className="text-center  disply    ">
          {" "}
          Jonathon Bayme, CEO of Theory11
        </p>

        <div className="bg text-white">
          <p className="text-center build display-4   fw-bold pb-3 ">
            Build your dream business for $1/month
          </p>
          <p className="text-center dispy mb-5">
            Start your free trial and enjoy 3 months of Shopify for $1/month on
            select plans.
          </p>
          <div className="Main d-flex mb-3">
            <div>
              <input
                className="Enter"
                type="text"
                placeholder="Enter your email address"
              />
            </div>
            <div>
              <button className="Trail">Start free trail</button>
            </div>
          </div>

          <p className="text-center pb-5">
            Try Shopify free for 3 days, no credit card required. By entering
            your email, you agree to receive marketing emails from Shopify.
          </p>
        </div>
      </div>
      <div className="ch">
        <div className="container">
          <p className="display-4 fw-bold pt-5 pb-5">FAQ</p>
        </div>
        <div>
          <div className=" ">
            <div className="d-flex">
              <button onClick={() => setshow(!show  )} className="button">
                What is Shopify and how does it work?{" "}
                <span  className="icon">
                {show?<AiOutlineMinus /> :<GoPlus /> } 
                </span>
              </button>
            </div>
            {show ?   (
              <div>

                <p className="para">
                  This is the collapsible content. It can be any element or
                  React<br></br>
                  <li>pify, you can: </li>
                  <br></br>
                  <li>Create and customize an online store</li>
                  <br></br>
                  <li>
                    Sell in multiple places, including web, mobile, social
                    media,
                  </li>
                  <br></br>
                  online marketplaces, brick-and-mortar locations, and pop-up
                  shops<br></br>
                  Manage products, inventory, payments, and shipping<br></br>
                  Shopify is completely cloud-based and hosted, which means you
                  <br></br>
                  don't have to worry about upgrading or maintaining software or
                  web servers.<br></br>
                  This gives you the flexibility to access and run your business
                  from almost anywhere,<br></br>
                  including your mobile device
                </p>
              </div>
            ) : null }
          </div>
          <hr className="hr"></hr>
          <div className=" ">
            <div className="d-flex">
              <button onClick={() => setclose(!close)} className="button ">
                How much does Shopify cost?{" "}
                <span className="icon1">
                  {close?<AiOutlineMinus /> :<GoPlus /> }
                
                
                </span>
              </button>
            </div>
      
            {close ? (
              <div>
                
                <p className="para">
                  This is the collapsible content. It can be any element or
                  React<br></br>
                  <li>
                    Try Shopify free for 3 days, no credit card required.
                  </li>{" "}
                  <br />
                  After your trial expires, choose a pricing plan that
                  <br /> suits the size and stage of your business. including
                  your mobile device
                </p>
              </div>
            ) : null}
          </div>
          <hr className="hr"></hr>
          <div className=" ">
            <div className="d-flex">
              <button onClick={() => setopen(!open)} className="button ">
                {" "}
                Can I use my own domain name with Shopify?
                <span  className="icon2">
                {open?<AiOutlineMinus /> :<GoPlus /> }
                </span>
              </button>
            </div>
            {open ? (
              <div>
                <p className="para">
                  This is the collapsible content. It can be any element or
                  React<br></br>
                  <li>pify, you can: </li>
                  <br></br>
                  Yes, you can use your own domain name with Shopify.
                  <br />
                  <br />
                  If you have an existing domain name, 
                  Shopify from your store's admin.
                  <br />
                  If you don't have a domain name yet,
                  through Shopify or a third-party provider.
                  <br />
                </p>
              </div>
            ) : null}
          </div>
          <hr className="hr"></hr>
          <div className=" ">
            <div className="d-flex">
              <button onClick={() => seteven(!even)} className="button ">
                {" "}
                Do Ito need to designer or developer Shopify?
                <span  className="icon3">
                {even?<AiOutlineMinus /> :<GoPlus /> }
                </span>
              </button>
            </div>
            {even ? (
              <div>
                <p className="para">
                  This is the collapsible content. It can be any element or
                  React<br></br>
                  <li>pify, you can: </li>
                  <br></br>
                  Yes, you can use your own domain name with Shopify.
                  <br />
                  <br />
                  If you have an existing domain na
                  Shopify from your store's admin.
                  <br />
                  If you don't have a domain name yet, 
                  through Shopify or a third-party provider.
                  <br />
                  <li>pify, you can: </li>
                  <br></br>
                  Yes, you can use your own domain name with Shopify.
                  <br />
                  <br />
                  If you have an existing domain name, you can connect it to
                  Shopify from your store's admin.
                  <br />
                  If you don't have a domain name 
                  through Shopify or a third-party provider.
                  <br />
                </p>
              </div>
            ) : null}
          </div>
        </div>

        <div className="container">
          <button className="term">Term of service</button>
          <button className="policy">Privacy Policey</button>
        </div>
      </div>
    </>
  );
};

export default Shofiy;
