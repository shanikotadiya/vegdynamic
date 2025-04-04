const ContactMap = () => {
  return (
    <section className="contact__map">
      <div className="contact__map-wrap">
        {/* Embedded Google Map using iframe */}
        <iframe
          id="gmap_canvas"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3674.689695777847!2d72.45207359999999!3d22.924813500000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e90e8ff48f1a3%3A0x900f8706c7c37579!2sVishal%20Engineers%20%26%20Galvanizers%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1741697396578!5m2!1sen!2sin"
          referrerPolicy="no-referrer-when-downgrade"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>

        {/* Optional location icon */}
        <div className="contact__map-icon">
          <i className="fa-solid fa-location-dot"></i>
          <img src="/assets/img/bg/contact-icon-bg.png" alt="Map Icon" />
        </div>
      </div>
    </section>
  );
};

export default ContactMap;
