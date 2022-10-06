import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MenuHeaderContext } from "../../Contexts/MenuHeader";

import * as C from "./styles";

const company = [
  { title: "Shehrazade", link: "/shehrazade" },
  { title: "Radu", link: "/radu" },
  { title: "Mockados", link: "/test" },
];
const center = [
  { title: "Centro de custo 1", link: "/opt1" },
  { title: "Centro de custo 2", link: "/opt2" },
];

export const HeaderDropdownCompanies: React.FC = () => {
  const { wrapperCompany } = useContext(MenuHeaderContext);

  let count = company.length;

  return (
    <>
      {wrapperCompany && (
        <C.ContainerCompany item={count}>
          {company.map((item, indice) => (
            <Link key={indice} to={item.link}>
              {item.title}
            </Link>
          ))}
        </C.ContainerCompany>
      )}
    </>
  );
};

export const HeaderDropdownOptions: React.FC = () => {
  const { wrapperOptions } = useContext(MenuHeaderContext);

  let count = center.length;

  return (
    <>
      {wrapperOptions && (
        <C.ContainerOption item={count}>
          {center.map((item, index) => (
            <Link key={index} to={item.link}>
              {item.title}
            </Link>
          ))}
        </C.ContainerOption>
      )}
    </>
  );
};
