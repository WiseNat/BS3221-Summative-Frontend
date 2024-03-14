// Add new dog
export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();

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
