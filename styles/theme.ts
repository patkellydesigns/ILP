import { createMuiTheme } from '@material-ui/core/styles';
import { customTheme } from './customTheme';
// A theme with custom primary and secondary color.
// It's optional.

const theme = createMuiTheme(customTheme);
export type Theme = typeof theme;
export default theme;
