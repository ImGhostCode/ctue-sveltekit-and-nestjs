<script lang="ts">
	import Speaker from '../../components/Speaker.svelte';

	let showTopics = false;
	let topics = [
		{ id: 1, name: 'Giao tiếp thông dụng', selected: false },
		{ id: 2, name: 'Chào hỏi', selected: false }
	];

	function toggleSelected(index: number) {
		topics[index].selected = !topics[index].selected;
	}

	let myModal4: HTMLDialogElement;
</script>

<div class="max-w-screen-xl w-screen mx-auto text-left px-2 py-8">
	<div class="flex justify-between items-center mb-4">
		<h1 class="h1 text-2xl text-orange-600">1000+ Cụm từ giao tiếp</h1>

		<!-- You can open the modal using ID.showModal() method -->
		<button class="" on:click={() => myModal4.showModal()}
			><svg
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
					d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
				/>
				<path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
			</svg></button
		>
		<dialog bind:this={myModal4} id="my_modal_4" class="modal">
			<div class="modal-box w-11/12 max-w-5xl">
				<h3 class="font-bold text-xl text-orange-600 mb-2">Chọn chủ đề</h3>
				<div class="h-[1px] w-full border border-gray-200" />

				<div class="flex flex-wrap p-3">
					{#each topics as topic, index (topic.name)}
						<!-- svelte-ignore a11y-click-events-have-key-events -->
						<div
							class="topic-item px-2 py-1 m-1 flex justify-between items-center w-fit rounded-full border border-green-600 cursor-pointer"
							class:bg-green-500={topic.selected}
							class:text-white={topic.selected}
							on:click={() => toggleSelected(index)}
						>
							<span class="pr-1 text-sm">{topic.name}</span>
						</div>
					{/each}
				</div>

				<div class="h-[1px] w-full border border-gray-200" />

				<div class="modal-action">
					<form method="dialog">
						<!-- if there is a button, it will close the modal -->
						<button class="btn">Close</button>
						<button class="btn btn-success">OK</button>
					</form>
				</div>
			</div>
		</dialog>
	</div>
	<div class="h-[1px] w-full border border-gray-200" />

	<div class="overflow-x-auto">
		<table class="table">
			<!-- head -->
			<thead>
				<tr>
					<th />
					<th class="text-green-700 text-lg">Câu</th>
					<th class="text-green-700 text-lg">Nghĩa</th>
				</tr>
			</thead>
			<tbody class="">
				<!-- row 1 -->
				<tr class="hover:bg-base-200">
					<th>1</th>
					<td><Speaker /> How do you do? </td>
					<td>Dạo này bạn thế nào?</td>
				</tr>
				<!-- row 2 -->
				<tr class="hover:bg-base-200">
					<th>2</th>
					<td><Speaker /> Good morning/Good afternoon/Good evening! </td>
					<td>Buổi sáng/trưa/chiều tốt lành! </td>
				</tr>
				<!-- row 3 -->
				<tr class="hover:bg-base-200">
					<th>3</th>
					<td><Speaker /> It’s a pleasure to meet you </td>
					<td>Rất vinh hạnh khi được gặp bạn </td>
				</tr>
			</tbody>
		</table>
	</div>
</div>
