<title>Dog Routes</title>
<h1>Register a Dog</h1>
<form method="POST" action="/dog">
    <label for="register-dog-name" required>Dog Name </label>
    <input type="text" name="register-dog-name" id="register-dog-name" required />
    <label for="register-owner" required>Owner Name</label>
    <input type="text" name="register-owner" id="register-owner" required />
    <label for="register-breed" required>Breed </label>
    <input type="text" name="register-breed" id="register-breed" required />
    <label for="register-gender">Gender </label>
    <select name="register-gender" id="register-gender">
        <option value="">--Please choose an option--</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
    </select>
    <input type="submit" value="Submit"/>
</form>
<hr>
<h1>Find a Dog</h1>
    <form method="POST" action="/dog">
    <label for="find-town-city" required>Dog Name </label>
    <input type="text" name="find-town-city" id="find-town-city" required/>
    <label for="find-owner" required>Owner Name </label>
    <input type="text" name="find-owner" id="find-owner" required />
    <input type="submit" value="Submit"/>
</form>
<!-- TODO: Populate data here based on POST req -->
