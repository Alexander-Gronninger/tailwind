export default function () {
  return (
    <section className=".block m-24 bg-white py-6 px-14 w-730px block mx-auto ">
      <h1 className="text-4xl text-blue-700">Get in touch</h1>
      <form action="post" className="grid grid-col-2 my-10 gap-5">
        <input
          className="p-2 rounded-md col-start-1 col-end-2 text-blue-700 placeholder-blue-600 bg-blue-100"
          type="text"
          placeholder="First Name"
        />
        <input
          className="p-2 rounded-md col-start-2 col-end-3 text-blue-700 placeholder-blue-600 bg-blue-100"
          type="text"
          placeholder="Last Name"
        />
        <input
          className="p-2 rounded-md col-start-1 col-end-2 text-blue-700 placeholder-blue-600 bg-blue-200"
          type="text"
          placeholder="Email"
        />
        <input
          className="p-2 rounded-md col-start-2 col-end-3 text-blue-700 placeholder-blue-600 bg-blue-200"
          type="text"
          placeholder="Phone"
        />
        <input
          className="p-2 rounded-md col-start-1 col-end-3 text-blue-700 placeholder-blue-600 bg-blue-300"
          type="text"
          placeholder="Address"
        />
        <input
          className="p-2 rounded-md col-start-1 col-end-3 text-blue-700 placeholder-blue-600 bg-blue-400"
          type="text"
          placeholder="Message"
        />
      </form>
      <button className="text-white bg-blue-700 py-4 px-14 mx-auto rounded-full block">
        Submit
      </button>
      <p className="text-green-500 my-5">Thanks for submitting!</p>
    </section>
  );
}
