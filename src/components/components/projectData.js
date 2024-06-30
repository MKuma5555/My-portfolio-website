import wordleProject1 from "../../assets/img/portfolio/wordle.png"
import project2 from "../../assets/img/portfolio/project2.png"
import travelplannerProject3 from "../../assets/img/portfolio/travelplanner.png"
import dietmateProject4 from "../../assets/img/portfolio/dietmate.png"
import mywebsite from "../../assets/img/portfolio/mywebsite.png"
import project1_1 from "../../assets/img/portfolio/project1-1.png"
import project1_2 from "../../assets/img/portfolio/project1-2.png"
import project1_3 from "../../assets/img/portfolio/project1-3.png"
import project4_1 from "../../assets/img/portfolio/project4-1.png"
import project4_2 from "../../assets/img/portfolio/project4-2.png"
import project4_3 from "../../assets/img/portfolio/project4-3.png"
import project3_1 from "../../assets/img/portfolio/project3-1.png"
import project3_2 from "../../assets/img/portfolio/project3-2.png"
import myweb1 from "../../assets/img/portfolio/myweb1.png"
import myweb2 from "../../assets/img/portfolio/myweb2.png"

const portfolioData = [
    {
      projectName: "TripTrail",
      githubLink: "https://github.com/MKuma5555/TripTrail",
      projectURL: "https://travel-planner-vza0.onrender.com/",
      projectImg: travelplannerProject3,
      category: "Full stack",
      overview:"Trip Tales is my first team project—a web application designed to enhance your travel planning experience. By simply entering your desired destinations, users can receive personalized travel tips and activities. Leveraging OpenAI technology, Trip Tales offers three unique activity suggestions for each location, providing both inspiration and practical planning assistance for your next adventure.",
      usage:"To use Trip Tales, follow these steps:Create a Profile: Sign up or log in using your Google or GitHub account through OAuth2.Create a Trip: Enter your travel dates and add a list of destinations. Submit to save your trip.Explore Home Page: View a list of your trips, with options to view, edit, or delete each one.Please note that some features are available only to authenticated users.",
      programmingTool:"HTML / CSS / JS / Express.js /Bootstrap /EJS /OpenAI",
      samplePhoto1:travelplannerProject3,
      samplePhoto2:project3_1,
      samplePhoto3:project3_2,
    },
    {
      projectName: "Wedding venue Web",
      githubLink: "https://github.com/MKuma5555/project2",
      projectURL: "https://project2-fnip.onrender.com/",
      projectImg: project2,
      category: "Web",
      overview:"This wedding venue website, offers users a seamless experience in finding the perfect venue. Explore various categories, each showcasing a curated list of venues. Users can easily save their favorites with the like button, creating a personalized list on their user page.",
      usage:"Browse Venues: Discover a variety of venues categorized for easy navigation.Favorite Venues: Save your top choices with a simple click to create a personalized list.User-Friendly Design: Enjoy an intuitive interface that makes planning your special day a breeze.",
      programmingTool:"Python /Flask /PostgreSQL /HTML /CSS",
      samplePhoto1:project2,
      samplePhoto2:"",
      samplePhoto3:"",

    },
    {
      projectName: "Wordle Game",
      githubLink: "https://github.com/MKuma5555/wordle-app",
      projectURL: "https://mkuma5555.github.io/wordle-app/wordle.html",
      projectImg: wordleProject1,
      category: "Game",
      overview:"'Wordle Game' is a recreation of the classic word puzzle that challenges players to guess a five-letter word within six attempts.",
      usage:"Enter a five-letter word and press enter.Guess the correct word within six tries.Guesses must be real words from the list (12,971 words).Green: Correct letter and position.Yellow: Correct letter, wrong positionGray: Incorrect letter.Letters can be repeated.No plural answers.Must be exactly five letters.",
      programmingTool:"HTML/CSS/Javascript/Github",
      samplePhoto1:project1_1,
      samplePhoto2:project1_2,
      samplePhoto3:project1_3,
    },
    {
      projectName: "DietMate",
      githubLink: "https://github.com/MKuma5555/socialDiet_Project4",
      projectURL: "https://diet-mate.onrender.com/",
      projectImg: dietmateProject4,
      category: "Full stack",
      overview:"DIET.MATE is a vibrant and user-friendly application designed to help you achieve your fitness goals. With a sleek interface built using HTML, CSS, JavaScript, React, and Bootstrap, this app offers stunning visuals and an intuitive design.",
      usage:"Track Your Progress: Monitor your daily data effortlessly, with visual graphs to help you understand your journey.Find Exercise Mates: Use the Google Maps integration to create events and connect with others who share your fitness goals.Achieve Your Targets: Stay motivated and on track with personalized recommendations and community support.Experience a seamless way to reach your health goals.",
      programmingTool:"HTML / CSS / React / Express.js /Bootstrap /Google Map Api",
      samplePhoto1:project4_1,
      samplePhoto2:project4_2,
      samplePhoto3:project4_3,
    },
    {
      projectName: "Portfolio Website",
      githubLink: "https://github.com/MKuma5555/My-portfolio-website",
      projectURL: "https://www.misakumagai.com",
      projectImg: mywebsite,
      category: "Web",
      overview:"Thank you for visiting my portfolio website. This is my opportunity to showcase my skills and passion for software engineering. I didn’t arrive at this career directly; the path has been full of ups and downs. However, I’ve been reflecting on why I wanted to become an engineer—to create applications and websites that improve our lives. I love this job and look forward to continuously updating my skills.",
      usage:"Built with React and SAP, deployed on Vercel, and connected to my custom domain.",
      programmingTool:"HTML / CSS / React / JS /Bootstrap /Vercel",
      samplePhoto1:myweb1,
      samplePhoto2:myweb2,
      samplePhoto3:mywebsite,
    }
  ];


  export default portfolioData;