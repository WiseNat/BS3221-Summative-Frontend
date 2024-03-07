import { json } from '@sveltejs/kit';

// Add new dog
export function POST() {
	// TODO: Call AWS API
	// TODO: Confirmation of call success/failure

	sampleData = (
		{"DOG_NAME": "dog name 1", "OWNER_NAME": "owner name 1", "BREED": "breed 1", "GENDER": "gender 1"},
		{"DOG_NAME": "dog name 2", "OWNER_NAME": "owner name 2", "BREED": "breed 2", "GENDER": "gender 2"},
		{"DOG_NAME": "dog name 3", "OWNER_NAME": "owner name 3", "BREED": "breed 3", "GENDER": "gender 3"},
		{"DOG_NAME": "dog name 4", "OWNER_NAME": "owner name 4", "BREED": "breed 4", "GENDER": "gender 4"},
		{"DOG_NAME": "dog name 5", "OWNER_NAME": "owner name 5", "BREED": "breed 5", "GENDER": "gender 5"}
	)

	console.log("RECEIVED REQUEST")

	return json(sampleData);
}
