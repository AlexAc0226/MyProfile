import React from "react";
import contactoStyle from "./Contacto.module.css";
import { useForm, ValidationError } from "@formspree/react";
import whatsapp from "./img/whatsapp.svg";
import linkedin from "./img/linkedin.svg";
import github from "./img/github.svg";

function Contacto() {
  const [state, handleSubmit] = useForm("moqrabgk");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <div id='contacto' className={contactoStyle.container}>
      <div className={contactoStyle.containerForm}>
        <div className={contactoStyle.alignLeft}>
        </div>
        <div className={contactoStyle.alignRight}>
          <div className={contactoStyle.titleLeft}>
            <h1 className='title-left'>Ponte en contacto</h1>
          </div>
          <p>
            Ya sea que quieras ponerte en contacto, hablar sobre una
            colaboración en un proyecto o simplemente saludar, me encantaría
            saber de vos.
            <br />
            <br /> Simplemente rellena con tu email y envíame un correo.
          </p>
          <div className={contactoStyle.socialConteiner}>
            <a
              href='https://github.com/AlexAc0226'
              target='_blank'
              rel='noopener noreferrer'
            >
              <div className={contactoStyle.icoCircle}>
                <img src={github} alt='enlace web' />
              </div>
            </a>
            <a
              href='https://www.linkedin.com/in/alexis-correa-dev/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <div className={contactoStyle.icoCircle}>
                <img src={linkedin} alt='enlace web' />
              </div>
            </a>
            <a
              href='https://api.whatsapp.com/send?phone=5491168716295&text=Hola+Alexis!+'
              target='_blank'
              rel='noopener noreferrer'
            >
              <div className={contactoStyle.icoCircle}>
                <img src={whatsapp} alt='enlace web' />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacto;
