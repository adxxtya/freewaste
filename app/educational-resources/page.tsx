import React from "react";

const Blogs = () => {
  // Dummy data for demonstration
  const blogs = [
    {
      id: 1,
      title: "Decoding E-Waste: What Happens to Your Old Gadgets?",
      author: "Rutuja Khangal",
      date: "February 5, 2024",
      image:
        "https://forthecleanfuture.com/wp-content/uploads/2023/03/for-the-clean-future-featured-image-4-1296x700.png",
      excerpt:
        "Learn about the journey of electronic devices from your hands to the recycling facility. Explore the intricate process of e-waste recycling, uncovering how old gadgets are dismantled, and valuable materials are recovered.",
    },
    {
      id: 2,
      title: "E-Waste Environmental Impact: Beyond the Landfill",
      author: "Aditya Maurya",
      date: "January 28, 2024",
      image:
        "https://www.ewaste1.com/wp-content/uploads/2018/07/E-waste-and-the-environment.jpeg",
      excerpt:
        "Delve into the environmental consequences of improper e-waste disposal. Understand how toxic components in electronic devices can lead to soil, water, and air pollution, and explore the broader impact on ecosystems.",
    },
    {
      id: 3,
      title: "The Role of Green Technology in Reducing E-Waste",
      author: "Shruti Pathak",
      date: "January 21, 2024",
      image:
        "https://media.licdn.com/dms/image/C5112AQF3fSCHSu7pXA/article-cover_image-shrink_720_1280/0/1581926693662?e=2147483647&v=beta&t=fSSJi4QyPGrR1AzDPisbvLy0m4Qz0_m4Q5AWx5OYyAU",
      excerpt:
        "Explore how advancements in green technology contribute to reducing e-waste. Learn about eco-friendly manufacturing processes, energy-efficient devices, and innovations that promote sustainability in the tech industry.",
    },
    {
      id: 4,
      title: "E-Waste and Human Health: Understanding the Risks",
      author: "Rushi Patil",
      date: "Feb 09, 2024",
      image:
        "https://greentekreman.com/wp-content/uploads/2023/06/The-Negative-Impact-of-E-Waste-on-Human-Health-and-the-Environment.jpg",
      excerpt:
        "Examine the potential health risks associated with exposure to e-waste. Learn about the impact on both communities living near e-waste disposal sites and workers involved in the recycling process.",
    },
    {
      id: 5,
      title: "Empowering Change: How Individuals Can Reduce E-Waste",
      author: "Anamay Potdar",
      date: "December 20, 2023",
      image:
        "https://www.retail-insight-network.com/wp-content/uploads/sites/18/2023/12/Defra11.jpg",
      excerpt:
        "Discover practical tips for individuals to minimize e-waste and contribute to a more sustainable electronic ecosystem. From responsible disposal to extending the lifespan of devices, learn how small actions can make a big difference.",
    },

    // Add more blog objects as needed
  ];

  return (
    <div className="container mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {blogs.map((blog) => (
        <div
          key={blog.id}
          className="dark:bg-boxdark rounded-lg shadow-md overflow-hidden"
        >
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-48 object-cover object-center"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
            <p className="text-gray-600 mb-2">
              By {blog.author} | {blog.date}
            </p>
            <p className="text-gray-800">{blog.excerpt}</p>
            <a
              href={`educational-resources/${blog.id}`}
              className="text-blue-600 hover:underline mt-4 inline-block"
            >
              Read More
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blogs;
