<link rel="stylesheet" href="app.css" type="text/css" />

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
<hr>
<!-- GET form -->