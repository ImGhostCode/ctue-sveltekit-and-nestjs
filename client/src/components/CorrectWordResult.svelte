<script lang="ts">
	import { onMount } from 'svelte';
	import { CORRECT_GAME_PER_QUES, USER_COIN } from '../constants/practice';
	import { goto } from '$app/navigation';
	import cupIcon from '$lib/assets/icons/others/cup.png';
	import RightIcon from './RightIcon.svelte';
	import WrongIcon from './WrongIcon.svelte';
	import { HandlerSpeaker } from '$lib/store';
	import winAudioSrc from '$lib/assets/audios/win.mp3';

	export let onReplay: () => void;
	export let nRight: number;
	export let nWrong: number;
	export let nRightConsecutive: number;
	export let words: any[];
	export let data: any;
	export let selected: {
		topics: number[];
		type: number | null;
		level: number | null;
		specialization: number | null;
		numSentence: number | null;
	};

	function convertQuesToCoin(nRight: number = 0, nWrong: number = 0) {
		const newCoin = nRight * CORRECT_GAME_PER_QUES - nWrong * CORRECT_GAME_PER_QUES;

		if (newCoin < 0) {
			return 0;
		}
		if (newCoin > USER_COIN) {
			return USER_COIN;
		}
		return newCoin;
	}

	onMount(() => {
		HandlerSpeaker.onPlayAudio(winAudioSrc);
	});

	onMount(() => {
		if (!data.token) return;

		(async function () {
			const response = await fetch(`/practice/correct-word`, {
				method: 'POST',
				body: JSON.stringify({
					typeId: selected.type,
					levelId: selected.level,
					specializationId: selected.specialization,
					nRight,
					nWrong,
					nRightConsecutive,
					numOfSentence: selected.numSentence,
					words
				})
			});

			const result = await response.json();

			if (result.data) {
			}
		})();
	});

	const onGoBack = () => {
		goto('/');
	};
</script>

<div class="flex flex-col items-center m-auto text-lg text-slate-600">
	<div class="h-20 w-20 mb-6">
		<img class="h-full w-full" src={cupIcon} alt="cup icon" />
	</div>

	<div class="flex flex-row">
		<RightIcon />
		<b>{nRight}</b>&nbsp;Đúng &nbsp;-&nbsp;
		<RightIcon />
		<b>{nRightConsecutive}</b>&nbsp;Đúng liên tiếp &nbsp;-&nbsp;
		<WrongIcon />
		<b>{nWrong}</b>&nbsp;Sai
	</div>
	<!-- '#C3AD1A' -->
	{#if data.token}
		<div class="mt-2 flex">
			<span class="inline-block mr-2">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-6 h-6 fill-green-600 text-green-600"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
					/>
				</svg>
			</span>
			Số coin kiếm được:&nbsp;<b class="text-xl">{convertQuesToCoin(nRight, nWrong)}</b>
		</div>
	{/if}

	<div class="mt-5">
		<button class="btn btn-outline mr-3" on:click={onGoBack}> Quay về </button>
		<button class="btn btn-info hover:bg-sky-500 text-white" on:click={onReplay}> Chơi lại </button>
	</div>
</div>
