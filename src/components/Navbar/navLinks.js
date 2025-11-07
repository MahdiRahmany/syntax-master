export const navLinks = [
  { name: "Home", path: "/home" },
  { name: "Dashboard", path: "/dashboard" },
  { name: "All Courses", path: "/all-courses" },
  {
    name: "Resource",
    path: "/resource",
    children: [
      { name: "Resource 1", path: "/resource/resource1" },
      { name: "Resource 2", path: "/resource/resource2" },
    ],
  },
  {
    name: "Contact",
    path: "/contnct",
    children: [
      { name: "Contact Us", path: "/contnct/contact-us" },
      { name: "Support", path: "/contact/support" },
    ],
  },
  {
    name: "Affiliate",
    path: "/affiliate",
    children: [
      { name: "Join", path: "/affiliate/join" },
      { name: "Partners", path: "/affiliate/partners" },
    ],
  },
];
