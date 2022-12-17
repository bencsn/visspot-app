<script lang="ts">
	import '../app.css';
	import '@fontsource/poppins';
	import type { LayoutData } from './$types';
	import { enhance } from '$app/forms';

	export let data: LayoutData;
</script>

<nav class="flex items-center justify-between border-b px-6 py-3 bg-black text-white">
	<div class="left">
		<a href="/">Home</a>
	</div>
	<div class="right flex gap-4 items-center">
		{#if data.isLoggedIn}
			<a href="/profile">{data.user.name}</a>
			<form method="POST" action="/logout" use:enhance>
				<button type="submit">Log out</button>
			</form>
		{:else}
			<a href="/login">Log in</a>
		{/if}
	</div>
</nav>
<div class="px-6 py-10 mx-auto max-w-6xl">
	<slot />
</div>
