import { RouteProps } from "react-router-dom";
import Combustivel from "../containers/combustivel";
import Home from "../containers/home";
import Sobre from "../containers/sobre";

const publicUrl = process.env.PUBLIC_URL;

interface EndPointsProps extends RouteProps {
  name?: string;
  subItens?: EndPointsProps[]; // Em caso do menu ter sub-menus, será criado um Dropdown
}

export const endpoints: EndPointsProps[] = [
  { path: `${publicUrl}/`, exact: true, component: Home },
  { path: `${publicUrl}/home`, name: "Home", exact: true, component: Home },
  { path: `${publicUrl}/sobre`, name: "Sobre", exact: true, component: Sobre },
  {
    path: `${publicUrl}/combustivel`,
    name: "Combustível",
    component: Combustivel,
    exact: true,
  },
  {
    name: "Dropdown",
    subItens: [
      {
        path: `${publicUrl}/home/subItem`,
        name: "HomeSubItem",
        exact: true,
        component: Sobre,
      },
      {
        path: `${publicUrl}/home/subItem2`,
        name: "HomeSubItem 2",
        exact: true,
        component: Sobre,
      },
    ],
  },
  {
    name: "Dropdown",
    subItens: [
      {
        path: `${publicUrl}/home/subItem`,
        name: "HomeSubItem",
        exact: true,
        component: Sobre,
      },
      {
        path: `${publicUrl}/home/subItem2`,
        name: "HomeSubItem 2",
        exact: true,
        component: Sobre,
      },
    ],
  },
];
