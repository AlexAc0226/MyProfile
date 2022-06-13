import React from "react";
import conocemeStyle from "./Conoceme.module.css";
import Tecnologias from "./TecnlogogiasHerramientas/Tecnologias";

function Conoceme() {
  return (
    <section id='conoceme' className={conocemeStyle.section}>
      <div className={conocemeStyle.container}>
        <Tecnologias />
        <article className={conocemeStyle.historia}>
          <h1>Mi historia</h1>
          <p>
            Mi nombre es Alexis Alexander Correa, tengo 26 años y vivo en Buenos Aires,
            provincia de Argentina.
            <br />
            <br /> Desde mi niñez siempre me ha atraído todo lo relacionado 
            con la informática y tecnología. <br /> 
            Recuerdo que siempre les pedía a mis padres que me compraran las 
            revistas de automóviles, los cuales describían sus características y las 
            nuevas innovaciones que habían sido añadidas a estos.
            <br /> <br />
            En mi etapa escolar mi materia preferida era computación, 
            ya que en esta podríamos tener acceso a las computadoras
            para realizar las tareas de una manera más simplificadas,
            al menos para mi punto de vista.
            <br /> <br /> 
            Hace 3 añosa atras comencé mis estudios en la carrera 
            como analista de sistemas, esta contaba con 
            la materia de programación, allí fue donde comenzó mi 
            pasión por este mundo.
            <br /> 
            En 2021, tome la decisión de enfocarme totalmente
            a este entorno que tanto me gusta.
            <br /> 
            Hoy en día, al momento en el que escribo este texto, 
            me encuentro en la recta final del bootcamp 
            de Henry, agradezco a la vida de haberme dado la oportunidad 
            de haber transcurrido tantas experiencias inolvidables y las
            enseñanzas que me han dado el conocimiento que ojalá dentro de 
            poco pueda plasmarlo frente nuevos retos que estarán por llegar.
            <br /> <br />
            Esto recién comienza... 
          </p>
        </article>
      </div>
    </section>
  );
}

export default Conoceme;
