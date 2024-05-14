import React, { useRef, useState } from "react";
import connectImg from "../../public/email.png";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { ClipLoader } from "react-spinners";
import { ToastContainer, toast } from "react-toastify";
import { styles } from "../style";
import "./conect.scss";
import { EarthCanvas } from "./canvas";
import Earth from "./canvas/Earth";

import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import { duration } from "@mui/material";

const title = {
  initial: {
    y: 50,
    Opacity: 0,
  },
  animate: {
    y: 0,
    Opacity: 1,
  },
};
const leftVariants = {
  initial: {
    x: "-20%",
    Opacity: 0,
  },
  animate: {
    x: 0,
    Opacity: 1,
  },
};
const rightVariants = {
  initial: {
    x: "20%",
    Opacity: 0,
  },
  animate: {
    x: 0,
    Opacity: 1,
  },
};

const Contact = () => {
  const form = useRef();
  const titleRef = useRef();
  const titleView = useInView(titleRef, { margin: "-200px" });
  const [isSent, setIsSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setIsLoading(true);
    return emailjs
      .sendForm(
        "service_3ugx8dy",
        "template_53zr3xu",
        form.current,
        "z7_aN2EHdA9jSKVeW"
      )
      .then(
        (result) => {
          setIsLoading(false);
          setIsSent(true);
          console.log(result.text);
          reset();
          toast.success(
            "Message Sent Sucessfully, I will get back to you shortly",
            {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            }
          );
        },
        (error) => {
          setIsLoading(false);
          reset();
          toast.error("Oops! Something went wrong please try again", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          console.log(error.text);
        }
      );
  };
  return (
    <motion.div
      className={`${styles.padding}  mx-auto relative z-0`}
      id="contact"
    >
      <motion.div
        ref={titleRef}
        variants={title}
        initial="initial"
        animate={titleView && "animate"}
      >
        <p className={`${styles.sectionSubText} text-center`}>Let's Connect</p>
        <div className="flex flex-col items-center">
          <h2 className={`${styles.sectionHeadText} text-center`}>
            Contact Me
          </h2>
          <ul className="dottedLine ">
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </motion.div>
      <div className="connect-section flex justify-center items-start pt-10">
        <motion.div
          variants={leftVariants}
          initial="initial"
          animate={titleView && "animate"}
          className="h-[500px] flex-1 max-sm:w-full "
        >
          <Earth></Earth>
        </motion.div>
        <motion.div
          variants={rightVariants}
          initial="initial"
          animate={titleView && "animate"}
          className="form flex-1 "
        >
          <div className="form-content  bg-primary-gradient text-white shadow-card">
            <form onSubmit={handleSubmit(onSubmit)} ref={form}>
              {/* register your input into the hook by invoking the "register" function */}
              <div className="form-section ">
                <label htmlFor="name">Name</label>
                <input
                  className="bg-transparent"
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  {...register("name", { required: true, minLength: 3 })}
                />
                {errors.name?.type === "required" && (
                  <span>Name should be longer than 2</span>
                )}
              </div>

              {/* include validation with required or other standard HTML validation rules */}
              <div className="form-section">
                <ToastContainer className="z-50 mt-16" />
                <label htmlFor="email">Email</label>
                <input
                  className="bg-transparent"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  {...register("email", { required: true })}
                />
                {errors.email && <span>Please enter your email</span>}
              </div>

              <div className="form-section">
                <label htmlFor="message">Message</label>
                <textarea
                  className="bg-transparent"
                  name="message"
                  id=""
                  cols="30"
                  rows="5"
                  placeholder="Enter your message"
                  {...register("message", { required: true })}
                ></textarea>
                {errors.message && <span>Please enter your message</span>}
              </div>
              <button
                type="submit"
                className="btn slidebtn slidebtnblue btn-blue"
                disabled={isSent}
              >
                {isLoading ? (
                  <ClipLoader size={15} color="white" />
                ) : isSent ? (
                  "Sent"
                ) : (
                  "Send"
                )}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;
