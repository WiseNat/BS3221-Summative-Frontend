import { error } from '@sveltejs/kit';

// Get user(s)
export function GET() {
	throw error(501, "Not implemented");
}

// TODO: Add new user
export function POST() {
	throw error(501, "Will be implemented but it isn't yet");
}

// Update user
export function PATCH() {
	throw error(501, "Not implemented");
}
