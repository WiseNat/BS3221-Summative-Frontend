<title>Walker Routes</title>
<h1>Register a Walker</h1>
    <form method="POST" action="/walker">
    <label for="register-first-name" required>First Name </label>
    <input type="text" name="register-first-name" id="register-first-name" required/>
    <br>
    <label for="register-last-name" required>Last Name </label>
    <input type="text" name="register-last-name" id="register-last-name" required/>
    <br>
    <label for="register-email" required>Email </label>
    <input type="email" name="register-email" id="register-email" required/>
    <br>
    <label for="register-town-city" required>Town/City </label>
    <input type="text" name="register-town-city" id="register-town-city" required/>
    <br>
    <label for="register-contact-number" required>Contact Number </label>
    <input type="tel" name="register-contact-number" id="register-contact-number" required/>
    <br>
    <label for="register-dob" required>Date of Birth </label>
    <input type="date" name="register-dob" id="register-dob" required/>
    <br>
    <input type="submit" value="Submit"/>
</form>
<hr>
<h1>Find a Walker</h1>
    <form method="POST" action="/walker">
    <label for="find-town-city">Town/City </label>
    <input type="text" name="find-town-city" id="find-town-city" required/>
    <br>
    <input type="submit" value="Submit"/>
</form>
<!-- TODO: Populate data here based on POST req -->
