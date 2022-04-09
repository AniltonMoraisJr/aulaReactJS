import { action, makeAutoObservable, observable } from "mobx";
import { getFilms } from "../../apis/star-wars.api";

export default class StarWarsStore {
  @observable films: any[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  @action buildFilms = async () => {
    const { data } = await getFilms();
    this.films = data;
  };
}
const starWars = new StarWarsStore();
export { starWars };
