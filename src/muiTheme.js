import { createMuiTheme } from "@material-ui/core/styles";
import { themeColors } from "./config";

const muiTheme = createMuiTheme({
  typography: {
    useNextVariants: true,
    suppressDeprecationWarnings: true
  },
  palette: {
    primary: {
      main: themeColors.primary
    },
    secondary: {
      main: themeColors.warning
    }
  }
});

export default muiTheme;
