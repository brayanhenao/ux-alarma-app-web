import * as React from "react";
import AppBar from "../components/AppBar";
import Container from "@mui/material/Container";
import {Box, Grid, IconButton, Paper, Typography} from "@mui/material";
import "./Dashboard.css";
import CustomTheme from "../themes/CustomTheme";
import CloseIcon from "@mui/icons-material/Close";

const dataExpanded = {
    title: "Alarmas por actividad",
    header: "Total alarmas registradas",
    description: "200 Mil",
    stats: [
        {
            title: "Total alarmas: Cita médica",
            amount: "150 Mil",
        },
        {
            title: "Total alarmas: Medicina",
            amount: "3 Mil",
        },
        {
            title: "Total alarmas: Pico y Placa",
            amount: "100",
        },
    ],
};

function Dashboard() {
    const [showShortText, setShowShortText] = React.useState(true);

    const handleItemToggle = () => {
        setShowShortText((prev) => !prev);
    };

    return (
        <>
            <AppBar/>
            <div className="container">
                <Grid container sx={{
                    mt: 5,
                    ...(showShortText
                        ? {
                            px: 20,
                        }
                        : {
                            paddingRight: "20rem",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }),
                }}>
                    <Paper
                        elevation={10}
                        onClick={() => {
                            if (showShortText) handleItemToggle();
                        }}
                        sx={{
                            backgroundColor: CustomTheme.palette.secondary.main,
                            borderRadius: "20px",
                            ...(showShortText
                                ? {
                                    cursor: "pointer",
                                    transform: "translate(0, 0)",
                                    transition: "all 0.3s ease",
                                }
                                : {
                                    transform: "translate(22%, 25%)",
                                    transition: "all 0.5s ease",
                                }),
                        }}
                    >
                        {showShortText ? (
                            <Container className="container">
                                <Box
                                    sx={{
                                        mx: 6,
                                        mt: 6,
                                    }}
                                >
                                    <Typography variant="h1" component="div" gutterBottom>
                                        200 Mil
                                    </Typography>
                                </Box>
                                <Box
                                    sx={{
                                        mx: 3,
                                        my: 2,
                                    }}
                                >
                                    <Typography variant="h5" component="div" gutterBottom>
                                        Total alarmas registradas
                                    </Typography>
                                </Box>
                            </Container>
                        ) : (
                            <Box
                                sx={{
                                    ...(!showShortText && {
                                        width: "40.5rem",
                                        height: "27rem",
                                        padding: "2rem",
                                    }),
                                }}
                            >
                                <Typography variant="h4" component="div" gutterBottom>
                                    {dataExpanded.title}
                                </Typography>
                                <IconButton
                                    onClick={handleItemToggle}
                                    sx={{
                                        position: "absolute",
                                        top: "20px",
                                        right: "15px",
                                    }}
                                >
                                    <CloseIcon fontSize="large"/>
                                </IconButton>
                                <Box
                                    sx={{
                                        pt: "3.6rem",
                                        px: "2rem",
                                        display: "grid",
                                        gap: "2rem",
                                    }}
                                >
                                    {dataExpanded.stats.map((stat) => (
                                        <Box
                                            key={stat.title}
                                            sx={{
                                                display: "flex",
                                                justifyContent: "space-between",
                                                alignItems: "center",
                                            }}
                                        >
                                            <Box>
                                                <Typography variant="h6" component="div" gutterBottom>
                                                    {stat.title}
                                                </Typography>
                                            </Box>
                                            <Box>
                                                <Typography variant="h2" component="div" gutterBottom>
                                                    {stat.amount}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    ))}
                                </Box>
                            </Box>
                        )}
                    </Paper>
                </Grid>
            </div>
        </>
    );
}

export default Dashboard;
