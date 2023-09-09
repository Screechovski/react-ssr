import createApp from './app'

async function createServerApp() {
	const app = await createApp();

	/*
		choose activeRoute by url
		some async oper to get data
		e t.c.
	*/

	return app;
}

export default createServerApp;