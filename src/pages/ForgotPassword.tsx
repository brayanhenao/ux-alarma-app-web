import React, {useState} from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import LandingLogo from '../resources/landing-logo.png';
import {CircularProgress, InputAdornment, Typography} from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import {useNavigate} from 'react-router-dom';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

export default function SignIn() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
    });
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const timer = React.useRef<number>();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);

        // Simulating an async operation (e.g., API call)
        timer.current = window.setTimeout(() => {
            setOpenSnackbar(true);
            setLoading(false);
            setSnackbarMessage('Se ha enviado el correo de recuperación');

            // Navigate back to the homepage after showing the success message
            timer.current = window.setTimeout(() => {
                navigate('/', {replace: true});
            }, 2000);
        }, 1500);
    };

    const handleSnackbarClose = () => {
        setOpenSnackbar(false);
    };

    // Regular expression for validating email format
    const emailFormat = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    // Check if email is valid
    const validate = emailFormat.test(formData.email);

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
            maxWidth="sm"
            sx={{
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Snackbar
                open={openSnackbar}
                autoHideDuration={6000} // Adjust the duration as needed
                onClose={handleSnackbarClose}
                anchorOrigin={{vertical: 'top', horizontal: 'center'}}
            >
                <MuiAlert onClose={handleSnackbarClose} severity="success">
                    {snackbarMessage}
                </MuiAlert>
            </Snackbar>
            <img
                src={LandingLogo}
                alt="Logo"
                style={{
                    maxWidth: '80%', // Adjust the max-width as needed
                    maxHeight: 'auto', // Maintain aspect ratio
                }}
            />
            <Typography>
                Enviaremos un correo con los pasos para recuperar tu contraseña
            </Typography>
            <Container component="section" maxWidth="xs" sx={{marginBottom: "12em"}}>
                <CssBaseline/>
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Box
                        component="form"
                        onSubmit={handleSubmit}
                        noValidate
                        sx={{
                            mt: 0,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
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
                        {loading ? (
                            <CircularProgress sx={{mt: 3, mb: 2, borderRadius: '50px'}}/>
                        ) : (
                            <Button
                                type="submit"
                                variant="contained"
                                sx={{mt: 3, mb: 2, borderRadius: '50px'}}
                                disabled={!validate}
                            >
                                Enviar
                            </Button>
                        )}
                        <Typography variant="body2" color="text.secondary" align="center">
                            <Link href="/" variant="body2" underline="none">
                                Volver a inicio de sesión
                            </Link>
                        </Typography>
                    </Box>
                </Box>
            </Container>
        </Container>
    );
}
