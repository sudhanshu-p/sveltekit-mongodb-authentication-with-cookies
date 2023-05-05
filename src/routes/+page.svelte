<script>
	import Login from "$lib/components/Login.svelte";
	import { user, isLoggedIn } from "$lib/stores/UserStore";

	async function handleSubmit() {
		const formData = new FormData(this);
		$user.name = "";
		$user.email = "";
		$isLoggedIn = false;
		const response = await fetch(this.action, {
			method: "POST",
			body: formData,
		});
	}
</script>

{#if !$isLoggedIn}
	<Login />
{:else}
	<div class="greeting">
		<h1>Welcome {$user.name}</h1>
		<form
			action="/auth?/logout"
			method="POST"
			on:submit|preventDefault={handleSubmit}
		>
			<button type="submit" class="submit-btn"> Logout </button>
		</form>
	</div>
{/if}

<style>
	.greeting {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 90vh;
		flex-direction: column;
		gap: 1rem;
	}

	.submit-btn {
		background: fuchsia;
		color: #f8f5f2;
		padding: 1rem 2rem;
		border: none;
		font-size: 1rem;
		cursor: pointer;
		border-radius: 5px;
		transition: 0.3s all;
		z-index: 10;
	}

	.submit-btn:hover {
		box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
	}
</style>
