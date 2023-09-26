import React, {useState} from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import LandingLogo from "../resources/landing-logo.png";
import CircularProgress from "@mui/material/CircularProgress";
import InputAdornment from "@mui/material/InputAdornment";
import Typography from "@mui/material/Typography";
import AccountCircle from "@mui/icons-material/AccountCircle";
import LockIcon from "@mui/icons-material/Lock";
import {useNavigate} from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

export default function Login() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const timer = React.useRef<number>();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (formData.email === 'admin@admin.com' && formData.password === 'admin') {
            setLoading(true);
            timer.current = window.setTimeout(() => {
                navigate("/dashboard", {replace: true});
            }, 1000);
        } else {
            setOpenSnackbar(true);
            setSnackbarMessage('Correo o contraseña incorrectos');
            return;
        }
    };

    const handleSnackbarClose = () => {
        setOpenSnackbar(false);
    };

    const emailFormat = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const validate = emailFormat.test(formData.email) && formData.password.trim() !== '';

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <Container
            component="main"
            maxWidth="xl"
            sx={{
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <img
                src={LandingLogo}
                alt="Logo"
                style={{
                    maxWidth: "80%",
                    maxHeight: "auto",
                }}
            />
            <Container
                component="section"
                maxWidth="xs"
                sx={{marginBottom: "12em"}}
            >
                <CssBaseline/>
                <Box
                    sx={{
                        marginTop: 8,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Box
                        component="form"
                        onSubmit={handleSubmit}
                        noValidate
                        sx={{
                            mt: 0,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Correo"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <AccountCircle color="primary"/>
                                    </InputAdornment>
                                ),
                            }}
                            name="email"
                            autoComplete="email"
                            autoFocus
                            onChange={handleInputChange}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Contraseña"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <LockIcon color="primary"/>
                                    </InputAdornment>
                                ),
                            }}
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            onChange={handleInputChange}
                        />
                        {loading ? (
                            <CircularProgress sx={{mt: 3, mb: 2, borderRadius: "50px"}}/>
                        ) : (
                            <Button
                                type="submit"
                                variant="contained"
                                sx={{mt: 3, mb: 2, borderRadius: "50px"}}
                                disabled={!validate}
                            >
                                Ingresar
                            </Button>
                        )}
                        <Typography variant="body2" color="text.secondary" align="center">
                            <Link href="/forgot-password" variant="body2" underline="none">
                                Olvidé mi contraseña
                            </Link>
                        </Typography>
                    </Box>
                    <Snackbar
                        open={openSnackbar}
                        autoHideDuration={6000}
                        onClose={handleSnackbarClose}
                        anchorOrigin={{vertical: "top", horizontal: "center"}}
                    >
                        <MuiAlert onClose={handleSnackbarClose} severity="error">
                            {snackbarMessage}
                        </MuiAlert>
                    </Snackbar>
                </Box>
            </Container>
        </Container>
    );
}
