import "../about/about.css"
import Award from "../../img/award.png"

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img 
            src="https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt="" 
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-tittle">About Me</h1>
        <p className="a-sub">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab molestiae tempore perspiciatis, ea incidunt a, pariatur sequi enim amet architecto.
        </p>
        <p className="a-desc">
          Recently certified full-stack web developer from the University of Toronto Bootcamp. 
          Have vast experience in technical hardware and customer service in retail and telecommunications industries. 
          Possess skills in HTML, CSS, JavaScript, and MERN stack and strengths in problem-solving, attention to detail, and teamwork. 
          Passionate about approaching programming challenges from different angles and collaborating with others to create meaningful web applications. 
          I applied aspects of agile development and UX in a recent team project to develop a web app that provides a user-friendly website to create surveys.
          I’m excited to leverage my skills as part of a fast-paced, quality-driven team to build websites that are mobile-first and responsive.
        </p>
        <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-awards-texts">
            <h4 className="a-award-title">
              Internation Design Award 2021
            </h4>

          </div>
          <p className="a-awards-desc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores libero iste reprehenderit cumque. Facilis corrupti fugiat dolore odio autem sequi inventore quam! Adipisci nesciunt iusto delectus possimus accusantium, sequi laudantium?
          </p>
        </div>
      </div>
    </div>
  )
}
 
export default About
