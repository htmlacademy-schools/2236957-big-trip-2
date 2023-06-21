import Observable from '../framework/observable';

export default class OffersModel extends Observable {
  #offers = [];

  constructor (offers) {
    super();
    this.#offers = offers;
  }

  get offers() {
    return this.#offers;
  }

}