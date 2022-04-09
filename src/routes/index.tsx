import * as React from "react";
import { observer } from "mobx-react";

import { Route, Switch, withRouter } from "react-router-dom";
import MainMenu from "../components/main-menu";
import { Divider } from "semantic-ui-react";
import { endpoints } from "./endpoints";

//@ts-ignore
@withRouter
@observer
export default class Routes extends React.Component {
  render() {
    return (
      <>
        <MainMenu />
        <Divider hidden />
        <Switch>
          {endpoints
            .filter((e) => !e.subItens || e.subItens?.length === 0)
            .map((route, i) => (
              <Route key={i} {...route} />
            ))}
          {endpoints
            .filter((e) => e.subItens && e.subItens?.length > 0)
            .flatMap((e) => e.subItens)
            .map((route, i) => (
              <Route key={i} {...route} />
            ))}
        </Switch>
      </>
    );
  }
}
