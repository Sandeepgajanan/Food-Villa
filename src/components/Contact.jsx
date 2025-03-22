import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    
    form.append("access_key", "YOUR_ACCESS_KEY_HERE");

    const object = Object.fromEntries(form);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });

      const data = await res.json();

      if (data.success) {
        console.log("Success", data);
        setFormData({
          name: "",
          email: "",
          message: ""
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="w-full min-h-fit pt-16 pb-1 max-sm:p-2">
      <div className="max-w-2xl mx-auto">
        <div className="bg-zinc-800/80 rounded-2xl p-3">
          <div className="flex flex-col space-y-6">
            <h2 className="text-4xl max-sm:text-3xl font-black bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              Get in Touch
            </h2>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
              <div className="flex flex-col space-y-2">
                <label className="text-zinc-300">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-zinc-700 rounded-lg p-3 text-white focus:outline-none "
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label className="text-zinc-300">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-zinc-700 rounded-lg p-3 text-white focus:outline-none "
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label className="text-zinc-300">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-zinc-700 rounded-lg p-3 text-white h-32 resize-none focus:outline-none"
                  placeholder="Type your message here..."
                  required
                />
              </div>
              <button 
                type="submit"
                className="group bg-gradient-to-r from-cyan-400 to-purple-500 px-8 py-3 rounded-lg text-white font-medium hover:opacity-90 transition-opacity"
              >
                Send Message
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">
                  <i className="ri-send-plane-fill"></i>
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
