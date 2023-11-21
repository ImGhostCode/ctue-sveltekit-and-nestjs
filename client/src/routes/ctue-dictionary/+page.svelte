<script lang="ts">
	import Speaker from '../../components/Speaker.svelte';
	import Pagination from '../../components/Pagination.svelte';
	import type { ActionData, PageData } from './$types';

	import tree from '$lib/assets/icons/topics/tree.png';
	import social from '$lib/assets/icons/topics/social.png';
	import animal from '$lib/assets/icons/topics/animal.png';
	import academy from '$lib/assets/icons/topics/academy.png';
	import body from '$lib/assets/icons/topics/body.png';
	import color from '$lib/assets/icons/topics/color.png';
	import clothes from '$lib/assets/icons/topics/clothes.png';
	import culture from '$lib/assets/icons/topics/culture.png';
	import entertainment from '$lib/assets/icons/topics/entertainment.png';
	import exciting from '$lib/assets/icons/topics/exciting.png';
	import family from '$lib/assets/icons/topics/family.png';
	import flag from '$lib/assets/icons/topics/flag.png';
	import food from '$lib/assets/icons/topics/food.png';
	import health from '$lib/assets/icons/topics/health.png';
	import hobby from '$lib/assets/icons/topics/hobby.png';
	import ielts from '$lib/assets/icons/topics/ielts.png';
	import job from '$lib/assets/icons/topics/job.png';
	import nature from '$lib/assets/icons/topics/nature.png';
	import others from '$lib/assets/icons/topics/others.png';
	import skill from '$lib/assets/icons/topics/skill.png';
	import spirituality from '$lib/assets/icons/topics/spirituality.png';
	import sport from '$lib/assets/icons/topics/sport.png';
	import technology from '$lib/assets/icons/topics/technology.png';
	import toeic from '$lib/assets/icons/topics/toeic.png';
	import travel from '$lib/assets/icons/topics/travel.png';
	import { onMount } from 'svelte';
	import FavouriteIcon from '../../components/FavouriteIcon.svelte';

	type Types = { id: number; name: string; isWord: boolean };
	type Levels = { id: number; name: string };
	type Specializations = { id: number; name: string };
	type Topics = { id: number; name: string; isWord: boolean; selected: boolean; image: string };

	let myModal4: HTMLDialogElement;
	let myModal5: HTMLDialogElement;

	export let data: PageData;
	// export let form: ActionData;

	const imgTopics: { [key: string]: string } = {
		tree,
		social,
		animal,
		academy,
		body,
		color,
		clothes,
		culture,
		entertainment,
		exciting,
		family,
		flag,
		food,
		health,
		hobby,
		ielts,
		job,
		nature,
		others,
		skill,
		spirituality,
		sport,
		technology,
		toeic,
		travel
	};
	let topics: Topics[] = [];
	let types: Types[] = [];
	let levels: Levels[] = [];
	let specializations: Specializations[] = [];
	let showTopics = false;
	let selected: {
		topics: number[];
		type: number | null;
		level: number | null;
		specialization: number | null;
	} = {
		topics: [],
		type: null,
		specialization: null,
		level: null
	};
	let sort: string | null = null;
	let currentPage: number = 1;
	let totalPages: number = 1;
	let words: any[] = [];
	let key: string = '';
	let wordDetails: any = {};

	let favorite: any[] = [];
	$: {
		if (data.topics) topics = data.topics;
		if (data.types) types = data.types;
		if (data.specializations) specializations = data.specializations;
		if (data.levels) levels = data.levels;
		if (data.favorite) favorite = data.favorite;
	}

	$: if (topics) {
		selected.topics = [];
		topics.forEach((i) => {
			if (i.selected) selected.topics.push(i.id);
		});
	}

	function toggleSelected(index: number) {
		topics[index].selected = !topics[index].selected;
	}

	async function getAllWords(
		page: number,
		sort: any,
		specialization: any,
		level: any,
		type: any,
		topics: any[],
		key: string
	) {
		const topicsString = topics.map((topic) => `topic=${encodeURIComponent(topic)}`).join('&&');
		const response = await fetch(
			`/ctue-dictionary?page=${page}&&sort=${sort}&&specialization=${specialization}&&level=${level}&&type=${type}&&${topicsString}&&key=${key}`,
			{
				method: 'GET'
			}
		);
		const result = await response.json();
		words = result.words;
		totalPages = result.totalPages;
	}

	onMount(async () => {
		await getAllWords(
			currentPage,
			sort,
			selected.specialization,
			selected.level,
			selected.type,
			selected.topics,
			key
		);
	});

	$: getAllWords(
		currentPage,
		sort,
		selected.specialization,
		selected.level,
		selected.type,
		selected.topics,
		key
	);

	function handlePrePAge() {
		document.body.scrollIntoView();
		currentPage = currentPage - 1;
	}

	function handleNextPage() {
		document.body.scrollIntoView();
		currentPage = currentPage + 1;
	}

	async function handleToggleFavorite(wordId: number) {
		const response = await fetch(`/ctue-dictionary/${wordId}`, {
			method: 'PATCH'
		});
		const result = await response.json();
		if (result?.statusCode == 200) {
			const data = await fetch(`/ctue-dictionary/${wordId}`, {
				method: 'GET'
			});
			favorite = await data.json();
		}
	}
