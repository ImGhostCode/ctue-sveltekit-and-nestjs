<script lang="ts">
	import { HandlerSpeaker } from '$lib/store';
	import { onMount } from 'svelte';

	let totalPages: Number = 1;
	let key: string = '';
	let currentPage: number = 1;
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
				Sắp xếp
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
		<table class="table">
			<thead>
				<tr>
					<th />
					<th class="text-green-700 text-lg">Nguyên mẫu (V1)</th>
					<th class="text-green-700 text-lg">Quá khứ đơn (V2)</th>
					<th class="text-green-700 text-lg">Quá khứ phân từ (V3)</th>
					<th class="text-green-700 text-lg">Nghĩa</th>
				</tr>
			</thead>
			<tbody class="">
				{#each words as word, i}
					<tr class="hover:bg-base-200">
						<th>{i + 1}</th>
						<td>
							{word.v1}
							<button
								class="py-1 px-1"
								on:click={() => {
									HandlerSpeaker.onTextToSpeech(word.v1);
								}}
							>
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
										d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
									/>
								</svg>
							</button>
						</td>
						<td>
							{word.v2}
							<button
								class="py-1 px-1"
								on:click={() => {
									HandlerSpeaker.onTextToSpeech(word.v2);
								}}
							>
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
										d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
									/>
								</svg>
							</button>
						</td>
						<td>
							{word.v3}
							<button
								class="py-1 px-1"
								on:click={() => {
									HandlerSpeaker.onTextToSpeech(word.v3);
								}}
							>
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
										d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
									/>
								</svg>
							</button>
						</td>
						<td>{word.mean}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
	<div class="join grid grid-cols-2 w-max mx-auto mt-6">
		<button
			on:click={async () => {
				currentPage = currentPage - 1;
			}}
			class:disable={currentPage == 1}
			disabled={currentPage == 1}
			class:cursor-not-allowed={currentPage == 1}
			class="join-item btn btn-outline border-sky-400 hover:border-sky-500 hover:bg-sky-500"
		>
			Trang sau
		</button>
		<button
			on:click={async () => {
				currentPage = currentPage + 1;
			}}
			class:disable={currentPage == totalPages}
			disabled={currentPage == totalPages}
			class:cursor-not-allowed={currentPage == totalPages}
			class="join-item btn btn-outline border-sky-400 hover:border-sky-500 hover:bg-sky-500"
		>
			Trang tiếp theo
		</button>
	</div>
</div>
