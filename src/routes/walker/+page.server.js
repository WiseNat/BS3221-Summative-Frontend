// Add new walker
export const actions = {
  register: async ({ request }) => {
    const data = await request.formData();

	// TODO: AWS POST req

	return "Registered"
  },

  find: async ({ request }) => {
    const data = await request.formData();

	// TODO: AWS POST req

	return [
		{first_name: "first name 1", last_name: "last name 1", email: "email 1", town_city: "town/city 1", contact_number: "contact number 1", date_of_birth: "date of birth 1"},
		{first_name: "first name 2", last_name: "last name 2", email: "email 2", town_city: "town/city 2", contact_number: "contact number 2", date_of_birth: "date of birth 2"},
		{first_name: "first name 3", last_name: "last name 3", email: "email 3", town_city: "town/city 3", contact_number: "contact number 3", date_of_birth: "date of birth 3"},
		{first_name: "first name 4", last_name: "last name 4", email: "email 4", town_city: "town/city 4", contact_number: "contact number 4", date_of_birth: "date of birth 4"},
		{first_name: "first name 5", last_name: "last name 5", email: "email 5", town_city: "town/city 5", contact_number: "contact number 5", date_of_birth: "date of birth 5"},
	]
  }
};
