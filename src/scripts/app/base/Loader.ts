'use strict';

export class Loader implements ILoader {

	private _name: string;
	private _namespace: INamespace;
	private _module: angular.IModule;

	constructor (name: string, namespace: INamespace, externalModules: string[]) {
		this._name = name;
		this._module = angular.module(this._name, externalModules);
		this._namespace = namespace;

		this
			.registerComponents(this._namespace.Services, this._module.service)
			.registerComponents(this._namespace.Directives, this._module.directive)
			.registerComponents(this._namespace.Filters, this._module.filter);
	}

	get name() {
		return this._name;
	}

	get namespace() {
		return this._namespace;
	}

	get module() {
		return this._module;
	}

	registerComponents(components: any, register: (name: string, arr: any[]) => any): Loader {
		if (components == null) {
			return this;
		}

		for (var key in components) {
			if (components.hasOwnProperty(key)) {
				var component = components[key];
				if (typeof component === 'function') {
					register(key, component);
				}
			}
		}

		return this;
	}

}
