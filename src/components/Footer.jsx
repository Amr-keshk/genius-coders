import React from 'react'
import logo from "/logo/logo.png"
import SocialList from "./SocialList"
import planet from "/elements/planet2.png"
const location = <svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="28px" ><path d="M480-120q-74.7 0-140.4-28.34t-114.3-76.92q-48.6-48.58-76.95-114.26Q120-405.19 120-479.87q0-74.67 28.35-140.41 28.35-65.73 76.95-114.36 48.6-48.63 114.3-76.99Q405.3-840 480-840q128.15 0 225.04 78.38 96.88 78.39 124.81 197.47-10.77-3.85-21.25-5.47-10.47-1.62-21.68-1.92-20.54-69.92-68.88-124.23-48.35-54.31-118.04-81.77V-760q0 33-23.5 56.5T520-680h-80v80q0 17-11.5 28.5T400-560h-80v80h240q9.59 0 17.87 4.35 8.28 4.34 14.05 12.03-14.76 25.09-22.57 52.97-7.81 27.88-7.81 57.57 0 54.54 28.27 103.16 28.27 48.61 56.88 89.46-37.92 20-79.46 30.23Q525.69-120 480-120Zm-40-42v-78q-33 0-56.5-23.5T360-320v-40L168-552q-3 18-5.5 36t-2.5 36q0 121 79.5 212T440-162Zm340 42q-3.15 0-5.91-2.02-2.76-2.02-3.86-5.06-11-34.23-29.85-63.84-18.84-29.62-41.07-57.85-17.93-22.92-30.16-48.92t-12.23-55.74q0-50.72 36.07-86.72 36.06-36 87.07-36 51.02 0 87.02 36.04 36 36.04 36 87.03 0 29.07-12.18 55.15-12.17 26.08-30.21 49.16-21.46 29-40.86 58.27-19.39 29.27-30.06 63.42-1.1 3.04-3.86 5.06Q783.15-120 780-120Zm0-73.77q12.31-20.85 25.85-39.58 13.53-18.73 26.84-37.57 14-18.15 24.5-38.69t10.5-43.47q0-36.84-25.42-62.27-25.42-25.42-62.27-25.42t-62.27 25.42q-25.42 25.43-25.42 62.27 0 22.93 10.5 43.47t24.5 38.69q14.31 18.84 27.34 37.96 13.04 19.11 25.35 39.19Zm2.31-124.69q-14.54 0-24.58-10.04t-10.04-24.58q0-14.54 10.04-24.57 10.04-10.04 24.58-10.04t24.57 10.04q10.04 10.03 10.04 24.57 0 14.54-10.04 24.58-10.03 10.04-24.57 10.04Z"/></svg>
const phone = <svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="28px" ><path d="M763.08-501.54q-6.93-113.15-86.12-192.34-79.19-79.2-192.34-86.12v-40q65 3.08 121.65 28.88 56.65 25.81 99.38 68.54 42.73 42.73 68.54 99.39 25.81 56.65 28.89 121.65h-40Zm-160 0q-6.93-46.15-39.62-79.23-32.69-33.08-78.84-39.23v-40q63 6.15 107.26 50.81 44.27 44.65 51.2 107.65h-40ZM757.23-160q-101.15 0-207.38-50.65-106.23-50.66-197.77-142.2-90.77-91.53-141.43-197.38Q160-656.08 160-757.23q0-18 12-30.39Q184-800 202-800h98.92q16.31 0 28.46 10.27 12.16 10.27 16.47 26.35L365.69-668q2.77 16.77-1 29.31t-13.31 20.54l-87.76 81.84q24.61 44.69 54.42 83.04 29.81 38.35 63.58 72.65 34.84 34.85 75 64.81 40.15 29.96 88.15 56.58l85.54-87.08q9.77-10.54 21.96-13.88 12.19-3.35 26.96-1.35l84.15 17.23q16.31 4 26.47 16.43Q800-315.46 800-299.38V-202q0 18-12.38 30-12.39 12-30.39 12ZM244.85-573.85l76.77-70.61q3.84-3.08 5-8.46 1.15-5.39-.39-10l-17.77-84.77q-1.54-6.16-5.38-9.23-3.85-3.08-10-3.08H211q-4.62 0-7.69 3.08-3.08 3.07-3.08 7.69 1.15 41 12.85 85.61 11.69 44.62 31.77 89.77Zm338 333.39q40.53 20.08 86.42 29.69 45.88 9.62 79.96 10.31 4.62 0 7.69-3.08 3.08-3.08 3.08-7.69v-80.31q0-6.15-3.08-10-3.07-3.84-9.23-5.38l-74-15.16q-4.61-1.54-8.07-.38-3.47 1.15-7.31 5l-75.46 77Zm-338-333.39Zm338 333.39Z"/></svg>
const mail = <svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="28px" ><path d="M600-240v89.23q0 12.39-9.19 21.58-9.19 9.19-21.58 9.19H150.77q-12.39 0-21.58-9.19-9.19-9.19-9.19-21.58v-258.46q0-12.39 9.19-21.58 9.19-9.19 21.58-9.19H280v-200q0-83.08 58.46-141.54Q396.92-840 480-840h160q83.08 0 141.54 58.46Q840-723.08 840-640v520h-40v-120H600Zm0-40h200v-360q0-66-47-113t-113-47H480q-66 0-113 47t-47 113v200h249.23q12.39 0 21.58 9.19 9.19 9.19 9.19 21.58V-280ZM420-580v-40h280v40H420Zm-60 294 200-114H160l200 114Zm0 40.77-200-114V-160h400v-199.23l-200 114ZM160-400v240-240Z"/></svg>
const infoList = [
  {icon: location, title: "address:", info: "Egypt-Cairo", href:"#"},
  {icon: phone, title: "phone:", info: "(+20) 010-288-15-414", href:"tel:+2001028815414"},
  {icon: mail, title: "email", info: "akeshk69@gmail.com", href:"mailto:akeshk69@gmail.com"},
]


