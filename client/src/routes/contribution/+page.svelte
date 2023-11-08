<script lang="ts">
	import { onMount } from 'svelte';
	import FormContributionSentence from '../../components/FormContributionSentence.svelte';
	import FormContributionWord from '../../components/FormContributionWord.svelte';
	import type { ActionData } from './$types';
	import { goto } from '$app/navigation';

	export let form: ActionData;
	/** @type {import('./$types').PageData} */
	export let data: any;

	let sentenceScreen = true;

	onMount(() => {
		if (!data?.user) {
			goto('/login', { replaceState: true }); // Redirect to the login page if not authenticated
			return;
		}
	});
</script>

<div class="max-w-screen-xl w-screen mx-auto text-left px-2 py-8">
	<div class="">
		<button
			on:click={() => (sentenceScreen = true)}
			class:bg-green-600={sentenceScreen}
			class:text-white={sentenceScreen}
			class:text-gray-500={sentenceScreen === false}
			class="uppercase outline-none border-none px-5 py-2 rounded-tr-md rounded-tl-md font-semibold"
			>Thêm từ</button
		>
		<button
			class:bg-green-600={sentenceScreen === false}
			class:text-white={sentenceScreen === false}
			class:text-gray-500={sentenceScreen}
			on:click={() => (sentenceScreen = false)}
			class="uppercase outline-none border-none px-5 py-2 rounded-tr-md rounded-tl-md font-semibold"
			>Thêm câu</button
		>
	</div>
	<div class="h-[1px] w-full border border-gray-200" />

	{#if sentenceScreen}
		<FormContributionWord />
	{:else}
		<FormContributionSentence />
	{/if}
</div>

<style>
	.form-control input:focus + label .label-text {
		color: green;
	}
</style>
