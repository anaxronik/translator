import { makeAutoObservable } from "mobx";
import { collapseObject } from "../../utils/parseObject/parseObject";

export class AppStore {
  files: { [key: string]: string | number | boolean | null }[] = [];
  keys: string[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  addJson = async (value: object) => {
    const result = collapseObject(value, true);
    this.files.push(result);
    await this.recalculateKeys();
  };

  recalculateKeys = async () => {
    const keys: string[] = [];
    this.files.forEach((file) => {
      Object.keys(file).forEach((key) => {
        keys.push(key);
      });
    });
    this.keys = [...new Set(keys)].sort();
    console.log("keys", keys);
  };
}

export const appStore = new AppStore();
