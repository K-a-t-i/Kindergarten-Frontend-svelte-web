export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.svg","robots.txt"]),
	mimeTypes: {".svg":"image/svg+xml",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.BaH87d0k.js","app":"_app/immutable/entry/app.BzeWI4px.js","imports":["_app/immutable/entry/start.BaH87d0k.js","_app/immutable/chunks/entry.KRxUCQaT.js","_app/immutable/chunks/scheduler.CfYsyzRB.js","_app/immutable/entry/app.BzeWI4px.js","_app/immutable/chunks/scheduler.CfYsyzRB.js","_app/immutable/chunks/index.DqLG0vjb.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
