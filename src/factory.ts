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
  create(type: string, name: string) {
    if (type in this._addOnMap) {
      this._addOnMap[type].creator(name)
    }
  }
}

const addOnFactory = new AddOnFactory();
export default addOnFactory;
