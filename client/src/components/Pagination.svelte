<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let currentPage: number;
	export let totalPages: number;

	function handleNextPage() {
		dispatch('next');
	}

	function handlePrePAge() {
		dispatch('pre');
	}
</script>

<div class="join grid grid-cols-2 w-max mx-auto mt-6">
	<button
		on:click={handlePrePAge}
		class:disable={currentPage == 1}
		disabled={currentPage == 1}
		class:cursor-not-allowed={currentPage == 1}
		class="md:text-base text-sm join-item md:btn-md btn-sm btn btn-outline border-sky-400 hover:border-sky-500 hover:bg-sky-500"
	>
		Trang sau
	</button>
	<button
		on:click={handleNextPage}
		class:disable={currentPage == totalPages}
		disabled={currentPage == totalPages}
		class:cursor-not-allowed={currentPage == totalPages}
		class="md:text-base text-sm join-item md:btn-md btn-sm btn btn-outline border-sky-400 hover:border-sky-500 hover:bg-sky-500"
	>
		Trang tiếp theo
	</button>
</div>
