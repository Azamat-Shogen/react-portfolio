import { ThemeProvider } from "react-switch-theme";


const colors = {
    light:{color: "#000"},
    dark: {color: "#b4c2ef"}
}

const activeMode = "light";
const offlineStorageKey = "react-random-key";

const themeWrapper = (AppComponent) => {
    const newComponent = (props) => {
        return (
            <ThemeProvider
                colors={colors}
                activeMode={activeMode}
                offlineStorageKey={offlineStorageKey}>
                <AppComponent {...props} />
            </ThemeProvider>
        );
    };
    return newComponent;
};

export default themeWrapper;