<script lang="ts">
	import correctWord from '$lib/assets/icons/games/correct-word.png';
	import type { ActionData, PageData } from './$types';
	import { onDestroy, onMount } from 'svelte';
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
	import { CONFUSING_LIST, DELAY_ANSWER } from '../../../constants/practice';
	import CorrectWordResult from '../../../components/CorrectWordResult.svelte';

	type Types = { id: number; name: string; isWord: boolean };
	type Levels = { id: number; name: string };
	type Specializations = { id: number; name: string };
	type Topics = { id: number; name: string; isWord: boolean; selected: boolean; image: string };

	let myModal4: HTMLDialogElement;
	let myModal5: HTMLDialogElement;

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

	let wordPack: any[] = [];
	let errMinNum = false;
	let state: any = {
		current: 0,
		nRight: 0,
		nWrong: 0,
		status: 0,
		answerList: [],
		answerIndex: -1
	};

	async function getWordPack(
		type: any,
		level: any,
		specialization: any,
		topics: any[],
		numSentence: any
	) {
		if (numSentence < 5) {
			errMinNum = true;
			return;
		}

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
			wordPack = randomWordQuestionPack(words, words.length);
			state = {
				current: 0,
				nRight: 0,
				nWrong: 0,
				// status 0 - reading question, 1 - show right result, 2 - show wrong result
				status: 0,
				answerList: wordPack?.length
					? shuffleAnswers(wordPack[0]?.word, wordPack[0]?.phonetic, wordPack[0]?.wrongList)
					: [],
				answerIndex: -1
			};

			console.log(wordPack);
			console.log(state);
		} else if (result.error) {
			const toast = toasts.add({
				title: 'Lỗi',
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
				title: 'Lỗi',
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

	const generateWrongWordList = (
		word: string = '',
		synonyms: [] = [],
		list: any[] = [],
		isCheck: boolean = false
	) => {
		const n: number = list.length;
		if (!n || n <= 3) {
			return [];
		}

		// check if the list is already a confusing list ?
		const filteredList = isCheck ? list : list.filter((i: any) => i.content !== word);

		if (synonyms && synonyms.length === 0) {
			return filteredList
				.map((i: any) => ({ word: i.content, phonetic: i.phonetic }))
				.sort(() => Math.random() - 0.5)
				.slice(0, 3);
		}

		let flag = true,
			count = 0; // prevent stack overflow because of infinite loop

		while (flag) {
			const resList = filteredList.sort(() => Math.random() - 0.5).slice(0, 3);
			let isOk = true;

			resList.forEach((i: any) => {
				if (synonyms.findIndex((w: any) => w === i.content) !== -1) isOk = false;
			});

			if (isOk) {
				flag = false;
				return resList.map((i: any) => ({ word: i.content, phonetic: i.phonetic }));
			}

			if (count > 100) {
				return [];
			}

			++count;
		}
	};

	const randomWordQuestionPack = (list: any[] = [], amount = 100) => {
		const n = amount < list.length ? amount : list.length;
		let result = [];

		// shuffle list and generate seed list
		const seedList = list.sort(() => Math.random() - 0.5).slice(0, n);
		let confusingList: AnalyserNode[] = list.slice(n + 1);
		const isEnough = confusingList.length > CONFUSING_LIST;

		for (let i = 0; i < n; ++i) {
			const { content, mean, phonetic, synonyms } = seedList[i];
			result.push({
				word: content,
				mean,
				phonetic,
				// If size of confusing list too small then use all item of list
				wrongList: isEnough
					? generateWrongWordList(content, synonyms, confusingList, true)
					: generateWrongWordList(content, synonyms, list, false)
			});
		}

		return result;
	};

	function shuffleAnswers(word: string, phonetic: string, wrongList: []) {
		let mergeList = [...wrongList, { word, phonetic }];
		return mergeList.sort(() => Math.random() - 0.5);
	}

	function addClassAnswerItem(
		status: number,
		answerIndex: number,
		index: number,
		word: string,
		answer: string
	) {
		if (status !== 0) {
			if (word === answer) return 'border-4 border-green-600';
			if (answerIndex === index) return 'border-4 border-red-600';
		}
		return '';
	}

	let isDone: boolean = false;
	let isSubscribe = true;

	onDestroy(() => {
		isSubscribe = false;
	});

	$: nQuestion = wordPack.length;

	let word = '',
		mean = '';

	$: if (wordPack.length) {
		word = wordPack[state.current].word;
		mean = wordPack[state.current].mean;
	}
	const nRightConsecutive = { current: { top: 0, n: 0 } };

	const onAnswer = (answer: string, answerIndex: number) => {
		if (answer === word) {
			//playSoundAnswer(word, true, voice, volume, speed);
			state = {
				...state,
				nRight: state.nRight + 1,
				status: 1,
				answerIndex
			};
			nRightConsecutive.current.n++;
		} else {
			// playSoundAnswer(word, false, voice, volume, speed);
			state = {
				...state,
				nWrong: state.nWrong + 1,
				status: 2,
				answerIndex
			};

			const { top, n } = nRightConsecutive.current;
			if (top < n) nRightConsecutive.current.top = n;
		}

		// wait to speak the word if not last question
		if (state.current !== wordPack.length - 1) {
			setTimeout(() => {
				const newAnswerList = shuffleAnswers(
					wordPack[state.current + 1]?.word,
					wordPack[state.current + 1]?.phonetic,
					wordPack[state.current + 1]?.wrongList
				);

				if (isSubscribe) {
					state = {
						...state,
						status: 0,
						answerIndex: -1,
						current: state.current + 1,
						answerList: newAnswerList
					};
				}
			}, DELAY_ANSWER);
		} else {
			setTimeout(() => {
				isSubscribe ? (isDone = true) : isDone;
			}, DELAY_ANSWER);
		}
	};

	const handleReplay = () => {
		isDone = false;
		state = {
			current: 0,
			nRight: 0,
			nWrong: 0,
			// status 0 - reading question, 1 - show right result, 2 - show wrong result
			status: 0,
			answerList: shuffleAnswers(wordPack[0]?.word, wordPack[0]?.phonetic, wordPack[0]?.wrongList),
			answerIndex: -1
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
						min="5"
						bind:value={selected.numSentence}
					/>
					{#if errMinNum}
						<p class="text-xs text-error mt-2 font-semibold">Vui lòng chọn ít nhất 5 câu</p>
					{/if}
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

{#if wordPack.length}
	<div class="flex flex-col justify-start items-center min-h-screen max-h-max">
		<div
			class="practice grid grid-flow-row max-w-screen-xl w-screen shadow-lg py-6 px-9 border mx-auto mt-10 grid-cols-1 rounded-lg"
		>
			<div class=" flex justify-start items-center">
				<img src={correctWord} alt={correctWord} class="h-[56px] w-[56px]" />
				<h1 class="text-2xl text-[#dd9210] font-bold">HÃY CHỌN TỪ ĐÚNG</h1>
			</div>
			<!-- <div class="h-[1px] w-full border border-gray-200 my-4" /> -->

			{#if !isDone}
				<div class="flex justify-between items-center text-lg my-[14px]">
					<!--  -->
					<div class="">
						Câu <b class="text-sky-600">{state.current + 1}</b>&nbsp;/&nbsp;<b class=""
							>{nQuestion}</b
						>
					</div>
					<div class="flex justify-center items-center font-thin">
						<b class="font-bold text-green-600">{state.nRight}&nbsp;</b>
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

						-&nbsp;<b class="font-bold text-red-600">{state.nWrong}&nbsp;</b>Sai
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

				<div class="grid text-center grid-flow-row">
					<div class="flex flex-col justify-center items-center row-span-4">
						<p class="text-2xl font-bold text-slate-500 mb-1">{mean}</p>
						<div class="" class:visible={state.status !== 0} class:hidden={state.status === 0}>
							{#if state.status === 1}
								<p class="text-green-500 text-sm">Chính xác</p>
							{:else}
								<p class="text-red-500 text-sm">Sai rồi</p>
							{/if}
						</div>
					</div>
					<div
						class="grid grid-cols-2 grid-rows-2 gap-10 w-full max-w-[50%] mx-auto my-0 py-6 row-span-6"
					>
						{#each state.answerList as answer, index (index)}
							<button
								type="button"
								disabled={state.status !== 0}
								class:disable={state.status !== 0}
								class:cursor-not-allowed={state.status !== 0}
								on:click={() => onAnswer(answer.word, index)}
								class={`${addClassAnswerItem(
									state.status,
									state.answerIndex,
									index,
									word,
									answer.word
								)}
								' bg-sky-400 rounded-md flex flex-col justify-center items-center p-[10px] hover:bg-sky-500 hover:cursor-pointer'`}
							>
								<p class="text-2xl font-semibold text-white">{answer.word}</p>
								<span class="text-lg text-blue-800">{answer.phonetic}</span>
							</button>
						{/each}
					</div>
				</div>
			{:else}
				<div class="invisible" />
				<CorrectWordResult
					onReplay={handleReplay}
					nRight={state.nRight}
					nWrong={state.nWrong}
					nRightConsecutive={nRightConsecutive.current.top}
				/>
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

	/* .right {
		border: solid 2px green;
	}
	.wrong {
		border: solid 2px red;
	} */
</style>
