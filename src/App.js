// function App() {
//   const title = 'indian cricket';
//   const body = 'sachin...sachin...sachin';
//   const comments = [
//     { id: 1, text: 'i' },
//     { id: 2, text: 'love' },
//     { id: 3, text: 'cricket' },
//   ];

//   return (
//     <div className='container'>
//       <h1>{title}</h1>
//       <h1>{body}</h1>

//       <div className='comments'>
//         <h3>comments ({comments.length}) </h3>
//         <ul> 
//           {comments.map((comment,index) => (

//             <li key={index}>{comment.text}</li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default App;


// function App() {
//   const title = 'blog post';
//   const body = 'this is my blog';
//   const comments = [
//     { id: 1, text: 'comment one' },
//     { id: 2, text: 'comment 2' },
//     { id: 3, text: 'comment 3' },
//   ];

//   //const loading = true;
//   const loading = false;
//   //const showComments = false
//   const showComments = true

//   if (loading) return <h1>loading...</h1>
//   return (
//     <div className='container'>
//       <h1>{title}</h1>
//       <h1>{body}</h1>
//       {showComments ? 'Yes' : 'no'}

//       <div className='comments'>
//         <h3>comments ({comments.length}) </h3>
//         <ul>
//           {comments.map((Comment, index) => (
//             <li key={index}>{Comment.text}</li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default App;



import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useState } from 'react';
import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import Header from "./components/Header";
import FeedbackData from './data/FeedbackData';

import Aboutpages from './pages/AboutPage';
import AboutIconLink from './components/AboutIconLink';
import { FeedbackProvider } from './context/FeedbackContext';
import FeedbackItem from './components/FeedbackItem';
import Card from './components/shared/Card';



function App() {
  //const [feedback, setFeedback] = useState(FeedbackData)


  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className='container'>
          <Routes>
            <Route
              path='/'
              element={
                <>
                  <FeedbackForm  />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            />
            <Route path='/about' element={<Aboutpages />} />
          </Routes>
          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;