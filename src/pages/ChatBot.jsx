// import React from 'react'
// import bird from "/elements/greeting-bird.png"
// function ChatBot() {
//   const [userHovering, setUserHovering] = React.useState(null)
//   const [userWannaAsk, setUserWannaAsk] = React.useState(null)

//   const [userInput, setUserInput] = React.useState("")
//   const [messages, setMessages] = React.useState(["How old is the kid?"])
//   const [ageCategory, setAgeCategory] = React.useState("")

//   const courses = {
//     "overten": [
//       { id: 1, name: "HTML", details: "Building website structure and content." },
//       { id: 2, name: "CSS", details: "Styling and designing websites." },
//       { id: 3, name: "JavaScript", details: "Making websites interactive and dynamic." },
//       { id: 4, name: "Tailwind CSS", details: "A modern CSS framework for fast web design." },
//       { id: 5, name: "ReactJS", details: "Building advanced user interfaces." },
//       { id: 6, name: "NodeJS", details: "Backend development using JavaScript." },
//       { id: 7, name: "ExpressJS", details: "A web framework for NodeJS." },
//       { id: 8, name: "PostgreSQL", details: "Managing relational databases." },
//       { id: 9, name: "Python", details: "General-purpose programming language." },
//       { id: 10, name: "Postman", details: "API testing tool for developers." },
//     ],
//     "undereleven": [
//       { id: 1, name: "Scratch", details: "Learn programming through block-based visual coding." },
//       { id: 2, name: "Pictoblox", details: "AI and IoT coding made easy for kids." },
//       { id: 3, name: "Mobile Application", details: "Creating simple mobile apps for kids." },
//       { id: 4, name: "Python", details: "Learning Python basics in a kid-friendly way." },
//       { id: 5, name: "mBlock", details: "Visual programming with Arduino and robotics." },
//       { id: 6, name: "AI for Kids", details: "Understanding Artificial Intelligence concepts in a simple way." },
//     ],
//   };


//   function handleSend(e) {
//     e.preventDefault()
//     const answer = Number(userInput)
//     console.log(answer)
//     if(isNaN(answer)) {
//       alert("Please Enter a valid Number ⚠️")
//       return;
//     }
//     if(answer === 0 && ageCategory) {
//       setAgeCategory("")
//       setMessages(["How old are the kid?"])
//       setUserInput("")
//       return;
//     }

//     if(!ageCategory) {
//       if (answer < 6 || answer > 16) {
//         alert("Please Enter a valid Age between 6-16 ⚠️");
//         return ;
//       };

//       if (answer > 10) {
//         setAgeCategory(() => "overten")
//         const currentCourse = courses.overten
//         setMessages(prev => [...prev, `Available Courses 🤖 for age: ${answer} years`, ...currentCourse.map(course => `${course.id} - ${course.name}` ), "Enter course number for more details / Enter 0 to go back"])
//       }else if (answer < 11) {
//         setAgeCategory(() => "undereleven")
//         const currentCourse = courses.undereleven
//         setMessages(prev => [...prev, `Available courses 🤖 for age: ${answer} years`, ...currentCourse.map(course => `${course.id} - ${course.name}`), "Enter course number for more details / Enter 0 to go back"])
//       }
//       setUserInput("")
//     }else {
      
//       if (ageCategory === "overten") {
//         const courseNumber = courses[ageCategory].find(c => c.id === answer)
//         if(!courseNumber) {
//           alert("Please Enter a valid Number ⚠️")
//           return;
//         }
//         setMessages(prev => [...prev, `Details of ${courses[ageCategory][answer - 1].name}: ${courses[ageCategory][answer - 1].details}`, "Enter 0 to go back"])
//       } else if (ageCategory === "undereleven") {        
//         setMessages(prev => [...prev, `Details of ${courses[ageCategory][answer - 1].name}: ${courses[ageCategory][answer - 1].details}`, "Enter 0 to go back"])
//       }
//       setUserInput("")
//     }
//   }


