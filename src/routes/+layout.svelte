<script>
	import { deserialize } from "$app/forms";
	import { user, isLoggedIn } from "$lib/stores/UserStore";
	import Navigation from "$lib/components/Navigation.svelte";

	function setDataInStore(userData) {
		if (!userData || userData.success === false) {
			return;
		}
		if (!userData.userDetails) {
			return;
		}
		let details = deserialize(userData.userDetails);
		$user.name = details["username"];
		$user.email = details["email"];
		$isLoggedIn = true;
	}

	$: setDataInStore(data);
	export let data;
</script>

<Navigation />

<slot />
