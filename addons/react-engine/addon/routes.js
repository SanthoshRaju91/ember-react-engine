import buildRoutes from 'ember-engines/routes';

export default buildRoutes(function() {
  this.route('dashboard', { path: '/' });
  this.route('payments');
});
