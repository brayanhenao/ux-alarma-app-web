import {createTheme, PaletteOptions} from "@mui/material/styles";

// Define a type for your custom palette
interface CustomPalette extends PaletteOptions {
    success: {
        main: string;
    };
}

// Create a theme using your custom palette type
const CustomTheme = createTheme({
    palette: {
        primary: {
            main: '#93493d',
        },
        secondary: {
            main: '#F8EBE9',
        },
        success: {
            main: '#93493d',
        },
    } as CustomPalette, // Cast the palette as your custom type
});

export default CustomTheme;
