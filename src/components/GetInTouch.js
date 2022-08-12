import Button from "./Button";
import InputField from "../components/InputField";
import Textarea from "../components/Textarea";

export default function ContactForm() {
  return (
    <>
      <section className=".block m-24 bg-white py-6 px-14 w-730px block mx-auto ">
        <h1 className="text-4xl text-blue-700 mb-5">Get in touch</h1>
        <form className="grid grid-cols-2 gap-5 my-10">
          <InputField color="bg-purple-100" type="text" label="First Name" />
          <InputField color="bg-purple-100" type="text" label="Last Name" />
          <InputField color="bg-purple-200" type="email" label="Email" />
          <InputField color="bg-purple-200" type="tel" label="Phone" />
          <InputField
            span="col-start-1 col-end-3"
            color="bg-purple-300"
            type="text"
            label="Address"
          />
          <Textarea
            span="col-start-1 col-end-3"
            color="bg-purple-400"
            label="Message"
          />
          <Button text="Submit" type="submit" />
          <p className="text-green-500 my-5">Thanks for submitting!</p>
        </form>
      </section>

      {/* <section className=".block m-24 bg-white py-6 px-14 w-730px block mx-auto ">
      <h1 className="text-4xl text-blue-700">Get in touch</h1>
      <form action="post" className="grid grid-col-2 my-10 gap-5">
        <input
          className={
            "p-2 rounded-md col-start-1 col-end-2 text-blue-700 placeholder-blue-600 bg-purple-" +
            test
          }
          type="text"
          placeholder="First Name"
        />
        <input
          className="p-2 rounded-md col-start-2 col-end-3 text-blue-700 placeholder-blue-600 bg-purple-100"
          type="text"
          placeholder="Last Name"
        />
        <input
          className="p-2 rounded-md col-start-1 col-end-2 text-blue-700 placeholder-blue-600 bg-purple-200"
          type="text"
          placeholder="Email"
        />
        <input
          className="p-2 rounded-md col-start-2 col-end-3 text-blue-700 placeholder-blue-600 bg-purple-200"
          type="text"
          placeholder="Phone"
        />
        <input
          className="p-2 rounded-md col-start-1 col-end-3 text-blue-700 placeholder-blue-600 bg-purple-300"
          type="text"
          placeholder="Address"
        />
        <textarea
          className="p-2 rounded-md col-start-1 col-end-3 text-blue-700 placeholder-blue-600 bg-purple-400 h-16"
          type="text"
          placeholder="Message"
        />
      </form>
      <button className="text-white bg-blue-700 py-4 px-14 mx-auto rounded-full block">
        Submit
      </button>
      <p className="text-green-500 my-5">Thanks for submitting!</p>
    </section> */}
    </>
  );
}
