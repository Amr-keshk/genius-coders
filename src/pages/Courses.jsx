import React from 'react'
import postman from "/postman.webp"
import css from "/css.webp"
import html from "/html.webp"
import JavaScript from "/JavaScript.webp"
import NodeJS from "/NodeJS.webp"
import Postgresql from "/Postgresql.webp"
import react from "/react.webp"
import tailwind from "/tailwind.webp"
import express from "/express.webp"
import python from "/python.webp"

function Courses() {
  return (
    <div>

      <h2>our courses</h2>

      <div>
        <img src={html} alt="" />
        <h3>html</h3>
        <p>hypertext markup language</p>
        <p>uses to create structure of web pages</p>
      </div>

      <div>
        <img src={css} alt="" />
        <h3>css</h3>
        <p>cascade style sheet</p>
      </div>

      <div>
        <img src={tailwind} alt="" />
        <h3>tailwind</h3>
      </div>

      <div>
        <img src={JavaScript} alt="" />
        <h3>javascript</h3>
      </div>

      <div>
        <img src={python} alt="" />
        <h3>python</h3>
      </div>

      <div>
        <img src={react} alt="" />
        <h3>react</h3>
      </div>

      <div>
        <img src={NodeJS} alt="" />
        <h3>nodejs</h3>
      </div>

      <div>
        <img src={express} alt="" />
        <h3>express</h3>
      </div>

      <div>
        <img src={postman} alt="" />
        <h3>postman</h3>
      </div>

      <div>
        <img src={Postgresql} alt="" />
        <h3>postgres</h3>
      </div>


    </div>
  )
}

export default Courses