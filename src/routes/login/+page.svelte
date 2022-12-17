<script>
	import { enhance } from '$app/forms';
	import Button from '$lib/common/components/common-ui/Button.svelte';
</script>

<form method="POST" action="?/login" use:enhance>
	<Button secondary={true}>Log in</Button>
</form>
