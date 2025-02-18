import { useState } from "react";
import { supabase } from "../lib/supabase";

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase
        .from("contacts")
        .insert([
          {
            name: formState.name,
            email: formState.email,
            subject: formState.subject,
            message: formState.message,
          },
        ])
        .select();

      if (error) {
        throw new Error(error.message);
      } else {
        setFormState({ name: "", email: "", subject: "", message: "" });
        console.log("Message sent successfully:", data);
      }
    } catch (error) {
      console.error("Unexpected error:", error);
    }
  };

  return (
    <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-primary">
        Contact me!
      </h2>
      <p className="mb-8 lg:mb-16 font-bold text-center text-accent sm:text-xl">
        Looking for a developer for your team or project? Send me a message with
        the details, and let's talk!
      </p>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label className="block mb-2 text-sm font-medium text-accent">
            Your name:
          </label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={handleChange}
            value={formState.name}
            className="text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-accentd1 focus:ring-primary focus:border-primary shadow-sm-light"
            placeholder="What's your name?"
            required
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-accent">
            Your email:
          </label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={handleChange}
            value={formState.email}
            className="text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-accentd1 focus:ring-primary focus:border-primary shadow-sm-light"
            placeholder="example@gmail.com"
            required
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-accent">
            Subject:
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            onChange={handleChange}
            value={formState.subject}
            className="text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-accentd1 focus:ring-primary focus:border-primary shadow-sm-light"
            placeholder="Let me know how I can help you"
            required
          />
        </div>
        <div className="sm:col-span-2">
          <label className="block mb-2 text-sm font-medium text-accent">
            Your message:
          </label>
          <textarea
            id="message"
            name="message"
            onChange={handleChange}
            value={formState.message}
            className="text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-accentd1 focus:ring-primary focus:border-primary shadow-sm-light"
            placeholder="Leave a comment..."
          ></textarea>
        </div>
        <button
          className="py-3 px-5 text-sm text-center text-[#2B2D42] font-extrabold rounded-lg bg-primary sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
          Send message
        </button>
      </form>
    </div>
  );
}
