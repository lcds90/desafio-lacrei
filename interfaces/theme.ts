export interface ITheme {
  colors: {
    primary: string;
    secondary: string;
    light: string;
    lighter: string;
    white: string;
  };
  font: {
    small: string;
    default: string;
    big: string;
    bigger: string;
    family: string;
  };
}

export interface IThemeParam {
  theme: ITheme;
}
