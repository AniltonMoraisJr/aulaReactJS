import { action, computed, makeAutoObservable, observable } from 'mobx';

import Swal from 'sweetalert2';

export default class EleicoesStore {
  constructor() {
    makeAutoObservable(this)
  }

  @observable candidateNumber = '';

  @observable candidates = {
    '1': {
      name: 'Naruto',
      party: 'Konoha',
      image: 'https://cm-santiago-do-cacem.pt/img/fantasy/83/how-watch-naruto-order.jpg',
      votes: 0
    },
    '2': {
      name: 'Goku',
      party: 'Capsule Corp',
      image: 'https://tm.ibxk.com.br/2020/12/16/16032833123011.jpg',
      votes: 0
    },
    '3': {
      name: 'Batman',
      party: 'Wayne Corp',
      image: 'https://veja.abril.com.br/wp-content/uploads/2022/03/batman-oscar.jpg?quality=70&strip=info&w=680&h=453&crop=1',
      votes: 0
    },
    'branco': {
      name: 'Branco',
      party: 'Nenhum',
      image: 'https://cdn.mos.cms.futurecdn.net/uRfKogf9KpxZDLUJR4EnjK.jpeg',
      votes: 0
    },
    '00000': {
      name: 'Nulo',
      party: 'Nenhum',
      image: 'https://www.teclasap.com.br/wp-content/uploads/2014/03/voto-nulo.png',
      votes: 0
    }
  };

  @computed get getButtonsNumbers() {
    const keys = Array.from({ length: 9 }, (_, i) => i + 1);
    keys.push(0);
    return keys;
  }

  @computed get getCandidate() {
    return this.candidates[this.candidateNumber];
  }

  @computed get getCandidatesVotes() {
    return Object.values(this.candidates).sort((a, b) => (a.votes > b.votes ? -1 : 1))
  }

  @action handleCandidateNumber = (candidateNumber: string) => {
    if (this.candidateNumber === 'branco') {
      this.candidateNumber = '';
    }
    if (this.candidateNumber.length === 5) {
      Swal.fire("Número máximo é de 5 caracteres", '', 'warning');
      return;
    }
    this.playSound(500);
    this.candidateNumber += candidateNumber;
  };

  @action handleFix = () => {
    if (this.candidateNumber === 'branco') {
      this.candidateNumber = '';
    }
    if (this.candidateNumber.length > 0) {
      this.playSound(500);
      this.candidateNumber = this.candidateNumber.substring(0, this.candidateNumber.length - 1);
    }
  };

  @action vote = () => {
    if (this.candidates[this.candidateNumber]) {
      this.candidates[this.candidateNumber].votes = this.candidates[this.candidateNumber].votes + 1;
      Swal.fire("Voto computado com sucesso", "O Brasil agradece!", 'success');
      this.candidateNumber = '';
      this.playSound(2000);
    } else {
      Swal.fire("Número Inválido de candidato", '', 'warning');
    }
  };

  @action voteWhite = () => {
    this.playSound(500);
    this.candidateNumber = 'branco';
  };

  @action playSound = (timeout: number) => {
    const audio = new Audio('https://www.adautobulhoes.com.br/locutor/baixar-som-de-urna-eletronica-download-urna-eletronica-som-urna-eletronica-mp3-barulho-urna-eletronica-mp3-toque-urna-eletronica-mp3-efeito-urna-eletronica-mp3-barulho-urna-eletronica-mp3-download-jingle-politico-vereador-e-.mp3');
    audio.play();
    setTimeout(() => {
      audio.pause();
    }, timeout);
  };

}
const eleicoes = new EleicoesStore();
export { eleicoes };
