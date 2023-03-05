<script lang="ts">
	import ErrorBanner from '$lib/common/components/error/ErrorBanner.svelte';
	import CreateProject from '$lib/common/components/projects/CreateProject.svelte';
	import type { ActionData, PageData } from './$types';

	export let data: PageData;
	// data from actions
	export let form: ActionData;
</script>

<form class="mb-12" method="post" action="?/createProject">
	<h1>🚀 Create a project</h1>
	<CreateProject />
	<ErrorBanner message={form?.error} />
</form>

<div>
	<h1 class="mb-2">📂 Your projects (length: {data.projects.length})</h1>
	{#each data.projects as project}
		<a href={`/projects/${project.id}`}
			><div class="border p-4 bg-white  rounded hover:bg-visspot-light-primary" >
				<h2>{project.name}</h2>
			</div></a
		>
	{/each}

	<ErrorBanner message={data.error} />
</div>
