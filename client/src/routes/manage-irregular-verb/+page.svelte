<script lang="ts">
	import { onMount } from 'svelte';
	import Speaker from '../../components/Speaker.svelte';
	import Pagination from '../../components/Pagination.svelte';
	import { enhance } from '$app/forms';
	import { FlatToast, ToastContainer, toasts } from 'svelte-toasts';
	import type { ActionData, PageData } from './$types';

	let myModal10: HTMLDialogElement;
	let myModal11: HTMLDialogElement;

	export let data: PageData;
	export let form: ActionData;

	let totalPages: number = 1;
	let currentPage: number = 1;
	let key: string = '';
	let sort: string = 'asc';
	let words: any[] = [];
	let currentWord: any = {};

	async function getIrregularVerb(page: number, key: string, sort: string) {
		const response = await fetch(`/irregular-verbs?page=${page}&&key=${key}&&sort=${sort}`, {
			method: 'GET'
		});
		const result = await response.json();
		if (!result) {
			words = [];
			totalPages = 1;
		} else {
			words = result.data;
			totalPages = result.totalPages;
		}
	}

	onMount(async () => {
		await getIrregularVerb(currentPage, key, sort);
	});

	$: getIrregularVerb(currentPage, key, sort);

	$: if (form?.success) {
		toasts.add({
			title: 'Success',
			description: form?.message,
			duration: 1500,
			placement: 'top-right',
			type: 'success',
			theme: 'dark',
			showProgress: true,
			onClick: () => {},
			onRemove: () => {}
		});
		getIrregularVerb(currentPage, key, sort);
		myModal10.close();
		myModal11.close();
	}

	$: if (form?.error) {
		toasts.add({
			title: 'Error',
			description: form?.message,
			duration: 1500,
			placement: 'top-right',
			type: 'error',
			theme: 'dark',
			showProgress: true,
			onClick: () => {},
			onRemove: () => {}
		});
	}

	async function handleDeleteIreegular(id: number) {
		const confirm = window.confirm('Bạn có chắc chắn muốn xóa từ này không?');
		if (confirm) {
			const response = await fetch(`/manage-irregular-verb?id=${id}`, {
				method: 'DELETE'
			});
			const result = await response.json();
			if (result.statusCode == 200) {
				await getIrregularVerb(currentPage, key, sort);
			}
		}
	}

	function handlePrePAge() {
		document.body.scrollIntoView();
		currentPage = currentPage - 1;
	}

	function handleNextPage() {
		document.body.scrollIntoView();
		currentPage = currentPage + 1;
	}
</script>

