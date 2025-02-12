import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Container, TextField, Button, Typography, Box, CircularProgress } from "@mui/material";
import shipBg from "../../assets/shipimage.jpg";

const EmailForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [isLoading, setIsLoading] = useState(false);
    const [responseMessage, setResponseMessage] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);

        emailjs
            .send(
                "service_qb8rdkj", // Replace with your EmailJS Service ID
                "template_buufxcg", // Replace with your EmailJS Template ID
                formData,
                "SgQXWBnWlk1Rn_J1T" // Replace with your EmailJS Public Key
            )
            .then((response) => {
                console.log("Email sent successfully!", response);
                setResponseMessage("Your message has been sent!");
            })
            .catch((error) => {
                console.error("Failed to send email:", error);
                setResponseMessage("There was an error sending your message.");
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    return (
        <Box
            sx={{
            backgroundImage: `url(${shipBg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundAttachment: "fixed",
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: 4,
            }}
        >
            <Container maxWidth="sm">
                <Box
                    sx={{
                        p: 4,
                        boxShadow: 3,
                        borderRadius: 3,
                        backgroundColor: "rgba(255, 255, 255, 0.9)", // Transparent white for readability
                        textAlign: "center",
                    }}
                >
                    <Typography variant="h4" gutterBottom color="primary">
                        Contact Us
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            fullWidth
                            label="Name"
                            variant="outlined"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            sx={{ mb: 2 }}
                        />
                        <TextField
                            fullWidth
                            label="Email"
                            type="email"
                            variant="outlined"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            sx={{ mb: 2 }}
                        />
                        <TextField
                            fullWidth
                            label="Message"
                            variant="outlined"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            multiline
                            rows={4}
                            sx={{ mb: 3 }}
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            fullWidth
                            disabled={isLoading}
                        >
                            {isLoading ? <CircularProgress size={24} /> : "Send"}
                        </Button>
                    </form>
                    {responseMessage && (
                        <Typography sx={{ mt: 2 }} color="secondary">
                            {responseMessage}
                        </Typography>
                    )}
                </Box>
            </Container>
        </Box>
    );
};

export default EmailForm;
