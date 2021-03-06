import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('results', {path: '/results/:zip'});
  // this.route('index', {path: '/'});
  this.route('index', {path: '/'}, function() {
    this.route('senate', {path: '/'});
  });
  this.route('subcommittees', {path: '/subcommittees/:committee_id'});
  this.route('senate-sub', {path: '/senate-sub/:committee_id'});
});

export default Router;
