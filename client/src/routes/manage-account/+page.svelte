<script lang="ts">
	import { onMount } from 'svelte';
	import type { ActionData, PageData } from './$types';
	import { FlatToast, ToastContainer, toasts } from 'svelte-toasts';
	import moment from 'moment';
	import Pagination from '../../components/Pagination.svelte';

	let myModal4: HTMLDialogElement;

	export let data: PageData;
	export let form: ActionData;

	let result: any;
	let banId: number;
	let feedback: string = '';

	$: if (result && result?.statusCode == 200) {
		toasts.add({
			title: 'Success',
			description: result?.message,
			duration: 1500,
			placement: 'bottom-right',
			type: 'success',
			theme: 'dark',
			showProgress: true,
			onClick: () => {},
			onRemove: () => {}
		});
		result = null;
	}

	$: if (result && result?.statusCode !== 200) {
		toasts.add({
			title: 'Error',
			description: result?.message,
			placement: 'bottom-right',
			type: 'error',
			theme: 'dark',
			showProgress: true,
			onClick: () => {},
			onRemove: () => {}
		});
		result = null;
	}

	let users: any[] = [];

	let currentPage: number = 1;
	let totalPages: number;

	onMount(async () => {
		await getAllUser(currentPage);
	});

	$: getAllUser(currentPage);

	async function deleteUser(event: Event) {
		const confirm = window.confirm('Bạn có chắc chắn muốn xóa tài khoản này không?');
		if (confirm) {
			const form = event.target as HTMLFormElement;
			const data = new FormData(form);
			let response = await fetch('/manage-account', {
				method: 'POST',
				body: data
			});
			result = await response.json();
			if (result.statusCode == 200) {
				await getAllUser(currentPage);
			}
		}
	}

	async function getAllUser(page: number) {
		const response = await fetch(`/manage-account?page=${page}`, {
			method: 'GET'
		});
		const result = await response.json();
		users = result.data.accounts;
		totalPages = result.data.totalPages;
	}

	async function banUser(event: Event) {
		const confirm = window.confirm('Bạn có chắc chắn muốn khóa tài khoản này không?');
		if (confirm) {
			const form = event.target as HTMLFormElement;
			const data = new FormData(form);
			let response = await fetch('/manage-account', {
				method: 'PATCH',
				body: data
			});
			result = await response.json();
			if (result.statusCode == 200) {
				await getAllUser(currentPage);
			}
		}
		feedback = '';
		myModal4.close();
		banId = 0;
	}

	async function unBanUser(event: Event) {
		const confirm = window.confirm('Bạn có chắc chắn muốn mở khóa tài khoản này không?');
		if (confirm) {
			const form = event.target as HTMLFormElement;
			const data = new FormData(form);
			let response = await fetch('/manage-account', {
				method: 'PATCH',
				body: data
			});
			result = await response.json();
			if (result.statusCode == 200) {
				await getAllUser(currentPage);
			}
		}
		feedback = '';
		myModal4.close();
		banId = 0;
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
	<h1 class="md:text-2xl text-lg text-orange-600 mb-2">Quản lý tài khoản</h1>
	<div class="h-[1px] w-full border border-gray-200" />
	<div class="overflow-x-auto">
		<table class="table table-hover">
			<thead>
				<tr class="md:text-base text-sm">
					<th>STT</th>
					<th>ID</th>
					<th>Tên người dùng</th>
					<th>Email</th>
					<th>Ngày đăng ký</th>
					<th>Trạng thái</th>
					<th class="text-center w-[100px]">Hành động</th>
				</tr>
			</thead>
			<tbody>
				{#if users.length}
					{#each users as user, i}
						<tr class="hover md:text-base text-sm md:btn-md">
							<td>{i + 1}</td>
							<td>{user.userId}</td>
							<td>{user.User.name}</td>
							<td>{user.email}</td>
							<td>{moment(data.user.User.createdAt).format('DD/MM/YYYY')}</td>
							<td>
								{#if !user.isBan}
									<p class="text-cyan-500 font-semibold">Hoạt động</p>
								{:else}
									<p class="text-red-500 font-semibold">Khóa</p>
								{/if}
							</td>
							<td class="text-center flex justify-between gap-3">
								<form on:submit|preventDefault={deleteUser} class="inline">
									<input
										name="userId"
										id="userId"
										type="text"
										class="hidden"
										bind:value={user.userId}
									/>
									<button
										type="submit"
										class="btn md:btn-md btn-sm bg-red-600 hover:bg-red-700 text-white"
									>
										Xóa
									</button>
								</form>
								{#if !user.isBan}
									<button
										class="btn md:btn-md btn-sm btn-warning"
										on:click={() => {
											myModal4.showModal();
											banId = user.userId;
										}}
									>
										Khóa
									</button>
								{:else}
									<form on:submit|preventDefault={unBanUser}>
										<input
											type="text"
											name="userId"
											id="userId"
											class="hidden"
											bind:value={user.userId}
										/>
										<button class="btn btn-sm btn-primary"> Mở khóa </button>
									</form>
								{/if}
							</td>
						</tr>
					{/each}
				{/if}
			</tbody>
		</table>
	</div>
	<Pagination {totalPages} {currentPage} on:next={handleNextPage} on:pre={handlePrePAge} />
</div>
<dialog bind:this={myModal4} id="my_modal_4" class="modal">
	<div class="modal-box w-11/12 max-w-5xl md:p-6 px-3 py-4">
		<form on:submit|preventDefault={banUser}>
			<h3 class="font-bold md:text-xl text-lg text-orange-600 mb-2">Cấm tài khoản người dùng</h3>
			<input type="text" name="userId" id="userId" class="hidden" bind:value={banId} />
			<div class="h-[1px] w-full border border-gray-200" />
			<div class="">
				<div class="form-control w-full mb-3">
					<label class="label" for="feedback">
						<span class="label-text">Lý do (*)</span>
					</label>
					<textarea
						bind:value={feedback}
						required
						maxlength="200"
						class="input input-bordered h-[120px] w-full focus:border-green-600 focus:outline-none p-4"
						id="feedback"
						name="feedback"
					/>
				</div>
			</div>
			<div class="h-[1px] w-full border border-gray-200" />
			<div class="modal-action">
				<form method="dialog">
					<button
						class="btn md:btn-md btn-sm"
						on:click={() => {
							banId = 0;
							feedback = '';
						}}
					>
						Đóng
					</button>
				</form>
				<button
					type="submit"
					class="btn md:btn-md btn-sm bg-green-600 hover:bg-green-700 text-white">Đồng ý</button
				>
			</div>
		</form>
	</div>
</dialog>
<ToastContainer placement="bottom-right" let:data>
	<FlatToast {data} />
</ToastContainer>
