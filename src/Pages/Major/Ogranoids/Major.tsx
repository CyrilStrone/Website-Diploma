import React from "react";
import "../Styles/Major.css";
import { Link } from "react-router-dom";

export const Major = () => {

  return (
    <div className="Major">
      <div className="Major_Title">
        <div className="Major_Title-Big">
        Станьте успешнее вместе с нами
        </div>
        <div className="Major_Title-min">
        Сайт для поиска и установления деловых контактов, просто зарегестрируйтесь на нашем сервисе.
        </div>
        <div className="Major_Title-Button">
        <Link
          className={`Major_Link`}
          to={"/Registration"}
        >
          Регистрация
        </Link>
        </div>
      </div>
    </div>
  );
};