<div class="max-w-screen-xl w-screen mx-auto text-left px-2 py-8 min-h-screen max-h-max">
	<div class="flex justify-between items-center">
		<h1 class="header-page">Quản lý động từ bất quy tắc</h1>
		<button
			class="btn btn-sm bg-green-500 hover:bg-green-700 text-white"
			on:click={() => myModal10.showModal()}
		>
			Thêm
		</button>
	</div>
	<div class="flex justify-between items-center">
		<input
			bind:value={key}
			class="shadow appearance-none border rounded w-[450px] py-2 px-3 text-gray-700 focus:border-green-500 leading-tight focus:outline-none focus:shadow-outline"
			id="find-word"
			type="text"
			placeholder="Nhập từ..."
		/>
		<div class="my-4">
			<button
				on:click={async () => {
					sort = sort == 'asc' ? 'desc' : 'asc';
				}}
				class="btn outline-none border-none bg-transparent hover:bg-transparent hover:opacity-100 opacity-70"
			>
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
			</button>
		</div>
	</div>
	<div class="overflow-x-auto">
		<table class="table">
			<thead>
				<tr>
					<th />
					<th class="text-green-700 text-lg">Nguyên mẫu (V1)</th>
					<th class="text-green-700 text-lg">Quá khứ đơn (V2)</th>
					<th class="text-green-700 text-lg">Quá khứ phân từ (V3)</th>
					<th class="text-green-700 text-lg">Nghĩa</th>
					<th class="text-green-700 text-lg">Hành động</th>
				</tr>
			</thead>
			<tbody class="">
				{#each words as word, i}
					<tr class="hover:bg-base-200">
						<th>{i + 1}</th>
						<td>
							{word.v1}
							<Speaker key={word.v1} />
						</td>
						<td>
							{word.v2}
							<Speaker key={word.v2} />
						</td>
						<td>
							{word.v3}
							<Speaker key={word.v3} />
						</td>
						<td>{word.mean}</td>
						<td>
							<button
								class="btn btn-sm btn-warning"
								on:click={() => {
									currentWord = word;
									myModal11.showModal();
								}}
							>
								Sửa
							</button>
							<button
								on:click={async () => {
									await handleDeleteIreegular(word.id);
								}}
								type="submit"
								class="btn btn-sm bg-red-600 hover:bg-red-700 text-white"
							>
								Xóa
							</button>
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
	<dialog bind:this={myModal10} id="my_modal_5" class="modal">
		<div class="modal-box w-11/12 max-w-lg">
			<h3 class="font-bold text-xl text-title mb-2">Thêm động từ bất quy tắt</h3>
			<form action="?/postIrregular" method="post" use:enhance>
				<div>
					<div class="form-control w-full max-w-sm mb-3">
						<label class="label" for="v1">
							<span class="label-text">Nguyên mẫu (V1)</span>
						</label>
						<input
							class="shadow appearance-none border rounded w-[450px] py-2 px-3 text-gray-700 focus:border-green-500 leading-tight focus:outline-none focus:shadow-outline"
							id="v1"
							type="text"
							placeholder="Nhập từ..."
							name="v1"
						/>
					</div>
				</div>
				<div>
					<div class="form-control w-full max-w-sm mb-3">
						<label class="label" for="v2">
							<span class="label-text">Quá khứ đơn (V2)</span>
						</label>
						<input
							class="shadow appearance-none border rounded w-[450px] py-2 px-3 text-gray-700 focus:border-green-500 leading-tight focus:outline-none focus:shadow-outline"
							id="v2"
							type="text"
							placeholder="Nhập từ..."
							name="v2"
						/>
					</div>
				</div>
				<div>
					<div class="form-control w-full max-w-sm mb-3">
						<label class="label" for="v3">
							<span class="label-text">Quá khứ phân từ (V3)</span>
						</label>
						<input
							class="shadow appearance-none border rounded w-[450px] py-2 px-3 text-gray-700 focus:border-green-500 leading-tight focus:outline-none focus:shadow-outline"
							id="v3"
							type="text"
							placeholder="Nhập từ..."
							name="v3"
						/>
					</div>
				</div>
				<div>
					<div class="form-control w-full max-w-sm mb-3">
						<label class="label" for="mean">
							<span class="label-text">Nghĩa</span>
						</label>
						<input
							class="shadow appearance-none border rounded w-[450px] py-2 px-3 text-gray-700 focus:border-green-500 leading-tight focus:outline-none focus:shadow-outline"
							id="mean"
							type="text"
							placeholder="Nhập từ..."
							name="mean"
						/>
					</div>
				</div>
				<div class="modal-action">
					<form method="dialog">
						<button class="btn">Đóng</button>
					</form>
					<button type="submit" class="btn bg-green-600 hover:bg-green-700 text-white">Thêm</button>
				</div>
			</form>
		</div>
	</dialog>
	<dialog bind:this={myModal11} id="my_modal_5" class="modal">
		<div class="modal-box w-11/12 max-w-lg">
			<h3 class="font-bold text-xl text-title mb-2">Sửa động từ bất quy tắt</h3>
			<form action="?/patchIrregular" method="post" use:enhance>
				<input type="text" name="id" class="hidden" bind:value={currentWord.id} />
				<div>
					<div class="form-control w-full max-w-sm mb-3">
						<label class="label" for="v1">
							<span class="label-text">Nguyên mẫu (V1)</span>
						</label>
						<input
							bind:value={currentWord.v1}
							class="shadow appearance-none border rounded w-[450px] py-2 px-3 text-gray-700 focus:border-green-500 leading-tight focus:outline-none focus:shadow-outline"
							id="v1"
							type="text"
							placeholder="Nhập từ..."
							name="v1"
						/>
					</div>
				</div>
				<div>
					<div class="form-control w-full max-w-sm mb-3">
						<label class="label" for="v2">
							<span class="label-text">Quá khứ đơn (V2)</span>
						</label>
						<input
							bind:value={currentWord.v2}
							class="shadow appearance-none border rounded w-[450px] py-2 px-3 text-gray-700 focus:border-green-500 leading-tight focus:outline-none focus:shadow-outline"
							id="v2"
							type="text"
							placeholder="Nhập từ..."
							name="v2"
						/>
					</div>
				</div>
				<div>
					<div class="form-control w-full max-w-sm mb-3">
						<label class="label" for="v3">
							<span class="label-text">Quá khứ phân từ (V3)</span>
						</label>
						<input
							bind:value={currentWord.v3}
							class="shadow appearance-none border rounded w-[450px] py-2 px-3 text-gray-700 focus:border-green-500 leading-tight focus:outline-none focus:shadow-outline"
							id="v3"
							type="text"
							placeholder="Nhập từ..."
							name="v3"
						/>
					</div>
				</div>
				<div>
					<div class="form-control w-full max-w-sm mb-3">
						<label class="label" for="mean">
							<span class="label-text">Nghĩa</span>
						</label>
						<input
							bind:value={currentWord.mean}
							class="shadow appearance-none border rounded w-[450px] py-2 px-3 text-gray-700 focus:border-green-500 leading-tight focus:outline-none focus:shadow-outline"
							id="mean"
							type="text"
							placeholder="Nhập từ..."
							name="mean"
						/>
					</div>
				</div>
				<div class="modal-action">
					<form method="dialog">
						<button class="btn">Đóng</button>
					</form>
					<button type="submit" class="btn bg-green-600 hover:bg-green-700 text-white">Sửa</button>
				</div>
			</form>
		</div>
	</dialog>
	<Pagination {totalPages} {currentPage} on:next={handleNextPage} on:pre={handlePrePAge} />
</div>
<ToastContainer placement="bottom-right" let:data>
	<FlatToast {data} />
</ToastContainer>
