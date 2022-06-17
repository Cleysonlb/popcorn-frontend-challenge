export interface Theme {
  viewport: {
    mobile: string;
    tablet: string;
    desktop: string;
  };

  space: {
    px: string;
    0.5: string;
    1: string;
    1.5: string;
    2: string;
    2.5: string;
    3: string;
    3.5: string;
    4: string;
    5: string;
    6: string;
    7: string;
    8: string;
    9: string;
    10: string;
    12: string;
    14: string;
    16: string;
    20: string;
    24: string;
    28: string;
    32: string;
    36: string;
    40: string;
    44: string;
    48: string;
    52: string;
    56: string;
    60: string;
    64: string;
    68: string;
    72: string;
    76: string;
    80: string;
  };

  typography: {
    fonts: {
      inter: string;
      poppins: string;
    };
    fontWeights: {
      normal: number;
      medium: number;
      semibold: number;
      bold: number;
    };
    fontSizes: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      "2xl": string;
      "3xl": string;
      "4xl": string;
      "5xl": string;
      "6xl": string;
      "7xl": string;
      "8xl": string;
      "9xl": string;
    };
  };
  borderRadius: {
    none: string;
    sm: string;
    base: string;
    md: string;
    lg: string;
    xl: string;
    full: string;
  };
}

const viewport = {
  mobile: "580px",
  tablet: "780px",
  desktop: "1024px",
};

const spacing = {
  space: {
    px: "1px",
    0.5: "0.125rem",
    1: "0.25rem",
    1.5: "0.375rem",
    2: "0.5rem",
    2.5: "0.625rem",
    3: "0.75rem",
    3.5: "0.875rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    7: "1.75rem",
    8: "2rem",
    9: "2.25rem",
    10: "2.5rem",
    12: "3rem",
    14: "3.5rem",
    16: "4rem",
    20: "5rem",
    24: "6rem",
    28: "7rem",
    32: "8rem",
    36: "9rem",
    40: "10rem",
    44: "11rem",
    48: "12rem",
    52: "13rem",
    56: "14rem",
    60: "15rem",
    64: "16rem",
    72: "18rem",
    80: "20rem",
  },
};

const borderRadius = {
  none: "0",
  sm: "0.125rem",
  base: "0.25rem",
  md: "0.375rem",
  lg: "0.5rem",
  xl: "0.75rem",
  full: "9999px",
};

const typography = {
  fonts: {
    inter: "'Inter', sans-serif;",
    poppins: "'Poppins', sans-serif;",
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem",
  },
};

const gradients = {
  gray: "linear-gradient(to right, #e5e5e5, #dddddd, #e5e5e5)",
};

const theme = {
  colors: {
    primary: {
      100: "#FDEAA7",
      200: "#FFF5CF",
    },
    white: "#FFF",
    green: {
      100: "#9AE6B4",
      200: "#68D391",
    },
    red: {
      100: "#FBB6CE",
      200: "#F687B3",
    },
  },
  viewport,
  spacing,
  typography,
  borderRadius,
  gradients,
};

export default theme;
