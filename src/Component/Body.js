import React from "react";
import Cours_Name_Data from "../Data/Cours_name_data";
import { Link } from "react-router-dom";

function AboutMe() {
  return (
    <div className="about-me">
      <h2>WELCOME</h2>
      <p>
        Hey, I'm Shady, your classmate and the brain behind this innovative
        study platform. As a passionate developer and designer, I've crafted
        this website with a vision to revolutionize how we learn and
        collaborate. At Shady's Study Hub, my dual expertise in development and
        design merges seamlessly to provide an intuitive and visually appealing
        learning experience. Navigating through the website is not just about
        accessing study materials; it's an immersive journey designed to enhance
        comprehension and foster collaboration among classmates. So, dive into
        Shady's Study Hub, where my passion for development and design converges
        to make your learning journey not only effective but enjoyable. Let's
        elevate our academic experience together! As a developer, I understand
        the importance of efficiency and accessibility. That's why the website
        boasts responsive design, ensuring you can seamlessly access it from any
        device, be it your laptop, tablet, or smartphone. My goal is to make
        studying as flexible and convenient as possible.
      </p>
      <img src="https://i.ibb.co/jRxbYJq/Sing.png" alt="" />
    </div>
  );
}

function Cours() {
  return (
    <div className="cours">
      <h2>COURS</h2>
      <div className="items-cours">
        {/* ITEM */}
        {/* <div className="item-cours">
          <div>
            <ul>
              <li>regulation</li>
              <li>chawki</li>
            </ul>
            <h5>parturient habitant pharetra rutrum gravida porttitor eros feugiat.
            Mollis elit sodales taciti duis praesent id. Consequat urna vitae
            morbi nunc congue.
              <span>ENTERY</span>
            </h5>
          </div>
          <div className="card-image">
          <img src="" alt="" />
          </div>
        </div> */}

        {Cours_Name_Data.map((i) => {
          <>
            <div className="iteam-cours">
              <div>
                <ul>
                  <li>{i.cours}</li>
                  <li>{i.teatcher}</li>
                </ul>
                <h5>
                  {i.description}
                  <span>
                    <a href={i.link}>READ MORE</a>
                  </span>
                </h5>
              </div>
            </div>
            <div className="card-image">
              <img src={i.image} alt="image cours" />
            </div>
          </>;
        })}
        {/* END ITEM */}
      </div>
    </div>
  );
}

function GeneClimatique() {
  return (
    <div className="gene">
      <h2>génie climatique</h2>
      <div className="gene-info">
        <p>
          A Technicien Spécialisé Génie Climatique, or Specialized Technician in
          Climate Engineering, plays a crucial role in the field of HVAC
          (Heating, Ventilation, and Air Conditioning). These professionals are
          adept at designing, installing, and maintaining climate control
          systems to ensure optimal thermal comfort in various environments.
        </p>
        <img
          id="tv"
          src="https://www.energierecrute.com/public/img/fiches_metiers/ingenieur-genie-climatique.jpg"
          alt=""
        />
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div className="contact">
      <h2>contact</h2>
      <div className="contact-whatsapp">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="45"
          height="45"
          fill="currentColor"
          className="bi bi-whatsapp whatsapp-icon"
          viewBox="0 0 16 16"
        >
          <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
        </svg>
        <div className="contact-para">
          <h3>WHATSAPP</h3>
          <h5>MCMSLKMDLKVN VMDVMSDOVODV MVOPDMVPDOV SMMVOMV</h5>
        </div>
        <button>SEND MESSAGE</button>
      </div>
      <div className="contact-gmail">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="45"
          height="45"
          color="white"
          fill="currentColor"
          className="bi bi-envelope email-icon"
          viewBox="0 0 16 16"
        >
          <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
        </svg>
        <div className="contact-para">
          <h3>EMAIL</h3>
          <h5>MCMSLKMDLKVN VMDVMSDOVODV MVOPDMVPDOV SMMVOMV</h5>
        </div>
        <button>SEND MESSAGE</button>
      </div>
      <div className="contact-info">
        <div className="contact-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="55"
            height="55"
            fill="currentColor"
            class="bi bi-info-circle"
            viewBox="0 0 16 16"
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
            <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
          </svg>
        </div>
        <div className="contact-paragraph">
          <h4>
            mattis hendrerit dolor eros enim, nisi ligula ornare. Hendrerit
            parturient habitant pharetra rutrum gravida porttitor eros feugiat.
            Mollis elit sodales taciti duis praesent id. Consequat urna vitae
            morbi nunc congue.
          </h4>
        </div>
      </div>
    </div>
  );
}

function Body() {
  return (
    <>
      <AboutMe />
      <Cours />
      <GeneClimatique />
      <Contact />
    </>
  );
}

export default Body;
