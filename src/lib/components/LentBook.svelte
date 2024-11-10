<script lang="ts">
	import { dateToString } from '$lib/utils';

	export let title: String;
	export let lentTill: Date = new Date();
</script>

<div class="border-2 border-solid border-theme-gray rounded flex flex-row justify-between w-full p-1">
	<p>{title}</p>
	<p class="text-theme-gray">{dateToString(lentTill)}</p>
</div>