import {Injectable} from 'angular2/core';
import {HmrState} from 'angular2-hmr';

@Injectable()

export class AppState {
  // HmrState uis used by HMR to track the any state during reloading
  @HmrState() _state = {};

  constructor() {

  }

  // Already return a clone of current state
  get state() {
    return this._state = this._clone(this.state);
  }

  // Never allor mutation
  set state(value) {
    throw new Error('do not mutate the `state` directly);
  }

  get(prop?: any) {
    // Use the state getter for the clone
    const state = this.state;
    return state[prop] || state;
  }
}
