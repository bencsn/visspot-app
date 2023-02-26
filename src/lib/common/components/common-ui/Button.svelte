<script lang='ts'>
    export let secondary: boolean = false;

    const classes = {
        primary: 'bg-visspot-light-primary rounded text-visspot-darkest-primary hover:bg-visspot-primary px-3 py-2',
        secondary: 'bg-gray-200 text-gray-800 rounded hover:bg-gray-900 hover:text-white px-3 py-2',
    };

    $: className = secondary ? classes.secondary : classes.primary;
</script>
<button class={className}>
	<slot />
</button>
