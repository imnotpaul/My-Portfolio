// Import React's useState hook for managing state
import { useState } from "react";

// Import motion from Framer Motion for animations
import { motion } from "framer-motion";

// Import FontAwesomeIcon and specific icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";

// Import emailjs for sending form data via email
import emailjs from '@emailjs/browser';

// Define and export the ContactSection component
export default function ContactSection() {
    // React state for form fields: name, email, and message
    const [form, setForm] = useState({ name: "", email: "", message: "" });

    // Handle input field changes and update the corresponding value in the state
    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submit behavior

        // Use EmailJS to send the form data
        emailjs.sendForm(
            'service_yvgyij4', // Your EmailJS service ID
            'template_n1xv0uf', // Your template ID
            e.target, // The form element being submitted
            'fGT0kxPxag7qHc5dF' // Your public key or user ID
        )
        .then(() => {
            alert(`Message sent successfully! Thanks, ${form.name}!`); // Success message
            setForm({ name: "", email: "", message: "" }); // Reset the form
        })
        .catch((error) => {
            console.error(error); // Log error
            alert('Failed to send message. Please try again later.'); // Error message
        });
    };

    return (
        // Outer section for the contact page
        <section id="contact" className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white py-16 px-6">
            
            {/* Section title with animation */}
            <motion.h2
                className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-10 text-center"
                initial={{ y: 50, opacity: 0 }} // Start hidden and pushed down
                whileInView={{ y: 0, opacity: 1 }} // Animate to visible and original position
                viewport={{ once: false }} // Allow animation on every view
                transition={{ duration: 0.7 }} // Animation duration
            >
                Contact Me
            </motion.h2>

            {/* Wrapper for contact details and form */}
            <div className="max-w-lg mx-auto space-y-6">

                {/* Loop through contact details and render them with animation */}
                {[
                    { icon: faEnvelope, label: "johnpaullitrero5@gmail.com"},
                    { icon: faPhone, label: "+63 999 151 9865" },
                    { icon: faLocationDot, label: "Alfonso, Cavite, Philippines" },
                ].map(({ icon, label }, idx) => (
                    <motion.div
                        key={idx}
                        className="flex items-center gap-4 justify-center text-indigo-600 dark:text-indigo-400 text-xl"
                        initial={{ x: -50, opacity: 0 }} // Slide in from left
                        whileInView={{ x: 0, opacity: 1 }} // Animate to visible
                        viewport={{ once: false }}
                        transition={{ duration: 0.5, delay: idx * 0.2 }} // Staggered animation
                    >
                        <FontAwesomeIcon icon={icon} className=" text-indigo-500" />
                        <span>{label}</span> {/* Display contact text */}
                    </motion.div>
                ))}

                {/* Contact Form with animation */}
                <motion.form
                    onSubmit={handleSubmit} // Form submit handler
                    className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg space-y-4 mt-8"
                    initial={{ scale: 0.9, opacity: 0 }} // Scale down and hidden
                    whileInView={{ scale: 1, opacity: 1 }} // Animate to visible and full size
                    viewport={{ once: false }}
                    transition={{ duration: 0.5 }}
                >
                    {/* Name input */}
                    <div>
                        <label className="block mb-1 font-semibold text-indigo-600 dark:text-indigo-400">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange} // Update form state on input
                            required
                            className="w-full px-4 py-2 rounded bg-white dark:bg-gray-700 border border-indigo-500 text-gray-900 dark:text-white"
                            placeholder="Your name"
                        />
                    </div>

                    {/* Email input */}
                    <div>
                        <label className="block mb-1 font-semibold text-indigo-600 dark:text-indigo-400">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 rounded bg-white dark:bg-gray-700 border border-indigo-500 text-gray-900 dark:text-white"
                            placeholder="Your email"
                        />
                    </div>

                    {/* Message textarea */}
                    <div>
                        <label className="block mb-1 font-semibold text-indigo-600 dark:text-indigo-400">Message</label>
                        <textarea
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            required
                            rows={4}
                            className="w-full px-4 py-2 rounded bg-white dark:bg-gray-700 border border-indigo-500 text-gray-900 dark:text-white"
                            placeholder="Your message..."
                        />
                    </div>

                    {/* Submit button */}
                    <button
                        type="submit"
                        className="py-3 px-8 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white rounded font-semibold transition-transform transform hover:scale-105 focus:scale-105 focus:outline-none mx-auto block"
                    >
                        Send Message
                    </button>
                </motion.form>
            </div>

            {/* Google Map Embed with animation */}
            <motion.div
                className="mt-12 max-w-5xl mx-auto border-4 border-indigo-500 rounded-lg overflow-hidden shadow-lg"
                initial={{ opacity: 0, y: 50 }} // Start hidden and below
                whileInView={{ opacity: 1, y: 0 }} // Animate into view
                viewport={{ once: false }}
                transition={{ duration: 0.8 }}
            >
                <iframe
                    title="My Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1934.9031830353538!2d120.83964263842299!3d14.088604996584829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd9c572ed61a29%3A0xb47492e7af32d9cb!2sAmuyong%2C%20Alfonso%2C%20Cavite!5e0!3m2!1sen!2sph!4v1749527905518!5m2!1sen!2sph"
                    width="100%" // Full width
                    height="500" // Fixed height
                    style={{ border: 0 }} // No border
                    allowFullScreen="" // Allow full-screen view
                    loading="lazy" // Lazy loading for performance
                    referrerPolicy="no-referrer-when-downgrade" // Set referrer policy
                />
            </motion.div>
        </section>
    );
}
