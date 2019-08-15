import React from "react";
import PropTypes from "prop-types";

const Cursos = ({ title, image, price, teacher }) => (
  <article className="card">
    <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
      <img src={image} alt={title} />
    </div>
    <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
      <h3 className="t5 s-mb-2 s-center">{title}</h3>
      <div className="s-mb-2 s-main-center">
        <div className="card__teacher s-cross-center">
          <div className="card__avatar s-mr-1">
            <div className="circle img-container">
              <img src="path/img" alt="" />
            </div>
          </div>
          <span className="small">{teacher}</span>
        </div>
      </div>
      <div className="s-main-center">
        <a className="button--ghost-alert button--tiny" href="https://ed.team">
          {`$ ${price} USD`}
        </a>
      </div>
    </div>
  </article>
);

Cursos.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
  teacher: PropTypes.string
};

Cursos.defaultProps = {
  title: "No se encontró título",
  image:
    "https://as2.ftcdn.net/jpg/00/37/91/15/500_F_37911565_ppWh0Zx4E29pxm25QNT9UFs2eD7eLtg0.jpg",
  price: 0,
  teacher: "Sin asignación"
};

export default Cursos;
