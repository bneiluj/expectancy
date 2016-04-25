import {Injectable} from 'angular2/core';
import {HmrState} from 'angular2-hmr';

@Injectable()

export class AppState {
  // HmrState is used by HMR to track the any state during reloading
  @HmrState() _state = {};

  constructor() {

  }

  // Already return a clone of current state
  get state() {
    console.log("app.service.ts, this.state: ", this.state);
    return this._state = this._clone(this.state);
  }

  // Never allow mutation
  set state(value) {
    console.log("app.service.ts, value: ", state);
    throw new Error('do not mutate the `state` directly');
  }

  // 
  get(prop?: any) {
    // Use the state getter for the clone
    const state = this.state;
    console.log("app.service.ts, value: ", state);
    return state[prop] || state;
  }

  // Clone object
  _clone(object) {
    // clone object
    return JSON.parse(JSON.stringify( object ));
  }
}
