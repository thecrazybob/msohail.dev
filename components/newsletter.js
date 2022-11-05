import arrowIcon from "../public/arrow.svg";
import Image from "next/image";
import React, { useRef, useState } from "react";

export default function Newsletter() {
  // 1. Create a reference to the input so we can fetch/clear it's value.
  const inputEl = useRef(null);
  // 2. Hold a message in state to handle the response from our API.
  const [message, setMessage] = useState("");

  const subscribe = async (e) => {
    e.preventDefault();

    // 3. Send a request to our API with the user's email address.
    const res = await fetch("/api/mailchimp", {
      body: JSON.stringify({
        email: inputEl.current.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const { error } = await res.json();

    if (error) {
      // 4. If there was an error, update the message in state.
      setMessage(error);

      return;
    }

    // 5. Clear the input value and show a success message.
    inputEl.current.value = "";
    setMessage("Success! 🎉 You are now subscribed to the newsletter.");
  };

  return (
    <section className="mb-16 mt-16 font-body">
      <div className="mb-10 font-sans text-4xl">Newsletter</div>
      <div className="text-xl">
        I ocassionally send out newsletters where I share life updates, web
        development tips and talk about newly-released tech. If you are
        interested, you can signup here:
      </div>
      <form
        onSubmit={subscribe}
        className="my-10 flex w-full justify-between rounded-lg border-2 border-black bg-white dark:border-white lg:w-3/5"
      >
        <input
          aria-label="Email address"
          required
          ref={inputEl}
          className="w-full rounded-md px-4 text-xl dark:text-black"
          type="email"
          name="email"
          id="email-input"
        />
        <button
          className="m-3 flex max-w-max items-center space-x-2 rounded-md bg-black px-4 py-2 text-xl text-white"
          type="submit"
        >
          <Image alt="Right arrow" layout="fixed" src={arrowIcon}></Image>
          <span>Submit</span>
        </button>
      </form>
      {message
        ? message
        : `I'll only send emails when new content is posted. No spam.`}
    </section>
  );
}
