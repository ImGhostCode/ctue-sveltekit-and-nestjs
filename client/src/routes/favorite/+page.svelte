<script lang="ts">
	import Speaker from '../../components/Speaker.svelte';
	import Pagination from '../../components/Pagination.svelte';
	import { onMount } from 'svelte';

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
	import FavouriteIcon from '../../components/FavouriteIcon.svelte';

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

	let sort: string | null = null;
	let key: string = '';
	let currentPage: number = 1;
	let totalPages: number = 1;
	let favorites: any = [];
	let wordDetails: any = {};

	async function getAllFavoriteByUser(key: string, page: number, sort: string | null) {
		const response = await fetch(`/favorite?page=${page}&&key=${key}&&sort=${sort}`, {
			method: 'GET'
		});
		const result = await response.json();
		totalPages = result.totalPages;
		favorites = result.data.Word;
	}

	onMount(async () => {
		await getAllFavoriteByUser(key, currentPage, sort);
	});

	$: getAllFavoriteByUser(key, currentPage, sort);

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
			await getAllFavoriteByUser(key, currentPage, sort);
		}
	}

	let myModal4: HTMLDialogElement;
</script>

<div class="max-w-screen-xl w-screen mx-auto text-left px-2 py-8 min-h-screen max-h-max">
	<div class="items-center mb-4">
		<h1 class="header-page">Từ điển của bạn</h1>
	</div>
	<div class="h-[1px] w-full border border-gray-200" />

	<div class="flex justify-between items-center mb-4">
		<input
			bind:value={key}
			class="shadow appearance-none border rounded w-[450px] py-2 px-3 text-gray-700 focus:border-green-500 leading-tight focus:outline-none focus:shadow-outline"
			id="find-word"
			type="text"
			placeholder="Nhập từ..."
		/>

		<div class="dropdown">
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label tabindex="0" class="btn btn-ghost m-1">
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
			</label>
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<ul tabindex="0" class=" dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
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
	<!-- fill-red-500 text-red-500 -->
	<div class="border rounded-md p-4">
		{#each favorites as favorite}
			<div class="flex border-b-2 hover:border-green-600 mb-4">
				<button
					class="flex hover:cursor-pointer grow"
					on:click={() => {
						myModal4.showModal();
						wordDetails = favorite;
					}}
				>
					<img
						src={favorite.picture}
						alt={favorite.picture}
						class="h-[50px] w-[50px] inline-block"
					/>
					<div class="inline-block ml-4">
						<div class="flex justify-center items-center">
							<p class="mr-2 text-green-600 text-xl font-semibold">{favorite.content}</p>
							<span class="mr-2 text-blue-600">{favorite.phonetic ? favorite.phonetic : ''}</span>
						</div>
						<p class="text-left">{favorite.mean}</p>
					</div>
				</button>
				<div class="grow-0">
					<Speaker key={favorite.content} />
					<FavouriteIcon
						favorite={[{ id: 1 }, { id: 2 }]}
						wordId={1}
						on:clickBtn={async () => await handleToggleFavorite(favorite.id)}
					/>
				</div>
			</div>
		{/each}
	</div>
	<Pagination {currentPage} {totalPages} on:next={handleNextPage} on:pre={handlePrePAge} />
	<dialog bind:this={myModal4} id="my_modal_3" class="modal">
		<div class="modal-box no-scrollbar">
			<form method="dialog">
				<button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-xl">✕</button>
			</form>
			<h3 class="font-bold text-2xl text-title mb-2">Chi Tiết Từ "{wordDetails.content}"</h3>
			<div class="h-[1px] w-full border border-gray-200" />
			<div class="flex my-4">
				<img
					src={wordDetails.picture}
					alt={wordDetails.picture}
					class="h-[50px] w-[50px] inline-block"
				/>
				<div class="inline-block ml-4">
					<div class="flex justify-center items-center">
						<p class="mr-2 text-green-600 text-xl font-semibold">{wordDetails.content}</p>
						<span class="mr-2 text-blue-600">
							{wordDetails.phonetic ? wordDetails.phonetic : ''}
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
				{#if wordDetails?.examples}
					{#each wordDetails.examples as example, i}
						<li class="indent-2"><span class="font-semibold">{i + 1}</span>. {example}</li>
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
							class="topic-item px-2 py-1 m-1 flex justify-between items-center w-fit rounded-full border border-teal-500"
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
						<li class="indent-2"><span class="font-semibold">{i + 1}</span>. {synonym}</li>
					{/each}
				{/if}
			</ol>
			<p class="font-bold">Các từ trái nghĩa:</p>
			<ol>
				{#if wordDetails?.antonyms}
					{#each wordDetails?.antonyms as antonym, i}
						<li class="indent-2"><span class="font-semibold">{i + 1}</span>. {antonym}</li>
					{/each}
				{/if}
			</ol>
			<p class="font-bold">Ghi chú:</p>
			<p>{wordDetails.note ? wordDetails.note : ''}</p>
		</div>
	</dialog>
</div>
