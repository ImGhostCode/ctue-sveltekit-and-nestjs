<script lang="ts">
	import { onMount } from 'svelte';
	import type { ActionData, PageData } from './$types';
	import { enhance } from '$app/forms';
	import { toasts } from 'svelte-toasts';
	import moment from 'moment';

	let myModal4: HTMLDialogElement;

	export let data: PageData;
	export let form: ActionData;

	let users: any[] = [];

	let currentPage: number = 1;
	let totalPages: number;

	onMount(() => {
		let intervalId = setInterval(() => {
			if (data.users.length !== 0) {
				users = data.users;
				totalPages = data.totalPages;
				clearInterval(intervalId);
			}
		}, 50);
	});

	$: if (form?.success) {
		users = form.users;
		currentPage = form.currentPage;
		totalPages = form.totalPages;
	}

	$: if (form?.invalidCredential) {
		const toast = toasts.add({
			title: 'Error',
			description: form?.message,
			placement: 'bottom-right',
			type: 'error',
			theme: 'dark',
			showProgress: true,
			onClick: () => {},
			onRemove: () => {}
		});
	}

	function deleteUser(id: number) {
		const confirm = window.confirm('Bạn có chắc chắn muốn xóa tài khoản này không?');

		// fetch(`/api/users/${id}`, { method: 'DELETE' })
		// 	.then((response) => response.json())
		// 	.then((data) => {
		// 		users = users.filter((user) => user.id !== id);
		// 	});
	}

	function banUser(id: number) {
		const confirm = window.confirm('Bạn có chắc chắn muốn cấm tài khoản này không?');
		// fetch(`/api/users/${id}/ban`, { method: 'POST' })
		// 	.then((response) => response.json())
		// 	.then((data) => {
		// 		users.forEach((user) => {
		// 			if (user.id === id) {
		// 				user.role = 'banned';
		// 			}
		// 		});
		// 	});
	}

	function editUser(id: number) {
		// TODO: open modal to edit user
	}
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
				<th>Hành động</th>
			</tr>
		</thead>
		<tbody>
			{#if users.length}
				{#each users as user, i}
					<tr class="hover">
						<td>{i}</td>
						<td>{user.userId}</td>
						<td>{user.User.name}</td>
						<td>{user.email}</td>
						<td>{moment(data.user.User.createdAt).format('DD/MM/YYYY')}</td>
						<td>
							<button
								class="btn btn-sm bg-red-600 hover:bg-red-700 text-white"
								on:click={() => deleteUser(user.userId)}>Xóa</button
							>
							<button class="btn btn-sm btn-warning" on:click={() => myModal4.showModal()}
								>Cấm</button
							>
							<button class="btn btn-sm btn-primary" on:click={() => editUser(user.userId)}
								>Sửa</button
							>
						</td>
					</tr>
				{/each}
			{/if}
		</tbody>
	</table>
	<div class="join flex gap-1 w-max mx-auto mt-6">
		<form method="post" action="?/prePage" use:enhance>
			<input
				type="number"
				name="currentPage"
				id="currentPage"
				class="hidden"
				bind:value={currentPage}
			/>
			<button
				class:disable={currentPage == 1}
				disabled={currentPage == 1}
				class:cursor-not-allowed={currentPage == 1}
				type="submit"
				class="join-item btn btn-outline border-sky-400 hover:border-sky-500 hover:bg-sky-500"
			>
				Trang sau
			</button>
		</form>
		<form method="post" action="?/nextPage" use:enhance>
			<input
				type="number"
				name="currentPage"
				id="currentPage"
				class="hidden"
				bind:value={currentPage}
			/>
			<button
				class:disable={currentPage == totalPages}
				disabled={currentPage == totalPages}
				class:cursor-not-allowed={currentPage == totalPages}
				type="submit"
				class="join-item btn btn-outline border-sky-400 hover:border-sky-500 hover:bg-sky-500"
			>
				Trang tiếp theo
			</button>
		</form>
	</div>
</div>

<dialog bind:this={myModal4} id="my_modal_4" class="modal">
	<div class="modal-box w-11/12 max-w-5xl">
		<form action="" method="post">
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
					<button class="btn">Close</button>
					<button type="submit" class="btn bg-green-600 hover:bg-green-700 text-white">OK</button>
				</form>
			</div>
		</form>
	</div>
</dialog>
