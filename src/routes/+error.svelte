<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="p-10 text-red-600 min-h-screen flex flex-col items-center justify-center">
	<div class="mx-auto max-w-5x text-center border p-10 rounded border-red-200">
        <div class="text-4xl">{$page.status}</div>
		<h1 class="text-2xl">{$page.error?.message}</h1>
	</div>
</div>
