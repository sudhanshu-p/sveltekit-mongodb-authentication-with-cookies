<script>
    import { enhance } from "$app/forms";
    let state = "Sign up";
</script>

<div class="auth-container">
    <div class="auth-head">
        <button
            class="log-in-head"
            style="border-bottom: {state === 'Sign in'
                ? '3px solid #41AAF5'
                : 'none'}"
            on:click={() => (state = "Sign in")}>Sign in</button
        >
        <button
            class="sign-up"
            style="border-bottom: {state === 'Sign up'
                ? '3px solid #41AAF5'
                : 'none'}"
            on:click={() => (state = "Sign up")}>Sign up</button
        >
    </div>
    <div class="auth-body">
        <form
            action="/auth?/{state === 'Sign in' ? 'login' : 'register'}"
            method="POST"
            use:enhance
        >
            {#if state === "Sign up"}
                <span class="username">
                    <label for="username">Username: </label>
                    <input type="text" name="username" />
                </span>
            {/if}
            <span class="email">
                <label for="email">Email: </label>
                <input type="email" name="email" />
            </span>
            <span class="password">
                <label for="password">Password: </label>
                <input type="password" name="password" />
            </span>
            <button class="submit-btn">Submit</button>
        </form>
    </div>
</div>

<style>
    .auth-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 3rem;
        height: 90vh;
    }

    .auth-head {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 3rem;
    }

    .log-in-head,
    .sign-up {
        padding-top: 4%;
        padding-bottom: 1%;
        text-align: center;
    }

    .auth-head > button {
        background-color: transparent;
        box-shadow: none;
        border: none;
    }

    button {
        font-weight: 700;
        font-size: 1.2rem;
    }

    .auth-body > form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 2rem;
        text-align: left;
        font-size: 2rem;
    }
    form > * {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
    }
    input {
        font-size: 2rem;
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

    @media (max-width: 700px) {
        .email, .username, .password {
            display: flex;
            flex-direction: column;
        }
    }
</style>
