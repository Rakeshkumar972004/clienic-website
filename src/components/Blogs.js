import React, { useState } from "react";
import "./Blogs.css";


function Blogs() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const blogs = [
    {
      title: "Healthy Lifestyle Tips",
      shortDesc:
        "Learn how to maintain your health with simple daily habits and preventive care strategies.",
      fullDesc:
        "A healthy lifestyle includes balanced nutrition, regular exercise, stress management, adequate sleep, and routine medical checkups. Making small daily improvements can significantly enhance long-term wellness and reduce health risks.",
      image: "../assets/blog/lifestyle.png",
    },
    {
      title: "Understanding Fertility",
      shortDesc:
        "Everything you need to know about fertility treatment options and reproductive health.",
      fullDesc:
        "Fertility treatments include lifestyle guidance, medication, hormonal therapy, IUI, and IVF procedures. Early consultation with specialists improves success rates and ensures personalized reproductive care.",
      image: "../assets/blog/fertilityblog.png",
    },
  ];

  const toggleReadMore = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="blogs" id="blogs">
      <div className="blogs-header">
        <h2>Latest Articles</h2>
        <p>Stay informed with expert healthcare insights and wellness advice.</p>
      </div>

      <div className="blog-container">
        {blogs.map((blog, index) => (
          <div key={index} className="blog-card">
            <img src={blog.image} alt={blog.title} />
            <div className="blog-content">
              <h3>{blog.title}</h3>

              <p>
                {expandedIndex === index
                  ? blog.fullDesc
                  : blog.shortDesc}
              </p>

              <button
                className="read-more"
                onClick={() => toggleReadMore(index)}
              >
                {expandedIndex === index ? "Show Less" : "Read More"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Blogs;
