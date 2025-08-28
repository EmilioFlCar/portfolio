import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { IoIosSend } from "react-icons/io";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("meozbgvr");

if (state.succeeded) {
  return (
    <div className="text-center max-w-md mx-auto">
      <p className="text-green-500 font-semibold mb-4 text-lg">
        Message received!
      </p>
      <p className="text-[--color-text-muted] mb-6">
        I’ll reply to your email as soon as I can.
      </p>
      <button
        className="inline-block bg-primary text-background font-extrabold rounded px-4 py-2 md:text-base transition-transform duration-200 hover:bg-[#e8c849] hover:scale-110"        onClick={() => window.location.reload()}
      >
        Send another message
      </button>
    </div>
  );
}

  return (
    <form className="grid gap-y-6 p-4" onSubmit={handleSubmit}>
      {/* Nombre */}
      <div className="flex flex-col gap-y-2">
        <label htmlFor="name" className="block font-medium">
          Your Name
        </label>
        <input
          id="name"
          name="name"
          placeholder="John Doe"
          required
          aria-required="true"
          className="h-12 appearance-none rounded-xl border-0 px-4 ring-1 ring-inset bg-accent text-background placeholder:text-[--color-text-muted]"
        />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
      </div>

      {/* Email */}
      <div className="flex flex-col gap-y-2">
        <label htmlFor="email" className="block font-medium">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="example@email.com"
          required
          aria-required="true"
          className="h-12 appearance-none rounded-xl border-0 px-4 ring-1 ring-inset bg-accent text-background placeholder:text-[--color-text-muted]"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>

      {/* Mensaje */}
      <div className="flex flex-col gap-y-2">
        <label htmlFor="message" className="block font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="What would you like to discuss?"
          required
          aria-required="true"
          className="h-32 resize-y rounded-xl border-0 px-4 py-3 text-background ring-1 ring-inset bg-accent placeholder:text-[--color-text-muted]"
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </div>

      {/* Submit */}
      <div className="flex justify-center">
        <button 
          type="submit" 
          className="flex items-center gap-2 mx-auto bg-primary text-background font-extrabold rounded px-4 py-2 transition-transform duration-200 hover:bg-[#e8c849] hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed" 
          disabled={state.submitting}
        >
          {state.submitting ? "Sending..." : "Submit"}
          <IoIosSend size={25} />
        </button>
      </div>
    </form>
  );
}
