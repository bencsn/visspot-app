<script lang="ts">
	import Button from '$lib/common/components/common-ui/Button.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="mb-6">
	<Button onClick={() => window.history.back()} secondary>Back</Button>
</div>
<div>
	<h1>Project page</h1>
	<h2>{data.slug}</h2>
</div>
