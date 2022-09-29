import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;
    colors: {
      main: string;
      sidebar: string;
      header: string;
      text: string;
      borders: string;
      content: string;
      textSidebar: string;
      sidebarLogo: string;
      btnTabs: string;
      betnTabsBorder: string;
      btnInfoTab: string;
    };
  }
}
