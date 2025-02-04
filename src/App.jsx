

// import React from 'react'
// // import { Router } from 'react-router'  
// import Header from './components/Header/Header'
// import GlavPage from './components/GlavPage/GlavPage'
// import Search from './components/Search/Search'
// import Button from './components/button/Button'

// const App = () => {
//   return (
//       <div>








//         <Header />
//         <GlavPage/>
//         <Search/>
//         <Button/>
//       </div>

//   )
// }

// export default App

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";

function App() {
  return (
    <div className="text-white">
      APP
    </div>
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Movies />} />
    //     <Route path="/about" element={<About />} />
    //     <Route path="*" element={<NotFound />} />

    //     <Header />
    //     <GlavPage />
    //     <Search />
    //     <Button />
    //   </Routes>
    // </Router>
  );
}

export default App;
