import LocalStorage from "../../utils/LocalStorage";

export default class LogsRepository {
    logStorage = null;
    tableName = "logs";

    constructor() {
        this.logStorage = new LocalStorage();
    }

    getItems = async () => {
        return await this.logStorage.get(this.tableName) ?? [];
    };

    setItems = data => {
        return this.logStorage.set(this.tableName, data);
    };

    removeAll = () => {
        return this.logStorage.removeAll(this.tableName);
    };
}
