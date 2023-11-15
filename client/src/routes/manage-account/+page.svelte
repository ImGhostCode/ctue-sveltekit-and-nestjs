<script lang="ts">
	import { onMount } from 'svelte';
	import type { ActionData, PageData } from './$types';
	import { enhance } from '$app/forms';
	import { toasts } from 'svelte-toasts';
	import moment from 'moment';

	let myModal4: HTMLDialogElement;

	export let data: PageData;
	export let form: ActionData;

	let result: any;
	let banId: number;
	$: {
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
	}

	let users: any[] = [];

	let currentPage: number = 1;
	let totalPages: number;

	onMount(async () => {
		await getAllUser(1);
	});

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

	async function banUser(id: number) {
		const confirm = window.confirm('Bạn có chắc chắn muốn cấm tài khoản này không?');
		if (confirm) {
			console.log(id);
		}
		banId = 0;
	}

	async function editUser(id: number) {}
</script>

<div class="max-w-screen-xl w-screen mx-auto text-left px-2 py-8 min-h-screen max-h-max">
	<h1 class="text-2xl text-orange-600 mb-2">Quản lý tài khoản</h1>
	<div class="h-[1px] w-full border border-gray-200" />

	<table class="table table-hover">
		<thead>
			<tr>
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
					<tr class="hover">
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
								<button type="submit" class="btn btn-sm bg-red-600 hover:bg-red-700 text-white">
									Xóa
								</button>
							</form>
							{#if !user.isBan}
								<button
									class="btn btn-sm btn-warning"
									on:click={() => {
										myModal4.showModal();
										banId = user.userId;
									}}
								>
									Khóa
								</button>
							{:else}
								<button class="btn btn-sm btn-primary"> Mở khóa </button>
							{/if}
						</td>
					</tr>
				{/each}
			{/if}
		</tbody>
	</table>
	<div class="join flex gap-1 w-max mx-auto mt-6">
		<button
			on:click={async () => {
				currentPage = currentPage - 1;
				await getAllUser(currentPage);
			}}
			class:disable={currentPage == 1}
			disabled={currentPage == 1}
			class:cursor-not-allowed={currentPage == 1}
			type="submit"
			class="join-item btn btn-outline border-sky-400 hover:border-sky-500 hover:bg-sky-500"
		>
			Trang sau
		</button>
		<button
			on:click={async () => {
				currentPage = currentPage + 1;
				await getAllUser(currentPage);
			}}
			class:disable={currentPage == totalPages}
			disabled={currentPage == totalPages}
			class:cursor-not-allowed={currentPage == totalPages}
			type="submit"
			class="join-item btn btn-outline border-sky-400 hover:border-sky-500 hover:bg-sky-500"
		>
			Trang tiếp theo
		</button>
	</div>
</div>
<dialog bind:this={myModal4} id="my_modal_4" class="modal">
	<div class="modal-box w-11/12 max-w-5xl">
		<form>
			<h3 class="font-bold text-xl text-orange-600 mb-2">Cấm tài khoản người dùng</h3>
			<div class="h-[1px] w-full border border-gray-200" />
			<div class="">
				<div class="form-control w-full mb-3">
					<label class="label" for="feedback">
						<span class="label-text">Lý do (*)</span>
					</label>
					<textarea
						class="input input-bordered h-[120px] w-full focus:border-green-600 focus:outline-none p-4"
						id="feedback"
						name="feedback"
					/>
				</div>
			</div>
			<div class="h-[1px] w-full border border-gray-200" />
			<div class="modal-action">
				<form method="dialog">
					<button class="btn" on:click={() => (banId = 0)}>Close</button>
					<button
						type="submit"
						on:click={async () => {
							await banUser(banId);
						}}
						class="btn bg-green-600 hover:bg-green-700 text-white">OK</button
					>
				</form>
			</div>
		</form>
	</div>
</dialog>
