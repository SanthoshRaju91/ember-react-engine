import Route from '@ember/routing/route';

export default Route.extend({
  setupController(controller) {
    let menus = [
      {
        name: 'Dashboard',
        icon: 'fa-image',
        route: 'react.dashboard'
      },
      {
        name: 'Payments',
        icon: 'fa-image',
        route: 'react.payments'
      }
    ];
    controller.set('menus', menus);
  }
});
