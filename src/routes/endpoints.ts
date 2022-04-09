import { RouteProps } from "react-router-dom";
import Combustivel from "../containers/combustivel";
import Home from "../containers/home";
import Register from "../containers/register";
import Sobre from "../containers/sobre";
import StarWars from "../containers/star-wars";
import StarWarsDetails from "../containers/star-wars/details";

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
    path: `${publicUrl}/star-wars`,
    name: "Star Wars",
    component: StarWars,
    exact: true,
  },
  {
    path: `${publicUrl}/star-wars/:id`,
    component: StarWarsDetails,
    exact: true,
  },
  {
    path: `${publicUrl}/register`,
    name: "Register",
    component: Register,
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
];
