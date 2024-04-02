import { env } from '$env/dynamic/private'

// Add new dog
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

	// TODO: AWS POST req

	return [
		{dog_name: "dog name 1", owner_name: "owner name 1", breed: "breed 1", gender: "gender 1"},
		{dog_name: "dog name 2", owner_name: "owner name 2", breed: "breed 2", gender: "gender 2"},
		{dog_name: "dog name 3", owner_name: "owner name 3", breed: "breed 3", gender: "gender 3"},
		{dog_name: "dog name 4", owner_name: "owner name 4", breed: "breed 4", gender: "gender 4"},
		{dog_name: "dog name 5", owner_name: "owner name 5", breed: "breed 5", gender: "gender 5"}
	]
  }
};
