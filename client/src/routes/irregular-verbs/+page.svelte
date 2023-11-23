<script lang="ts">
	import { onMount } from 'svelte';
	import Speaker from '../../components/Speaker.svelte';
	import Pagination from '../../components/Pagination.svelte';

	let totalPages: number = 1;
	let currentPage: number = 1;
	let key: string = '';
	let sort: string = 'asc';
	let words: any[] = [];

	async function getIrregularVerb(page: number, key: string, sort: string) {
		const response = await fetch(`/irregular-verbs?page=${page}&&key=${key}&&sort=${sort}`, {
			method: 'GET'
		});
		const result = await response.json();
		if (!result) {
			words = [];
			totalPages = 1;
		} else {
			words = result.data;
			totalPages = result.totalPages;
		}
	}

	onMount(async () => {
		await getIrregularVerb(currentPage, key, sort);
	});

	$: getIrregularVerb(currentPage, key, sort);

	function handlePrePAge() {
		document.body.scrollIntoView();
		currentPage = currentPage - 1;
	}

	function handleNextPage() {
		document.body.scrollIntoView();
		currentPage = currentPage + 1;
	}
</script>

<div class="max-w-screen-xl w-screen mx-auto text-left px-2 py-8 min-h-screen max-h-max">
	<h1 class="header-page">Động từ bất quy tắc (Irregular Verb)</h1>
	<p class="my-2 text-slate-500 mb-4 max-w-screen-lg">
		Chúng ta có hơn 600 động từ bất quy tắc, nhưng chỉ có khoảng 360 từ thường xuyên xuất hiện nhất.
		Bạn hãy tập trung học những từ này trước nhé 😎 (Click vào từ để nghe phát âm)
	</p>
	<div class="h-[1px] w-full border border-gray-200" />
	<div class="flex justify-between items-center">
		<input
			bind:value={key}
			class="shadow appearance-none border rounded w-[450px] py-2 px-3 text-gray-700 focus:border-green-500 leading-tight focus:outline-none focus:shadow-outline"
			id="find-word"
			type="text"
			placeholder="Nhập từ..."
		/>
		<div class="my-4">
			<button
				on:click={async () => {
					sort = sort == 'asc' ? 'desc' : 'asc';
				}}
				class="btn outline-none border-none bg-transparent hover:bg-transparent hover:opacity-100 opacity-70"
			>
				<span class="md:block hidden">Sắp xếp</span>
				<span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="w-6 h-6"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
						/>
					</svg>
				</span>
			</button>
		</div>
	</div>
	<div class="overflow-x-auto">
		<table class="table w-full">
			<thead>
				<tr>
					<th class="text-green-700 md:text-lg text-xs">Nguyên mẫu (V1)</th>
					<th class="text-green-700 md:text-lg text-xs">Quá khứ đơn (V2)</th>
					<th class="text-green-700 md:text-lg text-xs">Quá khứ phân từ (V3)</th>
					<th class="text-green-700 md:text-lg text-xs">Nghĩa</th>
				</tr>
			</thead>
			<tbody class="">
				{#each words as word, i}
					<tr class="hover:bg-base-200">
						<td>
							<span class="md:text-lg text-xs break-words max-w-[160px] md:max-w-xs">
								<Speaker key={word.v1} showIcon={false} />
							</span>
						</td>
						<td>
							<span class="md:text-lg text-xs break-words max-w-[160px] md:max-w-xs">
								<Speaker key={word.v2} showIcon={false} />
							</span>
						</td>
						<td>
							<span class="md:text-lg text-xs break-words max-w-[160px] md:max-w-xs">
								<Speaker key={word.v3} showIcon={false} />
							</span>
						</td>
						<td>
							<span class="md:text-lg text-xs break-words max-w-[160px] md:max-w-xs">
								{word.mean}
							</span>
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
	<Pagination {totalPages} {currentPage} on:next={handleNextPage} on:pre={handlePrePAge} />
</div>
