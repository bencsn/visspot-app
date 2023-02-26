<script lang="ts">
	import Button from '$lib/common/components/common-ui/Button.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="flex justify-end w-full mb-6">
	<a href="/projects"><Button>Create a project</Button></a>
</div>
<div>{JSON.stringify(data)}</div>
