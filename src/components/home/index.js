import * as React from 'react';
import $ from 'jquery';
import Modal from "react-modal";
import { useState } from 'react';
import "./styles/index.css";

Modal.setAppElement("#root");

export function Home() {
    const [showModal, setShowModal] = useState(false);

    const showModalHandler = (event: any) =>{
        setShowModal(true);
    }
    const hideModalHandler = (event: any) =>{
        setShowModal(false);
    }
    const toggleModal = () => {
        setShowModal(!showModal);
    }

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
          $(".zoom img").css({
              transform: 'translate3d(-50%, -'+(scroll/100)+'%, 0) scale('+(100 + scroll/5)/100+')',
              //Blur suggestion from @janwagner: https://codepen.io/janwagner/ in comments
            //   "-webkit-filter": "blur(" + (scroll/200) + "px)",
            //   filter: "blur(" + (scroll/200) + "px)"
          });
      });
    return(
        <div id="monab-home">
        <header className="zoom">
            <img id="zoom-img" object-fit="cover" src="https://res.cloudinary.com/sabago/image/upload/v1605982119/store/invicta_auto_cold_resize2_wswfgy.png"/>
        </header>
            <main role="main">
                <div className="content">
                    <h1>MONAB Watches & Accessories</h1>
                    <button className='subscribe-button' onClick={toggleModal}> Subscribe to learn about incoming items</button> <br/>
                    <a  href="/store" id="monab-store-link" target="_blank"> Visit Store </a>
                    <p>
                        At Monab Watches & Accessories, we aspire to be Uganda's 
                        leading seller of truly authentic watches and related
                        accessories. We deal in both new and pre-owned watches,
                        after authentication by our local partners or in the US.  
                        Founded in late 2019, we have been selling mostly
                        used mid-range watches in the US. We strive to bring you top of 
                        the shelf brands that you love at an affordable rate.
                        All high end used watches are serviced before being listed.
                        We promise authenticity of all our goods and stand by this promise.
                    </p>
                    <p>
                        Currently, most of our stock is online. A physical store 
                        will be coming soon. In the meantime please check out our online store, where you can 
                        take a survey to let us know which accessories you would love
                        to see in our store!
                    </p>
                    <a  href="/store" id="monab-store-link" target="_blank"> Visit Store </a>
                   
          <Modal
            isOpen={showModal}
            onRequestClose={toggleModal}
            contentLabel="Subribe"
          >
            <div id="mc_embed_signup">
              <form action="https://gmail.us7.list-manage.com/subscribe/post?u=8bf16f7418a76e01bdace4527&amp;id=981740875e" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
                <div id="mc_embed_signup_scroll">
                <h2>Subscribe</h2>
                <div className="indicates-required"><span className="asterisk">*</span> indicates required</div>
                <div className="mc-field-group">
                  <label htmlFor="mce-EMAIL">Email Address  <span className="asterisk">*</span>
                  </label>
                  <input type="email" defaultValue="" name="EMAIL" className="required email" id="mce-EMAIL"/>
                </div>
                <div className="mc-field-group">
                  <label htmlFor="mce-FNAME">First Name </label>
                  <input type="text" defaultValue="" name="FNAME" className="" id="mce-FNAME"/>
                </div>
                <div className="mc-field-group">
                  <label htmlFor="mce-LNAME">Last Name </label>
                  <input type="text" defaultValue="" name="LNAME" className="" id="mce-LNAME"/>
                </div>
                <div className="mc-field-group size1of2">
                  <label htmlFor="mce-BIRTHDAY-month">Birthday </label>
                <div className="datefield">
                  <span className="subfield monthfield"><input className="birthday " type="text" pattern="[0-9]*" defaultValue="" placeholder="MM" size="2" maxLength="2" name="BIRTHDAY[month]" id="mce-BIRTHDAY-month"/></span> / 
                  <span className="subfield dayfield"><input className="birthday " type="text" pattern="[0-9]*" defaultValue="" placeholder="DD" size="2" maxLength="2" name="BIRTHDAY[day]" id="mce-BIRTHDAY-day"/></span> 
                  <span className="small-meta nowrap">( mm / dd )</span>
                </div>
                </div>	
                <div id="mce-responses" className="clear">
                  <div className="response" id="mce-error-response" style={{display:"none"}}></div>
                  <div className="response" id="mce-success-response" style={{display:"none"}}></div>
                </div>
                  {/* </div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups--> */}
                <div style={{position:"absolute", left:"-5000px", ariaHidden:"true"}}><input type="text" name="b_8bf16f7418a76e01bdace4527_981740875e" tabIndex="-1" defaultValue=""/></div>              
                <div className="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button"/></div>
                <div className="clear"><input type="submit" value="Close" name="Close" id="mc-embedded-subscribe" onClick={hideModalHandler} className="button"/></div>   
                </div>
              </form>
            </div>
          </Modal>
                    <h1> COMING SOON!</h1>
                </div>

            </main>
            </div>

    )
}