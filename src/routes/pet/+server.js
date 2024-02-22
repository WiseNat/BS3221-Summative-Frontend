import { error } from '@sveltejs/kit';

// Get pet(s)
export function GET() {
	throw error(501, "Not implemented");
}

// Delete pet
export function DELETE() {
	throw error(501, "Not implemented");
}

// TODO: Add new pet
export function POST() {
	throw error(501, "Will be implemented but it isn't yet");
}

// Update pet
export function PATCH() {
	throw error(501, "Not implemented");
}
