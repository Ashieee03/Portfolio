import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission - would normally connect to backend
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
    alert('Thanks for your message! I\'ll get back to you soon.');
  };

  const inputVariants = {
    focus: { scale: 1.02, borderColor: '#8BBF43' },
    blur: { scale: 1, borderColor: '#333' },
  };

  return (
    <section id="contact" className="py-20 bg-darkBg">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white uppercase tracking-wider font-heading">
            Let's <span className="text-primary">Connect</span> there
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-secondary rounded-lg p-8 shadow-lg"
          >
            <h3 className="text-xl font-bold mb-6 text-white">Send me a message</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <motion.input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full bg-darkBg text-white px-4 py-3 rounded-md focus:outline-none border border-gray-700"
                  variants={inputVariants}
                  whileFocus="focus"
                  initial="blur"
                  animate="blur"
                />
              </div>
              <div className="mb-4">
                <motion.input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full bg-darkBg text-white px-4 py-3 rounded-md focus:outline-none border border-gray-700"
                  variants={inputVariants}
                  whileFocus="focus"
                  initial="blur"
                  animate="blur"
                />
              </div>
              <div className="mb-4">
                <motion.input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  required
                  className="w-full bg-darkBg text-white px-4 py-3 rounded-md focus:outline-none border border-gray-700"
                  variants={inputVariants}
                  whileFocus="focus"
                  initial="blur"
                  animate="blur"
                />
              </div>
              <div className="mb-6">
                <motion.textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  required
                  rows={5}
                  className="w-full bg-darkBg text-white px-4 py-3 rounded-md focus:outline-none border border-gray-700 resize-none"
                  variants={inputVariants}
                  whileFocus="focus"
                  initial="blur"
                  animate="blur"
                />
              </div>
              <motion.button
                type="submit"
                className="w-full py-3 bg-primary hover:bg-opacity-80 text-white font-medium rounded-md transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-secondary rounded-lg p-8 shadow-lg mb-8">
              <h3 className="text-xl font-bold mb-6 text-white">Contact Information</h3>
              <div className="space-y-4">
                {[
                  { icon: FaEnvelope, label: 'Email', value: 'contact@example.com' },
                  { icon: FaPhone, label: 'Phone', value: '+1 234 567 890' },
                  { icon: FaMapMarkerAlt, label: 'Location', value: 'New York, USA' },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center"
                  >
                    <div className="w-10 h-10 bg-darkBg rounded-full flex items-center justify-center mr-4">
                      <item.icon className="text-primary" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">{item.label}</p>
                      <p className="text-white">{item.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-secondary rounded-lg p-8 shadow-lg">
              <h3 className="text-xl font-bold mb-6 text-white">Follow Me</h3>
              <div className="flex space-x-4">
                {[
                  { icon: FaFacebook, color: '#1877F2', label: 'Facebook' },
                  { icon: FaTwitter, color: '#1DA1F2', label: 'Twitter' },
                  { icon: FaInstagram, color: '#E4405F', label: 'Instagram' },
                  { icon: FaLinkedin, color: '#0A66C2', label: 'LinkedIn' },
                ].map((item, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    whileHover={{ scale: 1.2, y: -5 }}
                    className="w-12 h-12 bg-darkBg rounded-full flex items-center justify-center"
                    aria-label={item.label}
                  >
                    <item.icon className="text-xl" style={{ color: item.color }} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 