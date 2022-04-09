import { getPrice } from './../../apis/economy.api';
import { action, makeAutoObservable, observable } from 'mobx';

export default class HomeStore {
  constructor() {
    makeAutoObservable(this);
  }

  @observable records: any[] = [];

  @action buildRecords = async (): Promise<void> => {
    try {
      const { data } = await getPrice();
      this.records = Object.values(data);
    } catch (error) {
      this.records = [];
      throw new Error('Falha ao obter cotação');
    }
  };
}
const home = new HomeStore();
export { home };
