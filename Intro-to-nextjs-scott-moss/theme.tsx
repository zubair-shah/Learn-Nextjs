import type { Theme } from "theme-ui";
import { roboto } from "@theme-ui/presets";
const theme = {
  ...roboto,
  // colors: {
  //   ...roboto.colors,
  //   background:'yellow'
  // },
  containers: {
    card: {
      boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
      border: "1px solid",
      borderColor: "muted",
      borderRadius: "4px",
      p: 2,
    },
    page: {
      width: "100%",
      maxWidth: "960px",
      m: 0,
      mx: "auto",
    },
  },
  styles: {
    ...roboto.styles,
  },
};

export default theme;
