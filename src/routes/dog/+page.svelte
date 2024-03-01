<title>Dog Routes</title>
<h1>Register a Dog</h1>
<form method="POST" action="/dog">
    <label for="register-dog-name" required>Dog Name </label>
    <input type="text" name="register-dog-name" id="register-dog-name" required />
    <br>
    <label for="register-owner" required>Owner Name </label>
    <input type="text" name="register-owner" id="register-owner" required />
    <br>
    <label for="register-breed" required>Breed </label>
    <input type="text" name="register-breed" id="register-breed" required />
    <br>
    <label for="register-gender">Gender </label>
    <select name="register-gender" id="register-gender">
        <option value="">--Please choose an option--</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
    </select>
    <br>
    <input type="submit" value="Submit"/>
</form>
<hr>
<h1>Find a Dog</h1>
    <form method="POST" action="/dog">
    <label for="find-town-city">Dog Name </label>
    <input type="text" name="find-town-city" id="find-town-city" required/>
    <br>
    <label for="find-owner">Owner Name </label>
    <input type="text" name="find-owner" id="find-owner" required />
    <br>
    <input type="submit" value="Submit"/>
</form>
<!-- TODO: Populate data here based on POST req -->
