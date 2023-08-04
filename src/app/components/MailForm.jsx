'use client'

const MailForm = ({ email, setEmail, showError, resetError, handleCheckEmail }) => {
  return (
    <div className="formContainer flex flex-col my-8 px-8 pt-4 md:my-0 md:items-center md:gap-1 md:px-2 md:justify-center">
      <h1 className="font-bold mt-4 text-5xl md:pr-4">Stay updated!</h1>
      <p className="font-bold mt-4 md:pl-8">Join 60,000+ product managers receiving monthly updates on:</p>
      <ul className="mt-4 md:pl-8">
        <li className="pl-8 bg-list-icon bg-no-repeat bg-left-top my-2">Product discovery and building what matters</li>
        <li className="pl-8 bg-list-icon bg-no-repeat bg-left-top my-2">Measuring to ensure updates are a success</li>
        <li className="pl-8 bg-list-icon bg-no-repeat bg-left-top my-2">And much more!</li>
      </ul>

      <form className="email_signup md:pl-8 ">
        <div className="label_area flex flex-row items-center justify-between ">
          <label className="font-bold mt-4 md:mb-2 text-xs" htmlFor="email">Email address</label>
          {showError && <p className="error_message text-red-500 text-xs font-bold">Valid email required</p>}
        </div>
        <input
          type="text"
          className={` rounded-lg mb-4 mt-1  focus:border-coal-gray border border-coal-gray px-4 py-2 w-full ${showError ? ' border-red-500 bg-red-200' : 'border-coal-gray'}`}
          id="email"
          placeholder="email@company.com"
          onFocus={resetError}
          onChange={(event) => setEmail(event.target.value)}
          value={email}
        />
        <button className="  bg-dark-gray text-white w-full p-4 rounded-lg hover:bg-gradient-to-r from-peach-p via-peach to-tomato" text="Subscribe to monthly newsletter" onClick={handleCheckEmail}>
        Subscribe to monthly newsletter
        </button>
      </form>
    </div>
  );
};

export default MailForm;
