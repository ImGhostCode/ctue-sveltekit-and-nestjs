<script lang="ts">
	import { onMount } from 'svelte';

	import tree from '$lib/assets/icons/topics/tree.png';
	import social from '$lib/assets/icons/topics/social.png';
	import Speaker from '../../components/Speaker.svelte';
	let showTopics = false;
	let topics = [
		{ id: 1, name: 'Thực vật', selected: false, image: tree },
		{ id: 2, name: 'Đời sống', selected: false, image: social },
		{ id: 3, name: 'Đời sống 2', selected: false, image: social },
		{ id: 4, name: 'Đời sống 3', selected: false, image: social },
		{ id: 5, name: 'Đời sống 4', selected: false, image: social }
	];

	let topicsSentence = [
		{ id: 1, name: 'Giao tiếp thông dụng', selected: false },
		{ id: 2, name: 'Chào hỏi', selected: false }
	];

	function toggleSelected(index: number) {
		topics[index].selected = !topics[index].selected;
	}

	let myModal4: HTMLDialogElement;
	let myModal5: HTMLDialogElement;
	let myModal6: HTMLDialogElement;

	let contributions = [
		{ id: 1, type: 'Câu', content: 'Nội dung json', status: 'Đang chờ' },
		{ id: 2, type: 'Từ', content: 'Nội dung json', status: 'Đang chờ' }
	];

	onMount(() => {
		// fetch('/api/contributions')
		// 	.then((response) => response.json())
		// 	.then((data) => {
		// 		contributions = data;
		// 	});
	});

	function classifyContribution(contributionId: number) {
		// TODO: classify contribution
	}

	function confirmContribution(contributionId: number) {
		// TODO: confirm contribution
	}

	function deleteContribution(contributionId: number) {
		// TODO: delete contribution
	}
</script>

<div class="max-w-screen-xl w-screen mx-auto text-left px-2 py-8">
	<h1 class="text-2xl text-orange-600 mb-2">Quản lý đóng góp</h1>

	<div class="h-[1px] w-full border border-gray-200" />

	<div class="text-right my-2">
		<div class="dropdown">
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label tabindex="0" class="btn m-1">Phân loại</label>
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
				<li><button>Từ</button></li>
				<li><button>Câu</button></li>
			</ul>
		</div>
	</div>
	<table class=" mt-10 table table-hover">
		<thead>
			<tr>
				<th>ID</th>
				<th>Loại</th>
				<th>Nội dung</th>
				<th>Trạng thái</th>
				<th>Hành động</th>
			</tr>
		</thead>
		<tbody>
			{#each contributions as contribution}
				<tr class="hover">
					<td>{contribution.id}</td>
					<td class="">{contribution.type}</td>
					<td class="hover:cursor-pointer"
						><button on:click={() => myModal5.showModal()}>{contribution.content}</button>
					</td>
					<td class="text-warning">{contribution.status}</td>
					<td>
						<button
							class="btn btn-sm bg-green-600 hover:bg-green-700 text-white"
							on:click={() => confirmContribution(1)}>Xác nhận</button
						>
						<button
							class="btn btn-sm bg-red-600 hover:bg-red-700 text-white"
							on:click={() => myModal6.showModal()}>Từ chối</button
						>
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<dialog bind:this={myModal5} id="my_modal_3" class="modal">
	<div class="modal-box">
		<form method="dialog">
			<button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-xl">✕</button>
		</form>
		<h3 class="font-bold text-2xl text-orange-600 mb-2">Chi Tiết Câu "A sentence"</h3>
		<div class="h-[1px] w-full border border-gray-200" />

		<div class="mt-4"><b>Nghĩa: </b> của câu</div>

		<!-- <p class="font-bold">
			Thuộc chuyên ngành: <span class="font-normal">Công nghệ thực phẩm (Food Technology)</span>
		</p> -->
		<p class="font-bold">Chủ đề:</p>
		<div class="flex flex-wrap p-3">
			{#each topicsSentence as topic, index (topic.name)}
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<div
					class="topic-item px-2 py-1 m-1 flex justify-between items-center w-fit rounded-full border border-green-600"
					on:click={() => toggleSelected(index)}
				>
					<span class="pr-1 text-sm">{topic.name}</span>
				</div>
			{/each}
		</div>

		<p class="font-bold">Ghi chú:</p>
		<p>dfs</p>
	</div>
</dialog>
<dialog bind:this={myModal4} id="my_modal_3" class="modal">
	<div class="modal-box">
		<form method="dialog">
			<button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-xl">✕</button>
		</form>
		<h3 class="font-bold text-2xl text-orange-600 mb-2">Chi Tiết Từ "Add"</h3>
		<div class="h-[1px] w-full border border-gray-200" />

		<div class="flex my-4">
			<img src={tree} alt={tree} class="h-[50px] w-[50px] inline-block" />
			<div class="inline-block ml-4">
				<div class="flex justify-center items-center">
					<p class="mr-2 text-green-600 text-xl font-semibold">add</p>
					<span class="mr-2 text-blue-600">/æd/</span>
				</div>
				<p>Thêm</p>
			</div>
		</div>
		<p class="font-bold">Cấp độ: <span class="font-normal">A2</span></p>
		<p class="font-bold">Câu ví dụ:</p>
		<ol>
			<li>1. add some words</li>
			<li>1. add some words</li>
		</ol>
		<p class="font-bold">
			Thuộc chuyên ngành: <span class="font-normal">Công nghệ thực phẩm (Food Technology)</span>
		</p>
		<p class="font-bold">Chủ đề:</p>
		<div class="p-2 flex flex-wrap rounded-md">
			{#each topics as topic, index (topic.name)}
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<div
					class="topic-item px-2 py-1 m-1 flex justify-between items-center w-fit rounded-full border border-teal-500"
				>
					<img class="mr-1" src={topic.image} alt={topic.name} />
					<span class="pr-1 text-sm">{topic.name}</span>
				</div>
			{/each}
		</div>
		<p class="font-bold">
			Các từ đồng nghĩa: <span class="font-normal">plus</span>
		</p>
		<p class="font-bold">Ghi chú:</p>
		<p>dfs</p>
	</div>
</dialog>

<dialog bind:this={myModal6} id="my_modal_4" class="modal">
	<div class="modal-box w-11/12 max-w-5xl">
		<form action="" method="post">
			<h3 class="font-bold text-xl text-orange-600 mb-2">Từ chối đóng góp</h3>
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
