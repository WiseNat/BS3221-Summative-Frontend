<link rel="stylesheet" href="app.css" type="text/css" />

<h1>Register a Dog</h1>
<form method="POST" action="/dog">
    <label for="dog-name">Name </label>
    <input type="text" name="dog-name" id="dog-name" required />
    <br>
    <label for="dog-owner">Owner </label>
    <input type="text" name="dog-owner" id="dog-owner" required />
    <br>
    <label for="dog-breed">Breed </label>
    <input type="text" name="dog-breed" id="dog-breed" required />
    <br>
    <label for="dog-gender">Gender </label>
    <select name="dog-gender" id="dog-gender">
        <option value="">--Please choose an option--</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
    </select>
    <br>
    <input type="submit" value="Submit"/>
</form>
<hr>
<!-- GET form -->
