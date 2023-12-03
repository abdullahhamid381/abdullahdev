import React ,{useEffect,useState} from 'react'
import Typed from "react-typed";
import './HomeScss/Hero.scss'

const Hero = () => {
  // const words = ["WEB DESIGNER", "WEB DEV", "FULL STACK DEV"]; // Add your words here
  // const [currentWordIndex, setCurrentWordIndex] = useState(0);
  // const [currentTypedText, setCurrentTypedText] = useState('');
  // const [isDeleting, setIsDeleting] = useState(false);

  // useEffect(() => {
  //   const typingSpeed = 300; // Adjust the typing speed (milliseconds per character)
  //   const pauseDuration = 5000; // 5 seconds pause between words

  //   const typeNextWord = () => {
  //     const currentWord = words[currentWordIndex];
  //     const currentText = currentTypedText;

  //     if (!isDeleting) {
  //       if (currentText.length < currentWord.length) {
  //         setCurrentTypedText(currentWord.substring(0, currentText.length + 1));
  //       } else {
  //         setIsDeleting(true);
  //         setTimeout(() => {
  //           setIsDeleting(false);
  //           setCurrentTypedText('');
  //           setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
  //         }, pauseDuration);
  //       }
  //     } else {
  //       if (currentText.length > 0) {
  //         setCurrentTypedText(currentText.substring(0, currentText.length - 1));
  //       } else {
  //         setIsDeleting(false);
  //         setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
  //       }
  //     }
  //   };

  //   const typingInterval = setInterval(typeNextWord, typingSpeed);

  //   return () => clearInterval(typingInterval);
  // }, [currentWordIndex, currentTypedText, isDeleting, words]);

  return (
    <div className='hero-main-parent'>
     
      <div className='hero-back'>
    <div className='text-img'>
    <div className="typing-animation">
   <h1>HI, I'M ABDULLAH!  CREATIVE <br />   <span><Typed
          strings={[
           'WEB DESIGNER',
           'WEB DEVELOPER',
           'FULL STACK DEV'
          ]}
          typeSpeed={100}
          backSpeed={100}
          loop
        /></span></h1>
        <p>
Experienced ReactJS and Node.js developer with two years of dedicated expertise. Adept at architecting seamless user interfaces and scalable server-side solutions. Proven track record of delivering high-performance applications, blending creativity with technical precision. Thrives in dynamic environments, passionate about pushing boundaries in web development. Ready to bring innovation and efficiency to your projects.</p>
<div className='buttons'>
<button>Download Cv</button>
</div>
    </div>
    <div className='my-img'>
      <img src="./images/myimg.png" alt="" />
    </div>
    </div>
      </div>
      
     
    </div>
  )
}

export default Hero