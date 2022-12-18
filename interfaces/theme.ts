export interface ITheme {
  colors: {
    primary: string;
    secondary: string;
    header: string;
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
