'use strict';

import { routerConfig } from './app.route';
import { runBlock } from './app.run';
import { config } from './app.config';
import { loadSharedModule } from './modules/shared/shared.module';
import { loadTemplatesModule } from './modules/templates/templates.module';

export function loadApp() : void {

  angular.module('app', [
    'ngResource',
    'ui.router',
    loadSharedModule().name,
    loadTemplatesModule().name
  ])
    .config(config)
    .config(routerConfig)
    .run(runBlock);
}
