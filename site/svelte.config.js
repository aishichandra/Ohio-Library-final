import adapter from '@sveltejs/adapter-static';

export default { kit: { adapter: adapter(), paths: { base: process.env.PAGES_BASE_PATH ?? '' } } };
