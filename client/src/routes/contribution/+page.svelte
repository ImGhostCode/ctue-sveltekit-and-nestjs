<script lang="ts">
	import { onMount } from 'svelte';
	import FormContributionSentence from '../../components/FormContributionSentence.svelte';
	import FormContributionWord from '../../components/FormContributionWord.svelte';
	import type { ActionData } from './$types';
	import { goto } from '$app/navigation';
	import { toasts, ToastContainer, FlatToast, BootstrapToast } from 'svelte-toasts';

	export let form: ActionData;
	/** @type {import('./$types').PageData} */
	export let data: any;

	let sentenceScreen = true;
	$: missingFields = form?.missingFields;

	$: if (form?.noToken) {
		goto('/login'); // Redirect to the login page if not authenticated
	}

	onMount(() => {
		if (!data?.user) {
			goto('/login', { replaceState: true }); // Redirect to the login page if not authenticated
			return;
		}
	});

	function handleSwitchTab(): void {
		sentenceScreen = !sentenceScreen;
		missingFields = [];
	}

	$: if (form?.success) {
		const toast = toasts.add({
			title: 'Success',
			description: form?.message,
			duration: 1500, // Set the duration to 0 to keep it open until manually closed
			placement: 'top-right',
			type: 'success',
			theme: 'dark',
			showProgress: true,
			// type: 'success',
			// theme: 'dark',
			onClick: () => {},
			onRemove: () => {
				// goto('/'); // Use goto to redirect to the '/login' route.
			}
			//component: BootstrapToast // You can customize the toast component here
		});
	}

	$: if (form?.error) {
		const toast = toasts.add({
			title: 'Error',
			description: form?.message,
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
	}
</script>

<div class="max-w-screen-xl w-screen mx-auto text-left px-2 py-8">
	<div class="">
		<button
			on:click={() => handleSwitchTab()}
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
			on:click={() => handleSwitchTab()}
			class="uppercase outline-none border-none px-5 py-2 rounded-tr-md rounded-tl-md font-semibold"
			>Thêm câu</button
		>
	</div>
	<div class="h-[1px] w-full border border-gray-200" />

	{#if sentenceScreen}
		<FormContributionWord
			types={data.typesWord}
			levels={data.levels}
			specializations={data.specializations}
			{missingFields}
		/>
	{:else}
		<FormContributionSentence types={data.typesSentence} topics={data.topics} />
	{/if}
</div>

<ToastContainer placement="bottom-right" let:data>
	<FlatToast {data} />
	<!-- Provider template for your toasts -->
</ToastContainer>

<style>
	.form-control input:focus + label .label-text {
		color: green;
	}
</style>
