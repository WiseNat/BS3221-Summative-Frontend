<script>
    export let form;
    import { enhance } from '$app/forms'
</script>

<title>Dog Routes</title>
<h1>Register a Dog</h1>
<form method="POST" action="?/register" use:enhance>
    <label for="register-dog-name" required>Dog Name </label>
    <input type="text" name="register-dog-name" id="register-dog-name" required />
    <label for="register-owner" required>Owner Name</label>
    <input type="text" name="register-owner" id="register-owner" required />
    <label for="register-breed" required>Breed </label>
    <input type="text" name="register-breed" id="register-breed" required />
    <label for="register-gender" required>Gender </label>
    <select name="register-gender" id="register-gender" required>
        <option value="male">Male</option>
        <option value="female">Female</option>
    </select>
    <input type="submit" value="Submit"/>
</form>
<hr>
<h1>Find a Dog</h1>
    <form method="POST" action="?/find" use:enhance>
    <label for="find-dog-name">Dog Name </label>
    <input type="text" name="find-dog-name" id="find-dog-name"/>
    <label for="find-owner-name">Owner Name </label>
    <input type="text" name="find-owner-name" id="find-owner-name" />
    <input type="submit" value="Submit"/>
</form>
<br>
<table>
    <tr>
        <th>Dog Name</th>
        <th>Owner Name</th>
        <th>Breed</th>
        <th>Gender</th>
    </tr>
    {#if form}
        {#each form as dog}
                <tr>
                    <td>{dog.name}</td>
                    <td>{dog.owner}</td>
                    <td>{dog.breed}</td>
                    <td>{dog.gender}</td>
                </tr>
        {/each}
    {/if}
</table>