//   return (
//     <div className="fixed z-50 left-0 top-1/3">
//       <img
//         onClick={() => (setUserWannaAsk(prev => !prev))}
//         onMouseEnter={() => setUserHovering(true)}
//         onMouseLeave={() => setUserHovering(false)}
//         className="w-20 sm:w-28 cursor-pointer"
//         src={bird}
//         alt="greeting bird"
//       />
//       <p className={`opacity-0 ${userHovering && "opacity-100"} transition duration-300 absolute top-4 left-0 font-bold capitalize w-64 p-4 text-lightOrange bg-green rounded-3xl`}>have a question? click me, I&apos;m your assisstant🤖</p>
//       {userWannaAsk &&
//         <div className="overflow-y-scroll min-h-96 flex flex-col items- gap-2 border-4 border-white outline outline-violet-500 bg-violet-300 p-6">
//           {
//             messages.map((msg, i) => (
//               <p key={msg+i} className='relative font-bold text-violet-400 text-xl bg-white my-2 p-4 rounded-tr-2xl rounded-bl-2xl messages'>{msg}</p>
//             ))
//           }
//           <form onSubmit={handleSend} className='flex flex-col gap-4 items-center'>
//             <input onChange={(e) => setUserInput(e.target.value)} value={userInput} name="userInput" className="focus:outline-green border-2 border-orange rounded w-full p-4 placeholder:capitalize" placeholder="write your answer" type="text" /> 
//             <button type="submit" className="bg-green py-2 px-4 rounded w-fit hover:bg-green2 transition duration-300 text-lightOrange font-bold capitalize">answer</button>
//           </form>
//         </div>
//       }

//     </div>
//   )
// }

// export default ChatBot




// import React, { useEffect, useRef } from 'react';
// import bird from "/elements/greeting-bird.png";

// function ChatBot() {
//   const [userHovering, setUserHovering] = React.useState(false);
//   const [userWannaAsk, setUserWannaAsk] = React.useState(false);
//   const [userInput, setUserInput] = React.useState("");
//   const [messages, setMessages] = React.useState([{ text: "How old is the kid?", sender: "bot", time: new Date().toLocaleTimeString() }]);
//   const [ageCategory, setAgeCategory] = React.useState("");

//   const chatRef = useRef(null);

//   const courses = {
//     overten: [
//       { id: 1, name: "HTML", details: "Building website structure and content." },
//       { id: 2, name: "CSS", details: "Styling and designing websites." },
//       { id: 3, name: "JavaScript", details: "Making websites interactive and dynamic." },
//       { id: 4, name: "Tailwind CSS", details: "A modern CSS framework for fast web design." },
//       { id: 5, name: "ReactJS", details: "Building advanced user interfaces." },
//       { id: 6, name: "NodeJS", details: "Backend development using JavaScript." },
//       { id: 7, name: "ExpressJS", details: "A web framework for NodeJS." },
//       { id: 8, name: "PostgreSQL", details: "Managing relational databases." },
//       { id: 9, name: "Python", details: "General-purpose programming language." },
//       { id: 10, name: "Postman", details: "API testing tool for developers." },
//     ],
//     undereleven: [
//       { id: 1, name: "Scratch", details: "Learn programming through block-based visual coding." },
//       { id: 2, name: "Pictoblox", details: "AI and IoT coding made easy for kids." },
//       { id: 3, name: "Mobile Application", details: "Creating simple mobile apps for kids." },
//       { id: 4, name: "Python", details: "Learning Python basics in a kid-friendly way." },
//       { id: 5, name: "mBlock", details: "Visual programming with Arduino and robotics." },
//       { id: 6, name: "AI for Kids", details: "Understanding Artificial Intelligence concepts in a simple way." },
//     ],
//   };

//   useEffect(() => {
//     chatRef.current?.scrollTo(0, chatRef.current.scrollHeight);
//   }, [messages]);

//   function handleSend(e) {
//     e.preventDefault();
//     const trimmedInput = userInput.trim();
//     const answer = Number(trimmedInput);

//     if (!trimmedInput) return;

//     const newMessage = { text: trimmedInput, sender: "user", time: new Date().toLocaleTimeString() };
//     setMessages(prev => [...prev, newMessage]);
//     setUserInput("");

//     if (isNaN(answer)) {
//       alert("Please enter a valid number ⚠️");
//       return;
//     }
//     if (answer === 0 && ageCategory) {
//       setAgeCategory("");
//       setMessages(prev => [...prev, { text: "How old is the kid?", sender: "bot", time: new Date().toLocaleTimeString() }]);
//       return;
//     }
//     if (!ageCategory) {
//       if (answer < 6 || answer > 16) {
//         alert("Please enter a valid age between 6 and 16 ⚠️");
//         return;
//       }
//       const category = answer > 10 ? "overten" : "undereleven";
//       setAgeCategory(category);
//       const currentCourses = courses[category].map(course => `${course.id} - ${course.name}`).join("\n");
//       setMessages(prev => [
//         ...prev,
//         { text: `Available courses 🤖 for age: ${answer} years\n${currentCourses}\nEnter course number for more details / Enter 0 to go back`, sender: "bot", time: new Date().toLocaleTimeString() }
//       ]);
//     } else {
//       const selectedCourse = courses[ageCategory].find(c => c.id === answer);
//       if (!selectedCourse) {
//         alert("Please enter a valid course number ⚠️");
//         return;
//       }
//       setMessages(prev => [
//         ...prev,
//         { text: `Details of ${selectedCourse.name}: ${selectedCourse.details}\nEnter 0 to go back`, sender: "bot", time: new Date().toLocaleTimeString() }
//       ]);
//     }
//   }

