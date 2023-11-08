<script lang="ts">
	import tree from '$lib/assets/icons/topics/tree.png';
	import social from '$lib/assets/icons/topics/social.png';
	import { enhance } from '$app/forms';

	let showTopics = false;
	let showPhonetic = false;

	let phoneticValue = '';
	let topics = [
		{ id: 1, name: 'Thực vật', selected: false, image: tree },
		{ id: 2, name: 'Đời sống', selected: false, image: social }
	];

	function toggleSelected(index: number) {
		topics[index].selected = !topics[index].selected;
	}

	// $: if (files) {
	// 	// Note that `files` is of type `FileList`, not an Array:
	// 	// https://developer.mozilla.org/en-US/docs/Web/API/FileList
	// 	console.log(files);
	// }

	function handleInputFocus() {
		showPhonetic = !showPhonetic;
	}

	let imgIlustrate: any = null;

	const handleFileInput: svelte.JSX.EventHandler<Event, HTMLInputElement> = (e) => {
		if (e.currentTarget.files == null) return; // files can be null, handle however appropriate

		imgIlustrate = e.currentTarget.files[0];
		console.log(URL.createObjectURL(imgIlustrate));
	};
</script>

<div class="shadow-lg px-7 py-8 rounded-lg my-10">
	<h1 class="text-3xl text-title font-bold">Thêm từ mới của bạn vào CTUE</h1>
	<div class="h-[1px] w-full border border-gray-200 my-4" />
	<form
		method="post"
		use:enhance
		enctype="multipart/form-data"
		action="?/contribute"
		class="grid grid-cols-3"
	>
		<div class="form-control w-full max-w-sm mb-3">
			<label class="label" for="new-word">
				<span class="label-text">Từ mới (*)</span>
			</label>
			<input
				type="text"
				placeholder="..."
				class="input input-bordered w-full max-w-sm focus:border-green-600 focus:outline-none"
				id="new-word"
				name="newWord"
			/>
		</div>
		<div class="form-control w-full max-w-sm mb-3">
			<label class="label" for="mean">
				<span class="label-text">Nghĩa của từ (*)</span>
			</label>
			<input
				type="text"
				placeholder="..."
				class="input input-bordered w-full max-w-sm focus:border-green-600 focus:outline-none"
				id="mean"
				name="mean"
			/>
		</div>
		<div class="form-control w-full max-w-sm mb-3">
			<label class="label" for="phonetic">
				<span class="label-text">Phiên âm (*)</span>
			</label>
			<input
				type="text"
				placeholder="..."
				class="input-phonetic input input-bordered w-full max-w-sm focus:border-green-600 focus:outline-none"
				id="phonetic"
				name="phonetic"
				on:focus={handleInputFocus}
				bind:value={phoneticValue}
			/>
		</div>

		<div
			class:hidden={!showPhonetic}
			class="col-span-3 rounded-md p-3 bg-white shadow-lg mb-4 flex flex-row gap-2 flex-wrap"
		>
			<button
				type="button"
				class:hidden={showPhonetic}
				on:click={() => (phoneticValue += "'")}
				class="p-2 max-w-[90px] w-full text-center h-10 bg-base-200 hover:bg-green-600 hover:text-white rounded-md cursor-pointer"
				>'</button
			>

			<button
				type="button"
				on:click={() => (phoneticValue += 'ɪ')}
				class="p-2 max-w-[90px] w-full text-center h-10 bg-base-200 hover:bg-green-600 hover:text-white rounded-md cursor-pointer"
				>ɪ</button
			>

			<button
				type="button"
				on:click={() => (phoneticValue += 'iː')}
				class="p-2 max-w-[90px] w-full text-center h-10 bg-base-200 hover:bg-green-600 hover:text-white rounded-md cursor-pointer"
				>iː</button
			>

			<button
				type="button"
				on:click={() => (phoneticValue += 'ʊ')}
				class="p-2 max-w-[90px] w-full text-center h-10 bg-base-200 hover:bg-green-600 hover:text-white rounded-md cursor-pointer"
				>ʊ</button
			>

			<button
				type="button"
				on:click={() => (phoneticValue += 'uː')}
				class="p-2 max-w-[90px] w-full text-center h-10 bg-base-200 hover:bg-green-600 hover:text-white rounded-md cursor-pointer"
				>uː</button
			>

			<button
				type="button"
				on:click={() => (phoneticValue += 'e')}
				class="p-2 max-w-[90px] w-full text-center h-10 bg-base-200 hover:bg-green-600 hover:text-white rounded-md cursor-pointer"
				>e</button
			>

			<button
				type="button"
				on:click={() => (phoneticValue += 'ə')}
				class="p-2 max-w-[90px] w-full text-center h-10 bg-base-200 hover:bg-green-600 hover:text-white rounded-md cursor-pointer"
				>ə</button
			>

			<button
				type="button"
				on:click={() => (phoneticValue += 'ɜː')}
				class="p-2 max-w-[90px] w-full text-center h-10 bg-base-200 hover:bg-green-600 hover:text-white rounded-md cursor-pointer"
				>ɜː</button
			>

			<button
				type="button"
				on:click={() => (phoneticValue += 'ɔː')}
				class="p-2 max-w-[90px] w-full text-center h-10 bg-base-200 hover:bg-green-600 hover:text-white rounded-md cursor-pointer"
				>ɔː</button
			>

			<button
				type="button"
				on:click={() => (phoneticValue += 'æ')}
				class="p-2 max-w-[90px] w-full text-center h-10 bg-base-200 hover:bg-green-600 hover:text-white rounded-md cursor-pointer"
				>æ</button
			>

			<button
				type="button"
				on:click={() => (phoneticValue += 'ʌ')}
				class="p-2 max-w-[90px] w-full text-center h-10 bg-base-200 hover:bg-green-600 hover:text-white rounded-md cursor-pointer"
				>ʌ</button
			>

			<button
				type="button"
				on:click={() => (phoneticValue += 'aː')}
				class="p-2 max-w-[90px] w-full text-center h-10 bg-base-200 hover:bg-green-600 hover:text-white rounded-md cursor-pointer"
				>aː</button
			>

			<button
				type="button"
				on:click={() => (phoneticValue += 'ɒ')}
				class="p-2 max-w-[90px] w-full text-center h-10 bg-base-200 hover:bg-green-600 hover:text-white rounded-md cursor-pointer"
				>ɒ</button
			>

			<button
				type="button"
				on:click={() => (phoneticValue += 'ɪə')}
				class="p-2 max-w-[90px] w-full text-center h-10 bg-base-200 hover:bg-green-600 hover:text-white rounded-md cursor-pointer"
				>ɪə</button
			>

			<button
				type="button"
				on:click={() => (phoneticValue += 'eɪ')}
				class="p-2 max-w-[90px] w-full text-center h-10 bg-base-200 hover:bg-green-600 hover:text-white rounded-md cursor-pointer"
				>eɪ</button
			>

			<button
				type="button"
				on:click={() => (phoneticValue += 'ʊə')}
				class="p-2 max-w-[90px] w-full text-center h-10 bg-base-200 hover:bg-green-600 hover:text-white rounded-md cursor-pointer"
				>ʊə</button
			>

			<button
				type="button"
				on:click={() => (phoneticValue += 'ɔɪ')}
				class="p-2 max-w-[90px] w-full text-center h-10 bg-base-200 hover:bg-green-600 hover:text-white rounded-md cursor-pointer"
				>ɔɪ</button
			>

			<button
				type="button"
				on:click={() => (phoneticValue += 'əʊ')}
				class="p-2 max-w-[90px] w-full text-center h-10 bg-base-200 hover:bg-green-600 hover:text-white rounded-md cursor-pointer"
				>əʊ</button
			>

			<button
				type="button"
				on:click={() => (phoneticValue += 'aɪ')}
				class="p-2 max-w-[90px] w-full text-center h-10 bg-base-200 hover:bg-green-600 hover:text-white rounded-md cursor-pointer"
				>aɪ</button
			>

			<button
				type="button"
				on:click={() => (phoneticValue += 'aʊ')}
				class="p-2 max-w-[90px] w-full text-center h-10 bg-base-200 hover:bg-green-600 hover:text-white rounded-md cursor-pointer"
				>aʊ</button
			>

			<button
				type="button"
				on:click={() => (phoneticValue += 'tʃ')}
				class="p-2 max-w-[90px] w-full text-center h-10 bg-base-200 hover:bg-green-600 hover:text-white rounded-md cursor-pointer"
				>tʃ</button
			>

			<button
				type="button"
				on:click={() => (phoneticValue += 'dʒ')}
				class="p-2 max-w-[90px] w-full text-center h-10 bg-base-200 hover:bg-green-600 hover:text-white rounded-md cursor-pointer"
				>dʒ</button
			>

			<button
				type="button"
				on:click={() => (phoneticValue += 'θ')}
				class="p-2 max-w-[90px] w-full text-center h-10 bg-base-200 hover:bg-green-600 hover:text-white rounded-md cursor-pointer"
				>θ</button
			>

			<button
				type="button"
				on:click={() => (phoneticValue += 'ð')}
				class="p-2 max-w-[90px] w-full text-center h-10 bg-base-200 hover:bg-green-600 hover:text-white rounded-md cursor-pointer"
				>ð</button
			>

			<button
				type="button"
				on:click={() => (phoneticValue += 'ʃ')}
				class="p-2 max-w-[90px] w-full text-center h-10 bg-base-200 hover:bg-green-600 hover:text-white rounded-md cursor-pointer"
				>ʃ</button
			>

			<button
				type="button"
				on:click={() => (phoneticValue += 'ŋ')}
				class="p-2 max-w-[90px] w-full text-center h-10 bg-base-200 hover:bg-green-600 hover:text-white rounded-md cursor-pointer"
				>ŋ</button
			>

			<button
				type="button"
				on:click={() => (phoneticValue += 'ʒ')}
				class="p-2 max-w-[90px] w-full text-center h-10 bg-base-200 hover:bg-green-600 hover:text-white rounded-md cursor-pointer"
				>ʒ</button
			>

			<button
				type="button"
				on:click={() => (phoneticValue += 'ʃ')}
				class="p-2 max-w-[90px] w-full text-center h-10 bg-base-200 hover:bg-green-600 hover:text-white rounded-md cursor-pointer"
				>ʃ</button
			>

			<button
				type="button"
				on:click={handleInputFocus}
				class=" btn-outline btn-error p-2 max-w-[90px] w-full text-center h-10 border rounded-md cursor-pointer"
				>Đóng</button
			>
		</div>

		<div class="mb-3 form-control">
			<label for="types" class="block mb-2 text-sm">Loại từ (*)</label>
			<select
				id="types"
				name="types"
				class="select select-bordered text-[16px] h-12 border bg-gray-50 border-gray-300 focus:border-green-600 focus-visible:border-green-600 focus-within:outline-none text-sm rounded-lg block w-full max-w-sm p-2.5"
			>
				<option class="block bg-base-200 text-[16px] px-4 py-2" selected value="N"
					>Noun - Danh từ</option
				>
				<option class="block bg-base-200 text-[16px] px-4 py-2" value="Adj"
					>Adjective - Tính từ</option
				>
				<option class="block bg-base-200 text-[16px] px-4 py-2" value="Adv"
					>Adverb - Trạng từ</option
				>
				<option class="block bg-base-200 text-[16px] px-4 py-2" value="V">Verb - Động từ</option>
				<option class="block bg-base-200 text-[16px] px-4 py-2" value="Pro">Pronoun - Đại từ</option
				>
				<option class="block bg-base-200 text-[16px] px-4 py-2" value="Con"
					>Conjunction - Liên từ</option
				>
				<option class="block bg-base-200 text-[16px] px-4 py-2" value="Pre"
					>Preposition - Giới từ</option
				>
				<option class="block bg-base-200 text-[16px] px-4 py-2" value="Det"
					>Determiners - Hạn định từ</option
				>
			</select>
		</div>

		<div class="mb-3">
			<label for="level" class="block mb-2 text-sm">Bặc của từ (*)</label>
			<select
				id="level"
				name="level"
				class="select select-bordered text-[16px] h-12 border bg-gray-50 border-gray-300 focus:border-green-600 focus-visible:border-green-600 focus-within:outline-none text-sm rounded-lg block w-full max-w-sm p-2.5"
			>
				<option class="block bg-base-200 text-[16px] px-4 py-2" selected value="U"
					>Chưa xác định</option
				>
				<option class="block bg-base-200 text-[16px] px-4 py-2" value="A1">A1</option>
				<option class="block bg-base-200 text-[16px] px-4 py-2" value="A2">A2</option>
				<option class="block bg-base-200 text-[16px] px-4 py-2" value="B1">B1</option>
				<option class="block bg-base-200 text-[16px] px-4 py-2" value="B2">B2</option>
				<option class="block bg-base-200 text-[16px] px-4 py-2" value="C1">C1</option>
				<option class="block bg-base-200 text-[16px] px-4 py-2" value="C2">C2</option>
			</select>
		</div>

		<div class="mb-3">
			<label for="specialization" class="block mb-2 text-sm">Thuộc chuyên ngành (*)</label>
			<select
				id="specialization"
				name="specialization"
				class=" select select-bordered text-[16px] h-12 border bg-gray-50 border-gray-300 focus:border-green-600 focus-visible:border-green-600 focus-within:outline-none text-sm rounded-lg block w-full max-w-sm p-2.5"
			>
				<option class="block bg-base-200 text-[16px] px-4 py-2" selected value="0">Không</option>
				<option class="block bg-base-200 text-[16px] px-4 py-2" value="1"
					>Công nghệ sinh học (Biotechnology)</option
				>
				<option class="block bg-base-200 text-[16px] px-4 py-2" value="2"
					>Công nghệ thông tin (Information Technology)</option
				>
				<option class="block bg-base-200 text-[16px] px-4 py-2" value="3"
					>Công nghệ thực phẩm (Food Technology)</option
				>
				<option class="block bg-base-200 text-[16px] px-4 py-2" value="4"
					>Giải trí (Entertainment)</option
				>
				<option class="block bg-base-200 text-[16px] px-4 py-2" value="5"
					>Kinh tế học (Economics)</option
				>
				<option class="block bg-base-200 text-[16px] px-4 py-2" value="6"
					>Kế toán (Accounting)</option
				>
				<option class="block bg-base-200 text-[16px] px-4 py-2" value="7"
					>Kỹ thuật hoá học (Chemical Engineering)</option
				>
				<option class="block bg-base-200 text-[16px] px-4 py-2" value="8"
					>Mỹ thuật (Fine Arts Industry)</option
				>
				<option class="block bg-base-200 text-[16px] px-4 py-2" value="9">Ngành Marketing</option>
				<option class="block bg-base-200 text-[16px] px-4 py-2" value="10"
					>Quản trị khách sạn (Hotel Management)</option
				>
				<option class="block bg-base-200 text-[16px] px-4 py-2" value="11"
					>Quản trị kinh doanh (Business Adminstration)</option
				>
				<option class="block bg-base-200 text-[16px] px-4 py-2" value="12"
					>Quản trị nhân lực (Human Resource Management)</option
				>
				<option class="block bg-base-200 text-[16px] px-4 py-2" value="13"
					>Thiết kế (Design UI/UX)</option
				>
				<option class="block bg-base-200 text-[16px] px-4 py-2" value="14"
					>Thương mại quốc tế (International Trade)</option
				>
				<option class="block bg-base-200 text-[16px] px-4 py-2" value="15"
					>Thương mại điện tử (E-Commerce)</option
				>
				<option class="block bg-base-200 text-[16px] px-4 py-2" value="16"
					>Tiếng Anh thương mại (Business English)</option
				>
				<option class="block bg-base-200 text-[16px] px-4 py-2" value="17"
					>Tài chính ngân hàng (Finance & Banking)</option
				>
				<option class="block bg-base-200 text-[16px] px-4 py-2" value="18"
					>Văn hoá học (Culturology)</option
				>
				<option class="block bg-base-200 text-[16px] px-4 py-2" value="19"
					>Xây dựng (Construction Industry)</option
				>
				<option class="block bg-base-200 text-[16px] px-4 py-2" value="20"
					>Xã hội học (Sociology)</option
				>
			</select>
		</div>

		<div class="form-control w-full max-w-sm mb-3">
			<label class="label" for="examples">
				<span class="label-text">Câu ví dụ</span>
			</label>
			<input
				type="text"
				placeholder="..."
				class="input input-bordered w-full max-w-sm focus:border-green-600 focus:outline-none"
				id="examples"
				name="examples"
			/>
		</div>

		<div class="form-control w-full max-w-sm mb-3">
			<label class="label" for="synonymous">
				<span class="label-text">Các từ đồng nghĩa</span>
			</label>
			<input
				type="text"
				placeholder="..."
				class="input input-bordered w-full max-w-sm focus:border-green-600 focus:outline-none"
				id="synonymous"
				name="synonymous"
			/>
		</div>

		<div class="form-control w-full max-w-sm mb-3">
			<label class="label" for="opposite">
				<span class="label-text">Các từ trái nghĩa</span>
			</label>
			<input
				type="text"
				placeholder="..."
				class="input input-bordered w-full max-w-sm focus:border-green-600 focus:outline-none"
				id="opposite"
				name="opposite"
			/>
		</div>

		<div class="form-control w-full max-w-sm mb-3">
			<label class="label" for="note">
				<span class="label-text">Ghi chú</span>
			</label>
			<input
				type="text"
				placeholder="..."
				class="input input-bordered w-full max-w-sm focus:border-green-600 focus:outline-none"
				id="note"
				name="note"
			/>
		</div>

		<div class="form-control w-full max-w-sm mb-3">
			<div class="h-[36px]" />

			{#if imgIlustrate instanceof File}
				<div class="h-16 input input-bordered flex justify-between items-center">
					<img class="h-14 w-14" src={URL.createObjectURL(imgIlustrate)} alt="Preview" />
					<span class="truncate">{imgIlustrate.name}</span>
					<button type="button" on:click={() => (imgIlustrate = null)}
						><svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="w-6 h-6"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
						</svg>
					</button>
				</div>
			{/if}
			<label class="" class:hidden={imgIlustrate instanceof File} for="img-ilustrate">
				<div
					class="flex justify-center items-center w-full max-w-sm input input-bordered hover:bg-gray-100 hover:cursor-pointer"
				>
					<div class="flex">
						<span class="label-text mr-3">Thêm ảnh minh hoạ</span>
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
								d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
							/>
						</svg>
					</div>
					<input
						bind:value={imgIlustrate}
						on:change={handleFileInput}
						type="file"
						accept="image/png, image/jpeg"
						class="hidden"
						name="imgIlustrate"
						id="img-ilustrate"
					/>
				</div>
			</label>
		</div>

		<div class="form-control w-full max-w-sm mb-3">
			<div class="h-[36px]" />
			<button
				type="button"
				on:click={() => (showTopics = !showTopics)}
				class="input input-bordered w-full max-w-sm flex justify-center items-center border bg-gray-50 border-gray-300 focus:border-green-600 focus-visible:border-green-600 focus-within:outline-none"
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
						type="button"
						class="topic-item px-2 py-1 m-2 flex justify-between items-center w-fit rounded-full border border-green-600 cursor-pointer"
						class:bg-green-500={topic.selected}
						class:text-white={topic.selected}
						on:click={() => toggleSelected(index)}
					>
						<img class="mr-1" src={topic.image} alt={topic.name} />
						<span class="pr-1 text-sm">{topic.name}</span>
					</button>
				{/each}
			</div>
			<input type="text" id="topics" name="topics" bind:value={topics} class="hidden" />
		{/if}
		<div class="h-[1px] w-full border border-gray-200 mt-8 col-span-3" />

		<div class="mt-4 col-span-3 text-right">
			<button type="reset" class="btn btn-outline btn-error mr-2">Reset</button>

			<button type="submit" class="btn btn-accent text-white">Thêm từ</button>
		</div>
	</form>
</div>
