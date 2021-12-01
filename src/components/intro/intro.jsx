import "./intro.css"
import me from "../../img/zohaib-image.png"

const Intro = () => {
  return (
    <div className="i"> 
        <div className="i-left">
          <div className="i-left-wrapper">
              <h2 className="i-intro">Hello, My Name is</h2>
              <h1 className="i-name">Syed Zohaib Ali</h1>
              <div className="i-title">
                <div className="i-title-wrapper">
                  <div className="i-title-item">Web Developer</div>
                  <div className="i-title-item">React Developer</div>
                  <div className="i-title-item">JavaScript Developer</div>
                  <div className="i-title-item">Front-end Developer</div>
                  <div className="i-title-item">Back-end Developer</div>
                </div>
              </div>
              <p className="i-desc">
                Recently certified full-stack web developer from the University of Toronto Bootcamp. 
                Have vast experience in technical hardware and customer service in retail and telecommunications industries. 
                Possess skills in HTML, CSS, JavaScript, and MERN stack and strengths in problem-solving, attention to detail, and teamwork. 
                Passionate about approaching programming challenges from different angles and collaborating with others to create meaningful web applications. 
                I applied aspects of agile development and UX in a recent team project to develop a web app that provides a user-friendly website to create surveys.
                I’m excited to leverage my skills as part of a fast-paced, quality-driven team to build websites that are mobile-first and responsive.
              </p>
            </div>
              <svg
                width="75"
                height="75"
                viewBox="0 0 75 75"
                fill="none"
                stroke="#FFA07A"
                className="i-scroll"
                xmlns="http://www.w3.org/2000/svg"
              >
              <g id="scroll">
                <path
                  id="Vector"
                  d="M40.5 15L34.5 9L28.5 15"
                  stroke-width="3"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  id="Vector_2"
                  d="M28.5 24L34.5 30L40.5 24"
                  stroke-width="3"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <g id="Group">
                  <path
                    id="Vector_3"
                    d="M9 37.5H60"
                    stroke-width="3"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <path
                  id="Vector_4"
                  d="M34.5 27V9"
                  stroke-width="2.9895"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <g id="Group_2">
                  <path
                    id="Vector_5"
                    d="M9 27C9 12.918 20.418 1.5 34.5 1.5C48.5859 1.5 60 12.918 60 27C60 29.8906 60 45.1094 60 48C60 62.082 48.5859 73.5 34.5 73.5C20.418 73.5 9 62.082 9 48C9 45.1094 9 29.8906 9 27Z"
                    stroke-width="3"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </g>
            </svg>
          </div>
        <div className="i-right">right 
          <div className="i-bg"></div>
          <img src={me} alt="" className="i-img" />
        </div>
         
    </div>
  )
}

export default Intro

/* 17:08 */