import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillLinkedin,
  AiFillMediumSquare
} from "react-icons/ai";

const footerLinks = {
  
    legal: [
      {
        name: "Privacy Policy",
        url: "/legal/privacy-policy",
      },
      {
        name: "Disclaimers",
        url: "/legal/disclaimers",
      },
      {
        name: "Terms and Conditions",
        url: "/legal/terms-and-conditions",
      },
    ],
  
  
    quick: [
      {
        name: "About",
        url: "/about",
      },
      {
        name: "Contact",
        url: "/contact",
      },
      {
        name: "External Articles",
        url: "/external-articles",
      },
      
    ],
    socialMedia:[
      
      {
        name:"Linkedin",
        url:"https://www.linkedin.com/in/shouravrahman/",
        icons:<AiFillLinkedin/>
      },
      {
        name:"GitHub",
        url:"https://github.com/shouravrahman",
        icons:<AiFillGithub/>
      },
      {
        name:"Twitter",
        url:"https://twitter.com/0xshouravrahman",
        icons:<AiOutlineTwitter/>
      },
      {
        name:"Medium",
        url:"https://medium.com/@shouravrahman/",
        icons:<AiFillMediumSquare/>
      },
    ]
  
};


export default footerLinks