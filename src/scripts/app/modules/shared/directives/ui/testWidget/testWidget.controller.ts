'use strict';

/** @ngInject */
export class TestWidgetController {
  public name: string;

  constructor($location: angular.ILocationService) {
    console.log($location);
    this.name = 'Marat';
  }
}
