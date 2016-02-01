'use strict';

import { Loader } from '../../base/Loader';
import { routeConfig } from './templates.route';

export function loadTemplatesModule(): ILoader {
	var loader = new Loader('app.templates', [], ['ngRoute']);
	console.log(loader);
	loader.module.config(routeConfig);
	return loader;
}
