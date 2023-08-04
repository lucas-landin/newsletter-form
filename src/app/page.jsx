"use client";
import MailForm from "./components/Mailform";
import ConfirmationMessage from "./components/ConfirmationMessage";
import ImageSwitcher from "./components/ImageSwitcher";
import { useState } from "react";

var EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export default function Home() {
  const [successSignup, setSuccessSignup] = useState(false);
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");

  const handleCheckEmail = (event) => {
    event.preventDefault();
    const isValidEmail = EMAIL_REGEX.test(email);
    setError(!isValidEmail);
    if (isValidEmail) {
      setSuccessSignup(true);
    }
  };

  const resetScreen = () => {
    setSuccessSignup(false);
    setEmail("");
    setError(false);
  };
  return (
    <>
      {!successSignup && (
        <div className=" mainContainer bg-white text-dark-gray w-full  justify-end flex flex-col-reverse md:rounded-[20px] md:grid md:grid-cols-2 md:mx-5 md:w-[800px] md:h-[580px]">
          <MailForm
            email={email}
            setEmail={setEmail}
            showError={error}
            resetError={() => setError(false)}
            handleCheckEmail={handleCheckEmail}
          />
          <ImageSwitcher />
        </div>
      )}

      {successSignup && (
        <ConfirmationMessage resetScreen={() => resetScreen()} email={email} />
      )}
    </>
  );
}
