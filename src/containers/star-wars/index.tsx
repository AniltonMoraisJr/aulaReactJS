import * as React from "react";
import { Container, Card, Grid, Header, Image } from "semantic-ui-react";
import { inject, observer } from "mobx-react";
import NewRouterStore from "../../mobx/router.store";
import StarWarsStore from "./store";

interface Props {
  router: NewRouterStore;
  starWars: StarWarsStore;
}

const StarWars: React.FC<Props> = inject(
  "router",
  "starWars"
)(
  observer((props: Props) => {
    const { films, buildFilms } = props.starWars;
    const { setHistory } = props.router;

    React.useEffect(() => {
      async function fetch() {
        await buildFilms();
      }
      fetch();
    }, [buildFilms]);

    const openDetails = React.useCallback(
      (id: string) => {
        setHistory(`/star-wars/${id}`);
      },
      [setHistory]
    );

    return (
      <Container>
        <Grid divided="vertically">
          <Grid.Row columns={2}>
            <Grid.Column>
              <Header color="blue" as="h2">
                <Header.Content>
                  Star Wars
                  <Header.Subheader>Lista de filmes</Header.Subheader>
                </Header.Content>
              </Header>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Card.Group itemsPerRow={2}>
          {films.map((film, index) => {
            return (
              <Card key={index} onClick={() => openDetails(film.id)}>
                <Image src={film.photo} wrapped ui={false} size="small" />
                <Card.Content>
                  <Card.Meta>{film.title}</Card.Meta>
                  <Card.Description>
                    Episode {film.episode_id.toString()}
                  </Card.Description>
                </Card.Content>
              </Card>
            );
          })}
        </Card.Group>
      </Container>
    );
  })
);
export default StarWars;
