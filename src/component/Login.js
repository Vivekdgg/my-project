import React, { useState, useEffect, useRef } from "react";
// import axios from "axios";
import BackButton from "./BackButton";
import CustomButton from "./CustomButton";
import Popup from "./Popup";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Login = ({ setUser }) => {
  const navigate = useNavigate();
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const hasFetched = useRef(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setPhone(e.target.value);
    setError(""); // Clear previous error messages
  };

  const handleCheckboxClick = () => {
    setIsChecked(!isChecked);
  };
  var formData = new FormData();
  formData.append("email", phone);
  const options = {
    method: "POST",
    body: formData,
  };

  const handleLogin = async () => {
    try {
      const response = await fetch(
        `https://www.newsfeedsmartapp.com/Vivektest/api/react/user.php`,
        options
      );
      const text = await response.text();
      console.log("Raw response text:", text); // Log raw response text
      const finaldata1 = JSON.parse(text); // Parse to JSON
      // Handle JSON response here
      // console.log("Login initiated", finaldata1.code);
      if (!isChecked) {
        alert('Please check the checkbox before submitting the form.');
      }
      if (finaldata1.code === 200) {
        setPopupMessage("Login Successful!");
        setShowPopup(true);
        document.getElementById("otp_disabled").removeAttribute("disabled");
        // navigate("/userprofile");
        // setUser({
        //   name: finaldata1.first_name,
        // });
      } else {
        setPopupMessage("Login Failed!");
        setShowPopup(false);
        setIsSubmitted(true);
        setError(finaldata1.message);
      }
    } catch (error) {
      console.error("Error logging in:", error);
      setPopupMessage("An error occurred!");
      setShowPopup(false);
    }
  };
  // const handleLogin = async (event) => {
  //   // event.preventDefault();

  //   // const result = await fetch(
  //   //   `https://www.newsfeedsmartapp.com/Vivektest/api/react/user.php`,
  //   //   options
  //   // );
  //   // const finaldata1 = await result.json();
  //   // console.log(finaldata1, "asdasd");
  //   console.log("Login initiated");
  //   // try {
  //   //   if (finaldata1.code === 200) {
  //   //     navigate("/userprofile");
  //   //     setUser({
  //   //       name: finaldata1.name,
  //   //     });
  //   //   } else {
  //   //     setError(finaldata1.message);
  //   //         }
  //   // } catch (error) {
  //   //     console.error("An error occurred: ", error);
  //   // }
  // };

  useEffect(() => {
    if (!hasFetched.current) {
      handleLogin();
      hasFetched.current = true;
    }
  }, []);

  return (
    <div className="container">
      <div className="firstPageContainer">
        <div className="leftContainer">
          <img src="Assets/Left-bg.png" alt="set" className="leftimg"></img>
        </div>
        <div className="rightContainer">
          <Link to={"../"}>
            <BackButton ButtonName={"← Back"} className="custom-class" />
          </Link>
          <img src="Assets/Bg.jpg" alt="set" className="rightimg"></img>
          <div className="rightmainContainer">
            <div className="logo">
              <img src="Assets/Oreo.png"></img>
            </div>
            <div className="formsection">
              <div className="input-type">
                <input
                  type="email"
                  placeholder="email"
                  value={phone}
                  onChange={handleChange}
                ></input>
                {error && <p style={{ color: "red" }}>{error}</p>}
              </div>

              <div className="input-type">
                <input
                  id="otp_disabled"
                  type="tel"
                  placeholder="OTP"
                  disabled
                ></input>
              </div>

              <div className="checkboxHolder">
                <div className="checkBoxContainer">
                  <div className="checkBox">
                    <img  src={isChecked ? 'Assets/Close-button.png' : 'Assets/Unticked.png'} onClick={handleCheckboxClick}></img>
                  </div>
                  <div className="chcekboxText">
                    <span>
                      I accept the <span>T&C</span>
                      <span>
                        <u>Privacy Notice</u>
                      </span>{" "}
                      of Mondelez and consent to Mondelez using my personal
                      information as stated in the
                    </span>
                  </div>
                </div>
                <div className="checkBoxContainer">
                  <div className="checkBox">
                    <img src="Assets/Unticked.png"></img>
                  </div>
                  <div className="chcekboxText">
                    <span>
                      I accept the <span>T&C</span>
                      <span>
                        <u>Privacy Notice</u>
                      </span>{" "}
                      of Mondelez and consent to Mondelez using my personal
                      information as stated in the
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <Link>
              <CustomButton text="Login" onClick={handleLogin} />
            </Link>
            {showPopup && (
              <Popup
                message={popupMessage}
                handleClose={() => setShowPopup(false)}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