//   return (
//     <div className="fixed bottom-4 left-4 z-50">
//       <img
//         onClick={() => setUserWannaAsk(prev => !prev)}
//         onMouseEnter={() => setUserHovering(true)}
//         onMouseLeave={() => setUserHovering(false)}
//         className="w-16 sm:w-20 cursor-pointer drop-shadow-lg"
//         src={bird}
//         alt="greeting bird"
//       />
//       {userHovering && (
//         <p className="absolute w-44 -top-10 left-0 font-bold text-sm p-3 bg-green-600 text-green rounded-xl shadow-lg">
//           Have a question? Click me 🤖
//         </p>
//       )}
//       {userWannaAsk && (
//         <div className="w-[360px] h-[550px] bg-gradient-to-br from-white via-gray-50 to-gray-100 rounded-xl shadow-2xl flex flex-col border border-gray-200 overflow-hidden">
//           <div ref={chatRef} className="flex-1 overflow-y-auto p-4 space-y-3">
//             {messages.map((msg, i) => (
//               <div key={i} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
//                 <div className={`p-3 max-w-[75%] text- rounded-xl whitespace-pre-line bg-white text-green font-semibold border border-gray-300 `}>
//                   {msg.text}
//                   <span className="block text-[10px] text-right mt-1 text-gray-400">{msg.time}</span>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <form onSubmit={handleSend} className="flex border-t p-2 gap-2 bg-white">
//             <input
//               className="flex-1 p-2 rounded-md border border-gray-300 focus:outline-none"
//               placeholder="Type your answer..."
//               value={userInput}
//               onChange={(e) => setUserInput(e.target.value)}
//             />
//             <button type="submit" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md">
//               ➤
//             </button>
//           </form>
//         </div>
//       )}
//     </div>
//   );
// }

// export default ChatBot;

import React, { useEffect, useRef } from 'react';
import bird from "/elements/greeting-bird.png";

