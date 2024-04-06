# What is this?
This is the crude waqq.ly front-end for registering dogs & dog walker and viewing the registered dogs & dog walkers.

# Deployment
1. Gain access to this repository on your local machine...
    1. **(Recommend)** Clone the repository by running `git clone https://github.com/WiseNat/BS3221-Summative-Frontend.git`
    2. **(Alternative)** Download the repository as a zip file and extract it
3. To run locally...
    1. Open a terminal and cd to the project directory
    2. Run `npm i` to install packages
    3. Run `npm run dev` to run the application for active development
4. To deploy in production...
    1. Setup either [Docker](https://www.docker.com/) or [Podman](https://podman.io/) on your local machine
    2. Open a terminal and build the package using Docker/Podman, ensuring you point to the provided `Dockerfile`
    4. Once built, push the image to a registry that supports Docker images
    5. Deploy to any chosen Cloud service (e.g. Amazon Lightsail, Amazon EC2), ensuring you specify the environment variables for an API
        1. `API_KEY` - the API key for all the following API URLs
        2. `DOG_REGISTER_URL` - API URL for registering a new dog
        3. `WALKER_REGISTER_URL`- API URL for registering a new dog walker
        4. `DOG_FINDER_URL`- API URL for finding a dog
        5. `WALKER_FINDER_URL`- API URL for finding a dog walker
    7. Setup an API to handle the register walker, register dog, find walker, and find dog API calls for the waqq.ly application
        1. See forms in `src/routes/dog/+page.svelte` and `src/routes/walker/+page.svelte` for an idea of the expected inbound API payload calls
