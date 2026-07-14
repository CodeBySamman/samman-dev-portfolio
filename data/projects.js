
const projects = [

{
  title: "Ovilo Store",
  image: "/projects/ovi.png",
  description:
  "A full-stack e-commerce platform built with Next.js and MongoDB featuring authentication, admin dashboard, product management, cart system, and order management.",
  stack: ["Next.js", "MongoDB", "NextAuth","Google Login"],
  features: [
    "Admin Dashboard",
    "Product Management",
    "Order Management",
    "Category Control",
    "Cart Management"
  ],
  slug: "ovilo-store",
  live: "https://ovilo-ecommerce-platform.vercel.app",
},
 {
    title: "GetMeAChai",
    image: "/projects/chiweeb.png",
    description:
      "A full-stack creator support platform developed with Next.js and MongoDB, featuring Google authentication with NextAuth, secure user management, server-side data handling, dynamic payment support workflow, and optimized backend operations.",
    stack: ["Next.js", "MongoDB", "Tailwind CSS"],
    features: ["NextAuth", "Google Login", "Server Actions", "Payment Getway"],
   slug: "getmeachai",
    live: "https://getmeachai-nextjs.vercel.app",
  },
 {
    title: "Business Insights",
    image: "/projects/blogs.png",
    description:
      "A full-stack business analytics platform built with MERN Stack featuring JWT authentication, role-based protected routes, secure password hashing with bcrypt, input validation, RESTful APIs, MongoDB data management, and scalable backend architecture for business data processing.",
    stack: ["MongoDB", "Express", "React", "Node.js"],
    features: ["JWT", "bcrypt", "Validation", "REST APIs"],
    slug: "business-insights",
    live: "https://bloginsights-fullstack-fdj4.vercel.app",
  },

  {
    title: "Cloud Notes",
    image: "/projects/nots.png",
    description:
      "A secure MERN-based note management application with JWT authentication, password encryption using bcrypt, protected API routes, complete CRUD operations, MongoDB integration, middleware-based authorization, and efficient user-specific data handling.",
    stack: ["MongoDB", "Express", "React", "Node.js"],
    features: ["JWT", "bcrypt", "Authentication", "CRUD"],
  slug: "cloud-notes",
    live: "https://cloudnotes-fullstack-mern-i3t2cp3q1-codebysammans-projects.vercel.app/",
  },
];

export default projects;