function ChatBot() {
  const [userHovering, setUserHovering] = React.useState(false);
  const [userWannaAsk, setUserWannaAsk] = React.useState(false);
  const [userInput, setUserInput] = React.useState("");
  const [messages, setMessages] = React.useState([{ text: "How old is the kid?", sender: "bot", time: new Date().toLocaleTimeString() }]);
  const [ageCategory, setAgeCategory] = React.useState("");

  const chatRef = useRef(null);

  const courses = {
    overten: [
      { id: 1, name: "HTML", details: "Imagine being able to craft the structure of an entire website from scratch. With HTML, you'll learn how to create the building blocks of web pages, making sure every element is in its right place." },
      { id: 2, name: "CSS", details: "CSS is like choosing the outfit for your website. You'll discover how to style text, position images, and create stunning designs that catch the eye." },
      { id: 3, name: "JavaScript", details: "Ever wondered how websites react when you click a button or fill a form? JavaScript brings interactivity to life, making your web pages feel alive and dynamic." },
      { id: 4, name: "Tailwind CSS", details: "With Tailwind CSS, you'll harness a modern toolkit that lets you design sleek, professional layouts quickly and easily." },
      { id: 5, name: "ReactJS", details: "ReactJS helps you build user interfaces like a pro. It’s perfect for creating interactive apps, from simple to complex." },
      { id: 6, name: "NodeJS", details: "Take your skills to the backend with NodeJS, letting you control servers and databases all using JavaScript." },
      { id: 7, name: "ExpressJS", details: "ExpressJS works hand-in-hand with NodeJS to handle web requests smoothly, making your app fast and efficient." },
      { id: 8, name: "PostgreSQL", details: "Store and manage important information using PostgreSQL, a powerful database system trusted by companies worldwide." },
      { id: 9, name: "Python", details: "Python is a versatile language used for everything from web apps to data science. It’s beginner-friendly yet extremely powerful." },
      { id: 10, name: "Postman", details: "Explore how apps talk to each other through APIs using Postman, a handy tool for testing and developing communication between services." },
    ],
    undereleven: [
      { id: 1, name: "Scratch", details: "Step into the world of coding with Scratch, where programming feels like building a story using colorful blocks." },
      { id: 2, name: "Pictoblox", details: "Learn how Artificial Intelligence and IoT work using Pictoblox – coding made super fun and easy!" },
      { id: 3, name: "Mobile Application", details: "Kids can start creating their own simple mobile apps, bringing their ideas to life on smartphones and tablets." },
      { id: 4, name: "Python", details: "Even young minds can start exploring Python! We'll cover the basics in a way that’s friendly and engaging." },
      { id: 5, name: "mBlock", details: "Combine robotics and coding with mBlock, letting kids control devices and learn through exciting experiments." },
      { id: 6, name: "AI for Kids", details: "Ever heard of Artificial Intelligence? Now kids can learn what it means and how it helps in our everyday life." },
    ],
  };

  useEffect(() => {
    chatRef.current?.scrollTo(0, chatRef.current.scrollHeight);
  }, [messages]);

  function handleSend(e) {
    e.preventDefault();
    const trimmedInput = userInput.trim();
    const answer = Number(trimmedInput);

    if (!trimmedInput) return;

    const newMessage = { text: trimmedInput, sender: "user", time: new Date().toLocaleTimeString() };
    setMessages(prev => [...prev, newMessage]);
    setUserInput("");

    if (isNaN(answer)) {
      alert("Please enter a valid number ⚠️");
      return;
    }
    if (answer === 0 && ageCategory) {
      setAgeCategory("");
      setMessages(prev => [...prev, { text: "How old is the kid?", sender: "bot", time: new Date().toLocaleTimeString() }]);
      return;
    }
    if (!ageCategory) {
      if (answer < 6 || answer > 16) {
        alert("Please enter a valid age between 6 and 16 ⚠️");
        return;
      }
      const category = answer > 10 ? "overten" : "undereleven";
      setAgeCategory(category);
      const currentCourses = courses[category].map(course => `${course.id} - ${course.name}`).join("\n");
      setMessages(prev => [
        ...prev,
        { text: `Let me show you a magical list of courses perfect for age ${answer} years:\n${currentCourses}\nChoose a number to dive into more details or type "0" to go back.`, sender: "bot", time: new Date().toLocaleTimeString() }
      ]);
    } else {
      const selectedCourse = courses[ageCategory].find(c => c.id === answer);
      if (!selectedCourse) {
        alert("Please enter a valid course number ⚠️");
        return;
      }
      setMessages(prev => [
        ...prev,
        { text: `Now, let me tell you a little story about ${selectedCourse.name}...\n${selectedCourse.details}\nWhenever you wish to explore more, just type 0 to return to the course list.`, sender: "bot", time: new Date().toLocaleTimeString() }
      ]);
    }
  }

  return (
    <div className="fixed bottom-4 left-4 z-50">
      <img
        onClick={() => setUserWannaAsk(prev => !prev)}
        onMouseEnter={() => setUserHovering(true)}
        onMouseLeave={() => setUserHovering(false)}
        className="w-16 sm:w-20 cursor-pointer drop-shadow-lg"
        src={bird}
        alt="greeting bird"
      />
      {userHovering && (
        <p className="absolute w-44 -top-10 left-0 font-bold text-sm p-3 bg-green-600 text-green rounded-xl shadow-lg">
          Have a question? Click me 🤖
        </p>
      )}
      {userWannaAsk && (
        <div className="w-[360px] h-[550px] bg-gradient-to-br from-white via-gray-50 to-gray-100 rounded-xl shadow-2xl flex flex-col border border-gray-200 overflow-hidden">
          <div ref={chatRef} className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`p-3 max-w-[75%]  rounded-xl whitespace-pre-line bg-white text-darkblue font-semibold border border-gray-300`}>
                  {msg.text}
                  <span className="block text-[10px] text-right mt-1 text-gray-400">{msg.time}</span>
                </div>
              </div>
            ))}
          </div>
          <form onSubmit={handleSend} className="flex border-t p-2 gap-2 bg-white">
            <input
              className="flex-1 p-2 rounded-md border border-gray-300 focus:outline-none"
              placeholder="Type your answer..."
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
            />
            <button type="submit" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md">
              ➤
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default ChatBot;
