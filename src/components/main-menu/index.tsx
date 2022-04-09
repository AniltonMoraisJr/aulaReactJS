import * as React from "react";

import { inject, observer } from "mobx-react";

import { Menu, Dropdown } from "semantic-ui-react";
import NewRouterStore from "../../mobx/router.store";
import { endpoints } from "../../routes/endpoints";

interface Props {
  router?: NewRouterStore;
}

@inject("router")
@observer
export default class MainMenu extends React.Component<Props> {
  handleItemClick = (_, { url }: any) => {
    const { setHistory } = this.props.router!;
    return setHistory(url);
  };

  render() {
    return (
      <>
        <div className="nav">
          <Menu
            color="blue"
            inverted={true}
            size="large"
            secondary={true}
            stackable={true}
          >
            {endpoints
              .filter((x) => x.name && !x.subItens)
              .map((item, index) => {
                return (
                  <Menu.Item
                    key={index}
                    name={item.path?.toString()}
                    url={item.path!}
                    onClick={this.handleItemClick}
                  >
                    {item.name}
                  </Menu.Item>
                );
              })}
            {endpoints
              .filter((x) => x.name && x.subItens && x.subItens.length > 0)
              .map((item, index) => {
                return (
                  <Dropdown
                    key={`${index}_dropDown`}
                    text={item.name}
                    pointing
                    className="link item"
                  >
                    <Dropdown.Menu>
                      {item.subItens?.map((subItem, i) => (
                        <Dropdown.Item
                          key={`${i}_subItem`}
                          onClick={() =>
                            this.handleItemClick(null, { url: subItem.path })
                          }
                        >
                          {subItem?.name}
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
                );
              })}
          </Menu>
        </div>
      </>
    );
  }
}
