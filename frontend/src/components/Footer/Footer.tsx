import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

function Footer() {
  return (
    <Stack
    direction="column"
    spacing={2}
    sx={{
        backgroundColor: "#FFE6BB",
        p: 4,
        mt: 50
        }}
    >

    <Stack
    direction="row"
    sx={{
        justifyContent: "space-between",
        alignItems: "center",
        }}
    >
        <Link to="/">
            <img
            src={logo}
            alt="Hope Bridge Logo"
            style={{
                height: "60px",
                width: "auto",
            }}
            />
        </Link>
        <Stack 
            direction="row" 
            spacing={8}
            sx={{
                mr: 140,
                ml: 5
                }}
        >
            <Link 
                to="/about"
                style={{
                fontSize: "18px",
                marginLeft: "10px",
                textDecoration: "none",
                color: "#333",
                fontWeight: 500,
                whiteSpace: "nowrap"
                }}
            >
            Despre noi</Link>
            <Link 
                to="/blog"
                style={{
                fontSize: "18px",
                textDecoration: "none",
                color: "#333",
                fontWeight: 500
                }}
            >
            Blog</Link>
            <Link 
                to="/ambassadors"
                style={{
                fontSize: "18px",
                textDecoration: "none",
                color: "#333",
                fontWeight: 500
                }}
            >
            Ambasadori</Link>
            <Link 
                to="/contact"
                style={{
                fontSize: "18px",
                textDecoration: "none",
                color: "#333",
                fontWeight: 500
                }}
            >
            Contact</Link>
        </Stack>
    </Stack>

    <Stack
    direction="row"
    sx={{ 
        justifyContent: "space-between",
        mt: 2 //margin
    }}
    >
        <Typography sx={{ fontSize: "14px" }}>© 2026 Hope Bridge is the property of their respective owners. </Typography>
        <Stack direction="row" spacing={3}>
            <Link 
                to="/terms"
                style={{
                fontSize: "18px",
                textDecoration: "none",
                color: "#333",
                fontWeight: 500
                }}
            >
            Termeni și Condiții</Link>
            <Typography>|</Typography>
            <Link 
                to="/privacy"
                style={{
                fontSize: "18px",
                textDecoration: "none",
                color: "#333",
                fontWeight: 500
                }}
            >
            Politica de confidențialitate</Link>
        </Stack>
    </Stack>
    </Stack>
  );
}

export default Footer;