"use client";
import Image from "next/image";
const ConfirmationMessage = ({ email, resetScreen }) => {
  return (
    <div className="flex justify-center items-center w-full">
      <div className="bg-white w-full mx-8 rounded-3xl flex flex-col justify-center gap-4 py-8 px-10 text-dark-gray md:w-[460px] md:h-[480px]">
        <div className=" md:mb-10 w-[60px] h-[60px]">
          <Image
            src="/icon-success.svg"
            alt="Imagem Mobile"
            width={64}
            height={64}
            layout="responsive"
          />
        </div>

        <h2 className="text-4xl md:text-6xl font-bold ">
          Thanks for subscribing!
        </h2>
        <p className="text-lg ">
          A confirmation email has been sent to{" "}
          <span className="font-bold">{email}</span>. Please open it and click
          the button inside to confirm your subscription.
        </p>
        <button
          className=" bg-dark-gray text-white w-full p-4 rounded-lg hover:bg-gradient-to-r from-peach-p via-peach to-tomato"
          onClick={resetScreen}
        >
          Dismiss message
        </button>
      </div>
    </div>
  );
};

export default ConfirmationMessage;
