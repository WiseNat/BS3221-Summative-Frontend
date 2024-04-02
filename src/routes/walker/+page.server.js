import { env } from '$env/dynamic/private'

// Add new walker
export const actions = {
  register: async ({ request }) => {
	const formData = await request.formData();

	// TODO: Move URL and API key to env file
	const response = await fetch(env.WALKER_REGISTER_URL, {
		method: "POST",
		headers: {
			"x-api-key": env.API_KEY,
			"content-Type": "application/json"
		},
		body: JSON.stringify(Object.fromEntries(formData))
	})
	
	return await response.json();
  },

  find: async ({ request }) => {
	const formData = await request.formData();

	const response = await fetch(env.WALKER_FINDER_URL, {
		method: "POST",
		headers: {
			"x-api-key": env.API_KEY,
			"content-Type": "application/json"
		},
		body: JSON.stringify(Object.fromEntries(formData))
	})
		
	return await response.json();
  }
};
