# Content
- A permanent, external Web address that can be given to, and accessed by the marker
- The (rudimentary) Waqq.ly front-end to register pets, and to register dog walkers
- The microservices-orientated backend storing the above data in a noSQL database
- A RESTful API for the backend and the frontend to talk to each other

# RESTful API
- User
    - [GET] get user
    - [GET] get users
    - [DELETE] remove user
    - [POST] add new user
    - [PATCH] update user
- Pet
    - [GET] get pet
    - [DELETE] remove pet
    - [POST] add new pet
    - [PATCH] update pet
    - [PATCH] set pet walker
