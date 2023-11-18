<script lang="ts">
	import correctWord from '$lib/assets/icons/games/correct-word.png';
	import wordMatch from '$lib/assets/icons/games/word-match.png';
	import Speaker from '../../../components/Speaker.svelte';
	import type { ActionData, PageData } from './$types';
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
	import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';
	import { toasts, ToastContainer, FlatToast, BootstrapToast } from 'svelte-toasts';

	type Types = { id: number; name: string; isWord: boolean };
	type Levels = { id: number; name: string };
	type Specializations = { id: number; name: string };
	type Topics = { id: number; name: string; isWord: boolean; selected: boolean; image: string };

	let myModal4: HTMLDialogElement;

	export let data: PageData;
	export let form: ActionData;

	onMount(() => {
		myModal4.showModal();
	});

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
		numSentence: number | null;
	} = {
		topics: [],
		type: null,
		specialization: null,
		level: null,
		numSentence: 10
	};

	let words: any[] = [];

	$: {
		if (data.topicsWord) topics = data.topicsWord;
		if (data.typesWord) types = Array(data.typesWord);
		if (data.specializations) specializations = Array(data.specializations);
		if (data.levels) levels = Array(data.levels);
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

	async function getWordPack(
		type: any,
		level: any,
		specialization: any,
		topics: any[],
		numSentence: any
	) {
		const topicsString = topics.map((topic) => `topic=${encodeURIComponent(topic)}`).join('&&');
		const response = await fetch(
			`/practice/correct-word?numSentence=${numSentence}&&specialization=${specialization}&&level=${level}&&type=${type}&&${topicsString}`,
			{
				method: 'GET'
			}
		);
		const result = await response.json();
		console.log(result);

		if (result.data) {
			myModal4.close();
			words = result.data;
		} else if (result.error) {
			const toast = toasts.add({
				title: 'Error',
				description: result.error,
				duration: 1500, // Set the duration to 0 to keep it open until manually closed
				placement: 'top-right',
				type: 'error',
				theme: 'dark',
				showProgress: true,
				// type: 'error',
				// theme: 'dark',
				onClick: () => {},
				onRemove: () => {
					goto('/login');
				}
				//component: BootstrapToast // You can customize the toast component here
			});
		} else {
			const toast = toasts.add({
				title: 'Error',
				description: result.message,
				duration: 1500, // Set the duration to 0 to keep it open until manually closed
				placement: 'top-right',
				type: 'error',
				theme: 'dark',
				showProgress: true,
				// type: 'error',
				// theme: 'dark',
				onClick: () => {},
				onRemove: () => {}
				//component: BootstrapToast // You can customize the toast component here
			});

			return;
		}
	}

	let myModal33: HTMLDialogElement;

	let word: string = 'Test';
	let isCheck: boolean = false;

	const userSplitId = 'userSplitId';

	let userSplit: { index: number; ch: string }[] = [];

	function splitWord(word = '') {
		let splitArr: string[] = [];
		let failFlag = 1;

		while (failFlag) {
			// Prevent infinite loop
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

	const originSplit: string[] = splitWord(word.toLocaleLowerCase());

	const handleSelectCharacter = (index: number): void => {
		// console.log('click');

		const newUserSplit = [...userSplit, { index, ch: originSplit[index] }];
		userSplit = newUserSplit;
		// console.log(newUserSplit);

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

	const correctClass = (item: { index: number; ch: string }, key: number) => {
		return item.ch === word.toLowerCase()[key] ? 'right' : 'wrong';
	};
</script>

<dialog bind:this={myModal4} id="" class="modal">
	<div class="modal-box max-w-3xl">
		<form>
			<h3 class="font-bold text-xl text-title mb-2">Lựa chọn gói từ vựng</h3>
			<div class="h-[1px] w-full border border-gray-200" />

			<div class="grid grid-cols-2 gap-2 mt-4">
				<div class="mb-3 form-control">
					<label for="types" class="block mb-2 text-sm">Loại từ </label>
					<select
						id="types"
						name="typeId"
						bind:value={selected.type}
						class="select select-bordered text-[16px] h-12 border bg-gray-50 border-gray-300 focus:border-green-600 focus-visible:border-green-600 focus-within:outline-none text-sm rounded-lg block w-full max-w-sm p-2.5"
					>
						<option class="block bg-base-200 text-[16px] px-4 py-2" value={null}> Tất cả </option>
						{#each types as type}
							<option class="block bg-base-200 text-[16px] px-4 py-2" value={type.id}>
								{type.name}
							</option>
						{/each}
					</select>
				</div>

				<div class="mb-3">
					<label for="level" class="block mb-2 text-sm">Bặc của từ </label>
					<select
						id="level"
						name="levelId"
						bind:value={selected.level}
						class="select select-bordered text-[16px] h-12 border bg-gray-50 border-gray-300 focus:border-green-600 focus-visible:border-green-600 focus-within:outline-none text-sm rounded-lg block w-full max-w-sm p-2.5"
					>
						<option class="block bg-base-200 text-[16px] px-4 py-2" value={null}> Tất cả </option>
						{#each levels as level}
							<option class="block bg-base-200 text-[16px] px-4 py-2" value={level.id}>
								{level.name}
							</option>
						{/each}
					</select>
				</div>

				<div class="mb-3">
					<label for="specialization" class="block mb-2 text-sm">Thuộc chuyên ngành </label>
					<select
						id="specialization"
						name="specializationId"
						bind:value={selected.specialization}
						class=" select select-bordered text-[16px] h-12 border bg-gray-50 border-gray-300 focus:border-green-600 focus-visible:border-green-600 focus-within:outline-none text-sm rounded-lg block w-full max-w-sm p-2.5"
					>
						<option class="block bg-base-200 text-[16px] px-4 py-2" value={null}> Tất cả </option>
						{#each specializations as specialization}
							<option class="block bg-base-200 text-[16px] px-4 py-2" value={specialization.id}>
								{specialization.name}
							</option>
						{/each}
					</select>
				</div>

				<div class="form-control w-full max-w-sm mb-3">
					<div class="h-[28px]" />
					<button
						type="button"
						on:click={() => (showTopics = !showTopics)}
						class="input input-bordered w-full max-w-sm flex justify-center items-center border bg-gray-50 border-gray-300 focus:border-green-600 focus-visible:border-green-600 focus-within:outline-none"
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
						</span></button
					>
				</div>
				{#if showTopics}
					<div class="topics px-3 py-6 bg-base-200 flex flex-wrap rounded-md col-span-2">
						{#each topics as topic, index (topic.name)}
							<button
								type="button"
								class="topic-item px-2 py-1 m-2 flex justify-between items-center w-fit rounded-full border-2 border-green-600 cursor-pointer"
								class:bg-green-500={topic.selected}
								class:text-white={topic.selected}
								on:click={() => toggleSelected(index)}
							>
								<img class="mr-1" src={imgTopics[topic.image]} alt={topic.name} />
								<span class="pr-1 text-sm">{topic.name}</span>
							</button>
						{/each}
					</div>
				{/if}

				<div class="form-control mb-3 col-span-1">
					<label class="label" for="number-sentence">
						<span class="label-text">Số câu</span>
					</label>
					<input
						type="number"
						class="input input-bordered focus:border-green-600 focus:outline-none"
						id="number-sentence"
						name="numberOfSentence"
						bind:value={selected.numSentence}
					/>
				</div>
			</div>

			<div class="h-[1px] w-full border border-gray-200" />

			<div class="modal-action">
				<form method="dialog">
					<!-- if there is a button, it will close the modal -->
					<a href="/practice"
						><button class="btn"
							><svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class="w-6 h-6 inline-block"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
								/>
							</svg> Quay lại</button
						></a
					>
				</form>
				<button
					class="btn btn-success ml-2 text-white"
					type="button"
					on:click={async () =>
						await getWordPack(
							selected.type,
							selected.level,
							selected.specialization,
							selected.topics,
							selected.numSentence
						)}
					><svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="w-6 h-6 inline-block"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
						/>
					</svg>
					OK</button
				>
			</div>
		</form>
	</div>
</dialog>

{#if !myModal4}
	<div class="flex flex-col justify-start items-center min-h-screen max-h-max">
		<div
			class="practice grid grid-flow-row max-w-screen-xl w-screen shadow-lg py-6 px-9 border mx-auto mt-10 grid-cols-1 rounded-lg"
		>
			<div class=" flex justify-start items-center">
				<img src={wordMatch} alt={wordMatch} class="h-[56px] w-[56px] mr-2" />
				<h1 class="text-2xl text-[#dd9210] font-bold">GHÉP TỪ</h1>
			</div>
			<!-- <div class="h-[1px] w-full border border-gray-200 my-4" /> -->

			<div class="flex justify-between items-center text-lg my-[14px]">
				<div class="">Câu <b class="text-sky-600">1</b> / <b>5</b></div>
				<div class="flex justify-center items-center font-thin">
					<b class="font-bold text-green-600">0&nbsp;</b>
					Đúng
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="currentColor"
						class="w-6 h-6 mx-1 fill-[#29a322]"
					>
						<path
							fill-rule="evenodd"
							d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
							clip-rule="evenodd"
						/>
					</svg>

					-&nbsp;<b class="font-bold text-red-600">0&nbsp;</b>Sai
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="currentColor"
						class="w-6 h-6 mx-1 fill-[#d6493c]"
					>
						<path
							fill-rule="evenodd"
							d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
							clip-rule="evenodd"
						/>
					</svg>
				</div>
			</div>

			<div class="grid text-center grid-flow-row grid-rows-3">
				<!-- Selected -->
				<div class="flex justify-center items-center">
					{#each userSplit as { index, ch }, idx (index)}
						<button
							class="h-[42px] w-[42px] bg-base-200 rounded-lg shadow-md m-[6px] leading-10 text-lg cursor-pointer hover:bg-base-300"
							on:click={() => handleReturnCharacter(idx)}
						>
							{ch}
						</button>
					{/each}
				</div>

				<div class="flex justify-between items-start px-10 relative">
					<span class="absolute left-0 rotate-180 cursor-pointer"
						><svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							class="w-6 h-6 fill-[#04a359] hover:fill-[rgb(0,129,69)]"
						>
							<path
								d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z"
							/>
						</svg>
					</span>
					<span class="absolute right-0 cursor-pointer"
						><svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							class="w-6 h-6 fill-[#04a359] hover:fill-[rgb(0,129,69)]"
						>
							<path
								d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z"
							/>
						</svg>
					</span>

					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<div
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
					</div>

					<!-- Answer -->

					<dialog bind:this={myModal33} id="my_modal_33" class="modal text-left">
						<div class="modal-box">
							<form method="dialog">
								<button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-xl"
									>✕</button
								>
							</form>
							<h3 class="font-bold text-2xl text-orange-600 mb-2">Chi Tiết Từ "Add"</h3>
							<div class="h-[1px] w-full border border-gray-200" />

							<div class="flex my-4">
								<img src={tree} alt={tree} class="h-[50px] w-[50px] inline-block" />
								<div class="inline-block ml-4">
									<div class="flex justify-center items-center">
										<p class="mr-2 text-green-600 text-xl font-semibold">add</p>
										<span class="mr-2 text-blue-600">/æd/</span>
									</div>
									<p>Thêm</p>
								</div>
							</div>
							<p class="font-bold">Cấp độ: <span class="font-normal">A2</span></p>
							<p class="font-bold">Câu ví dụ:</p>
							<ol>
								<li>1. add some words</li>
								<li>1. add some words</li>
							</ol>
							<p class="font-bold">
								Thuộc chuyên ngành: <span class="font-normal"
									>Công nghệ thực phẩm (Food Technology)</span
								>
							</p>
							<p class="font-bold">Chủ đề:</p>
							<div class="p-2 flex flex-wrap rounded-md">
								{#each topics as topic, index (topic.name)}
									<button
										type="button"
										class="topic-item px-2 py-1 m-2 flex justify-between items-center w-fit rounded-full border-2 border-green-600 cursor-pointer"
										class:bg-green-500={topic.selected}
										class:text-white={topic.selected}
										on:click={() => toggleSelected(index)}
									>
										<img class="mr-1" src={imgTopics[topic.image]} alt={topic.name} />
										<span class="pr-1 text-sm">{topic.name}</span>
									</button>
								{/each}
							</div>
							<p class="font-bold">
								Các từ đồng nghĩa: <span class="font-normal">plus</span>
							</p>
							<p class="font-bold">Ghi chú:</p>
							<p>dfs</p>
						</div>
					</dialog>

					<div class="">
						<p class="text-2xl font-semibold mb-2 text-slate-600">Test</p>
						<p class="text-red-500 text-sm">Sai rồi</p>
					</div>
					<Speaker content={'add'} />
				</div>

				<!-- Select to answer -->
				<div class="flex justify-center items-center">
					{#each originSplit as ch, index (index)}
						{#if isSelected(index)}
							<button
								class="h-[42px] w-[42px] bg-base-200 rounded-lg shadow-md m-[6px] leading-10 text-lg hover:bg-base-300 cursor-not-allowed"
								disabled
							/>
						{:else}
							<button
								on:click={() => handleSelectCharacter(index)}
								class="h-[42px] w-[42px] bg-base-200 rounded-lg shadow-md m-[6px] leading-10 text-lg cursor-pointer hover:bg-base-300"
							>
								{ch}
							</button>
						{/if}
					{/each}
				</div>
			</div>
		</div>
	</div>
{:else}
	<div class="h-screen w-full" />
{/if}

<ToastContainer placement="bottom-right" let:data>
	<FlatToast {data} />
	<!-- Provider template for your toasts -->
</ToastContainer>

<style>
	.practice {
		grid-template-rows: 1fr 1fr 11fr;
	}
</style>
