import React from "react";

const AboutUs = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <p className="mb-6">
        Welcome to Your E-Waste Recycling Project, where our mission is to make
        a positive impact on the environment by promoting responsible e-waste
        disposal practices. Learn more about who we are and why we are
        passionate about creating a sustainable future.
      </p>
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-2">Our Mission</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>Raise awareness about the environmental and health impacts...</li>
          <li>
            Provide accessible information on e-waste recycling facilities...
          </li>
          <li>
            Encourage users to responsibly recycle their electronic devices...
          </li>
        </ul>
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-2">Our Journey</h2>
        <p className="mb-4">
          Your E-Waste Recycling Project started as a college mini-project with
          the goal of creating a simple yet impactful platform. Over time, our
          vision expanded, and we collaborated with like-minded individuals who
          share our commitment to environmental sustainability.
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-2">Get Involved</h2>
        <p className="mb-4">
          We invite you to join us on this journey towards a greener future.
          Explore our website, use our locator to find e-waste collection
          centers, and contribute to our community forum. Together, we can make
          a difference in reducing the environmental footprint of electronic
          waste.
        </p>
        <p className="font-semibold">
          Thank you for being a part of Your E-Waste Recycling Project!
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
