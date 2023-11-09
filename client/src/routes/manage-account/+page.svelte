<script lang="ts">
	import { onMount } from 'svelte';
	let myModal4: HTMLDialogElement;

	let users = [
		{
			id: 1,
			username: 'admin',
			email: 'admin@example.com',
			role: 'admin'
		},
		{
			id: 2,
			username: 'user1',
			email: 'user1@example.com',
			role: 'user'
		}
	];

	onMount(() => {
		// fetch('/api/users')
		// 	.then((response) => response.json())
		// 	.then((data) => {
		// 		users = data;
		// 	});
	});

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
				<th>ID</th>
				<th>Tên người dùng</th>
				<th>Email</th>
				<th>Vai trò</th>
				<th>Hành động</th>
			</tr>
		</thead>
		<tbody>
			{#each users as user}
				<tr class="hover">
					<td>{user.id}</td>
					<td>{user.username}</td>
					<td>{user.email}</td>
					<td>{user.role}</td>
					<td>
						<button
							class="btn btn-sm bg-red-600 hover:bg-red-700 text-white"
							on:click={() => deleteUser(user.id)}>Xóa</button
						>
						<button class="btn btn-sm btn-warning" on:click={() => myModal4.showModal()}>Cấm</button
						>
						<button class="btn btn-sm btn-primary" on:click={() => editUser(user.id)}>Sửa</button>
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
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
					<!-- if there is a button, it will close the modal -->
					<button class="btn">Close</button>
					<button type="submit" class="btn bg-green-600 hover:bg-green-700 text-white">OK</button>
				</form>
			</div>
		</form>
	</div>
</dialog>
