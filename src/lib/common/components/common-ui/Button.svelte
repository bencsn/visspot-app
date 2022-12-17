<script lang='ts'>
    export let secondary: boolean = false;

    const classes = {
        primary: 'bg-green-200 text-green-800 rounded hover:bg-green-900 hover:text-white px-3 py-2',
        secondary: 'bg-gray-200 text-gray-800 rounded hover:bg-gray-900 hover:text-white px-3 py-2',
    };

    $: className = secondary ? classes.secondary : classes.primary;
</script>
<button class={className}>
	<slot />
</button>
