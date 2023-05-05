import { writable } from "svelte/store";

export let user = writable({
    name: '',
    email: '',
})

export let isLoggedIn = writable(false)