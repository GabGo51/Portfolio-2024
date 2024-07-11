import img1 from "../img/Thumbnails/Alexandra.png";
import img2 from '../img/Thumbnails/gogosse.png'
import img3 from "../img/Thumbnails/WeFinanceU.png";
import img4 from "../img/Thumbnails/TATQ.png";
import gogossem1 from '../img/Mockups/gogossem1.png'
import gogossem2 from '../img/Mockups/gogossem3.png'
import alexm1 from '../img/Mockups/alexm1.png'
import alexm2 from '../img/Mockups/alexm2.png'
import tatqm1 from '../img/Mockups/tatqm1.png'
import tatqm2 from '../img/Mockups/tatqm2.png'
import wefinanceum1 from '../img/Mockups/wefinanceum1.png'
import wefinanceum2 from '../img/Mockups/wefinanceum2.png'

const projectsData = [
  {
    number: "01",
    name: "TATQ",
    img: img4,
    mockup1:tatqm1,
    mockup2:tatqm2, 
    type: "Environemental Blog & Research",
    url: "hello.com",
    git: "https://github.com",
    mainP:
      "In this project I developed the first online presence for Transition Alimenterre Quebec, an organization advocating for a transition to greener food systems. The design was made in collaboration with Nicolas Gosselin (Graphic Designer) The website features their professional researches and blog system to share updates and insights, as well as functionalities for donations and email services to engage with the community and supporters effectively.",
    techP:
      "The initial design took place on Figma. Since the client needed a simple and intuitive way to update and edit the website we opted for Squarespace as a no-code environement. A bit of custom Javascipt and CSS was added to match the wanted design. Donation is made through Zeffy and the mailing system is managed with Squarespace and Google Workplace.",
  },
  {
    number: "02",
    name: "GOGOSSE",
    img: img2,
    mockup1:gogossem1,
    mockup2:gogossem2, 
    type: "Graphic Design Portfolio",
    url: "https://www.gogosse.space",
    git: "https://github.com/GabGo51/gogosse",
    mainP:
      "This project is by far my favorite piece to date. GOGOSSE is a creative and interactive collection of Nicola Gosselin's (Graphic Designer) projects. We collaborated on the design, and I developed and deployed the website. This portfolio really challenged me and opened my eyes to the world of animations. I learned to work with many moving parts while keeping the UI simple.",
    techP:
      "This website was designed using Figma. The development was done on the React framework with JavaScript. Most of the animations are created using the Framer Motion animation library. Smooth scroll was implemented using the Lenis library. The messaging system is processed with EmailJS. The site is deployed using Vercel.",
  },
  {
    number: "03",
    name: "WeFinanceU",
    img: img3,
    mockup1:wefinanceum1m1,
    mockup2:wefinanceum2, 
    type: "Real Estate Financing",
    url: "hello.com",
    git: "https://github.com",
    mainP:
      "WeFinanceU is  a showcase website that demonstrate a real estate financing application. The startup wanted to present their company/product in a simple yet modern design. The website has a built in message system and links directly to the application. I managed both the design and developement of this contract.",
    techP:
      "The design of the showcase site was done using Figma. The development was done on the React framework with JavaScript. Most of the animations are created using the Framer Motion animation library. The messaging system is processed with EmailJS. The site is deployed using Godaddy.",
  },
  {
    number: "04",
    name: "Alexandra Nicolov",
    img: img1,
    mockup1:alexm1,
    mockup2:alexm2, 
    type: "Graphic Design Portfolio",
    url: "hello.com",
    git: "https://github.com",
    mainP:
      "The essence of this contract was to initialize the online presence of a new organisation. The challenging aspect of this project was to recreate an interactive and interesting design using a simple no-code environement since the client wanted to update and edit the website themselves. The functionalities found on this website includes a blog, donations, and a  custom mailing system. The design of the website is based around unortodox color represanting the ground and the sun. We aimed for a stackable pod design",
    techP:
      "The initial design of this project took place on Figma. Since the client needed a simple and intuitive way to update and edit the website we opted for Squarespace has a no-code environement. I did add a bit off custom Javascipt and CSS to match the wanted design. Donation is made through Zeffy and the mailing system is managed with Squarespace and Google Workplace.",
  },
];

export default projectsData;
