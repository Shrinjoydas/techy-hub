import React from "react";

function Contact() {
  return (
    <>
      <div className="contact">
        <main>
          <h1>Contact Us</h1>

          <form>
            <div>
              <label>Name</label>
              <input type="massage" placeholder="Name" id="name" />
            </div>
            <div>
              <label>Email</label>
              <input type="email" placeholder="Email" id="email" />
            </div>
            <div>
              <label>Massage</label>
              <input type="massage" placeholder="Massage" id="massage" />
            </div>

            <button type="submit">Send</button>
          </form>
        </main>
      </div>
    </>
  );
}

export default Contact;
