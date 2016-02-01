
interface  ILoader {

	name: string;
	namespace: any;
	module: angular.IModule;

	registerComponents(components: any, register: (name: string, arr: any[]) => any) : ILoader;
}
