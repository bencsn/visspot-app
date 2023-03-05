<script lang="ts">
	import Button from '$lib/common/components/common-ui/Button.svelte';
	import Input from '$lib/common/components/common-ui/Input.svelte';
</script>

<div class="my-4 flex flex-col gap-3 items-start">
	<div class="border p-4 bg-white  rounded">
		<Input placeholder="Project name" label="Name" />
	</div>
	<Button>Submit</Button>
</div>
