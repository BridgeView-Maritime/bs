import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Button, Grid, Card, CardContent, CardMedia, Container } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import shipBg from "../assets/shipimage.jpg"; 
import auto from "../assets/automation.jpg";
import design from "../assets/designelectrical.jpeg";
import elec from "../assets/electric.jpeg";
const HomePage = () => {
  const navigate = useNavigate();
  const [showAbout, setShowAbout] = useState(false);

  return (
    <>
      {/* Fullscreen Background Wrapper (Including All Content) */}
      <Box
        sx={{
          position: "relative",
          width: "100vw",
          minHeight: "100vh",
          backgroundImage: `url(${shipBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "start",
          color: "white",
          overflowY: "auto",
          paddingTop: "64px",
        }}
      >
        {/* Overlay for better text readability */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1,
          }}
        />

        {/* Navigation Bar */}
        <AppBar position="fixed" sx={{ backgroundColor: "rgba(0, 51, 102, 0.8)", zIndex: 10 }}>
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: "bold" }}>
              Bridgeview Ships And Ports Pvt Ltd
            </Typography>
            <Button color="inherit">Home</Button>
            <Button color="inherit" onClick={() => setShowAbout(!showAbout)}>
              About
            </Button>
            <Button color="inherit" onClick={() => navigate("/contact")}>
              Contact Us
            </Button>
          </Toolbar>
        </AppBar>

        {/* Content Wrapper Inside the Background */}
        <Box sx={{ position: "relative", zIndex: 5, width: "90%", textAlign: "center", pt: 5 }}>
          {/* Hero Section */}
          <Box sx={{ mb: 5 }}>
            <Typography variant="h3" sx={{ fontWeight: "bold", mb: 2 }}>
              YOUR PARTNER IN MARITIME EXCELLENCE
            </Typography>
            <Typography variant="h6" sx={{ maxWidth: "60%", mx: "auto", mb: 3 }}>
              Providing world-class maritime solutions with expertise in vessel tracking, crew management, and advanced analytics.
            </Typography>
            <Button variant="contained" color="primary" size="large">
              Learn More
            </Button>
          </Box>

          {/* About Section */}
          {showAbout && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Box p={3} sx={{ backgroundColor: "rgba(255, 255, 255, 0.9)", borderRadius: 2, textAlign: "center", color: "black", maxWidth: "80%", mx: "auto", mb: 4 }}>
                <Typography variant="h4" gutterBottom>
                  About Us
                </Typography>
                <Typography variant="body1">
                  Bridgeview Ships And Ports Pvt Ltd is a global leader in maritime services, offering cutting-edge solutions in vessel tracking, 
                  crew management, compliance audits, and advanced analytics for the shipping industry.
                </Typography>
              </Box>
            </motion.div>
          )}

          {/* Services Section */}
          <Typography variant="h4" sx={{ mb: 3 }}>
            Our Services
          </Typography>

          <Grid container spacing={3} justifyContent="center">
            {[
           
            {
                title: " ELECTRICAL DESIGN &ENGINEERING",
                description: "Electrical Load Analysis PLC based Control System Engineering System based FAT, CAT, SAT Procedures Control system modelling & Engineering System based FMEA report & test procedures Electrical Power System Design and Calculations",
                image: design,
              },
            


{
    title: "ELECTRICAL POWER SOLUTIONS",
    description: "LV & MV Circuit Breakers Testing and Servicing Power System Upgradation Solutions LV & MV Breaker Retrofit Solutions for Rating Upgradation & Obsolete Models AVR Generator Excitation System (OLD, Obsolete, or New) Power Management System (PMS) Generator Control   Protection System Switchgear Panels, Protections, Testing & Meter Calibrations",
    image: elec,
  },

              {
                title: "Automation Systems",
                description: "Integrated automation and machinery control systems (IAMCS), Alarm Monitoring System (AMS), Power Management System (PMS), Vessel Management System (VMS)etc. (for Ship & Mobile Offshore Units) Main engine remote/local control and safety systems(Pneumatic & Electrical)Main Engine EOT systemsCalibration & Testing of meters, gauges & Sensorsetc.PLC, Scanda & Control Systems for all sectors",
                image: auto,
              },
              
              {
                title: "Compliance Audits",
                description: "Ensure safety and compliance with ISM, ISPS, and environmental audits.",
                image: "https://source.unsplash.com/400x300/?compliance,safety",
              },
              {
                title: "Ship Agency Services",
                description: "Comprehensive port and vessel management solutions for seamless operations.",
                image: "https://source.unsplash.com/400x300/?harbor,port",
              },
              {
                title: "Fabrication & Repair",
                description: "Professional ship repair, steel renewal, and HVAC system overhauls.",
                image: "https://source.unsplash.com/400x300/?workshop,engineering",
              },
            ].map((service, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                  <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
                    <CardMedia component="img" height="200" image={service.image} alt={service.title} />
                    <CardContent sx={{ textAlign: "center" }}>
                      <Typography variant="h5" sx={{ fontWeight: "bold" }}>{service.title}</Typography>
                      <Typography variant="body2" color="textSecondary">{service.description}</Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          {/* Contact Section */}
          <Box mt={5} p={3} sx={{ backgroundColor: "rgba(0, 51, 102, 0.9)", color: "white", textAlign: "center", borderRadius: 2, maxWidth: "80%", mx: "auto" }}>
            <Typography variant="h4">Get in Touch</Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
              📍 India | ✉️ sales@bluelinesinternational.com | 📞 +971 50 391 7487
            </Typography>
            <Button variant="contained" color="secondary" sx={{ mt: 2 }} onClick={() => navigate("/contact")}>
              Contact Us
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default HomePage;
