import React from 'react';
import Banner from './compontes/banner';
import CustomNavbar from './compontes/nav'; 
import Card from './compontes/card'
import Below from './compontes/below'
import Footer from './compontes/footer';
import Text from './compontes/Revealtext';
const App=()=>{

  return (
    <div>
      <CustomNavbar/>
      <Banner/>
      <Card/>
      <Text/>
      <Below/>
      <Footer/>
    </div>
  );
}

export default App;