function Footer () {
  const services = [
    "web development",
    "game development",
    "mobile application",
    "Artificial inteligance",
  ]

  const [activeIndex, setActiveIndex] = React.useState(null)

  function toggleArrow(index) {
    setActiveIndex(prevIndex => (prevIndex === index ? null : index))
  }
  return (
    <footer className='relative footer-background z-0'>
      <div className='absolute w-full h-full bg-black bg-opacity-70 -z-10'></div>
      <div className='max-w-screen-2xl mx-auto px-12 md:px-24 lg:px-44 overflow-x-hidden  '>
        <div className='text-white font-bold grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
          {infoList.map(info => 
            <a className='border-gray p-4 py-8 flex gap-4 border-b sm:even:border-l md:even:border-x' rel='noopener noreferrer' href={info.href} key={info.title}>
              <div className='fill-gray rounded-full bg-[rgba(255,255,255,10%)] border-2 border-gray p-2'>{info.icon}</div>
              <div>
                <h5 className='text-green text-sm'>{info.title}</h5>
                <h6>{info.info}</h6>
              </div>
            </a>
          )}
        </div>
        <div className='text-gray pt-10 flex flex-col-reverse gap-10 sm:grid sm:grid-cols-2 xl:grid-col-4'>

          <div>
            <img className='h-16' src={logo} alt="" />
            <p className='text-gray'>Our mission is to inspire and empower a new generation to stay ahead in the tech-driven world by mastering the art of PROGRAMMING. 👩🏼‍💻🤖🚀</p>
            <SocialList style="text-green bg-darkblue hover:bg-green hover:text-white"  />
          </div>

          <div>
            <h4>our services</h4>
            <ul>
              {services.map((service, index) => 
                <li key={service+index} className={`cursor-pointer transition capitalize ${activeIndex === index ? "text-orange" : "hover:text-green"}`} onClick={() => toggleArrow(index)}>
                  <span className='mr-4'>{activeIndex === index ? "⏑" : "›"}</span>
                  <span>{service}</span>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
      <img className='absolute right-10 bottom-10 w-40' src={planet} alt="" />
    </footer>
  )
}

export default Footer