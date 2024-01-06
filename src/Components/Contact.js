const Contact = () => {
  return (
    <div>
      <h2
        className="text-3xl font-bold
      "
      >
        this is Contact page
      </h2>
      <form>
        <div>
          <input
            type="text"
            className="border border-black p-2 m-2"
            placeholder="name"
          />
          <input
            type="text"
            className="border border-black p-2 m-2"
            placeholder="contact"
          />
          <button
            type="button"
            className="border border-black p-2 m-2 bg-green-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
