'use strict';

import { Loader } from '../../base/Loader';
import * as Shared from './shared.package';
import { routeConfig } from './shared.route';

export function loadSharedModule(): ILoader {
  var loader = new Loader('app.shared', Shared, []);
  loader.module.config(routeConfig);
  console.log(loader.module);
  return loader;
}
