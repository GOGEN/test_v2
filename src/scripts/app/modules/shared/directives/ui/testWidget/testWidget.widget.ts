'use strict';

import { TestWidgetController } from './testWidget.controller';

export function testWidget(): angular.IDirective {
  return {
    restrict: 'E',
    templateUrl: 'scripts/app/modules/shared/directives/ui/testWidget/testWidget.view.html',
    controller: TestWidgetController,
    controllerAs: 'vm',
    bindToController: true,
    scope: {
      name: '='
    }
  };
}
