// File: src/components/Contact.jsx
import { useForm } from "react-hook-form"; // Changed: Imported for form handling
import Swal from "sweetalert2"; // Changed: Imported for alerts
import { motion } from "framer-motion"; // Changed: Added for animation
import { FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa"; // Changed: Icons for contact info

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    // Changed: Simulate send (console for now; integrate email API later)
    console.log(data);
    Swal.fire("Sent!", "Your message has been dispatched.", "success");
  };

  return (
    <section id="contact" className="py-16 bg-gray-100 text-gray-800">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 text-center"
      >
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
        <div className="flex flex-col md:flex-row justify-between mb-6">
          <div className="mb-4 md:mb-0">
            <FaEnvelope className="text-2xl inline mr-2" />
            mdazizulbari.dev@gmail.com
          </div>
          <div className="mb-4 md:mb-0">
            <FaPhone className="text-2xl inline mr-2" />
            +8801609300080 / +8801816354336
          </div>
          <div>
            <FaWhatsapp className="text-2xl inline mr-2" />
            +8801609300080
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto">
          <input
            {...register("name", { required: true })}
            placeholder="Your Name"
            className="input input-bordered w-full mb-4"
          />
          {errors.name && <span className="text-red-500">Name required</span>}
          <input
            {...register("email", { required: true })}
            placeholder="Your Email"
            className="input input-bordered w-full mb-4"
          />
          {errors.email && <span className="text-red-500">Email required</span>}
          <textarea
            {...register("message", { required: true })}
            placeholder="Your Message"
            className="textarea textarea-bordered w-full mb-4"
          />
          {errors.message && <span className="text-red-500">Message required</span>}
          <button type="submit" className="btn btn-primary w-full text-white">
            Send
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;