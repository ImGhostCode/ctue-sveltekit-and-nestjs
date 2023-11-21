<script lang="ts">
	import { enhance } from '$app/forms';
	import { createEventDispatcher } from 'svelte';

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

	const phonetics: string[] = [
		"'",
		'ɪ',
		'iː',
		'ʊ',
		'uː',
		'e',
		'ə',
		'ɜː',
		'ɔː',
		'æ',
		'ʌ',
		'aː',
		'ɒ',
		'ɪə',
		'eɪ',
		'ʊə',
		'ɔɪ',
		'əʊ',
		'aɪ',
		'aʊ',
		'tʃ',
		'dʒ',
		'θ',
		'ð',
		'ʃ',
		'ŋ',
		'ʒ'
	];

	const dispatch = createEventDispatcher();

	function handleCancel() {
		dispatch('cancel');
	}

	type Types = { id: number; name: string; isWord: boolean };
	type Topics = {
		selected: boolean;
		id: number;
		name: string;
		isWord: boolean;
		image: string;
	};
	type Levels = { id: number; name: string };
	type Specializations = { id: number; name: string };

	export let types: Types[];
	export let topics: Topics[];
	export let levels: Levels[];
	export let specializations: Specializations[];

	let showTopics = false;
	let showPhonetic = false;
	let imgIlustrate: any = null;

	let phoneticValue = '';
	let isLoadingForm: boolean = false;

	$: topicIds = topics
		.filter((topic) => topic.selected)
		.map((topic) => topic.id)
		.toString();

	function toggleSelected(index: number) {
		topics[index].selected = !topics[index].selected;
	}

	function handleInputFocus() {
		showPhonetic = !showPhonetic;
	}

	const handleFileInput: svelte.JSX.EventHandler<Event, HTMLInputElement> = (e) => {
		if (e.currentTarget.files == null) return;
		imgIlustrate = e.currentTarget.files[0];
	};
</script>

<div
	class="shadow-lg px-5 py-5 rounded-lg my-10 bg-white md:mx-0 md:max-w-7xl max-w-sm w-full max-h-[70%] overflow-x-scroll"
