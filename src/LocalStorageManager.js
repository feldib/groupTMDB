class LocalStorageManager {
    static getItem(key) {
      const item = localStorage.getItem(key);
      if (item === null) {
        return null;
      }
  
      try {
        return JSON.parse(item);
      } catch (e) {
        // In case parsing JSON fails, return the item as is
        return item;
      }
    }
  
    static setItem(key, value) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  
    static removeItem(key) {
      localStorage.removeItem(key);
    }
  
    static getUsers() {
      return this.getItem('users') || [];
    }
  
    static addUser(user) {
      const users = this.getUsers();
      users.push(user);
      this.setItem('users', users);
    }
  
    static getCurrentUserIndex() {
      return this.getItem('currentUserIndex') || 0;
    }
  
    static setCurrentUserIndex(index) {
      this.setItem('currentUserIndex', index);
    }
  }
  
  export default LocalStorageManager;