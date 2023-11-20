<script lang="ts">
	import { onMount } from 'svelte';
	import FormContributionSentence from '../../components/FormContributionSentence.svelte';
	import FormContributionWord from '../../components/FormContributionWord.svelte';
	import type { ActionData } from './$types';
	import { goto } from '$app/navigation';
	import { toasts, ToastContainer, FlatToast, BootstrapToast } from 'svelte-toasts';
	import moment from 'moment';
	import { text } from '@sveltejs/kit';

	export let form: ActionData;
	/** @type {import('./$types').PageData} */
	export let data: any;

	const statusCon: { [key: string]: { status: string; color: string } } = {
		'-1': { status: 'Chờ duyệt', color: 'yellow' },
		'0': { status: 'Từ chối', color: 'red' },
		'1': { status: 'Đã duyệt', color: 'green' }
	};

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

<div class="max-w-screen-xl w-screen mx-auto text-left px-2 py-8 min-h-screen max-h-max">
	<div class="">
		<button
			on:click={() => handleSwitchTab()}
			class:bg-green-600={sentenceScreen}
			class:text-white={sentenceScreen}
			class:text-gray-500={sentenceScreen === false}
			class="uppercase outline-none border-none px-5 py-2 md:text-base text-sm rounded-tr-md rounded-tl-md font-semibold"
			>Thêm từ</button
		>
		<button
			class:bg-green-600={sentenceScreen === false}
			class:text-white={sentenceScreen === false}
			class:text-gray-500={sentenceScreen}
			on:click={() => handleSwitchTab()}
			class="uppercase outline-none border-none px-5 py-2 md:text-base text-sm rounded-tr-md rounded-tl-md font-semibold"
			>Thêm câu</button
		>
	</div>
	<div class="h-[1px] w-full border border-gray-200" />

	{#if sentenceScreen}
		<FormContributionWord
			types={data.typesWord}
			topics={data.topicsWord}
			levels={data.levels}
			specializations={data.specializations}
			{missingFields}
		/>
	{:else}
		<FormContributionSentence
			types={data.typesSentence}
			topics={data.topicsSentence}
			{missingFields}
		/>
	{/if}

	<div class="">
		<h1 class="md:text-3xl text-xl text-title font-bold mb-2">Lịch sử đóng góp</h1>

		<div class="h-[1px] w-full border border-gray-200" />

		{#if data.conHistory.length}
			<div class="overflow-x-auto">
				<table class="table table-hover mt-4">
					<thead>
						<tr>
							<th class="md:text-base text-sm">Thời gian</th>
							<th class="md:text-base text-sm">Loại đóng góp</th>
							<th class="md:text-base text-sm">Nội dung</th>
							<th class="md:text-base text-sm">Trạng thái</th>
							<th class="md:text-base text-sm">Phản hồi</th>
						</tr>
					</thead>
					<tbody>
						{#each data.conHistory as con (con.id)}
							<tr class="hover">
								<td class="md:text-base text-xs">{moment(con.createdAt).format('DD/MM/YYYY')}</td>
								<td class="md:text-base text-xs">{con.type === 'word' ? 'Từ' : 'Câu'}</td>
								<td class="max-w-xs">
									<p class="truncate md:text-base text-xs">
										{con.content.content} - {con.content.mean}
									</p>
								</td>
								<td
									class="md:text-base text-xs font-semibold"
									class:text-red-600={statusCon[con.status].color === 'red'}
									class:text-yellow-400={statusCon[con.status].color === 'yellow'}
									class:text-green-600={statusCon[con.status].color === 'green'}
									>{statusCon[con.status].status}</td
								>
								<td class="max-w-xs">
									<p class="break-words md:text-base text-xs">
										{con.feedback ?? ''}
									</p>
								</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		{:else}
			<p class="text-center text-base my-4 text-slate-600">Bạn chưa có đóng góp nào</p>
		{/if}
	</div>
</div>

<ToastContainer placement="bottom-right" let:data>
	<FlatToast {data} />
	<!-- Provider template for your toasts -->
</ToastContainer>

<style>
	/* .form-control input:focus + label .label-text {
		color: green;
	} */
</style>
