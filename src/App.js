import React from "react";
import "./styles/styles.scss";
import Banner from "./banner";
import Cursos from "./cursos";

const cursos = [
  {
    title: "React desde cero",
    image:
      "https://drupal.ed.team/sites/default/files/imagenes-cdn-edteam/2019-04/React%20Rutas%20manejo%20de%20estados%20%281%29.png",
    price: 50,
    teacher: "Alexys Lozada"
  },
  {
    title: "Firebase para la web",
    image:
      "https://drupal.ed.team/sites/default/files/styles/16_9_medium/public/imagenes-cdn-edteam/2019-07/firebase-web.png",
    price: 40,
    teacher: "Juan Gomez"
  },
  {
    title: "Android desde cero",
    image:
      "https://drupal.ed.team/sites/default/files/styles/medium/public/imagenes-cdn-edteam/2019-01/Android%20desde%20Cero.png?itok=ZxhXYEO2",
    price: 30,
    teacher: "José Luján"
  }
];

const App = () => (
  <>
    <Banner />
    <div className="ed-grid s-grid-3">
      {cursos.map(c => (
        <Cursos
          title={c.title}
          image={c.image}
          price={c.price}
          teacher={c.teacher}
        />
      ))}
    </div>
  </>
);

export default App;
