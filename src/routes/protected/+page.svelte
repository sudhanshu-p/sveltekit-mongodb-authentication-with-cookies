<!-- This is a protected route, where we need to access user information. -->
<script>
	import { user, isLoggedIn } from "$lib/stores/UserStore";
</script>

<div class="container">
	{#if $isLoggedIn}
		<h1>Welcome {$user.name}</h1>
	{:else}
		<h1>Access restricted. Kindly Log In or Register to continue</h1>
	{/if}
</div>

<style>
	.container {
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
