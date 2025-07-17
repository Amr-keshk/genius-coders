import React from "react";
import bird from "/elements/greeting-bird.png";
import CloseBtn from "../components/CloseBtn"

export default function ChatBot() {
  const teenagerCourses = ["HTML", "CSS", "JavaScript", "Tailwind", "ReactJS", "NodeJS", "ExpressJS", "PostgreSQL", "Python", "Postman"]

  const [userHovering, setUserHovering] = React.useState(null)
  const [userWannaAsk, setUserWannaAsk] = React.useState(true)
  const [userAnswer, setUserAnswer] = React.useState("")
  const [ageCategory, setAgeCategory] = React.useState("")
  const [selectedCourse, setSelectedCourse] = React.useState("")

  function handleAnswer(e) {

    e.preventDefault()
    const answer = Number(userAnswer)
    if(!ageCategory) {
      
      if (!answer || answer < 6 || answer > 16) {
        alert("اكتب السن الصحيح للطفل")
        return
      }
      answer > 10 ? setAgeCategory("overten") : answer <= 10 ? setAgeCategory("underten") : ""
      setUserAnswer("")
    }else {
      
      if (!answer || answer < 1 || answer > teenagerCourses.length) {
        alert("ادخل رقم الكورس بشكل صحيح");
        return;
      }
      setSelectedCourse(userAnswer)
      setUserAnswer("")
    }
  }
  return (
    <div>
      <div className="fixed z-50 left-0 top-1/3">
        <img
          onClick={() => (setUserWannaAsk(prev => !prev))}
          onMouseEnter={() => setUserHovering(true)}
          onMouseLeave={() => setUserHovering(false)}
          className="w-20 sm:w-28 cursor-pointer"
          src={bird}
          alt="greeting bird"
        />
        <p className={`opacity-0 ${userHovering && "opacity-100"} transition duration-300 absolute top-4 left-0 font-bold capitalize w-64 p-4 text-lightOrange bg-green rounded-3xl`}>have a question? click me, I&apos;m your assisstant🤖</p>
        {
          userWannaAsk && (
            <form className="flex flex-col items-center gap-2 border-4 border-white outline outline-green bg-white p-6" onSubmit={(e) => {handleAnswer(e)}}>
              <div onClick={() => {setUserWannaAsk(false); setAgeCategory(""); setUserAnswer("")}} className="ml-auto">
                <CloseBtn setOpenMenu={setUserWannaAsk} openMenu={userWannaAsk} />
              </div>
              <p className="font-bold text-darkblue ">Hello, Welcome Genius Coders ChatBot😅</p>
              <p className="font-bold text-darkblue ">{ageCategory ? "" : "الطفل كام سنة ؟"}</p>
              {!selectedCourse && <div className="font-bold text-green grid grid-cols-3 gap-4">
                {ageCategory === "overten" && 
                  teenagerCourses.map((language, index) => (
                    <p key={language+index}>{index+1} - {language}</p>
                  ))
                }
              </div>}
              <p className="font-bold text-darkblue ">{ageCategory === "underten" && `1- scratch`}</p>
              <input onKeyDown={(e) => e.key === "Enter" && handleAnswer(e)} onChange={(e) => setUserAnswer(e.target.value)} value={userAnswer} className="focus:outline-green border-2 border-orange rounded w-full p-4 placeholder:capitalize" placeholder="write your answer" type="text" /> 
              <button className="bg-green py-2 px-4 rounded w-fit hover:bg-green2 transition duration-300 text-lightOrange font-bold capitalize">answer</button>
            </form>
          )
        }
      </div>
    </div>

        
  );
}