<script>
	/**
	 * @type {any}
	 */
	import tree from '$lib/assets/icons/topics/tree.png';
	import social from '$lib/assets/icons/topics/social.png';
	import { onMount } from 'svelte';

	let files = null;
	let showTopics = false;
	let showPhonetic = false;

	let phoneticValue = '';
	let topics = [
		{ id: 1, name: 'Thực vật', selected: false, image: tree },
		{ id: 2, name: 'Đời sống', selected: false, image: social }
	];

	function toggleSelected(index) {
		topics[index].selected = !topics[index].selected;
	}

	$: if (files) {
		// Note that `files` is of type `FileList`, not an Array:
		// https://developer.mozilla.org/en-US/docs/Web/API/FileList
		console.log(files);
	}

	function handleInputFocus() {
		showPhonetic = !showPhonetic;
	}

	function handleFileInput(event) {
		files = event.target.files[0];
	}
</script>

<div class="max-w-screen-xl w-screen mx-auto text-left px-2 py-8">
	<div class="">
		<button
			class="uppercase outline-none border-none bg-green-600 hover:bg-green-700 px-5 py-2 rounded-tr-md rounded-tl-md text-white font-semibold"
			>Thêm từ</button
		>
		<button
			class="uppercase outline-none border-none px-5 py-2 rounded-tr-md rounded-tl-md text-gray-500 font-semibold"
			>Thêm câu</button
		>
	</div>
	<div class="h-[1px] w-full border border-gray-200" />

	<div class="shadow-lg px-7 py-8 rounded-lg my-10">
		<h1 class="text-3xl text-orange-500 font-bold">Thêm từ mới của bạn vào CTUE</h1>
		<div class="h-[1px] w-full border border-gray-200 my-4" />
		<form action="" class="grid grid-cols-3">
			<div class="form-control w-full max-w-sm mb-3">
				<label class="label" for="new-word">
					<span class="label-text">Từ mới (*)</span>
				</label>
				<input
					type="text"
					placeholder="..."
					class="input input-bordered w-full max-w-sm focus:border-green-600 focus:outline-none"
					id="new-word"
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
					on:focus={handleInputFocus}
					bind:value={phoneticValue}
				/>
			</div>

			{#if showPhonetic}
				<div
					class="col-span-3 rounded-md p-3 bg-white shadow-lg mb-4 flex flex-row gap-2 flex-wrap"
				>
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<span
						on:click={() => (phoneticValue += "'")}
						class="p-2 max-w-[90px] w-full text-center h-10 bg-base-200 hover:bg-green-600 hover:text-white rounded-md cursor-pointer"
						>'</span
					>
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<span
						on:click={() => (phoneticValue += 'ɪ')}
						class="p-2 max-w-[90px] w-full text-center h-10 bg-base-200 hover:bg-green-600 hover:text-white rounded-md cursor-pointer"
						>ɪ</span
					>
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<span
						on:click={() => (phoneticValue += 'iː')}
						class="p-2 max-w-[90px] w-full text-center h-10 bg-base-200 hover:bg-green-600 hover:text-white rounded-md cursor-pointer"
						>iː</span
					>
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<span
						on:click={() => (phoneticValue += 'ʊ')}
						class="p-2 max-w-[90px] w-full text-center h-10 bg-base-200 hover:bg-green-600 hover:text-white rounded-md cursor-pointer"
						>ʊ</span
					>
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<span
						on:click={() => (phoneticValue += 'uː')}
						class="p-2 max-w-[90px] w-full text-center h-10 bg-base-200 hover:bg-green-600 hover:text-white rounded-md cursor-pointer"
						>uː</span
					>
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<span
						on:click={() => (phoneticValue += 'e')}
						class="p-2 max-w-[90px] w-full text-center h-10 bg-base-200 hover:bg-green-600 hover:text-white rounded-md cursor-pointer"
						>e</span
					>
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<span
						on:click={() => (phoneticValue += 'ə')}
						class="p-2 max-w-[90px] w-full text-center h-10 bg-base-200 hover:bg-green-600 hover:text-white rounded-md cursor-pointer"
						>ə</span
					>
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<span
						on:click={() => (phoneticValue += 'ɜː')}
						class="p-2 max-w-[90px] w-full text-center h-10 bg-base-200 hover:bg-green-600 hover:text-white rounded-md cursor-pointer"
						>ɜː</span
					>
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<span
						on:click={() => (phoneticValue += 'ɔː')}
						class="p-2 max-w-[90px] w-full text-center h-10 bg-base-200 hover:bg-green-600 hover:text-white rounded-md cursor-pointer"
						>ɔː</span
					>
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<span
						on:click={() => (phoneticValue += 'æ')}
						class="p-2 max-w-[90px] w-full text-center h-10 bg-base-200 hover:bg-green-600 hover:text-white rounded-md cursor-pointer"
						>æ</span
					>
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<span
						on:click={() => (phoneticValue += 'ʌ')}
						class="p-2 max-w-[90px] w-full text-center h-10 bg-base-200 hover:bg-green-600 hover:text-white rounded-md cursor-pointer"
						>ʌ</span
					>
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<span
						on:click={() => (phoneticValue += 'aː')}
						class="p-2 max-w-[90px] w-full text-center h-10 bg-base-200 hover:bg-green-600 hover:text-white rounded-md cursor-pointer"
						>aː</span
					>
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<span
						on:click={() => (phoneticValue += 'ɒ')}
						class="p-2 max-w-[90px] w-full text-center h-10 bg-base-200 hover:bg-green-600 hover:text-white rounded-md cursor-pointer"
						>ɒ</span
					>
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<span
						on:click={() => (phoneticValue += 'ɪə')}
						class="p-2 max-w-[90px] w-full text-center h-10 bg-base-200 hover:bg-green-600 hover:text-white rounded-md cursor-pointer"
						>ɪə</span
					>
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<span
						on:click={() => (phoneticValue += 'eɪ')}
						class="p-2 max-w-[90px] w-full text-center h-10 bg-base-200 hover:bg-green-600 hover:text-white rounded-md cursor-pointer"
						>eɪ</span
					>
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<span
						on:click={() => (phoneticValue += 'ʊə')}
						class="p-2 max-w-[90px] w-full text-center h-10 bg-base-200 hover:bg-green-600 hover:text-white rounded-md cursor-pointer"
						>ʊə</span
					>
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<span
						on:click={() => (phoneticValue += 'ɔɪ')}
						class="p-2 max-w-[90px] w-full text-center h-10 bg-base-200 hover:bg-green-600 hover:text-white rounded-md cursor-pointer"
						>ɔɪ</span
					>
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<span
						on:click={() => (phoneticValue += 'əʊ')}
						class="p-2 max-w-[90px] w-full text-center h-10 bg-base-200 hover:bg-green-600 hover:text-white rounded-md cursor-pointer"
						>əʊ</span
					>
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<span
						on:click={() => (phoneticValue += 'aɪ')}
						class="p-2 max-w-[90px] w-full text-center h-10 bg-base-200 hover:bg-green-600 hover:text-white rounded-md cursor-pointer"
						>aɪ</span
					>
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<span
						on:click={() => (phoneticValue += 'aʊ')}
						class="p-2 max-w-[90px] w-full text-center h-10 bg-base-200 hover:bg-green-600 hover:text-white rounded-md cursor-pointer"
						>aʊ</span
					>
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<span
						on:click={() => (phoneticValue += 'tʃ')}
						class="p-2 max-w-[90px] w-full text-center h-10 bg-base-200 hover:bg-green-600 hover:text-white rounded-md cursor-pointer"
						>tʃ</span
					>
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<span
						on:click={() => (phoneticValue += 'dʒ')}
						class="p-2 max-w-[90px] w-full text-center h-10 bg-base-200 hover:bg-green-600 hover:text-white rounded-md cursor-pointer"
						>dʒ</span
					>
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<span
						on:click={() => (phoneticValue += 'θ')}
						class="p-2 max-w-[90px] w-full text-center h-10 bg-base-200 hover:bg-green-600 hover:text-white rounded-md cursor-pointer"
						>θ</span
					>
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<span
						on:click={() => (phoneticValue += 'ð')}
						class="p-2 max-w-[90px] w-full text-center h-10 bg-base-200 hover:bg-green-600 hover:text-white rounded-md cursor-pointer"
						>ð</span
					>
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<span
						on:click={() => (phoneticValue += 'ʃ')}
						class="p-2 max-w-[90px] w-full text-center h-10 bg-base-200 hover:bg-green-600 hover:text-white rounded-md cursor-pointer"
						>ʃ</span
					>
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<span
						on:click={() => (phoneticValue += 'ŋ')}
						class="p-2 max-w-[90px] w-full text-center h-10 bg-base-200 hover:bg-green-600 hover:text-white rounded-md cursor-pointer"
						>ŋ</span
					>
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<span
						on:click={() => (phoneticValue += 'ʒ')}
						class="p-2 max-w-[90px] w-full text-center h-10 bg-base-200 hover:bg-green-600 hover:text-white rounded-md cursor-pointer"
						>ʒ</span
					>
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<span
						on:click={() => (phoneticValue += 'ʃ')}
						class="p-2 max-w-[90px] w-full text-center h-10 bg-base-200 hover:bg-green-600 hover:text-white rounded-md cursor-pointer"
						>ʃ</span
					>

					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<span
						on:click={handleInputFocus}
						class=" btn-outline btn-error p-2 max-w-[90px] w-full text-center h-10 border rounded-md cursor-pointer"
						>Đóng</span
					>
				</div>
			{/if}

			<div class="mb-3 form-control">
				<label for="types" class="block mb-2 text-sm">Loại từ (*)</label>
				<select
					id="types"
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
					<option class="block bg-base-200 text-[16px] px-4 py-2" value="Pro"
						>Pronoun - Đại từ</option
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
				/>
			</div>

			<div class="form-control w-full max-w-sm mb-3">
				<div class="h-[36px]" />

				{#if files}
					<div class="h-16 input input-bordered flex justify-between items-center">
						<img class="h-14 w-14" src={URL.createObjectURL(files)} alt="Preview" />
						<span class="truncate">{files.name}</span>
						<button on:click={() => (files = null)}
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
				{:else}
					<label class="" for="img-ilustrate">
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
								on:change={handleFileInput}
								type="file"
								accept="image/png, image/jpeg"
								bind:files
								class="hidden"
								id="img-ilustrate"
							/>
						</div>
					</label>
				{/if}
			</div>

			<div class="form-control w-full max-w-sm mb-3">
				<div class="h-[36px]" />
				<button
					on:click={() => (showTopics = !showTopics)}
					class="input input-bordered w-full max-w-sm flex justify-center items-center"
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
			{#if showTopics}
				<div class="topics px-3 py-6 bg-base-200 flex flex-wrap rounded-md col-span-3">
					{#each topics as topic, index (topic.name)}
						<!-- svelte-ignore a11y-click-events-have-key-events -->
						<div
							class="topic-item px-2 py-1 m-2 flex justify-between items-center w-fit rounded-full border border-green-600 cursor-pointer"
							class:bg-green-500={topic.selected}
							class:text-white={topic.selected}
							on:click={() => toggleSelected(index)}
						>
							<img class="mr-1" src={topic.image} alt={topic.name} />
							<span class="pr-1 text-sm">{topic.name}</span>
						</div>
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
</div>

<style>
	.form-control input:focus + label .label-text {
		color: green;
	}
</style>
