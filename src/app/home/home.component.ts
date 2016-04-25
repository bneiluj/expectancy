import {Component} from 'angular2/core';
import {AppState} from '../app.service';

import {Title} from './title';
import {XLarge} from './x-large';

@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'home'
  selector: 'home',  //<home></home>
  // Angular's Dependency Injection - providers are in our app.
  providers: [
    Title
  ],
  // Directives
  directive: [
    XLarge
  ],
  // Custom pipes in our template.
  pipes: [ ],
  // Styles
  styles: [ require('./home.css') ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  template: require('./home.html')
})
