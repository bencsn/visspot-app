<!-- custom input component -->
<script lang="ts">
    export let placeholder: string = "";
    export let label: string = "";
    export let type: string = "text";
</script>

<label for={label}>{label}</label>
<input class="px-3 py-2 w-full rounded bg-white" type={type} name={label} placeholder={placeholder} />
