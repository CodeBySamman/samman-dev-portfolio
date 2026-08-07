
const projects = [

{
  title: "Ovilo Store",
  image: "/projects/ovi.png",
  description:
    "A full-featured e-commerce platform built with Next.js and MongoDB, offering a complete shopping experience from product discovery to order fulfillment. Includes secure authentication with Google Login via NextAuth, a powerful admin dashboard for managing products, categories, and orders, dynamic collections, a persistent cart system, and a fully responsive, production-ready UI.",
  stack: ["React","Next.js", "MongoDB", "NextAuth", "Google Login", "Tailwind CSS"],
  features: [
    "Admin Dashboard",
    "Product & Category Management",
    "Dynamic Collections",
    "Cart & Checkout System",
    "Order Management",
    "Google Authentication",
    "Customer Management",
  ],
  slug: "ovilo-store",
  live: "https://ovilo-ecommerce-platform.vercel.app",
},

  

{
  title: "GetMeAChai",
  image: "/projects/chiweeb.png",
  description:
    "A full-stack creator support platform inspired by 'Buy Me a Coffee', built with Next.js, MongoDB, and Mongoose. Creators get a personalized public page where supporters can send messages along with virtual 'chai' contributions, with a live leaderboard of top supporters. Includes secure Google authentication via NextAuth, an editable creator dashboard for managing profile and cover images, and a fully modeled backend with dedicated User and Payment schemas for scalable data handling.",
  stack: [
    "Next.js",
    "React",
    "Node.js",
    "MongoDB",
    "Mongoose",
    "NextAuth",
    "Server Actions",
    "Tailwind CSS",
  ],
  features: [
    "Personalized Creator Pages",
    "Google Authentication",
    "Support with Messages & Amount",
    "Top Supporters Leaderboard",
    "Editable Creator Dashboard",
    "Dynamic SEO Metadata",
  ],
  slug: "getmeachai",
  live: "https://getmeachai-nextjs.vercel.app",
},
  {
  title: "Business Insights",
  image: "/projects/BLOG1.png",
  description:
    "A full-stack MERN blog management platform built for content-driven businesses, enabling users to create, edit, publish, and manage articles with a clean, intuitive interface. Features secure JWT authentication with protected routes, a draft-and-publish workflow for content review, category-based filtering, SEO-friendly slug routing, and a robust Express.js REST API backed by MongoDB with full input validation.",
  stack: [
    "React",
    "React Router DOM",
    "Node.js",
    "Express",
    "MongoDB",
    "Mongoose",
    "JWT",
    "bcrypt",
    "Tailwind CSS",
  ],
  features: [
    "JWT Authentication & Protected Routes",
    "Draft & Publish Workflow",
    "Create, Edit & Delete Blogs",
    "Category-based Filtering",
    "SEO-friendly Slug Routing",
    "Secure Password Hashing",
    "Input Validation (Express Validator)",
  ],
  slug: "business-insights",
  live: "https://bloginsights-fullstack-fdj4.vercel.app",
},
  {
  title: "Cloud Notes",
  image: "/projects/CLO.png",
  description:
    "A secure, full-stack MERN note-taking application that lets users capture, organize, and manage personal notes with complete privacy. Features JWT-based authentication with protected routes, bcrypt password encryption, and user-specific data isolation so each user only accesses their own notes. Built with a clean, responsive UI, tag-based note organization, real-time CRUD operations, and a well-structured RESTful API with server-side input validation.",
  stack: [
    "React",
    "React Router DOM",
    "Node.js",
    "Express",
    "MongoDB",
    "Mongoose",
    "JWT",
    "bcrypt",
    "Axios",
    "Tailwind CSS",
  ],
  features: [
    "JWT Authentication & Protected Routes",
    "User-specific Note Isolation",
    "Create, Edit & Delete Notes",
    "Tag-based Organization",
    "Secure Password Hashing",
    "Input Validation (Express Validator)",
    "Responsive UI",
  ],
  slug: "cloud-notes",
  live: "https://cloudnotes-fullstack-mern-i3t2cp3q1-codebysammans-projects.vercel.app",
},
   {
  title: "News-app",
  image: "/projects/news22.png",
  description:
    "A dynamic React-based news aggregator delivering real-time headlines across multiple categories with a secure Express backend that safely proxies NewsAPI requests to protect API keys. Features category-based routing, pagination, live progress indicators, and a responsive sign-up flow with full form validation.",
  stack: ["React", "Express", "Node.js", "Tailwind CSS", "NewsApi-key"],
  features: [
    "Category-wise News Filtering",
    "Secure API Key Handling",
    "Pagination",
    "Form Validation",
    "Responsive UI",
  ],
  slug: "News-app",
  live: "https://news-app-frontend-d9ta.vercel.app",
},
{
  title: "YouTube",
  image: "/projects/yotube1.png",
  description:
    "A fully responsive YouTube clone built with React.js and a custom Express.js backend, integrating the YouTube Data API v3 for real-time video, channel, and comment data. Features category-based video browsing, dynamic video playback, channel statistics, live comment sections, and a secure backend proxy that keeps API keys hidden from the client.",
  stack: ["React", "Express", "Node.js", "Tailwind CSS", "YouTube Data API v3"],
  features: [
    "Category-wise Video Browsing",
    "Video Playback & Recommendations",
    "Channel Info & Live Comments",
    "Secure API Key Handling",
    "Responsive UI",
  ],
  slug: "YouTube",
  live: "https://youtube-frontend-chi-lake.vercel.app",
},
{
  title: "Live Streaming",
  image: "/projects/live1.jpg",
  description:
    "A real-time video calling application built with React.js, powered by the ZegoCloud UIKit for seamless one-on-one video communication. Users can instantly create or join private rooms via unique room IDs, with shareable links for quick access, dynamic routing, and clean input validation for a smooth user experience.",
  stack: ["React", "Vite", "React Router DOM", "ZegoCloud UIKit", "Tailwind CSS"],
  features: [
    "Real-time Video Calling",
    "Instant Room Creation",
    "Shareable Room Links",
    "Dynamic Routing",
    "Input Validation",
  ],
  slug: "live-streaming",
  live: "https://live-streaming-app-react-three.vercel.app",
},
{
  title: "Weather App",
  image: "/projects/weather1.png",
  description:
    "A sleek real-time weather application built with React.js, fetching live weather data through a secure Express.js backend that keeps the OpenWeatherMap API key protected. Displays current temperature, humidity, wind speed, atmospheric pressure, and 'feels like' conditions for any city worldwide, with instant city search and graceful error handling.",
  stack: ["React", "Express", "Node.js", "Tailwind CSS", "OpenWeatherMap API"],
  features: [
    "Real-time City Search",
    "Live Weather Data",
    "Secure API Key Handling",
    "Detailed Weather Metrics",
    "Error Handling & Alerts",
  ],
  slug: "weather-app",
  live: "https://weather-app-frontend-chi-lake.vercel.app",
}
];

export default projects;