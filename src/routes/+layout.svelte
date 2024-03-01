<!-- TODO: NAV BAR HERE -->
<link rel="stylesheet" href="app.css" type="text/css" />
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

<style>
	nav {
		background-color: var(--blue-sapphire);
		padding: 1.5em 14em;
		position: sticky;
		top: 0;
		color: var(--snow);
	}

	nav > a {
		margin: 0px 30px;
		padding: 1.5em 0em;
		color: var(--azureish-White);
		text-decoration-line: none;
		height: 100%;
	}

	nav > a:hover {
		color: var(--snow);
	}

	.body {
		margin: 3em 14em;
	}
	
	.verticalLine {
		border-left: 2.5px solid var(--snow);
		margin: 0 20px 0 0;
	}

	.logo {
		margin: 0 20px 0 0;
		color: var(--snow);
	}

	.material-symbols-outlined {
		vertical-align: bottom;
		font-variation-settings:
		'FILL' 0,
		'wght' 400,
		'GRAD' 0,
		'opsz' 24
	}
</style>

<nav class="unselectable">
	<a class="logo" href="/">
		<span class="material-symbols-outlined">pets</span>
		<strong>wagg.</strong>ly
	</a>
	<span class="verticalLine"></span>
	<a href="/walker">Walker</a>
	<a href="/dog">Dog</a>
</nav>

<div class="body">
	<slot />
</div>
