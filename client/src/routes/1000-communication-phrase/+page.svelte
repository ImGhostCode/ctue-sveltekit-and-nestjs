<script lang="ts">
	import Speaker from '../../components/Speaker.svelte';
	import Pagination from '../../components/Pagination.svelte';
	import type { ActionData } from './$types';
	import { onMount } from 'svelte';

	/** @type {import('./$types').PageData} */
	export let data: any;

	function toggleSelected(index: number) {
		data.topicsSentence[index].selected = !data.topicsSentence[index].selected;
	}

	function handleFilterConfirmation() {
		const selectedTopics = data.topicsSentence
			.filter((topic: any) => topic.selected)
			.map((topic: any) => topic.id);
		getSentences(selectedTopics, type, currentPage);
	}

	let totalPages: number = 1;
	let type: number | null = null;
	let topic: number[] = [];
	let currentPage: number = 1;
	let sentences: any[] = [];

	async function getSentences(topic: number[], type: number | null, page: number | null) {
		const topicsString = topic.map((id) => `topic=${id}`).join('&&');
		const typeParameter = type !== null && !isNaN(type) ? `type=${type}&&` : '';
		const response = await fetch(
			`/1000-communication-phrase?${typeParameter}&&${topicsString ?? +topicsString}&&page=${page}`,
			{
				method: 'GET'
			}
		);
		const result = await response.json();
		if (!result) {
			sentences = [];
			totalPages = 1;
		} else {
			sentences = result.sentences;
			totalPages = result.totalPages;
		}
	}

	onMount(async () => {
		await getSentences(topic, type, currentPage);
	});

	$: getSentences(topic, type, currentPage);

	let myModal4: HTMLDialogElement;
	let myModal5: HTMLDialogElement;

	let dataDetail: any;

	function openModal(modal: HTMLDialogElement, sentence: any) {
		modal.showModal();
		dataDetail = sentence;
		dataDetail.topics = dataDetail.Topic.length ? dataDetail.Topic.map((t: any) => t.name) : [];
	}

	function handlePrePAge() {
		document.body.scrollIntoView();
		currentPage = currentPage - 1;
	}

	function handleNextPage() {
		document.body.scrollIntoView();
		currentPage = currentPage + 1;
	}

	function handleChangePage(e: any) {
		document.body.scrollIntoView();
		currentPage = e.detail;
	}
</script>

<div class="max-w-screen-xl w-screen mx-auto text-left px-2 py-8 min-h-screen max-h-max">
	<div class="flex justify-between items-center mb-4">
		<h1 class="header-page md:">1000+ Cụm từ giao tiếp</h1>
		<button class="" on:click={() => myModal4.showModal()}>
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
					d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
				/>
				<path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
			</svg>
		</button>
		<dialog bind:this={myModal4} id="my_modal_4" class="modal">
			<div class="modal-box w-11/12 max-w-5xl px-6 py-4">
				<h3 class="font-bold md:text-xl text-lg text-orange-600 mb-2">Chọn chủ đề</h3>
				<div class="h-[1px] w-full border border-gray-200" />
				<div class="flex flex-wrap py-4">
					{#each data.topicsSentence as topic, index (index)}
						<button
							type="button"
							class="topic-item px-2 py-1 m-1 flex justify-between items-center w-fit rounded-full border-2 border-green-600 cursor-pointer"
							class:bg-green-500={topic.selected}
							class:text-white={topic.selected}
							on:click={() => toggleSelected(index)}
						>
							<span class="pr-1 text-sm">{topic.name}</span>
						</button>
					{/each}
				</div>
				<div class="h-[1px] w-full border border-gray-200" />
				<div class="modal-action">
					<form method="dialog">
						<button class="btn btn-sm md:btn-md mr-2">Đóng</button>
						<button
							class="btn btn-sm md:btn-md bg-green-600 hover:bg-green-700 text-white"
							on:click={handleFilterConfirmation}
						>
							Hoàn tất
						</button>
					</form>
				</div>
			</div>
		</dialog>
	</div>
	<div class="h-[1px] w-full border border-gray-200" />
	{#if sentences.length}
		<div class="overflow-x-auto">
			<table class="table">
				<thead>
					<tr>
						<th class="text-green-700 md:text-lg text-base">STT</th>
						<th class="text-green-700 md:text-lg text-base">Câu</th>
						<th class="text-green-700 md:text-lg text-base">Nghĩa</th>
						<th class="text-green-700 md:text-lg text-base">Chi tiết</th>
					</tr>
				</thead>
				<tbody class="">
					{#each sentences as sentence, index (index)}
						<tr class="hover:bg-base-200">
							<td>{index + 1}</td>
							<td class="h-full mx-auto max-w-sm min-w-[200px]">
								<div class="flex">
									<Speaker key={sentence.content} />
									<p class="break-words">{sentence.content}</p>
								</div>
							</td>
							<td class="max-w-sm min-w-[200px]">
								<p class="break-words">{sentence.mean}</p>
							</td>
							<td class="min-w-[150px]">
								<button
									type="button"
									class="btn btn-info btn-sm md:btn-md text-white"
									on:click={() => openModal(myModal5, sentence)}>Chi tiết</button
								>
							</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
		<Pagination
			{currentPage}
			{totalPages}
			on:next={handleNextPage}
			on:pre={handlePrePAge}
			on:page-change={handleChangePage}
		/>
	{:else}
		<div class="py-4 text-center text-lg text-slate-600 font-semibold">Danh sách rỗng</div>
	{/if}
</div>
<dialog bind:this={myModal5} id="my_modal_" class="modal">
	{#if dataDetail}
		<div class="modal-box">
			<form method="dialog">
				<button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-xl">✕</button>
			</form>
			<h3 class="font-bold md:text-2xl text-xl text-orange-600 mb-2">Chi tiết câu</h3>
			<div class="h-[1px] w-full border border-gray-200" />
			<div class="mt-2"><b>Câu: </b> {dataDetail.content}</div>
			<div class=""><b>Nghĩa: </b> {dataDetail.mean}</div>
			<p class="font-bold">
				Loại câu: <span class="font-normal">{dataDetail.Type.name}</span>
			</p>
			<p class="font-bold">Chủ đề:</p>
			{#if dataDetail.topics.length}
				<div class="flex flex-wrap p-3">
					{#each dataDetail.topics as topic, index (index)}
						<div
							class="topic-item px-2 py-1 m-1 flex justify-between items-center w-fit rounded-full border-2 border-green-600 text-slate-700"
						>
							<span class="pr-1 text-sm">{topic}</span>
						</div>
					{/each}
				</div>
			{/if}
			<p class="font-bold">Ghi chú: <span class="font-normal">{dataDetail.note}</span></p>
		</div>
	{/if}
</dialog>
