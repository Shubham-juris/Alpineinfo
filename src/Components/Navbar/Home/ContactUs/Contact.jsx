import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  Fade,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import AOS from "aos";
import "aos/dist/aos.css";
 
// Import contact image
import contactImage from "../../../../assets/logo.png"
 
const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: false, mirror: true }); 
  }, []);
 
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted! (EmailJS is commented out)");
    setFormData({ name: "", email: "", message: "" });
  };
 
  // Professional Contact Info Text with Word-by-Word Animation
  const contactInfoText = "At Greekology, we specialize in delivering tailored software solutions to empower your business. Contact us to discuss how our expertise can drive your success.";
 
  return (
    <Box
      sx={{
        padding: { xs: 2, sm: 4, md: 8 },
        maxWidth: "1440px",
        margin: "0 auto",
        background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
        minHeight: "100vh",
        borderRadius: 4,
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
        overflow: "hidden",
      }}
    >
      {/* Animated Header with No Top Margin */}
      <Fade in timeout={1500}>
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          sx={{
            fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
            fontWeight: "bold",
            color: "#1976d2",
            textShadow: "2px 2px 8px rgba(0, 0, 0, 0.3)",
            animation: "slideIn 1.5s ease-out",
            "@keyframes slideIn": {
              "0%": { transform: "translateY(-100px)", opacity: 0 },
              "100%": { transform: "translateY(0)", opacity: 1 },
            },
          }}
          data-aos="zoom-in"
        >
          Contact Us
        </Typography>
      </Fade>
 
      {/* Uniform Sized Contact Cards with Centered Icons */}
      <Grid container spacing={4} sx={{ justifyContent: "center", mt: 4 }}>
        {[
          {
            icon: <LocationOnIcon fontSize="large" sx={{ color: "#1976d2" }} />,
            title: "Our Main Office",
            content: (
              <a
                href="https://www.google.com/maps"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                10030 106 St Westlock
                Alberta, Canada T7P 2K4
              </a>
            ),
          },
          {
            icon: <PhoneIcon fontSize="large" sx={{ color: "#1976d2" }} />,
            title: "Phone Number",
            content: (
              <a href="tel:+1 780-287-8141" style={{ textDecoration: "none", color: "inherit" }}>
                +1 780-287-8141
              </a>
            ),
          },
          {
            icon: <EmailIcon fontSize="large" sx={{ color: "#1976d2" }} />,
            title: "Email",
            content: (
              <a href="
alpineinfotech4@gmail.com" style={{ textDecoration: "none", color: "inherit" }}>          
alpineinfotech4@gmail.com
              </a>
            ),
          },
        ].map((card, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={index}
            data-aos="flip-up"
            data-aos-delay={index * 300}
          >
            <Card
              sx={{
                p: 3,
                textAlign: "center",
                borderRadius: 3,
                boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)",
                backgroundColor: "#fff",
                transition: "transform 0.4s ease, box-shadow 0.4s ease",
                "&:hover": {
                  transform: "translateY(-10px) rotate(2deg)",
                  boxShadow: "0 12px 32px rgba(0, 0, 0, 0.25)",
                },
                height: "200px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  flexGrow: 1,
                  p: 0,
                }}
              >
                <Box
                  sx={{
                    animation: "pulseIcon 2s infinite",
                    "@keyframes pulseIcon": {
                      "0%, 100%": { transform: "scale(1)" },
                      "50%": { transform: "scale(1.2)" },
                    },
                    mb: 2,
                  }}
                >
                  {card.icon}
                </Box>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", color: "#1976d2" }}
                >
                  {card.title}
                </Typography>
                <Typography sx={{ mt: 1 }}>{card.content}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
 
      {/* Contact Form and Info Section */}
      <Grid container spacing={6} sx={{ mt: 6 }}>
        {/* Left: Professional Info & Enhanced Animated Image */}
        <Grid item xs={12} md={6} data-aos="fade-right" data-aos-delay="200">
          <Box sx={{ textAlign: "center", p: 2 }}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                fontWeight: "bold",
                color: "#1976d2",
                animation: "fadeInText 2s ease-in-out infinite",
                "@keyframes fadeInText": {
                  "0%, 100%": { opacity: 0.8 },
                  "50%": { opacity: 1 },
                },
              }}
            >
              Contact Info
            </Typography>
            <Typography
              sx={{
                lineHeight: 1.8,
                color: "#555",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "0.3em",
              }}
            >
              {contactInfoText.split(" ").map((word, index) => (
                <span
                  key={index}
                  style={{
                    display: "inline-block",
                    animation: `wordFadeIn 0.5s ease-in-out ${index * 0.2}s forwards`,
                    opacity: 0,
                  }}
                >
                  {word}
                </span>
              ))}
            </Typography>
            <style>
              {`
                @keyframes wordFadeIn {
                  0% { opacity: 0; transform: translateY(20px); }
                  100% { opacity: 1; transform: translateY(0); }
                }
              `}
            </style>
            <Box sx={{ mt: 4, position: "relative" }}>
              <img
                src={contactImage}
                alt="Contact"
                style={{
                  // borderRadius: "50%",
                  width: "100%",
                  maxWidth: "340px",
                  // border: "4px solid #1976d2",
                  // boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
                  transition: "all 0.5s ease",
                  animation: "spinFloat 6s ease-in-out infinite",
                  "@keyframes spinFloat": {
                    "0%": { transform: "translateY(0) rotate(0deg)" },
                    "50%": { transform: "translateY(-20px) rotate(180deg)" },
                    "100%": { transform: "translateY(0) rotate(360deg)" },
                  },
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  top: "-10px",
                  left: "-10px",
                  width: "260px",
                  height: "260px",
                  borderRadius: "50%",
                  // background: "radial-gradient(circle, rgba(25, 118, 210, 0.2), transparent)",
                  animation: "glow 3s ease-in-out infinite",
                  "@keyframes glow": {
                    "0%, 100%": { opacity: 0.5, transform: "scale(1)" },
                    "50%": { opacity: 1, transform: "scale(1.05)" },
                  },
                  zIndex: -1,
                }}
              />
            </Box>
          </Box>
        </Grid>
 
        {/* Right: Animated Contact Form */}
        <Grid item xs={12} md={6} data-aos="fade-left" data-aos-delay="400">
          <Typography
            variant="h5"
            gutterBottom
            textAlign="center"
            sx={{
              fontWeight: "bold",
              color: "#1976d2",
              animation: "bounceIn 1.5s ease",
              "@keyframes bounceIn": {
                "0%": { transform: "scale(0.8)", opacity: 0 },
                "60%": { transform: "scale(1.1)", opacity: 1 },
                "100%": { transform: "scale(1)" },
              },
            }}
          >
            Get in Touch
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 3,
              width: "100%",
              maxWidth: "500px",
              mx: "auto",
              p: 3,
              backgroundColor: "#fff",
              borderRadius: 3,
              boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)",
              transition: "transform 0.5s ease",
              "&:hover": { transform: "translateY(-5px)" },
            }}
          >
            <TextField
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              fullWidth
              required
              variant="outlined"
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: 2,
                  transition: "all 0.3s ease",
                  "&:hover fieldset": { borderColor: "#1976d2" },
                },
              }}
            />
            <TextField
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              fullWidth
              required
              variant="outlined"
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: 2,
                  transition: "all 0.3s ease",
                  "&:hover fieldset": { borderColor: "#1976d2" },
                },
              }}
            />
            <TextField
              label="Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              multiline
              rows={4}
              fullWidth
              required
              variant="outlined"
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: 2,
                  transition: "all 0.3s ease",
                  "&:hover fieldset": { borderColor: "#1976d2" },
                },
              }}
            />
            <Button
              variant="contained"
              type="submit"
              fullWidth
              sx={{
                py: 1.5,
                borderRadius: 2,
                backgroundColor: "#1976d2",
                transition: "all 0.4s ease",
                "&:hover": {
                  backgroundColor: "#1565c0",
                  transform: "scale(1.05) rotate(2deg)",
                  boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                },
                animation: "pulseButton 2s infinite",
                "@keyframes pulseButton": {
                  "0%, 100%": { boxShadow: "0 0 10px rgba(25, 118, 210, 0.5)" },
                  "50%": { boxShadow: "0 0 20px rgba(25, 118, 210, 0.8)" },
                },
              }}
            >
              Submit
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
 
export default Contact;