<script lang="ts">
	import correctWord from '$lib/assets/icons/games/correct-word.png';
	import wordMatch from '$lib/assets/icons/games/word-match.png';
	import { onMount } from 'svelte';
	import Pagination from '../../components/Pagination.svelte';
	import moment from 'moment';

	let practices: any[] = [];

	let currentPage: number = 1;
	let totalPages: number;

	onMount(async () => {
		await getAllPractices(currentPage);
	});

	$: getAllPractices(currentPage);

	async function getAllPractices(page: number) {
		const response = await fetch(`/practice?page=${page}`, {
			method: 'GET'
		});
		const result = await response.json();
		practices = result.data.practices;
		totalPages = result.data.totalPages;
		console.log(totalPages);
	}

	function handlePrePAge() {
		document.body.scrollIntoView();
		currentPage = currentPage - 1;
	}

	function handleNextPage() {
		document.body.scrollIntoView();
		currentPage = currentPage + 1;
	}
</script>

<div class="min-h-screen max-h-max max-w-screen-xl mx-auto p-4">
	<div class="flex flex-wrap items-center">
		<div class="p-3 w-1/3">
			<a
				href="/practice/correct-word"
				class="h-[180px] px-6 py-4 flex justify-center items-center transition rounded-md border shadow-lg bg-[#f1f1f1] hover:bg-[#e5e5e5]"
			>
				<div class="w-1/5"><img src={correctWord} alt={correctWord} /></div>
				<div class="w-4/5">
					<p class="text-2xl text-amber-500 font-bold">Hãy chọn từ đúng</p>
					<p class="text-ms text-gray-500">
						Ôn tập từ vựng bằng cách chọn 1 đáp án đúng nhất trong 4 câu trả lời có nghĩa khớp với
						từ được cho.
					</p>
				</div>
			</a>
		</div>
		<div class="p-3 w-1/3">
			<a
				href="/practice/word-match"
				class="h-[180px] px-6 py-4 flex justify-center items-center transition rounded-md border shadow-lg bg-[#f1f1f1] hover:bg-[#e5e5e5]"
			>
				<div class="w-1/5"><img src={wordMatch} alt={wordMatch} /></div>
				<div class="w-4/5">
					<p class="text-2xl text-amber-500 font-bold">Ghép từ</p>
					<p class="text-ms text-gray-500">
						Ghép các ký tự đã cho thành một chữ có nghĩa đúng với từ đã cho.
					</p>
				</div>
			</a>
		</div>
	</div>

	<div class="mt-6">
		<h1 class="text-3xl text-title font-bold mb-2">Lịch sử ôn tập</h1>

		<div class="h-[1px] w-full border border-gray-200" />

		{#if practices.length}
			<table class="table table-hover mt-4">
				<thead>
					<tr>
						<th>Thời gian</th>
						<th class="text-sky-600">Số câu</th>
						<th class="text-green-600">Số câu đúng</th>
						<th class="text-green-600">Số câu đúng liên tục</th>
						<th class="text-red-600">Số câu sai</th>
						<th>Nội dung ôn tập</th>
					</tr>
				</thead>
				<tbody>
					{#each practices as practice (practice.id)}
						<tr class="hover">
							<td>{moment(practice.createdAt).format('DD/MM/YYYY')}</td>
							<!-- <td>12-12-2222</td> -->
							<td class="text-sky-600">{practice.numOfSentence}</td>
							<td class="text-green-600">{practice.nRight}</td>
							<td class="text-green-600">{practice.nRightConsecutive}</td>
							<td class="text-red-600">{practice.nWrong}</td>
							<td class="max-w-xs">
								<p class="break-words">
									<!-- {practice.Words.map((w) => w.content).join(',')} -->
									{#each practice.Words as w, index (w.id)}
										{w.content}{index < practice.Words.length - 1 ? ',' : '.'} &nbsp;
									{/each}
								</p>
							</td>
						</tr>
					{/each}
				</tbody>
			</table>
			<Pagination {totalPages} {currentPage} on:next={handleNextPage} on:pre={handlePrePAge} />
		{:else}
			<p class="text-center text-base my-4 text-slate-600">Bạn chưa có bài ôn tập nào</p>
		{/if}
	</div>
</div>
