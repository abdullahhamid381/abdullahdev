import React, { useState, useEffect } from 'react';
import Home from './Components/Pages/Home/Home'
import { Wrapper } from './Components/Theme/StyledComponents'
import MouseTracker from './Components/MouseTracker'
import FIxed from './Components/FIxed'

const App = ({ toggleTheme }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay for demonstration purposes (you would replace this with your actual loading logic)
    const delay = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Cleanup the timeout to prevent memory leaks
    return () => clearTimeout(delay);
  }, []);

  return (
    <div>

  {loading ? (
        // Show loading component while the site is loading
        <div style={{background:'#02050A',height:'100vh',position:'relative'}}>
        <img src="./images/loading.gif" alt="" style={{width:'20%',position:'absolute',left:'40%',top:'30%'}} />
      </div>
      ) : (
        // Render your actual content when the site is fully loaded
        <div>
         <FIxed/>
  <Home/>
          {/* Add the rest of your components and content here */}
        </div>
      )}


    </div>
  )
}

export default App