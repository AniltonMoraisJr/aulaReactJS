import * as React from 'react';
import { Container, Grid, Header, Card, Image, Input, List, Segment, ButtonGroup } from 'semantic-ui-react';
import { inject, observer } from 'mobx-react';
import NewRouterStore from '../../mobx/router.store';
import EleicoesStore from './store';
import './style.css';

interface Props {
  router: NewRouterStore;
  eleicoes: EleicoesStore;
}

@inject('router', 'eleicoes')
@observer
export default class Eleicoes extends React.Component<Props> {

  render() {

    const {
      candidateNumber,
      getButtonsNumbers,
      getCandidate,
      handleCandidateNumber,
      handleFix,
      vote,
      voteWhite,
      getCandidatesVotes,
    } = this.props.eleicoes;

    return (
      <Container>
        <Grid divided='vertically'>
          <Grid.Row columns={2}>
            <Grid.Column>
              <Header color='blue' as='h2'>
                <Header.Content>
                  Eleições 2022
                  <Header.Subheader>Decida o destino do Brasil!</Header.Subheader>
                </Header.Content>
              </Header>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Grid>
          <Grid.Column width={7}>
            <Card.Group>
              <Card fluid={true}>
                <Card.Content>
                  <Input fluid={true} type='text' placeholder='Digite no painel o número do seu candidato.'> <input readOnly value={candidateNumber} />{ }</Input>
                </Card.Content>
              </Card>
              {getCandidate && <Card fluid={true}>
                <Image src={getCandidate.image} wrapped ui={false} size='small' />
                <Card.Content>
                  <Card.Meta>{getCandidate.name}</Card.Meta>
                </Card.Content>
                <Card.Content extra>
                  <Card.Description>Partido: {getCandidate.party}</Card.Description>
                </Card.Content>
              </Card>}
            </Card.Group>
          </Grid.Column>
          <Grid.Column width={5}>
            <Segment>
              <div className='teclado'>
                <div className="teclas">
                  {getButtonsNumbers.map((num) => <button className="tecla" onClick={() => handleCandidateNumber(num.toString())}>{num}</button>)}
                  <ButtonGroup>
                    <div className="opcoes">
                      <button className="btnOpcao branco click" onClick={() => voteWhite()}>BRANCO</button>
                      <button className="btnOpcao laranja click" onClick={() => handleFix()}>CORRIGE</button>
                      <button className="btnOpcao verde" onClick={() => vote()}>CONFIRMA</button>
                    </div>
                  </ButtonGroup>
                </div>
              </div>
            </Segment>

          </Grid.Column>
          <Grid.Column width={4}>
            <p>Resultado da votação:</p>
            <List>
              {getCandidatesVotes.map((x) =>
                <List.Item>
                  <Image avatar src={x.image} />
                  <List.Content>
                    {x.name}
                    <List.Description>
                      {x.party} - {x.votes}
                    </List.Description>
                  </List.Content>
                </List.Item>)}
            </List>
          </Grid.Column>
        </Grid>
      </Container >
    );
  }
}