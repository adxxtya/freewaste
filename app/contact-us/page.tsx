import Head from "next/head";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Contact Us - Your E-Waste Recycling Project</title>
        <meta
          name="description"
          content="Contact us for inquiries, feedback, and contributions."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-gray-900">Contact Us</h1>
        <p className="mt-2 text-lg text-gray-600">
          Thank you for your interest in Your E-Waste Recycling Project. We
          value your feedback, inquiries, and contributions. Please feel free to
          get in touch with us using the provided contact information or the
          form below.
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border p-6 rounded-md">
            <h2 className="text-lg font-semibold mb-4">Contact Information</h2>
            <p>
              Email:{" "}
              <a href="mailto:info@ewasteproject.com">info@ewasteproject.com</a>
            </p>
            <p>
              Phone: <a href="tel:+1234567890">+1 (234) 567-890</a>
            </p>
            <p>Address: Navinchandra Mehta College, Dadar, India</p>
          </div>
          <form className="border p-6 rounded-md">
            <h2 className="text-lg font-semibold mb-4">Get in Touch</h2>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              ></textarea>
            </div>
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit
            </button>
          </form>
        </div>

        <div className="mt-8">
          <h2 className="text-lg font-semibold mb-4">
            We Want to Hear From You!
          </h2>
          <p className="text-gray-600">
            Whether you have questions about our services, suggestions for
            improvement, or simply want to share your experiences with e-waste
            recycling, we're here to listen. Your feedback is crucial in helping
            us make a positive impact on the environment.
          </p>
        </div>

        <div className="mt-8">
          <h2 className="text-lg font-semibold mb-4">Social Media</h2>
          <div className="flex space-x-4">
            <a href="#" className="text-indigo-600 hover:text-indigo-800">
              Facebook
            </a>
            <a href="#" className="text-indigo-600 hover:text-indigo-800">
              Twitter
            </a>
            <a href="#" className="text-indigo-600 hover:text-indigo-800">
              Instagram
            </a>
            <a href="#" className="text-indigo-600 hover:text-indigo-800">
              LinkedIn
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContactPage;
