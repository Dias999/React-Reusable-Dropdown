import {} from "styled-components";

type Background = {
  black100: string;
  black200: string;
  black300: string;
  black400: string;
  black500: string;
  black600: string;
  black700: string;
  black800: string;
  black900: string;
};

type Text = {
  white100: string;
  white200: string;
};

type Primary = {
  blue100: string;
  blue200: string;
  blue300: string;
  blue400: string;
};

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      background: Background;
      text: Text;
      primary: Primary;
    };
  }
}
