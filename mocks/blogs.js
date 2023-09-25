import keycloak from "@/public/blogs/keycloak-docker.png";
import nextjs_jwt_mongo from "@/public/blogs/nextjs-jwt-mongo.png";
import nextjs_svg from "@/public/blogs/nextjs-svg.png";

const blogs = [
  {
    image: keycloak,
    title: "Customizing the Login Page of Keycloak Docker Image",
    desc: "In this article, I will show you how to customize the login page of Keycloak using a Docker image. Here are the steps to get started:",
    link: "https://medium.com/@oruchan.asar/changing-svg-colors-in-nextjs-using-jsx-components-for-dynamic-icon-color-59352da27d8a",
  },
  {
    image: nextjs_jwt_mongo,
    title: "NextJS 13 App Backend Development",
    desc: "This report provides an overview of key components and functionalities implemented in a backend application. It covers topics such as database connection, user registration API, user authentication and token generation, JSON Web Token (JWT) verification, permission checks, and user model schema.",
    link: "https://medium.com/@oruchan.asar/nextjs-13-app-backend-development-d044c804c3",
  },
  {
    image: nextjs_svg,
    title:
      "Changing SVG Colors in Nextjs: Using JSX Components for Dynamic Icon Color",
    desc: "SVG icons are popular for adding visual elements to web applications due to their scalability and adaptability. However, changing the color of SVG icons dynamically in response to user interactions can be a bit tricky when using static SVG files.",
    link: "https://medium.com/@oruchan.asar/changing-svg-colors-in-nextjs-using-jsx-components-for-dynamic-icon-color-59352da27d8a",
  },
];

export default blogs;
