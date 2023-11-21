<script lang="ts">
	import { enhance } from '$app/forms';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	function handleCancel() {
		dispatch('cancel');
	}

	type Types = { id: number; name: string; isWord: boolean };
	type Topics = {
		selected: boolean;
		id: number;
		name: string;
		isWord: boolean;
		image: string;
	};

	export let types: Types[];
	export let topics: Topics[];
	export let currentSentence: any;

	let showTopics = false;
	let isLoadingForm: boolean = false;

	$: topicIds = topics
		.filter((topic) => topic.selected)
		.map((topic) => topic.id)
		.toString();

	function handleSetTopic() {
		topics.forEach((e) => (e.selected = false));
		if (currentSentence.Topic) {
			const topicArray: number[] = currentSentence.Topic.map((topic: any) => topic.id);
			topics.forEach((i) => {
				if (topicArray.includes(i.id)) {
					i.selected = true;
				}
			});
		}
	}

	function toggleSelected(index: number) {
		topics[index].selected = !topics[index].selected;
	}

	function resetSelectedTopics() {
		topics = topics.map((topic) => {
			return { ...topic, selected: false };
		});
	}
</script>

<div
	class="shadow-lg px-5 py-5 rounded-lg my-10 bg-white md:mx-0 md:max-w-7xl max-w-sm w-full overflow-x-scroll max-h-[85%]"
>
	<div class="flex items-center justify-between">
		<h1 class="md:text-3xl text-lg text-title font-bold">Chỉnh sửa câu giao tiếp</h1>
		<button class="text-2xl" on:click={handleCancel}>x</button>
	</div>
	<form
		method="post"
		use:enhance
		action="?/patchSentence"
		class="flex flex-col md:text-base text-sm"
	>
		<div class="form-control w-full mb-3">
			<label class="label" for="new-sentence">
				<span class="label-text">Một câu bằng tiếng Anh (*)</span>
			</label>
			<textarea
				bind:value={currentSentence.content}
				required
				maxlength="200"
				class="input input-bordered md:text-base text-sm md:h-[120px] h-20 w-full focus:border-green-600 focus:outline-none p-4"
				id="new-sentence"
				name="content"
			/>
		</div>
		<div class="form-control w-full mb-3">
			<label class="label" for="new-sentence-meaning">
				<span class="label-text">Nghĩa của câu bằng tiếng Viết (*)</span>
			</label>
			<textarea
				bind:value={currentSentence.mean}
				required
				maxlength="300"
				class="input input-bordered md:text-base text-sm md:h-[120px] h-20 w-full focus:border-green-600 focus:outline-none p-4"
				id="new-sentence-meaning"
				name="mean"
			/>
		</div>
		<div class="form-control w-full mb-3">
			<label class="label" for="note">
				<span class="label-text">Thêm ghi chú cho câu trên</span>
			</label>
			<textarea
				bind:value={currentSentence.note}
				maxlength="100"
				class="input input-bordered md:text-base text-sm md:h-[120px] h-20 w-full focus:border-green-600 focus:outline-none p-4"
				id="note"
				name="note"
			/>
		</div>
		<div class="flex flex-row gap-6">
			<div class="mb-3 form-control basis-1/2">
				<label for="types" class="block mb-2 text-sm">Loại câu (*)</label>
				<select
					bind:value={currentSentence.typeId}
					id="types"
					name="typeId"
					class="w-full select select-bordered md:select-md select-sm border bg-gray-50 border-gray-300 focus:border-green-600 focus-visible:border-green-600 focus-within:outline-none text-sm rounded-lg block"
				>
					{#if types}
						{#each types as type (type.id)}
							{#if type.name === 'Chưa xác định'}
								<option
									class="block bg-base-200 md:text-base text-xs px-4 py-2"
									selected
									value={type.id}>{type.name}</option
								>
							{:else}
								<option class="block bg-base-200 md:text-base text-xs px-4 py-2" value={type.id}>
									{type.name}
								</option>
							{/if}
						{/each}
					{:else}
						<option class="block bg-base-200 md:text-base text-xs px-4 py-2" value="Loading">
							Đang tải
						</option>
					{/if}
				</select>
			</div>
			<div class="form-control mb-3 basis-1/2">
				<div class="h-[28px]" />
				<button
					type="button"
					on:click={() => {
						showTopics = !showTopics;
						handleSetTopic();
					}}
					class="input input-bordered md:input-md input-sm w-full flex justify-center items-center focus:outline-none"
					class:border-green-600={showTopics}
				>
					Thêm chủ đề
					<span class="ml-2">
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
					</span>
				</button>
			</div>
		</div>
		{#if showTopics}
			<div class="topics px-3 py-2 bg-base-200 flex flex-wrap rounded-md col-span-3">
				{#each topics as topic, index (topic.name)}
					<button
						type="button"
						class="topic-item md:px-3 px-2 md:py-2 py-1 md:m-2 m-1 md:text-base text-xs text-slate-700 flex justify-between items-center w-fit rounded-full border-2 border-green-600 cursor-pointer transition"
						class:bg-green-500={topic.selected}
						class:text-white={topic.selected}
						on:click={() => toggleSelected(index)}
					>
						<span class="pr-1 text-sm">{topic.name}</span>
					</button>
				{/each}
			</div>
		{/if}
		<div class="h-[1px] w-full border border-gray-200 md:mt-8 mt-2 col-span-3" />
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
					class=" btn md:btn-md btn-sm btn-accent text-white mr-2"
				>
					Hoàn tất
				</button>
			{/if}
			<button
				type="reset"
				class="btn md:btn-md btn-sm btn-outline btn-error"
				on:click={() => resetSelectedTopics()}
			>
				Loại bỏ
			</button>
		</div>
		<input type="text" class="hidden" name="topicId" id="topics" bind:value={topicIds} />
		<input type="text" class="hidden" name="id" id="id" bind:value={currentSentence.id} />
	</form>
</div>
