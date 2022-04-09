import { RouteProps } from "react-router-dom";
import Home from "../containers/home";
import Sobre from "../containers/sobre";

const publicUrl = process.env.PUBLIC_URL;

interface EndPointsProps extends RouteProps {
  name?: string;
  subItens?: EndPointsProps[];
}

export const endpoints: EndPointsProps[] = [
  { path: `${publicUrl}/`, exact: true, component: Home },
  { path: `${publicUrl}/home`, name: "Home", exact: true, component: Home },
  { path: `${publicUrl}/sobre`, name: "Sobre", component: Sobre },
  {
    name: "Dropdown",
    subItens: [
      {
        path: `${publicUrl}/home/subItem`,
        name: "HomeSubItem",
        exact: true,
        component: Sobre,
      },
    ],
  },
];
