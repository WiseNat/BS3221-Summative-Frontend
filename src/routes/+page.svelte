<style>
    :root {
        margin: 3em 6em;
        font-family: var(--font-family);
    }

    select {
        font-family: var(--font-family);
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
        font-family: var(--font-family);
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
<h1>Register a Walker</h1>
    <form method="POST" action="/walker">
    <label for="walker-first-name">First Name </label>
    <input type="text" name="walker-first-name" id="walker-first-name" required/>
    <br>
    <label for="walker-last-name">Last Name </label>
    <input type="text" name="walker-last-name" id="walker-last-name" required/>
    <br>
    <label for="walker-email">Email </label>
    <input type="email" name="walker-email" id="walker-email" required/>
    <br>
    <label for="walker-town-city">Town/City </label>
    <input type="text" name="walker-town-city" id="walker-town-city" required/>
    <br>
    <label for="walker-contact-number">Contact Number </label>
    <input type="tel" name="walker-contact-number" id="walker-contact-number" required/>
    <br>
    <label for="walker-dob">Date of Birth </label>
    <input type="date" name="walker-dob" id="walker-dob" required/>
    <br>
    <input type="submit" value="Submit"/>
</form>
