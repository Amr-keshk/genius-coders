import React, { useState } from 'react';
import Title from '../components/Title';
import html from '/courses-logo/html.png';
import css from '/courses-logo/css.png';
import JavaScript from '/courses-logo/javascript.png';
import tailwind from '/tailwind.webp';
import react from '/courses-logo/react.png';
import nodeJS from '/NodeJS.webp';
import express from '/express.webp';
import postgresql from '/courses-logo/postgres.png';
import postman from '/courses-logo/postman.png';
import python from '/python.webp';
import scratch from '/courses-logo/scratch.png';
import mblock from '/mblock.png';
import ai from '/courses-logo/ai.png';
import mobile from '/mobile.jpg';
import pictoblox from '/pictoblox.png';
import Footer from "../components/Footer"

const ageGroups = ['All', 'From 8 Years', 'From 11 Years'];

const coursesList = [
  { image: html, title: 'HTML', text1: 'HyperText Markup Language', text2: 'Used to build the basic structure of web pages.', ageGroup: 'From 11 Years' },
  { image: css, title: 'CSS3', text1: 'Cascading Style Sheets', text2: 'Used to design and style your web pages beautifully.', ageGroup: 'From 11 Years' },
  { image: JavaScript, title: 'JavaScript', text1: 'The brain of the website', text2: 'Adds interactivity and dynamic behavior.', ageGroup: 'From 11 Years' },
  { image: tailwind, title: 'Tailwind CSS', text1: 'Utility-first CSS framework', text2: 'Build modern websites with pre-made classes.', ageGroup: 'From 11 Years' },
  { image: react, title: 'React', text1: 'JavaScript library', text2: 'Build fast and interactive UIs.', ageGroup: 'From 11 Years' },
  { image: nodeJS, title: 'Node.js', text1: 'JS runtime environment', text2: 'Run JS on the server side.', ageGroup: 'From 11 Years' },
  { image: express, title: 'Express.js', text1: 'Backend framework for Node.js', text2: 'Build APIs and server-side apps.', ageGroup: 'From 11 Years' },
  { image: postgresql, title: 'PostgreSQL', text1: 'Relational DB system', text2: 'Store and manage data efficiently.', ageGroup: 'From 11 Years' },
  { image: postman, title: 'Postman', text1: 'API testing tool', text2: 'Test and debug APIs easily.', ageGroup: 'From 11 Years' },
  { image: python, title: 'Python', text1: 'Programming language', text2: 'Used in web, AI, data, and more.', ageGroup: 'From 8 Years' },
  { image: scratch, title: 'Scratch', text1: 'Visual programming', text2: 'Ideal for teaching kids programming basics.', ageGroup: 'From 8 Years' },
  { image: mblock, title: 'mBlock', text1: 'Block-based coding tool', text2: 'Learn coding and robotics easily.', ageGroup: 'From 8 Years' },
  { image: pictoblox, title: 'PictoBlox', text1: 'AI & Robotics for kids', text2: 'Build AI projects using block coding.', ageGroup: 'From 8 Years' },
  { image: ai, title: 'Artificial Intelligence', text1: 'Smart machine behavior', text2: 'Learn how machines can learn and act.', ageGroup: 'From 8 Years' },
  { image: mobile, title: 'Mobile App Development', text1: 'Build apps for phones', text2: 'Create Android and iOS applications.', ageGroup: 'From 8 Years' },
];


function Courses() {
  const [selectedGroup, setSelectedGroup] = useState('All');
  const filteredCourses = selectedGroup === 'All' ? coursesList : coursesList.filter(course => course.ageGroup === selectedGroup);
  const phoneNumber = '201028815414';

  return (
    <section className="pt-28 bg-gradient-to-b from-thirdColor to-white">
      <div className="container max-w-screen-2xl mx-auto px-4 sm:px-12 md:px-24 lg:px-44 text-center">

        <div className='flex items-center justify-center'>
          <Title whichSection={"courses"}>our courses</Title>
        </div>

        <div className="flex justify-center gap-4 my-10 flex-wrap">
          {ageGroups.map((group, index) => (
            <button
              key={index}
              onClick={() => setSelectedGroup(group)}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition duration-300 ${
                selectedGroup === group
                  ? 'bg-orange text-white border-orange'
                  : 'bg-white text-orange border-lightOrange hover:bg-lightOrange'
              }`}
            >
              {group}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredCourses.map((course, idx) => (
            <div key={idx} className="relative bg-white shadow-md rounded-xl overflow-hidden group hover:shadow-xl transition duration-300">
              <div className="relative h-40 bg-lightOrange flex items-center justify-center">
                <img
                  src={course.image}
                  alt={course.title}
                  className="h-28 object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-darkblue mb-1">{course.title}</h3>
                <p className="text-sm text-gray-700 mb-1">{course.text1}</p>
                <p className="text-sm text-gray-500">{course.text2}</p>
                <div className="mt-4">
                  <a
                    href={`https://wa.me/${phoneNumber}?text=Hello%2C%20I%20want%20to%20know%20more%20about%20the%20${encodeURIComponent(course.title)}%20course.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center bg-green text-white capitalize px-4 py-2 rounded-full hover:opacity-90 hover:bg-orange transition"
                  >
                    more details
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </section>
  );
}

export default Courses;