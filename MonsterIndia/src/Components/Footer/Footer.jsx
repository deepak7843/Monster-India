import React from "react";
import styled from "styled-components";


function Footer() {
  return (
    <FooterStyles>
      <FooterWrap>
        <div style = {{textAlign: "left", marginRight: 30}} >
          <h3 style= {{color: "white"}} >Job Seekers</h3>
          <p>Job Search</p>
          <p>Job Seekers Login</p>
          <p>Upload Resume</p>
          <p>Search Tips</p>
          <p>Find Companies</p>
          <p>Career Advice</p>
          <p>Free Job Alert</p>
          <p>Help</p>
        </div>
      </FooterWrap>
      <FooterWrap>
        <div style = {{textAlign: "left", marginRight: 30}}>
          <h3  style= {{color: "white"}}>Employers</h3>
          <p>Employers Login</p>
          <p>Access Resume Database</p>
          <p>Adverise with us</p>
          <p>Buy Online</p>
          <p>Job Posting</p>
          <p>Join mRecuriters</p>
          <p>Research Reports</p>
        </div>
      </FooterWrap>
      <FooterWrap>
        <div style = {{textAlign: "left", marginRight: 30}}> 
          <h3  style= {{color: "white"}}>Monster</h3>
          <p>About Us</p>
          <p>Career With Us</p>
          <p>Testimonials</p>
          <p>XML Sitemap</p>
          <p>Contact Us</p>
          <p>Send Feedback</p>
          <p>Html Sitemap</p>
          <p>Jobs App</p>
        </div>
      </FooterWrap>
      <FooterWrap style = {{textAlign: "left", marginRight: 30}}>
        <div>
          <h3  style= {{color: "white"}}>Stay Connected</h3>
          <p>Facebook</p>
          <p>Linkedin</p>
          <p>Youtube</p>
          <p>Twitter</p>
          <p>Instagram</p>
          <div><img src="https://media.monsterindia.com/trex/public/default/images/android-footer.png" alt="" /></div>
          <div><img src="https://media.monsterindia.com/trex/public/default/images/ios-footer.png" alt="" /></div>
        </div>
      </FooterWrap>
      <FooterWrap style = {{textAlign: "left", marginRight: 30}}>
        <div>
          <h3  style= {{color: "white"}}>Legal</h3>
          <p>Security & Fraud</p>
          <p>Terms of Use</p>
          <p>Complaints</p>
          <p>Privacy Policy</p>
          <p>Be Safe</p>
        </div>
      </FooterWrap>
    </FooterStyles>
  );
}

export default Footer;

const FooterStyles = styled.div`
  background-color: #5D50A6;
  display: flex;
  flex-direction: row;
  color: white;
  padding: 40px;
 
`;

const FooterWrap = styled.div`
  margin-left: 60px;
   p{
      margin-bottom: 15px
   }
    h3{
      margin-bottom: 15px
    }
`;