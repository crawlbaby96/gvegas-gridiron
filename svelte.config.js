import vercel from '@sveltejs/adapter-vercel';
import node from '@sveltejs/adapter-node';

const dockerBuild = process.env.DOCKER_BUILD

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: dockerBuild ? node() : node(), // Changed from vercel() to node()
	}
};

export default config;
