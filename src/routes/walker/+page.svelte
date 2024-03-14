<script>
    export let form;
    import { enhance } from '$app/forms'
</script>

<title>Walker Routes</title>
<h1>Register a Walker</h1>
    <form method="POST" action="/walker" use:enhance>
    <label for="register-first-name" required>First Name </label>
    <input type="text" name="register-first-name" id="register-first-name" required/>
    <label for="register-last-name" required>Last Name </label>
    <input type="text" name="register-last-name" id="register-last-name" required/>
    <label for="register-email" required>Email </label>
    <input type="email" name="register-email" id="register-email" required/>
    <label for="register-town-city" required>Town/City </label>
    <input type="text" name="register-town-city" id="register-town-city" required/>
    <label for="register-contact-number" required>Contact Number </label>
    <input type="tel" name="register-contact-number" id="register-contact-number" required/>
    <label for="register-dob" required>Date of Birth </label>
    <input type="date" name="register-dob" id="register-dob" required/>
    <input type="submit" value="Submit"/>
</form>
<hr>
<h1>Find a Walker</h1>
    <form method="POST" action="/walker" use:enhance>
    <label for="find-town-city" required>Town/City </label>
    <input type="text" name="find-town-city" id="find-town-city" required/>
    <input type="submit" value="Submit"/>
</form>
<br>
<table>
    <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
        <th>Town/City</th>
        <th>Contact Number</th>
        <th>Date of Birth</th>
    </tr>
    {#if form}
        {#each form as walker}
                <tr>
                    <td>{walker.first_name}</td>
                    <td>{walker.last_name}</td>
                    <td>{walker.email}</td>
                    <td>{walker.town_city}</td>
                    <td>{walker.contact_number}</td>
                    <td>{walker.date_of_birth}</td>
                </tr>
        {/each}
    {/if}
</table>
