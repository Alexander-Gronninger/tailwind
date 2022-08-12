export default function Button({ text, type }) {
  return (
    <button
      type={type}
      className="col-start-1 col-end-3 bg-blue-900 text-white py-4 w-40 mx-auto rounded-full"
    >
      {text}
    </button>
  );
}