</script>

<div class="max-w-screen-xl w-screen mx-auto text-left px-2 py-8 min-h-screen max-h-max">
	<div class="flex justify-between items-center mb-4">
		<h1 class="header-page">Từ điển CTUE</h1>
		<!-- You can open the modal using ID.showModal() method -->
		<button class="" on:click={() => myModal5.showModal()}>
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
	</div>
	<div class="h-[1px] w-full border border-gray-200" />
	<div class="flex justify-between items-center">
		<input
			bind:value={key}
			class="shadow appearance-none border rounded w-[450px] py-2 px-3 text-gray-700 focus:border-green-500 leading-tight focus:outline-none focus:shadow-outline"
			id="find-word"
			type="text"
			placeholder="Nhập từ..."
		/>
		<div class="dropdown dropdown-end dropdown-bottom">
			<!-- svelte-ignore a11y-positive-tabindex -->
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label tabindex="11" class="btn btn-ghost m-1">
				<span class="hidden md:block">Sắp xếp</span>
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
			</label>
			<!-- svelte-ignore a11y-positive-tabindex -->
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<ul tabindex="11" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
				<li>
					<button on:click={() => (sort = 'asc')}> A-Z </button>
				</li>
				<li>
					<button on:click={() => (sort = 'desc')}>Z-A</button>
				</li>
				<li>
					<button on:click={() => (sort = null)}>Random</button>
				</li>
			</ul>
		</div>
	</div>
	<div class="border rounded-md p-4">
		{#each words as word}
			<div class="flex border-b-2 hover:border-green-600 mb-4">
				<button
					class="flex hover:cursor-pointer grow"
					on:click={() => {
						myModal4.showModal();
						wordDetails = word;
					}}
				>
					<img src={word.picture} alt={word.content} class="h-[50px] w-[50px] inline-block" />
					<div class="inline-block ml-4">
						<div class="flex justify-center items-center">
							<p class="mr-2 text-green-600 md:text-xl text-base font-semibold">{word.content}</p>
							<span class="mr-2 text-blue-600"
								>{word.phonetic ? '/' + word.phonetic + '/' : ''}</span
							>
						</div>
						<p class="text-left">{word.mean}</p>
					</div>
				</button>
				<div class="grow-0">
					<Speaker key={word.content} />
					{#if data.favorite}
						<FavouriteIcon
							on:clickBtn={() => {
								handleToggleFavorite(word.id);
							}}
							{favorite}
							wordId={word.id}
						/>
					{/if}
				</div>
			</div>
		{/each}
	</div>
	<Pagination {totalPages} {currentPage} on:next={handleNextPage} on:pre={handlePrePAge} />
</div>

<dialog bind:this={myModal5} id="my_modal_5" class="modal">
	<div class="modal-box w-11/12 max-w-5xl">
		<h3 class="font-bold text-xl text-title mb-2">Gói từ vựng</h3>
		<div class="h-[1px] w-full border border-gray-200" />
		<div class="grid md:grid-cols-2 grid-cols-1 gap-2 mt-4">
			<div class="mb-3 form-control">
				<label for="types" class="block mb-2 text-sm">Loại từ (*)</label>
				<select
					bind:value={selected.type}
					id="types"
					class="select select-bordered md:select-md select-sm text-[16px] border bg-gray-50 border-gray-300 focus:border-green-600 focus-visible:border-green-600 focus-within:outline-none text-sm rounded-lg block w-full max-w-sm"
				>
					<option class="block bg-base-200 md:text-base text-xs px-4 py-2" value={null}>
						Tất cả
					</option>
					{#each types as type}
						<option class="block bg-base-200 md:text-base text-xs px-4 py-2" value={type.id}>
							{type.name}
						</option>
					{/each}
				</select>
			</div>
			<div class="mb-3">
				<label for="level" class="block mb-2 text-sm">Bậc của từ (*)</label>
				<select
					bind:value={selected.level}
					id="level"
					class="select select-bordered md:select-md select-sm text-[16px] border bg-gray-50 border-gray-300 focus:border-green-600 focus-visible:border-green-600 focus-within:outline-none text-sm rounded-lg block w-full max-w-sm"
				>
					<option class="block bg-base-200 md:text-base text-xs px-4 py-2" value={null}>
						Chưa xác định
					</option>
					{#each levels as level}
						<option class="block bg-base-200 md:text-base text-xs px-4 py-2" value={level.id}>
							{level.name}
						</option>
					{/each}
				</select>
			</div>
			<div class="mb-3">
				<label for="specialization" class="block mb-2 text-sm">Thuộc chuyên ngành (*)</label>
				<select
					bind:value={selected.specialization}
					id="specialization"
					class=" select select-bordered md:select-md select-sm text-[16px] border bg-gray-50 border-gray-300 focus:border-green-600 focus-visible:border-green-600 focus-within:outline-none text-sm rounded-lg block w-full max-w-sm"
				>
					<option class="block bg-base-200 md:text-base text-xs px-4 py-2" value={null}>
						Tất cả
					</option>
					{#each specializations as specialization}
						<option
							class="block bg-base-200 md:text-base text-xs px-4 py-2"
							value={specialization.id}
						>
							{specialization.name}
						</option>
					{/each}
				</select>
			</div>
			<div class="form-control w-full max-w-sm mb-3">
				<div class="md:h-[28px]" />
				<button
					on:click={() => (showTopics = !showTopics)}
					class="input input-bordered md:input-md input-sm w-full max-w-sm flex justify-center items-center border bg-gray-50 border-gray-300 focus:border-green-600 focus-visible:border-green-600 focus-within:outline-none"
				>
					Thêm chủ đề
					<span class="ml-2">
						{#if showTopics}
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
									d="M4.5 15.75l7.5-7.5 7.5 7.5"
								/>
							</svg>
						{:else}
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
									d="M19.5 8.25l-7.5 7.5-7.5-7.5"
								/>
							</svg>
						{/if}
					</span>
				</button>
			</div>
			{#if showTopics}
				<div
					class="topics md:px-3 md:py-6 px-2 py-4 bg-base-200 flex flex-wrap rounded-md md:col-span-2"
				>
					{#each topics as topic, index}
						<!-- svelte-ignore a11y-click-events-have-key-events -->
						<div
							class="topic-item px-2 py-1 md:m-2 mx-1 my-1 flex justify-between items-center w-fit rounded-full border border-green-600 cursor-pointer"
							class:bg-green-500={topic.selected}
							class:text-white={topic.selected}
							on:click={() => toggleSelected(index)}
						>
							<img class="mr-1" src={imgTopics[topic.image]} alt={topic.name} />
							<span class="pr-1 text-sm">{topic.name}</span>
						</div>
					{/each}
				</div>
			{/if}
		</div>
		<div class="h-[1px] w-full border border-gray-200" />
		<div class="modal-action">
			<form method="dialog">
				<button class="btn md:btn-md btn-sm mr-2">Đóng</button>
				<button class="btn md:btn-md btn-sm bg-green-600 hover:bg-green-700 text-white"
					>Hoàn tất</button
				>
			</form>
		</div>
	</div>
</dialog>

<dialog bind:this={myModal4} id="my_modal_3" class="modal">
	<div class="modal-box no-scrollbar md:text-base text-sm">
		<form method="dialog">
			<button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-xl">✕</button>
		</form>
		<h3 class="font-bold md:text-2xl text-lg text-title mb-2">
			Chi Tiết Từ "{wordDetails.content}"
		</h3>
		<div class="h-[1px] w-full border border-gray-200" />
		<div class="flex my-4">
			<img
				src={wordDetails.picture}
				alt={wordDetails.picture}
				class="md:h-[50px] h-10 md:w-[50px] w-10 inline-block"
			/>
			<div class="inline-block ml-4">
				<div class="flex justify-center items-center">
					<p class="mr-2 text-green-600 md:text-xl text-base font-semibold">
						{wordDetails.content}
					</p>
					<span class="mr-2 text-blue-600">
						{wordDetails.phonetic ? '/' + wordDetails.phonetic + '/' : ''}
					</span>
					<Speaker key={wordDetails.content} />
				</div>
				<p>{wordDetails.mean}</p>
			</div>
		</div>
		<p class="font-bold">
			Loại từ:
			<span class="font-normal">
				{wordDetails?.Type ? wordDetails.Type.name : ''}
			</span>
		</p>
		<p class="font-bold">
			Cấp độ:
			<span class="font-normal">
				{wordDetails?.Level ? wordDetails.Level.name : ''}
			</span>
		</p>
		<p class="font-bold">Câu ví dụ:</p>
		<ol>
			{#if wordDetails?.examples?.length}
				{#each wordDetails.examples as example, i}
					{#if example !== ''}
						<li class="indent-2"><span class="font-semibold">{i + 1}</span>. {example}</li>
					{/if}
				{/each}
			{/if}
		</ol>
		<p class="font-bold">
			Thuộc chuyên ngành:
			<span class="font-normal">
				{wordDetails.Specialization ? wordDetails?.Specialization.name : ''}
			</span>
		</p>
		<p class="font-bold">Chủ đề:</p>
		<div class="p-2 flex flex-wrap rounded-md">
			{#if wordDetails.Topic}
				{#each wordDetails.Topic as topic}
					<div
						class="topic-item px-2 py-1 m-1 flex justify-between items-center w-fit rounded-full border-2 border-teal-500"
					>
						<img class="mr-1" src={imgTopics[topic.image]} alt={topic.name} />
						<span class="pr-1 text-sm">{topic.name}</span>
					</div>
				{/each}
			{/if}
		</div>
		<p class="font-bold">Các từ đồng nghĩa:</p>
		<ol>
			{#if wordDetails?.synonyms}
				{#each wordDetails?.synonyms as synonym, i}
					{#if synonym !== ''}
						<li class="indent-2"><span class="font-semibold">{i + 1}</span>. {synonym}</li>
					{/if}
				{/each}
			{/if}
		</ol>
		<p class="font-bold">Các từ trái nghĩa:</p>
		<ol>
			{#if wordDetails?.antonyms}
				{#each wordDetails?.antonyms as antonym, i}
					{#if antonym !== ''}
						<li class="indent-2"><span class="font-semibold">{i + 1}</span>. {antonym}</li>
					{/if}
				{/each}
			{/if}
		</ol>
		<p class="font-bold">Ghi chú:</p>
		<p>{wordDetails.note ? wordDetails.note : ''}</p>
	</div>
</dialog>
