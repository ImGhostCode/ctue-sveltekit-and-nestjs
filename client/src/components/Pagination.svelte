<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte';

	const dispatch = createEventDispatcher();

	export let currentPage: number;
	export let totalPages: number;

	function handlePageChange(page: number) {
		dispatch('page-change', page);
	}
	let pageNumbers: any[];

	onMount(() => {
		pageNumbers = getPaginationNumbers(totalPages);
	});

	function getPaginationNumbers(totalPages: number): any[] {
		const numbers = [];

		if (totalPages <= 5) {
			for (let i = 1; i <= totalPages; i++) {
				numbers.push(i);
			}
		} else {
			const startPage = Math.max(1, currentPage - 2);
			const endPage = Math.min(totalPages, currentPage + 2);

			for (let i = startPage; i <= endPage; i++) {
				numbers.push(i);
			}

			if (currentPage > 3) {
				numbers.unshift('...');
			}

			if (currentPage < totalPages - 2) {
				numbers.push('...');
			}
		}

		if (currentPage === 1) {
			numbers.unshift('...');
		}

		if (currentPage === totalPages) {
			numbers.push('...');
		}

		return numbers;
	}
</script>

<div class="join grid grid-flow-col w-max mx-auto mt-6">
	<button
		on:click={handlePageChange.bind(null, currentPage - 1)}
		class:disable={currentPage == 1}
		disabled={currentPage == 1}
		class:cursor-not-allowed={currentPage == 1}
		class="md:text-base text-sm join-item md:btn-md btn-sm btn btn-outline border-sky-400 hover:border-sky-500 hover:bg-sky-500"
	>
		Trang sau
	</button>

	{#if pageNumbers}
		{#each pageNumbers as page}
			{#if page !== '...'}
				<button
					on:click={handlePageChange.bind(null, page)}
					class:active={page === currentPage}
					class="md:text-base text-sm join-item md:btn-md btn-sm btn btn-outline border-sky-400 hover:border-sky-500 hover:bg-sky-500"
				>
					{page}
				</button>
			{/if}

			{#if page === '...' && currentPage > 3}
				<span class="md:text-base text-sm join-item">...</span>
			{/if}
		{/each}
	{/if}
	<button
		on:click={handlePageChange.bind(null, currentPage + 1)}
		class:disable={currentPage == totalPages}
		disabled={currentPage == totalPages}
		class:cursor-not-allowed={currentPage == totalPages}
		class="md:text-base text-sm join-item md:btn-md btn-sm btn btn-outline border-sky-400 hover:border-sky-500 hover:bg-sky-500"
	>
		Trang tiếp theo
	</button>
</div>
