import React from "react";
import proyectosStyle from "./Proyectos.module.css";
import perriwiki from "./img/perriwiki.png";
import TipApp from "./img/TipApp.jpeg";
import CityCell from "./img/CityCell.jpeg";
import github from "./img/github.svg";
import web from "./img/web.svg";

function Proyectos() {
  return (
    <div id='proyectos' className={proyectosStyle.container}>
      <div className={proyectosStyle.title}>
        <h1>Proyectos</h1>
        <p>
          Estos son algunos de mis principales proyectos, los cuales podrás
          visitar haciendo clic en cada imagen.
        </p>
        <div></div>
      </div>
      <div className={proyectosStyle.parent}>
        <div className={proyectosStyle.div1}>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://pi-dogs-deploy.vercel.app/'
          >
            <div className={proyectosStyle.imgContainer}>
              <img src={perriwiki} alt='proyecto - PerriWiki' />
            </div>
          </a>
          <div className={proyectosStyle.textContainer}>
            <h3>PerriWiki</h3>
            <p>
              JavaScript, React Js, Redux Js, Node Js, Express, PostgreSQL, Sequelize,
              CSS3
            </p>
            <div className={proyectosStyle.imgEnlace}>
              <a
                href='https://pi-dogs-deploy.vercel.app/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <img src={web} alt='enlace web' />
              </a>
              <a
                href='https://github.com/AlexAc0226/PI-Dogs-Deploy'
                target='_blank'
                rel='noopener noreferrer'
              >
                <img src={github} alt='enlace web' />
              </a>
            </div>
          </div>
        </div>

        {/*E-comerce - City Cell*/}
        <div className={proyectosStyle.div2}>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://www.youtube.com/watch?v=eJWjUBCAGmY'
          >
            <div className={proyectosStyle.imgContainer}>
              <img src={CityCell} alt='E-comerce City Cell' />
            </div>
          </a>
          <div className={proyectosStyle.textContainer}>
            <h3>E-comerce City Cell</h3>
            <p>
              JavaScript, React Js, Redux Js, Node Js, Express, PostgreSQL, MaterialUI, JWT
            </p>
            <div className={proyectosStyle.imgEnlace}>
              <a
                href='https://www.youtube.com/watch?v=eJWjUBCAGmY'
                target='_blank'
                rel='noopener noreferrer'
              >
                <img src={web} alt='enlace web' />
              </a>
              <a
                href='https://github.com/LoreLor/PF-Eco-BACKEND'
                target='_blank'
                rel='noopener noreferrer'
              >
                <img src={github} alt='Repo Back-End' />
              </a>
              <a
                href='https://github.com/LoreLor/PF-Eco-FRONTEND'
                target='_blank'
                rel='noopener noreferrer'
              >
                <img src={github} alt='Repo Front-End' />
              </a>
            </div>
          </div>
        </div>

        {/*Otro proyecto*/}
        <div className={proyectosStyle.div3}>

        </div>
      </div>
    </div>
  );
}

export default Proyectos;
