<!-- custom input component -->
<script lang="ts">
	export let placeholder: string = '';
	export let label: string = '';
	export let type: string = 'text';
</script>

<div>
	<label class="ml-2 inline-block mb-1" for={label}>{label}</label>
	<input class="px-3 py-2 w-full rounded bg-white border" {type} name={label} {placeholder} />
</div>
