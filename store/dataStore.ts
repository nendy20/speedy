import { IcartItem } from "@/types/IcartItem";
import { makeAutoObservable } from "mobx";

class DataStore {
    cartItem: IcartItem[] = [{
        name: 'Lácteos y Huevos',
        details: 'Huevos 30/1',
        price: 160,
        count: 4,
        id: "1",
        total: 640
    }];

    constructor() {
        makeAutoObservable(this);
    }

    addItem(items: IcartItem[]) {
        this.cartItem = items;
    }

    getItems() {
        return this.cartItem
    }
}

const dataStore = new DataStore();
export default dataStore;

