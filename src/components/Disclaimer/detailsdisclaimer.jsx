import Link from "next/link";

export default function DetailsDisclaimer() {
    return (
      <div>
        <main className="container">
          <h2>Legal Disclaimer</h2>
          <p>
            The information provided by <strong>Vishal Engineers & Galvanizers</strong> (“we,” “us,” or “our”) on this website is for general informational purposes only. 
            While we strive to provide up-to-date and accurate information, we make no warranties or representations of any kind, express or implied, 
            regarding the completeness, accuracy, reliability, suitability, or availability of any information, products, services, or related graphics 
            contained on the website for any purpose. Any reliance you place on such information is strictly at your own risk. The information on this 
            website should not be considered a substitute for professional advice or consultation. Users are encouraged to seek guidance from appropriate 
            professionals when making decisions related to engineering, financial, or technical matters.
          </p>
  
          <h2>No Professional Advice</h2>
          <p>
            The content on this website is not intended to constitute professional advice of any kind, including but not limited to engineering, financial, 
            legal, or technical advice. While we aim to provide valuable insights and general knowledge, the website content should not be used as a 
            substitute for consulting with a qualified professional. The information we provide is intended to be educational and informative, but it does not 
            replace individualized recommendations based on your specific needs. We strongly advise that you consult with experts before making decisions 
            related to your business, engineering projects, or legal matters. Any action you take based on the information on this website is at your own 
            discretion and risk.
          </p>
  
          <h2>Intellectual Property Disclaimer</h2>
          <p>
            All content, including **text, images, logos, trademarks, and designs, displayed on this website is the **exclusive property** of **Vishal Engineers & Galvanizers**, 
            unless otherwise noted. Unauthorized use, reproduction, or distribution of our content is strictly prohibited. If you believe that any content 
            on our site infringes on your intellectual property rights, please contact us immediately. We take intellectual property rights seriously and will 
            take necessary actions to address any potential violations. Users may not copy, modify, or redistribute website materials for commercial purposes 
            without written permission from **Vishal Engineers & Galvanizers**. Any unauthorized use of our intellectual property may result in legal action 
            to protect our rights and assets.
          </p>
  
          <h2>Product & Service Disclaimer</h2>
          <p>
            The descriptions of our **products and services** on this website are intended to be **general information only**. While we strive for accuracy, 
            actual **product specifications, pricing, availability, and performance** may vary. We reserve the right to make changes or discontinue 
            any product or service without prior notice. Customers should contact us directly to verify details before making purchases or business decisions. 
            We do not guarantee that all information presented is up to date at all times, as industry conditions and technologies may change. 
            Our company is not responsible for any loss incurred due to outdated or misinterpreted product descriptions. It is always recommended to seek 
            personalized advice and documentation when considering any product or service.
          </p>
  
          <h2>Privacy & Data Disclaimer</h2>
          <p>
            We value your privacy and are committed to protecting any personal information you provide to us. However, please note that 
            **transmitting information over the internet is not completely secure**. While we take reasonable precautions to safeguard your data, 
            we **cannot guarantee** the absolute security of any data transmitted to our site. Any information you share with us is done at your own risk. 
            We advise users to be cautious when submitting personal details and to use secure methods whenever possible. If you have concerns about privacy, 
            please review our <strong><Link href="/privacy">Privacy Policy</Link></strong> for further information on how we handle and protect data. 
            We are not responsible for any unauthorized access to user data due to third-party actions, cyberattacks, or system vulnerabilities.
          </p>
        </main>
      </div>
    );
  }
  