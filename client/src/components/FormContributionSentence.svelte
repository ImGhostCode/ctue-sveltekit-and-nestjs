<script lang="ts">
	import tree from '$lib/assets/icons/topics/tree.png';
	import social from '$lib/assets/icons/topics/social.png';

	let showTopics = false;
	let topics = [
		{ id: 1, name: 'Giao tiếp thông dụng', selected: false },
		{ id: 2, name: 'Chào hỏi', selected: false }
	];

	function toggleSelected(index: number) {
		topics[index].selected = !topics[index].selected;
	}
</script>

<div class="shadow-lg px-7 py-8 rounded-lg my-10">
	<h1 class="text-3xl text-title font-bold">Thêm Câu Giao Tiếp Hay Mà Bạn Biết</h1>
	<div class="h-[1px] w-full border border-gray-200 my-4" />
	<form action="" class="flex flex-col">
		<div class="form-control w-full mb-3">
			<label class="label" for="new-sentence">
				<span class="label-text">Một câu bằng tiếng Anh (*)</span>
			</label>
			<input
				type="text"
				placeholder="..."
				class="input input-bordered h-[120px] w-full focus:border-green-600 focus:outline-none"
				id="new-sentence"
			/>
		</div>
		<div class="form-control w-full mb-3">
			<label class="label" for="new-sentence-mean">
				<span class="label-text">Nghĩa của câu bằng tiếng Viết (*)</span>
			</label>
			<input
				type="text"
				placeholder="..."
				class="input input-bordered h-[120px] w-full focus:border-green-600 focus:outline-none"
				id="new-sentence-mean"
			/>
		</div>
		<div class="form-control w-full mb-3">
			<label class="label" for="note">
				<span class="label-text">Thêm ghi chú cho câu trên (*)</span>
			</label>
			<input
				type="text"
				placeholder="..."
				class="input input-bordered h-[120px] w-full focus:border-green-600 focus:outline-none"
				id="note"
			/>
		</div>

		<div class="form-control w-full mb-3">
			<div class="h-[36px]" />
			<button
				on:click={() => (showTopics = !showTopics)}
				class="input input-bordered w-full flex justify-center items-center"
				>Thêm chủ đề <span class="ml-2">
					{#if showTopics}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="w-6 h-6"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
						</svg>
					{:else}
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
								d="M19.5 8.25l-7.5 7.5-7.5-7.5"
							/>
						</svg>
					{/if}
				</span></button
			>
		</div>
		{#if showTopics}
			<div class="topics px-3 py-6 bg-base-200 flex flex-wrap rounded-md col-span-3">
				{#each topics as topic, index (topic.name)}
					<button
						class="topic-item px-2 py-1 m-2 flex justify-between items-center w-fit rounded-full border border-green-600 cursor-pointer"
						class:bg-green-500={topic.selected}
						class:text-white={topic.selected}
						on:click={() => toggleSelected(index)}
					>
						<span class="pr-1 text-sm">{topic.name}</span>
					</button>
				{/each}
			</div>
		{/if}
		<div class="h-[1px] w-full border border-gray-200 mt-8 col-span-3" />

		<div class="mt-4 col-span-3 text-right">
			<button type="reset" class="btn btn-outline btn-error mr-2">Reset</button>

			<button type="submit" class="btn btn-accent text-white">Thêm từ</button>
		</div>
	</form>
</div>
