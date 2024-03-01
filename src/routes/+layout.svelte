<!-- TODO: NAV BAR HERE -->
<link rel="stylesheet" href="app.css" type="text/css" />

<style>
	nav {
		background-color: var(--blue-sapphire);
		/* padding: 1.5em 14em; */
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

	.body {
		margin: 3em 14em;
	}
	
	.verticalLine {
		border-left: 2.5px solid var(--snow);
		margin: 0 20px 0 0;
	}

	.logo {
		margin: 0 20px 0 0;
	}
</style>

<nav class="unselectable">
	<a class="logo" href="/">
		<!-- Actual logo img here? -->
		<strong>wagg.</strong>ly
	</a>
	<span class="verticalLine"></span>
	<a href="/walker">Walker</a>
	<a href="/dog">Dog</a>
</nav>

<div class="body">
	<slot />
</div>
