<style>
    form  {
        display: table;
    }

    div {
        display: table-row;
    }

    label {
        display: table-cell;
        padding: 5px;
    }
    
    input {
        display: table-cell; 
        width: 100%;
    }
    
    select {
        display: table-cell;
        width: 100%;
    }
</style>

<h1>Register a Pet</h1>
<form method="POST">
    <div>
        <label for="name">Name </label>
        <input type="text" name="name" id="name" required />
    </div>
    <div>
        <label for="owner">Owner </label>
        <input type="owner" name="owner" id="owner" required />
    </div>
    <div>
        <label for="breed">Breed </label>
        <input type="breed" name="breed" id="breed" required />
    </div>
    <div>
        <label for="gender">Gender </label>
        <select name="gender" id="gender-select">
            <option value="">--Please choose an option--</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
        </select>
    <div>
    <br>
    <div>
        <input type="submit" value="Submit"/>
    </div>
</form>
<br>
<hr>
<h1>Register a Walker</h1>
<form method="POST">
    <div>
        <label for="name">First Name </label>
        <input type="text" name="name" id="name" required/>
    </div>
    <div>
        <label for="name">Last Name </label>
        <input type="text" name="name" id="name" required/>
    </div>
    <div>
        <label for="email">Email </label>
        <input type="email" name="email" id="email" required/>
    </div>
    <div>
        <label for="town-city">Town/City </label>
        <input type="text" name="town-city" id="town-city" required/>
    </div>
    <div>
        <label for="contact-number">Contact Number </label>
        <input type="tel" name="contact-number" id="contact-number" required/>
    </div>
        <div>
        <label for="dob">Date of Birth </label>
        <input type="date" name="dob" id="dob" required/>
    </div>
    <br>
    <div>
        <input type="submit" value="Submit"/>
    </div>
</form>
