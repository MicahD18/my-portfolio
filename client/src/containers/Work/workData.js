import project2 from "../../assets/country-finder-screenshot.png";
import project3 from "../../assets/user-manager.png";
import project4 from "../../assets/topside-trail-logo.png";

const works = [
  {
    imgUrl: "https://cdn-icons-png.flaticon.com/512/3176/3176363.png",
    name: "web app",
    projectLink: "https://e-commerce-app-867bd.firebaseapp.com",
    codeLink: "https://github.com/MicahD18/ecommerce-app/tree/main/client",
    title: "E-Commerce Website",
    description:
      "An E-Commerce App where you can add items to your cart and remove them.",
    tags: ["React"],
  },
  {
    imgUrl: project2,
    name: "web app",
    projectLink: "https://rest-countries-angular.web.app/",
    codeLink: "https://github.com/MicahD18/rest-countries-angular",
    title: "Country Finder",
    description:
      "Fetched the data from the REST Countries API. The app also includes search and filter functionality as well as dark/light mode.",
    tags: ["Angular"],
  },
  {
    imgUrl: project3,
    name: "web app",
    projectLink: "https://user-manager-angular.web.app/",
    codeLink: "https://github.com/MicahD18/user-manager",
    title: "User Manager",
    description:
      "An Angular app where you can view a list of users and create, edit, and delete them. It also features pagination and search functionality.",
    tags: ["Angular"],
  },
  {
    imgUrl: project4,
    name: "mobile app",
    projectLink: "https://apps.apple.com/lv/app/topside-trail/id1586132527",
    codeLink: "https://apps.apple.com/lv/app/topside-trail/id1586132527",
    title: "Topside Trail App",
    description:
      "An iOS app I built with my colleagues in college. The app features a map and photo sharing as well as a functional scorecard.",
    tags: ["Swift"],
  },
];

export default works;
