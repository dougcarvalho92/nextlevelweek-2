import React from "react";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";
import './styles.css';
const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://cdn.iconscout.com/icon/free/png-512/avatar-372-456324.png"
          alt=""
        />
        <div>
          <strong>Douglas Carvalho</strong>
          <span>Quimica</span>
        </div>
      </header>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin fermentum
        erat quis orci porttitor pretium.
        <br />
        Etiam iaculis consequat felis, quis laoreet felis facilisis eu.
      </p>
      <footer>
        <p>
          Preço/hora <strong>R$ 80,00</strong>
        </p>
        <button>
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
