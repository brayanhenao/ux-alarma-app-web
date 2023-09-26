import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import Link from "@mui/material/Link";
import LandingLogo from "../resources/landing-logo.png";

function Dashboard() {

    return (
        <AppBar position="static" color="secondary">
            <Container
                maxWidth={false}
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    height: "70px",
                }}
            >
                <img
                    style={{
                        maxHeight: "66px",
                    }}
                    src={LandingLogo}
                    alt="logo"
                />
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        align="center"
                        sx={{pr: 6}}
                    >
                        <Link href="/" variant="body2" underline="none">
                            Cerrar sesión
                        </Link>
                    </Typography>
                    <IconButton sx={{p: 0}}>
                        <PersonOutlineOutlinedIcon color="primary"/>
                    </IconButton>
                </Box>
            </Container>
        </AppBar>
    );
}

export default Dashboard;
