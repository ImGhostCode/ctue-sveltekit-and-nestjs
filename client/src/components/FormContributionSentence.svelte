<script lang="ts">
	import tree from '$lib/assets/icons/topics/tree.png';
	import social from '$lib/assets/icons/topics/social.png';
	import { enhance } from '$app/forms';

	type Types = { id: number; name: string; isWord: boolean };
	type Topics = {
		selected: boolean;
		id: number;
		name: string;
		isWord: boolean;
		image: string;
	};
	type SelectedTopics = { id: number; name: string; isWord: boolean; selected: boolean };

	export let types: Types[];
	export let topics: Topics[];
	export let missingFields: any;

	let showTopics = false;
	let isLoadingForm: boolean = false;

	$: topicIds = topics
		.filter((topic) => topic.selected)
		.map((topic) => topic.id)
		.toString();

	function toggleSelected(index: number) {
		topics[index].selected = !topics[index].selected;
	}

	function resetSelectedTopics() {
		topics = topics.map((topic) => {
			return { ...topic, selected: false };
		});
	}
</script>

<div class="shadow-lg px-7 py-8 rounded-lg my-10">
	<h1 class="text-3xl text-title font-bold">Thêm Câu Giao Tiếp Hay Mà Bạn Biết</h1>
	<div class="h-[1px] w-full border border-gray-200 my-4" />
	<form
		method="post"
		use:enhance={() => {
			isLoadingForm = true;
			return async ({ update }) => {
				isLoadingForm = false;
				update();
			};
		}}
		enctype="multipart/form-data"
		action="?/contribute-sentence"
		class="flex flex-col"
	>
		<div class="form-control w-full mb-3">
			<label class="label" for="new-sentence">
				<span class="label-text">Một câu bằng tiếng Anh (*)</span>
			</label>
			<textarea
				class="input input-bordered h-[120px] w-full focus:border-green-600 focus:outline-none p-4"
				id="new-sentence"
				name="content"
			/>
			{#if missingFields?.content}
				<p class="text-xs text-error mt-2">Hãy nhập một câu vào đây</p>
			{/if}
		</div>
		<div class="form-control w-full mb-3">
			<label class="label" for="new-sentence-meaning">
				<span class="label-text">Nghĩa của câu bằng tiếng Viết (*)</span>
			</label>
			<textarea
				class="input input-bordered h-[120px] w-full focus:border-green-600 focus:outline-none p-4"
				id="new-sentence-meaning"
				name="mean"
			/>
			{#if missingFields?.mean}
				<p class="text-xs text-error mt-2">Hãy nhập nghĩa của câu trên</p>
			{/if}
		</div>
		<div class="form-control w-full mb-3">
			<label class="label" for="note">
				<span class="label-text">Thêm ghi chú cho câu trên</span>
			</label>
			<textarea
				class="input input-bordered h-[120px] w-full focus:border-green-600 focus:outline-none p-4"
				id="note"
				name="note"
			/>
		</div>

		<div class="flex flex-row gap-6">
			<div class="mb-3 form-control basis-1/2">
				<label for="types" class="block mb-2 text-sm">Loại câu (*)</label>
				<select
					id="types"
					name="typeId"
					class="w-full select select-bordered text-[16px] h-12 border bg-gray-50 border-gray-300 focus:border-green-600 focus-visible:border-green-600 focus-within:outline-none text-sm rounded-lg block p-2.5"
				>
					<option class="block bg-base-200 text-[16px] px-4 py-2" selected value="0"
						>Chưa xác định</option
					>
					{#if types}
						{#each types as type (type.id)}
							<option class="block bg-base-200 text-[16px] px-4 py-2" value={type.id}
								>{type.name}</option
							>
						{/each}
					{:else}
						<option class="block bg-base-200 text-[16px] px-4 py-2" value="Loading">Đang tải</option
						>
					{/if}
				</select>
			</div>

			<div class="form-control mb-3 basis-1/2">
				<div class="h-[28px]" />
				<button
					type="button"
					on:click={() => (showTopics = !showTopics)}
					class="input input-bordered w-full flex justify-center items-center focus:outline-none"
					class:border-green-600={showTopics}
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
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M4.5 15.75l7.5-7.5 7.5 7.5"
								/>
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
		</div>
		{#if showTopics}
			<div class="topics px-3 py-2 bg-base-200 flex flex-wrap rounded-md col-span-3">
				{#each topics as topic, index (topic.name)}
					<button
						type="button"
						class="topic-item px-3 py-2 m-2 text-base text-slate-700 flex justify-between items-center w-fit rounded-full border-2 border-green-600 cursor-pointer transition"
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
			{#if isLoadingForm}
				<button
					class="btn mr-2 btn-info"
					disabled={isLoadingForm}
					class:cursor-not-allowed={isLoadingForm}
					>&nbsp;
					<span class="loading loading-dots loading-xs" />
					&nbsp;
				</button>
			{:else}
				<button
					type="submit"
					disabled={isLoadingForm}
					class:cursor-not-allowed={isLoadingForm}
					class=" btn btn-accent text-white mr-2"
				>
					Gửi yêu cầu
				</button>
			{/if}
			<button type="reset" class="btn btn-outline btn-error" on:click={() => resetSelectedTopics()}
				>Loại bỏ</button
			>
		</div>

		<input type="text" class="hidden" name="topicId" id="topics" bind:value={topicIds} />
	</form>
</div>
