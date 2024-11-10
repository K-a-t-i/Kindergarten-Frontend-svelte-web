import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.ts";
export const imports = ["_app/immutable/nodes/0.KaKhJBMd.js","_app/immutable/chunks/scheduler.CfYsyzRB.js","_app/immutable/chunks/index.DqLG0vjb.js"];
export const stylesheets = ["_app/immutable/assets/0.B8DQlurO.css"];
export const fonts = [];
