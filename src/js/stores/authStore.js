import { EventEmitter } from 'events';
import AppDispatcher from '../dispatcher';
import constants from '../constants/constants';

/**
 * @description Authentication store which gets user details
 * @class AuthStore
 * @extends {EventEmitter}
 */
class AuthStore extends EventEmitter {
  /**
   * @description Creates an instance of AuthStore.
   * @memberof LoginStore
   */
  constructor() {
    super();
    this.user = {};
  }
  /**
   * @param {any} user
   * @returns {void}
   * @memberof AuthStore
   */
  getUser(user) {
    localStorage.setItem('user', JSON.stringify(user));
    this.user = user;
    location.reload();
  }
  /**
   * @memberof AuthStore
   * @returns {void}
   */
  clearUser() {
    localStorage.removeItem('user');
    location.reload();
  }
  /**
   * @param {any} action
   * @memberof LoginStore
   * @returns {void}
   */
  handleUser(action) {
    switch (action.type) {
    case constants.login:
      this.getUser(action.user);
      break;
    case constants.signOut:
      this.clearUser();
      break;
    default:
    }
  }
}

const authStore = new AuthStore();
AppDispatcher.register(authStore.handleUser.bind(authStore));
export default authStore;

