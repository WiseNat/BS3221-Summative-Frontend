<style>
    :root {
        margin: 3em 6em;
    }

    input[type=text], input[type=email], input[type=tel], input[type=date], select {
        width: 100%;
        padding: 12px 20px;
        margin: 8px 0;
        display: inline-block;
        box-sizing: border-box;
        border: 1px solid gray;
        border-radius: 4px;
    }

    input[type=submit] {
        width: 100%;
        padding: 14px 20px;
        margin: 20px 0;
        background-color: var(--blue-sapphire);
        color: var(--snow);
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }

    input[type=submit]:hover {
        background-color: var(--yankees-blue);
    }

    br {
        margin: 0 0 30px 0;
    }

    hr {
        color: var(--yankees-blue);
        margin: 50px 0 80px 0;
    }
</style>

<h1>Register a Dog</h1>
<form method="POST" action="/dog">
    <label for="name">Name </label>
    <input type="text" name="name" id="name" required />
    <br>
    <label for="owner">Owner </label>
    <input type="text" name="owner" id="owner" required />
    <br>
    <label for="breed">Breed </label>
    <input type="text" name="breed" id="breed" required />
    <br>
    <label for="gender">Gender </label>
    <select name="gender" id="gender-select">
        <option value="">--Please choose an option--</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
    </select>
    <br>
    <input type="submit" value="Submit"/>
</form>
<hr>
<h1>Register a Walker</h1>
<form method="POST" action="/walker">
    <label for="name">First Name </label>
    <input type="text" name="name" id="name" required/>
    <br>
    <label for="name">Last Name </label>
    <input type="text" name="name" id="name" required/>
    <br>
    <label for="email">Email </label>
    <input type="email" name="email" id="email" required/>
    <br>
    <label for="town-city">Town/City </label>
    <input type="text" name="town-city" id="town-city" required/>
    <br>
    <label for="contact-number">Contact Number </label>
    <input type="tel" name="contact-number" id="contact-number" required/>
    <br>
    <label for="dob">Date of Birth </label>
    <input type="date" name="dob" id="dob" required/>
    <br>
    <input type="submit" value="Submit"/>
</form>
