<script lang="ts">
	import type { ActionData, PageData } from './$types';
	import { onMount } from 'svelte';
	import wordMatch from '$lib/assets/icons/games/word-match.png';
	import Speaker from '../../../components/Speaker.svelte';
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
	import SplitWord from '../../../components/SplitWord.svelte';
	import { DELAY_ANSWER } from '../../../constants/practice';
	import RightIcon from '../../../components/RightIcon.svelte';
	import WrongIcon from '../../../components/WrongIcon.svelte';

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
	let wordPack: any[] = [];

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

		if (result.data) {
			myModal4.close();
			words = result.data;
			wordPack = result.data.sort((_: any) => Math.random() - 0.5).slice(0, selected.numSentence);
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

	let state: any = {
		current: 0,
		nRight: 0,
		nWrong: 0,
		resetFlag: -1
	};

	$: nQuestion = wordPack.length;

	let isDelay: boolean = false;
	let isDone: boolean = false;
	// const { current, nRight, nWrong, resetFlag } = state;
	const nRightConsecutive = { current: { top: 0, n: 0 } };

	const handleDone = () => {
		isDone = true;
	};

	const handleCorrect = () => {
		// playSoundAnswer(list[current].word, true, voice, volume, speed);
		isDelay = true;
		nRightConsecutive.current.n++;
		if (nRightConsecutive.current.n > nRightConsecutive.current.top) {
			nRightConsecutive.current.top = nRightConsecutive.current.n;
		}
		setTimeout(() => {
			if (state.current >= nQuestion) {
				handleDone();
			} else {
				isDelay = false;
				state = {
					current: state.current + 1,
					nRight: state.nRight + 1,
					resetFlag: state.current,
					nWrong: state.nWrong
				};
			}
		}, DELAY_ANSWER);
	};

	const handleWrong = () => {
		nRightConsecutive.current.n = 0;
		// onPlayAudio(incorrectAudio);
		state = { ...state, nWrong: state.nWrong + 1 };
	};

	const handleNext = () => {
		// onPlayAudio(incorrectAudio);
		if (state.current + 1 >= nQuestion) {
			state = { ...state, nWrong: state.nWrong + 1 };
			handleDone();
		} else {
			state = {
				...state,
				current: state.current + 1,
				nWrong: state.nWrong + 1,
				resetFlag: state.current
			};
		}
	};

	const handleReplay = () => {
		isDone = false;

		state = {
			current: 0,
			nRight: 0,
			nWrong: 0,
			resetFlag: -1
		};
		nRightConsecutive.current = { top: 0, n: 0 };
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

{#if words.length}
	<div class="flex flex-col justify-start items-center min-h-screen max-h-max">
		<div
			class="practice grid grid-flow-row max-w-screen-xl w-screen shadow-lg py-6 px-9 border mx-auto mt-10 grid-cols-1 rounded-lg"
		>
			<div class=" flex justify-start items-center">
				<img src={wordMatch} alt={wordMatch} class="h-[56px] w-[56px] mr-2" />
				<h1 class="text-2xl text-[#dd9210] font-bold">GHÉP TỪ</h1>
			</div>
			<!-- <div class="h-[1px] w-full border border-gray-200 my-4" /> -->

			{#if !isDone}
				<div class="flex justify-between items-center text-lg my-[14px]">
					<div class="">Câu <b class="text-sky-600">1</b> / <b>5</b></div>
					<div class="flex justify-center items-center font-thin">
						<b class="font-bold text-green-600">0&nbsp;</b>
						Đúng
						<RightIcon />

						-&nbsp;<b class="font-bold text-red-600">0&nbsp;</b>Sai
						<WrongIcon />
					</div>
				</div>
				{#if wordPack?.length}
					<SplitWord
						mean={wordPack[state.current].mean}
						word={wordPack[state.current].content}
						onCorrect={handleCorrect}
						onWrong={handleWrong}
						{topics}
						resetFlag={state.resetFlag}
					/>
				{:else}
					<h3 class="flex justify-center items-end notfound-title">
						Gói từ vựng hiện tại không khả dụng, vui lòng thử lại sau. Cảm ơn !
					</h3>
				{/if}

				{#if state.current < nQuestion}
					<button
						disabled={isDelay}
						class="btn bg-sky-500 max-w-xs mx-auto hover:bg-blue-600 text-white"
						on:click={handleNext}
						>{state.current < nQuestion - 1 ? 'Câu tiếp theo' : 'Nộp bài'}</button
					>
				{/if}
			{:else}
				<div class="">result</div>
			{/if}
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
