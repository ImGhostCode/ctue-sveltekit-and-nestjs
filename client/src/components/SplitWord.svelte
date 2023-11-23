<script lang="ts">
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
	import Speaker from './Speaker.svelte';

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

	let myModal33: HTMLDialogElement;
	export let word: string;
	export let mean: string;
	export let onCorrect: () => void;
	export let onWrong: () => void;
	export let resetFlag: number;
	export let wordDetail: any;

	let isCheck: boolean = false;

	let userSplit: { index: number; ch: string }[] = [];

	function splitWord(word = '') {
		let splitArr: string[] = [];
		let failFlag = 1;

		while (failFlag) {
			if (failFlag >= 50) {
				break;
			}
			splitArr = word.split('').sort(() => Math.random() - 0.5);
			if (splitArr.join('') === word) {
				failFlag++;
			} else {
				failFlag = 0;
				break;
			}
		}
		return splitArr;
	}

	let originSplit: string[] = splitWord(word.toLocaleLowerCase());

	const handleSelectCharacter = (index: number): void => {
		const newUserSplit = [...userSplit, { index, ch: originSplit[index] }];
		userSplit = newUserSplit;
		if (newUserSplit.length === word.length) {
			isCheck = true;
		}
	};

	const handleReturnCharacter = (index: number): void => {
		if (isCheck) {
			isCheck = false;
		}
		const newUserSplit = userSplit.slice(0, index);
		userSplit = newUserSplit;
	};

	$: isSelected = (index: number) => {
		return userSplit.findIndex((item) => index === item.index) !== -1;
	};

	let isCorrect: boolean = false;

	$: {
		let isSub = true;
		if (isCheck) {
			const answer = userSplit.map((i) => i.ch).join('');
			if (answer.toLowerCase() === word.toLowerCase()) {
				isSub ? (isCorrect = true) : isCorrect;
				onCorrect();
			} else {
				isSub ? (isCorrect = false) : isCorrect;
				onWrong();
			}
		}
		isSub = false;
	}

	$: {
		let isSub = true;
		if (resetFlag !== -1) {
			isCheck = false;
			isCorrect = false;
			userSplit = [];
			originSplit = splitWord(word.toLowerCase());
		}

		isSub = false;
	}
</script>

<div class="grid text-center grid-flow-row grid-rows-3">
	<div class="flex flex-wrap justify-center items-center">
		{#each userSplit as { index, ch }, idx (index)}
			<button
				class="md:h-[42px] md:text-lg text-sm h-9 md:w-[42px] w-9 bg-base-200 rounded-lg shadow-md m-[6px] leading-10 cursor-pointer hover:bg-base-300"
				on:click={() => handleReturnCharacter(idx)}
			>
				{ch}
			</button>
		{/each}
	</div>

	<div class="flex justify-between items-start px-10 relative">
		<button
			type="button"
			class="tooltip tooltip-bottom"
			on:click={() => myModal33.showModal()}
			data-tip="Xem đáp án"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="w-6 h-6 fill-yellow-400 text-yellow-400"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
				/>
			</svg>
		</button>
		<dialog bind:this={myModal33} id="my_modal_33" class="modal text-left">
			<div class="modal-box md:p-6 py-4 p-2 md:text-base text-sm">
				<form method="dialog">
					<button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-xl">✕</button>
				</form>
				<h3 class="font-bold md:text-2xl text-lg text-orange-600 mb-2">
					Chi Tiết Từ "{wordDetail.content}"
				</h3>
				<div class="h-[1px] w-full border border-gray-200" />

				<div class="flex my-4">
					<img
						src={wordDetail.picture}
						alt={wordDetail.content}
						class="md:h-[50px] h-11 md:w-[50px] w-11 inline-block"
					/>
					<div class="inline-block ml-4">
						<div class="flex justify-center items-center">
							<p class="mr-2 text-green-600 md:text-xl text-base font-semibold">
								{wordDetail.content}
							</p>
							<span class="mr-2 text-blue-600 md:text-base text-sm">/{wordDetail.phonetic}/</span>
						</div>
						<p class=" md:text-base text-sm">{wordDetail.mean}</p>
					</div>
				</div>
				<p class="font-bold md:text-base text-sm">
					Loại từ: <span class="font-normal">{wordDetail.Type.name}</span>
				</p>
				<p class="font-bold md:text-base text-sm">
					Cấp độ: <span class="font-normal">{wordDetail.Level.name}</span>
				</p>
				<p class="font-bold md:text-base text-sm">Câu ví dụ:</p>
				{#if wordDetail?.examples?.length}
					{#if wordDetail.examples[0] !== ''}
						<ol>
							{#each wordDetail.examples as example, index (index)}
								<li class="ml-2 md:text-base text-sm">{example}</li>
							{/each}
						</ol>
					{:else}
						<span class="ml-2 md:text-base text-sm">Không có</span>
					{/if}
				{/if}
				<p class="font-bold md:text-base text-sm">
					Thuộc chuyên ngành: <span class="font-normal">{wordDetail.Specialization.name}</span>
				</p>
				<p class="font-bold md:text-base text-sm">Chủ đề:</p>
				<div class="p-2 flex flex-wrap rounded-md md:text-base text-sm">
					{#if wordDetail?.Topic?.length}
						{#each wordDetail.Topic as topic, index (index)}
							{#if topic.name !== 'Không xác định'}
								<div
									class="topic-item md:px-2 md:py-1 px-1 m-1 flex justify-between items-center w-fit rounded-full border-2 border-teal-500"
								>
									<img class="mr-1" src={`${imgTopics[topic.image]}`} alt={topic.name} />
									<span class="pr-1 text-sm">{topic.name}</span>
								</div>
							{/if}
						{/each}
					{:else}
						<span>Chưa xác định</span>
					{/if}
				</div>
				<p class="font-bold md:text-base text-sm">
					Các từ đồng nghĩa: <span class="font-normal">{wordDetail.synonyms?.join(',')}</span>
				</p>
				<p class="font-bold md:text-base text-sm">
					Các từ trái nghĩa: <span class="font-normal">{wordDetail.antonyms?.join(',')}</span>
				</p>
				<p class="font-bold md:text-base text-sm">
					Ghi chú:
					<span class="font-normal">
						{wordDetail.note ? wordDetail.note : 'Không có'}
					</span>
				</p>
			</div>
		</dialog>
		<p class=" font-semibold mb-2 text-slate-600">
			<span class="md:text-2xl text-lg">
				{mean}
			</span>
			{#if isCheck}
				<div class=" text-sm">
					{#if isCorrect}
						<p class="text-green-500">Chính xác</p>
					{:else}
						<p class="text-red-500">Sai rồi</p>
					{/if}
				</div>
			{/if}
		</p>
		<Speaker key={word} />
	</div>
	<div class="flex flex-wrap justify-center md:items-center items-start">
		{#each originSplit as ch, index (index)}
			{#if isSelected(index)}
				<button
					class="md:h-[42px] h-9 md:w-[42px] w-9 bg-base-200 rounded-lg shadow-md m-[6px] leading-10 text-lg hover:bg-base-300 cursor-not-allowed"
					disabled
				/>
			{:else}
				<button
					on:click={() => handleSelectCharacter(index)}
					class="md:h-[42px] md:text-lg text-sm h-9 md:w-[42px] w-9 bg-base-200 rounded-lg shadow-md m-[6px] leading-10 cursor-pointer hover:bg-base-300"
				>
					{ch}
				</button>
			{/if}
		{/each}
	</div>
</div>
