/**
 * App Config File
 */
// import moment from "moment";
const AppConfig = {
//   appLogo: require("../assets/img/site-logo1.png"), // App Logo
//   crlImage1: require("../assets/img/Image_1.jpg"), // carousel image 1
//   crlImage2: require("../assets/img/Image_2.jpg"), // carousel image 2
//   crlImage3: require("../assets/img/Image_3.jpg"), // carousel image 3
  appUrl:"http://localhost:5000",
  rememberMeSecretKey: "06880621737846692416001235847516",
  rememberMeSecretIv: "8561754196324561",
  brandName: "Rx-Upload", // Brand Name
  navCollapsed: true, // Sidebar collapse
  darkMode: false, // Dark Mode
  boxLayout: false, // Box Layout
  rtlLayout: false, // RTL Layout
  miniSidebar: false, // Mini Sidebar
  sidebarActiveFilter: "dark", // Select Sidebar Color You can Choose following color 'primary', 'blue', 'warning', 'info', 'danger','success','purple'
  enableSidebarBackgroundImage: false, // Enable Sidebar Background Image
  sidebarImage: false, // Select sidebar image
  currency: "$",
  locale: {
    languageId: "english",
    locale: "en",
    name: "English",
    icon: "en"
  }
};

export default AppConfig;
