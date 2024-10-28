import React from 'react'

function Terms() {
  return (
    <div style={{backgroundImage : `url(${require('../termsbg.jpeg')})`,backgroundSize : "cover",backgroundAttachment: "fixed"}}>
      <h4 className="display-6 text-center">Our terms and conditions</h4>
      <p>
        <ol>
          <li>
            <h5>Acceptance of Terms</h5>
            <p>By accessing and using ScoreCrafters, you agree to comply with and be bound by these Terms and Conditions. If you do not agree to these terms, please refrain from using our website or services.</p>
          </li>

          <li>
            <h5>Changes to Terms</h5>
            <p>ScoreCrafters reserves the right to modify, update, or change these Terms and Conditions at any time. Any modifications will be effective immediately upon posting on this page. It is your responsibility to review these terms periodically.</p>
          </li>

          <li>
            <h5>Use of Services</h5>
            <p>      
              <ol>
                <li>You must be of legal age in your jurisdiction to use our services.</li>
                <li>You agree not to use our services for any illegal or unauthorized purpose.</li>
                <li>ScoreCrafters retains the right to refuse service to anyone for any reason at any time.</li>  
              </ol>  
            </p>
          </li>

          <li>
            <h5>User Accounts</h5>
            <p>
              <ol>
                <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
                <li>Notify us immediately of any unauthorized use of your account or any other breach of security.</li>
              </ol> 
            </p>
          </li>

          <li>
            <h5>Intellectual Property</h5>
            <p>
              <ol>
                <li>All content on this website, including but not limited to text, graphics, logos, images, and software, is the property of ScoreCrafters and is protected by intellectual property laws.</li>
                <li>You may not reproduce, distribute, display, or transmit any portion of the website without prior written consent from ScoreCrafters.</li>
              </ol>
            </p>
          </li>

          <li>
            <h5>Privacy Policy</h5>
            <p>Use of our services is also governed by our Privacy Policy. Please review our Privacy Policy to understand our practices.</p>
          </li>

          <li>
            <h5>Limitation of Liability</h5>
            <p>ScoreCrafters shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use our services.</p>
          </li>

          <li>
            <h5>Governing Law</h5>
            <p>These Terms and Conditions are governed by and construed in accordance with the laws of Your Jurisdiction. Any disputes arising out of or in connection with these terms shall be resolved through arbitration or as otherwise mutually agreed upon.</p>
          </li>

          <li>
            <h5>Contact Information</h5>
            <p>If you have any questions or concerns regarding these Terms and Conditions, please contact us at scorecrafters@gmail.com.</p>
          </li>
        </ol>
      </p>
    </div>
  )
}

export default Terms
