import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FiPhone, FiMail, FiBriefcase } from "react-icons/fi";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const [status, setStatus] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();

    setStatus("sending");

    try {
      const result = await emailjs.sendForm(
        import.meta.env.VITE_EMAIL_SERVICE,
        import.meta.env.VITE_EMAIL_TEMPLATE,
        form.current,
        import.meta.env.VITE_EMAIL_PUBLIC
      );

      console.log("SUCCESS:", result);

      setStatus("success");

      form.current.reset();

      setTimeout(() => {
        setStatus("");
      }, 4000);

    } catch (error) {
      console.log("EMAIL ERROR:", error);

      setStatus("error");

      setTimeout(() => {
        setStatus("");
      }, 4000);
    }
  };

  const inputStyle = {
    flex: "1",
    padding: "15px 20px",
    background: "#ffffff",
    border: "1px solid rgba(0,0,0,0.15)",
    borderRadius: "10px",
    color: "#1a1a2a",
    outline: "none",
    fontSize: "1rem"
  };

  const cardStyle = {
    background: "#ffffff",
    padding: "28px",
    borderRadius: "18px",
    display: "flex",
    alignItems: "center",
    gap: "20px",
    boxShadow: "0 2px 12px rgba(0,0,0,0.08)"
  };

  return (
    <section
      id="contact"
      style={{
        padding: "100px 30px",
        minHeight: "100vh"
      }}
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        style={{
          fontSize: "3rem",
          marginBottom: "15px",
          color: "#1a1a2a"
        }}
      >
        Get In Touch
      </motion.h1>

      <p
        style={{
          color: "#666",
          marginBottom: "50px"
        }}
      >
        Have a project in mind or want to collaborate?
      </p>

      <div
        style={{
          display: "flex",
          gap: "40px",
          flexWrap: "wrap"
        }}
      >

        {/* LEFT */}

        <div
          style={{
            flex: "1",
            minWidth: "320px",
            display: "flex",
            flexDirection: "column",
            gap: "20px"
          }}
        >

          <motion.div
            whileHover={{
              y: -5
            }}
            style={cardStyle}
          >

            <div
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                background: "rgba(0,212,170,.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <FiPhone
                color="#00d4aa"
                size={28}
              />
            </div>

            <div>
              <h3 style={{ color: "#1a1a2a", fontSize: "1.2rem", fontWeight: 700, marginBottom: "5px" }}>Call Me</h3>

              <p style={{ color: "#666" }}>
                +91 8059598001
              </p>
            </div>

          </motion.div>

          <motion.div
            whileHover={{
              y: -5
            }}
            style={cardStyle}
          >

            <div
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                background: "rgba(0,212,170,.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <FiMail
                color="#00d4aa"
                size={28}
              />
            </div>

            <div>
              <h3 style={{ color: "#1a1a2a", fontSize: "1.2rem", fontWeight: 700, marginBottom: "5px" }}>Email Me</h3>

              <p style={{ color: "#666" }}>
                yashgoel15119@gmail.com
              </p>
            </div>

          </motion.div>

          <motion.div
            whileHover={{
              y: -5
            }}
            style={cardStyle}
          >

            <div
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                background: "rgba(0,212,170,.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <FiBriefcase
                color="#00d4aa"
                size={28}
              />
            </div>

            <div>
              <h3 style={{ color: "#1a1a2a", fontSize: "1.2rem", fontWeight: 700, marginBottom: "5px" }}>Freelance</h3>

              <p style={{ color: "#666" }}>
                Available for projects
              </p>
            </div>

          </motion.div>

        </div>

        {/* RIGHT FORM */}

        <motion.div
          initial={{
            opacity: 0,
            x: 30
          }}

          whileInView={{
            opacity: 1,
            x: 0
          }}

          style={{
            flex: "1.2",
            minWidth: "420px",
            background: "#ffffff",
            padding: "40px",
            borderRadius: "20px",
            boxShadow: "0 2px 12px rgba(0,0,0,0.08)"
          }}
        >

          <form
            ref={form}
            onSubmit={sendEmail}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px"
            }}
          >

            <div
              style={{
                display: "flex",
                gap: "15px"
              }}
            >

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                style={inputStyle}
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                style={inputStyle}
              />

            </div>

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              style={inputStyle}
            />

            <textarea
              rows="7"
              name="message"
              placeholder="Message"
              required
              style={{
                ...inputStyle,
                resize: "none"
              }}
            />

            <button
              type="submit"
              disabled={status === "sending"}
              style={{
                width: "220px",
                margin: "auto",
                padding: "15px",
                border: "none",
                borderRadius: "999px",
                cursor: "pointer",
                background:
                  "linear-gradient(90deg,#00d4aa,#0099ff)",
                color: "white",
                fontWeight: "bold",
                fontSize: "1rem"
              }}
            >
              {
                status === "sending"
                  ? "Sending..."
                  : "Send Message"
              }
            </button>

            {status === "success" && (
              <p
                style={{
                  color: "#00d4aa",
                  textAlign: "center"
                }}
              >
                Message sent successfully!
              </p>
            )}

            {status === "error" && (
              <p
                style={{
                  color: "red",
                  textAlign: "center"
                }}
              >
                Failed to send message
              </p>
            )}

          </form>

        </motion.div>

      </div>

    </section>
  );
};

export default Contact;