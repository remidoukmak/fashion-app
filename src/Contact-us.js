import React, { useState } from "react";
import "./Contact-us.css";

export const ContactUs = () => {
  const [checked, setChecked] = useState(false);
  const [address, setAddress] = useState(false);

  return (
    <>
      <div id="items-container">
        <div className="float-container">
          <h1 className="contact-us-title">Contact us</h1>
          <form class="my-form">
            <div className="contact-us-intro">
              <p>
                totam rem aperiam, eaque ipsa quae ab illo inventore veritatis
                et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                ipsam voluptatem quia voluptas sit aspernatur aut odit aut
                fugit, sed quia consequuntur magni dolores eos qui ratione
              </p>
            </div>
            <ul>
              <li>
              </li>
              <li>
                <div className="grid grid-2">
                  <label>Full name</label>
                  <label>Email address </label>
                </div>
                <div class="grid grid-2">
                  <input type="text" placeholder="" />
                  <input type="email" placeholder="" />
                </div>
              </li>
              <li>
                <label> Phone number 01</label>
                <div class="grid">
                  <input type="tel" placeholder="" />
                </div>
              </li>
              <label>
                <input
                  type="checkbox"
                  onChange={() => setChecked(!checked)}
                  checked={checked}
                />
                {checked ? (
                  <input
                    className="add-new-number-2"
                    name="Phone  number"
                    type="tel"
                    placeholder="Phone number"
                  />
                ) : (
                  <div></div>
                )}
                <div className="add-new-number">
                  <h2>Add phone Number</h2>
                </div>
              </label>
              <li>
                <textarea placeholder="Message"></textarea>
              </li>
              <li>
                <input type="checkbox" id="terms" />
                <label for="terms">add address details</label>
              </li>
              <li>
                <div>
                  <label>
                    {" "}
                    <h4>Add Address</h4>
                    <input
                      type="checkbox"
                      onChange={() => setAddress(!address)}
                      address={address}
                    />
                    {address ? (
                      <>
                        <li>
                          <div className="grid grid-2">
                            <label>Address 1</label>
                            <label>Address 2 (Optional)</label>
                          </div>
                          <div class="grid grid-2">
                            <input type="text" placeholder="Name" />
                            <input type="email" placeholder="email" />
                          </div>
                        </li>
                        <li>
                          <div className="grid grid-4">
                            <label>City/Town</label>
                            <label>State/County</label>
                            <label>Postcode</label>
                            <label>Country</label>
                          </div>
                          <div class="grid grid-4">
                            <input type="text" placeholder="City/Town" />
                            <input type="text" placeholder="State/County" />
                            <input type="Postcode" placeholder="Postcode" />
                            <input type="text" placeholder="Country" />
                          </div>
                        </li>
                      </>
                    ) : (
                      <div></div>
                    )}
                  </label>
                </div>
                <div class="grid">
                  <button class="btn-grid" type="submit">
                    <span class="front">SUBMIT</span>
                  </button>
                </div>
              </li>
            </ul>
          </form>
          <div>
            <img
              className="my-form"
              src="https://www.seekpng.com/png/detail/35-351553_welcome-nucleic-acid-cartoon.png"
            />
          </div>
        </div>
      </div>
      <footer>
        <div class="container">
          <small>
            Made with <span>❤</span> by{" "}
            <a href="http://georgemartsoukos.com/" target="_blank">
              Reem
            </a>
          </small>
        </div>
      </footer>
    </>
  );
};