>
	<div class=" flex justify-between items-center">
		<h1 class="md:text-3xl text-xl text-title font-bold">Thêm từ mới của bạn vào CTUE</h1>
		<button class="md:text-lg text-lg" on:click={handleCancel}>x</button>
	</div>
	<div class="h-[1px] w-full border border-gray-200 my-4" />
	<form
		method="post"
		use:enhance={() => {
			isLoadingForm = true;
			return async ({ update }) => {
				isLoadingForm = false;
				update();
			};
		}}
		enctype="multipart/form-data"
		action="?/addWord"
		class="grid md:grid-cols-3 grid-cols-1 md:test-base text-sm"
	>
		<div class="form-control w-full md:max-w-sm mb-3">
			<label class="label" for="new-word">
				<span class="label-text">Từ mới (*)</span>
			</label>
			<input
				type="text"
				placeholder="..."
				class="input input-bordered md:input-md input-sm w-full md:max-w-sm focus:border-green-600 focus:outline-none"
				id="new-word"
				name="content"
				required
			/>
		</div>
		<div class="form-control w-full md:max-w-sm mb-3">
			<label class="label" for="mean">
				<span class="label-text">Nghĩa của từ (*)</span>
			</label>
			<input
				type="text"
				placeholder="..."
				class="input input-bordered md:input-md input-sm w-full md:max-w-sm focus:border-green-600 focus:outline-none"
				id="mean"
				name="mean"
				required
			/>
		</div>
		<div class="form-control w-full md:max-w-sm mb-3">
			<label class="label" for="phonetic">
				<span class="label-text">Phiên âm (*)</span>
			</label>
			<input
				type="text"
				placeholder="..."
				class="input-phonetic input input-bordered md:input-md input-sm w-full md:max-w-sm focus:border-green-600 focus:outline-none"
				id="phonetic"
				name="phonetic"
				on:focus={handleInputFocus}
				bind:value={phoneticValue}
				required
			/>
		</div>
		<div
			class="form-control md:col-span-3 col-span-1 rounded-md md:p-3 p-2 bg-white shadow-lg mb-4 grid md:grid-cols-10 grid-cols-6 gap-2 border"
			class:hidden={!showPhonetic}
		>
			{#each phonetics as phonetic, index (index)}
				<button
					type="button"
					on:click={() => (phoneticValue += phonetic)}
					class="p-2 w-full text-center text-base bg-base-200 hover:bg-green-600 hover:text-white rounded-md cursor-pointer transition-all"
					>{phonetic}</button
				>
			{/each}

			<button
				type="button"
				on:click={handleInputFocus}
				class=" btn-outline btn-error text-base w-full text-center border rounded-md cursor-pointer transition-all"
				>Đóng</button
			>
		</div>
		<div class="mb-3 form-control">
			<label for="types" class="block mb-2 text-sm">Loại từ (*)</label>
			<select
				id="types"
				name="typeId"
				class="select select-bordered md:select-md select-sm border bg-gray-50 border-gray-300 focus:border-green-600 focus-visible:border-green-600 focus-within:outline-none text-sm rounded-lg block w-full md:max-w-sm"
			>
				{#if types}
					{#each types as type (type.id)}
						{#if type.name === 'Chưa xác định'}
							<option
								class="block bg-base-200 md:px-4 px-2 md:py-2 py-1 md:text-base text-sm"
								selected
								value={type.id}
							>
								{type.name}
							</option>
						{:else}
							<option
								class="block bg-base-200 md:px-4 px-2 md:py-2 py-1 md:text-base text-sm"
								value={type.id}
							>
								{type.name}
							</option>
						{/if}
					{/each}
				{:else}
					<option
						class="block bg-base-200 md:px-4 px-2 md:py-2 py-1 md:text-base text-sm"
						value="Loading">Đang tải</option
					>
				{/if}
			</select>
		</div>
		<div class="mb-3">
			<label for="level" class="block mb-2 text-sm">Bậc của từ (*)</label>
			<select
				id="level"
				name="levelId"
				class="select select-bordered md:select-md select-sm border bg-gray-50 border-gray-300 focus:border-green-600 focus-visible:border-green-600 focus-within:outline-none text-sm rounded-lg block w-full md:max-w-sm"
			>
				{#if levels}
					{#each levels as level (level.id)}
						{#if level.name === 'Chưa xác định'}
							<option
								class="block bg-base-200 md:px-4 px-2 md:py-2 py-1 md:text-base text-sm"
								selected
								value={level.id}
							>
								{level.name}
							</option>
						{:else}
							<option
								class="block bg-base-200 md:px-4 px-2 md:py-2 py-1 md:text-base text-sm"
								value={level.id}
							>
								{level.name}
							</option>
						{/if}
					{/each}
				{:else}
					<option
						class="block bg-base-200 md:px-4 px-2 md:py-2 py-1 md:text-base text-sm"
						value="Loading">Đang tải</option
					>
				{/if}
			</select>
		</div>
		<div class="mb-3">
			<label for="specialization" class="block mb-2 text-sm">Thuộc chuyên ngành (*)</label>
			<select
				id="specialization"
				name="specializationId"
				class=" select select-bordered md:select-md select-sm border bg-gray-50 border-gray-300 focus:border-green-600 focus-visible:border-green-600 focus-within:outline-none text-sm rounded-lg block w-full md:max-w-sm"
			>
				{#if specializations}
					{#each specializations as specialization (specialization.id)}
						{#if specialization.name === 'Chưa xác định'}
							<option
								class="block bg-base-200 md:px-4 px-2 md:py-2 py-1 md:text-base text-sm"
								selected
								value={specialization.id}>{specialization.name}</option
							>
						{:else}
							<option
								class="block bg-base-200 md:px-4 px-2 md:py-2 py-1 md:text-base text-sm"
								value={specialization.id}>{specialization.name}</option
							>
						{/if}
					{/each}
				{:else}
					<option
						class="block bg-base-200 md:px-4 px-2 md:py-2 py-1 md:text-base text-sm"
						value="Loading">Đang tải</option
					>
				{/if}
			</select>
		</div>
		<div class="form-control w-full md:max-w-sm mb-3">
			<label class="label" for="examples">
				<span class="label-text">Câu ví dụ</span>
			</label>
			<textarea
				rows="10"
				class="input input-bordered w-full md:max-w-sm focus:border-green-600 focus:outline-none p-4 h-[90px]"
				id="examples"
				name="examples"
			/>
		</div>
		<div class="form-control w-full md:max-w-sm mb-3">
			<label class="label" for="synonyms">
				<span class="label-text">Các từ đồng nghĩa</span>
			</label>
			<textarea
				rows="10"
				class="input input-bordered w-full md:max-w-sm focus:border-green-600 focus:outline-none p-4 h-[90px]"
				id="synonyms"
				name="synonyms"
			/>
		</div>
		<div class="form-control w-full md:max-w-sm mb-3">
			<label class="label" for="antonyms">
				<span class="label-text">Các từ trái nghĩa</span>
			</label>
			<textarea
				rows="10"
				class="input input-bordered w-full md:max-w-sm focus:border-green-600 focus:outline-none p-4 h-[90px]"
				id="antonyms"
				name="antonyms"
			/>
		</div>
		<div class="form-control w-full md:max-w-sm mb-3">
			<label class="label" for="note">
				<span class="label-text">Ghi chú</span>
			</label>
			<textarea
				rows="10"
				class="input input-bordered w-full md:max-w-sm focus:border-green-600 focus:outline-none p-4 h-[90px]"
				id="note"
				name="note"
			/>
		</div>
		<div class="form-control w-full max-w-sm mb-3">
			<div class="md:h-[36px] h-5" />

			{#if imgIlustrate instanceof File}
				<div class="h-16 input input-bordered flex justify-between items-center">
					<img
						class="md:h-14 h-10 md:w-14 w-10"
						src={URL.createObjectURL(imgIlustrate)}
						alt="Preview"
					/>
					<span class="truncate md:text-base text-sm">{imgIlustrate.name}</span>
					<button type="button" on:click={() => (imgIlustrate = null)}
						><svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="w-6 h-6"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
						</svg>
					</button>
				</div>
			{/if}

			<label class="" class:hidden={imgIlustrate instanceof File} for="img-ilustrate">
				<div
					class="flex justify-center items-center w-full max-w-sm input input-bordered hover:bg-gray-100 hover:cursor-pointer"
				>
					<div class="flex">
						<span class="label-text mr-3">Thêm ảnh minh hoạ</span>
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
								d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
							/>
						</svg>
					</div>
					<input
						bind:value={imgIlustrate}
						on:change={handleFileInput}
						type="file"
						accept="image/png, image/jpeg"
						class="hidden"
						name="ilustrate"
						id="img-ilustrate"
					/>
				</div>
			</label>
		</div>

		<div class="form-control w-full max-w-sm mb-3">
			<div class="md:h-[36px] h-4" />
			<button
				type="button"
				on:click={() => (showTopics = !showTopics)}
				class="input input-bordered md:input-md input-sm w-full max-w-sm flex justify-center items-center border bg-gray-50 border-gray-300 focus:border-green-600 focus-visible:border-green-600 focus-within:outline-none"
				>Thêm chủ đề <span class="ml-2">
					{#if showTopics}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="w-6 h-6"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
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
				</span></button
			>
		</div>
		{#if showTopics}
			<div
				class="topics px-3 py-6 bg-base-200 flex flex-wrap rounded-md md:col-span-3 col-span-1 shadow-sm"
			>
				{#each topics as topic, index (topic.name)}
					<button
						type="button"
						class="topic-item md:px-2 px-1 md:py-1 md:m-2 m-1 flex justify-between items-center w-fit rounded-full border-2 border-green-600 cursor-pointer"
						class:bg-green-500={topic.selected}
						class:text-white={topic.selected}
						on:click={() => toggleSelected(index)}
					>
						<img class="mr-1" src={imgTopics[topic.image]} alt={topic.name} />
						<span class="pr-1 text-sm">{topic.name}</span>
					</button>
				{/each}
			</div>
			<input type="text" id="topics" name="topics" bind:value={topics} class="hidden" />
		{/if}
		<div class="h-[1px] w-full border border-gray-200 mt-8 md:col-span-3 col-span-1" />

		<div class="mt-4 md:col-span-3 col-span-1 text-right">
			{#if isLoadingForm}
				<button
					class="btn mr-2 btn-info md:btn-md btn-sm"
					disabled={isLoadingForm}
					class:cursor-not-allowed={isLoadingForm}
					>&nbsp;
					<span class="loading loading-dots loading-xs" />
					&nbsp;
				</button>
			{:else}
				<button
					type="submit"
					disabled={isLoadingForm}
					class:cursor-not-allowed={isLoadingForm}
					class=" btn btn-accent text-white mr-2 md:btn-md btn-sm"
				>
					Hoàn tất
				</button>
			{/if}
			<button type="reset" class="btn btn-outline md:btn-md btn-sm btn-error">Loại bỏ</button>
		</div>
		<input type="text" class="hidden" name="topicId" id="topics" bind:value={topicIds} />
	</form>
</div>
