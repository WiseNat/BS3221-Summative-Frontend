import { env } from '$env/dynamic/private'

export const actions = {
  register: async ({ request }) => {
	const formData = await request.formData();

	const response = await fetch(env.DOG_REGISTER_URL, {
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

	const response = await fetch(env.DOG_FINDER_URL, {
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
