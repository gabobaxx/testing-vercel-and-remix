/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
	serverDependenciesToBundle: ['marked'],
	ignoredRouteFiles: ['**/.*'],
	// When running locally in development mode, we use the built-in remix
	// server. This does not understand the vercel lambda module format,
	// so we default back to the standard build output.
	server: process.env.NODE_ENV === 'development' ? undefined : './server.js',
	serverBuildPath: 'api/index.js',
	appDirectory: 'src',
	// assetsBuildDirectory: "public/build",
	// publicPath: "/build/",
};
