interface Dictionary<T> {
  [key: string]: T;
}

export abstract class AddOnBase {
}

type AddOnCreator = (name:string) => AddOnBase;

class FactoryRecord {
  creator!: AddOnCreator;
}

class AddOnFactory {
  _addOnMap: Dictionary<FactoryRecord> = {};
  register(type: string, addOnCreator: AddOnCreator) {
    this._addOnMap[type] = { "creator": addOnCreator };
  }
  create(type: string, name: string): AddOnBase | null {
    if (type in this._addOnMap) {
      return this._addOnMap[type].creator(name);
    }
    return null;
  }
}

const addOnFactory = new AddOnFactory();
export default addOnFactory;
