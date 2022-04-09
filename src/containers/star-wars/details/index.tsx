import * as React from "react";
import {
  Container,
  Card,
  Grid,
  Header,
  Image,
  List,
  Button,
  Icon,
} from "semantic-ui-react";
import { inject, observer } from "mobx-react";
import NewRouterStore from "../../../mobx/router.store";
import { useParams } from "react-router-dom";
import { getFilmById } from "../../../apis/star-wars.api";

interface Props {
  router: NewRouterStore;
}

interface RouteParams {
  id: string;
}

interface Character {
  name: string;
}

interface Film {
  photo: string;
  title: string;
  episode_id: number;
  director: string;
  release_date: string;
  characters: Character[];
}

const StarWarsDetails: React.FC<Props> = inject("router")(
  observer((props: Props) => {
    const { goBack } = props.router;
    const [film, setFilm] = React.useState<Film>({} as Film);
    const { id } = useParams<RouteParams>();

    React.useEffect(() => {
      async function buildFilmById() {
        const { data } = await getFilmById(Number(id));
        setFilm(data);
      }

      buildFilmById();
    }, [id]);

    return (
      <Container>
        <Grid divided="vertically">
          <Grid.Row columns={2}>
            <Grid.Column>
              <Header color="blue" as="h2">
                <Header.Content>
                  Star Wars
                  <Header.Subheader>Detalhe do filme</Header.Subheader>
                </Header.Content>
              </Header>
            </Grid.Column>
            <Grid.Column>
              <Button onClick={goBack}>
                <Icon name="arrow circle left" />
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Card.Group>
          <Card fluid>
            <Image src={film.photo} wrapped ui={false} size="small" />
            <Card.Content>
              <Card.Meta>
                {film.title} - Episode {film.episode_id}
              </Card.Meta>
            </Card.Content>
            <Card.Content extra>
              <p>Director: {film.director}</p>
              <p>Release Date: {film.release_date}</p>
            </Card.Content>
            <Card.Content>
              <p>Personagens:</p>
              <List divided={true} relaxed={true}>
                {film.characters?.map((character, indexChar) => {
                  return (
                    <List.Item key={indexChar}>{character.name}</List.Item>
                  );
                })}
              </List>
            </Card.Content>
          </Card>
        </Card.Group>
      </Container>
    );
  })
);
export default StarWarsDetails;
