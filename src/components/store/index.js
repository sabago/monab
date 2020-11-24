import * as React from 'react';
import WaterWave from '../../waterEffect';
import './styles/index.css';

import { Container, Row, Col } from "react-bootstrap";
import  *  as Survey from 'survey-react';
import ReactDOM from 'react-dom';
import { useState } from 'react';
import Modal from "react-modal";

Modal.setAppElement("#root");

export function Store() {
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

  Survey.StylesManager.applyTheme("default");
//   Survey
//     .StylesManager
//     .applyTheme("bootstrap");
// Survey.defaultBootstrapCss.navigationButton = "btn btn-green";
  let json = {
      "pages": [
       {
        "name": "monab accessories",
        "elements": [
         {
          "type": "checkbox",
          "name": "watch brand options",
          "title": "Tell us about some of your favorite watch brands. (Select as many as apply)",
          "isRequired": true,
          "choices": [
           {
            "value": "seiko",
            "text": "Seiko"
           },
           {
            "value": "citizen",
            "text": "Citizen"
           },
           {
            "value": "gshock",
            "text": "G-Shock"
           },
           {
            "value": "timex",
            "text": "Timex"
           },
           {
            "value": "fossil",
            "text": "Fossil"
           },
           {
            "value": "tissot",
            "text": "Tissot"
           },
           {
            "value": "swiss-army",
            "text": "Siwss Army"
           },
           {
            "value": "casio",
            "text": "Casio"
           },
           {
            "value": "orient",
            "text": "Orient"
           },
           {
            "value": "victorinix",
            "text": "Victorinix"
           },
           {
            "value": "invicta",
            "text": "Invicta"
           },
           {
            "value": "tagheuer",
            "text": "Tag Heuer"
           }
          ]
         }
        ]
       },
       {
        "name": "questions page",
        "elements": [
         {
          "type": "comment",
          "name": "other watch brands",
          "visibleIf": "{watch brand options} notempty",
          "title": " What other watch brands would you like to see in our store?",
          "isRequired": true
         },
         {
          "type": "comment",
          "name": "wallet brands",
          "title": "Please tell us about your favorite wallet brands..."
         },
         {
          "type": "comment",
          "name": "sunglasses brands",
          "title": "Got any favorite sunglasses brands?"
         }
        ]
       }
      ]
     }

function sendDataToServer(survey: any) {
  //send Ajax request to your web server.
  JSON.stringify(survey.data);
}

var survey = new Survey.Model(json);
survey.surveyPostId = "d96ec105-334f-4742-a5f9-5608294290a7";
//Optionally, show saving progress and show an error and "Save Again" button if the results can't be stored.
// survey.surveyShowDataSaving = true;
// $("#surveyContainer").Survey({
//   model: survey,
//   onComplete: sendDataToServer
// });
  return (
    <Container fluid={true} id="monab-store">
      <WaterWave
      id="store"
      style={{ width: '100%', height: '100%', backgroundSize: 'cover' }}
      imageUrl={'https://res.cloudinary.com/sabago/image/upload/c_scale,w_3600/v1605993876/store/lucien_piccard_right_belvwl.jpg'}
    >
      {({ pause, play }) => (
        <div className="container">
          <h1 style={{color: "white"}}>COMING SOON!</h1>
          {<Survey.Survey model={survey} onComplete={sendDataToServer(survey)} isExpanded={true}/>}
          <h3><a id="monab-watches-link"  target="_blank" href="/"> Website </a></h3>
          <button className='store-button' onClick={toggleModal}> Subscribe to learn about incoming items</button>
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
        </div>
      )}
      </WaterWave>
    </Container>
    );
}