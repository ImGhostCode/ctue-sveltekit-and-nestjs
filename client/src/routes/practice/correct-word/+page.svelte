<script lang="ts">
	import tree from '$lib/assets/icons/topics/tree.png';
	import social from '$lib/assets/icons/topics/social.png';
	import correctWord from '$lib/assets/icons/games/correct-word.png';

	let showTopics = false;
	let topics = [
		{ id: 1, name: 'Thực vật', selected: false, image: tree },
		{ id: 2, name: 'Đời sống', selected: false, image: social },
		{ id: 3, name: 'Đời sống 2', selected: false, image: social },
		{ id: 4, name: 'Đời sống 3', selected: false, image: social },
		{ id: 5, name: 'Đời sống 4', selected: false, image: social }
	];

	function toggleSelected(index: number) {
		topics[index].selected = !topics[index].selected;
	}
</script>

<dialog id="" class="modal">
	<div class="modal-box max-w-3xl">
		<h3 class="font-bold text-xl text-title mb-2">Lựa chọn gói từ vựng</h3>
		<div class="h-[1px] w-full border border-gray-200" />

		<div class="grid grid-cols-2 gap-2 mt-4">
			<div class="mb-3 form-control">
				<label for="types" class="block mb-2 text-sm">Loại từ </label>
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
				<label for="level" class="block mb-2 text-sm">Bặc của từ </label>
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
				<label for="specialization" class="block mb-2 text-sm">Thuộc chuyên ngành </label>
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
				<div class="h-[28px]" />
				<button
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
				<div class="topics px-3 py-6 bg-base-200 flex flex-wrap rounded-md col-span-2">
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

			<div class="form-control mb-3 col-span-1">
				<label class="label" for="number-sentence">
					<span class="label-text">Số câu</span>
				</label>
				<input
					type="number"
					value="50"
					class="input input-bordered focus:border-green-600 focus:outline-none"
					id="number-sentence"
				/>
			</div>
		</div>

		<div class="h-[1px] w-full border border-gray-200" />

		<div class="modal-action">
			<form method="dialog">
				<!-- if there is a button, it will close the modal -->
				<a href="/practice"
					><button class="btn"
						><svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="w-6 h-6 inline-block"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
							/>
						</svg> Quay lại</button
					></a
				>
				<button class="btn btn-success ml-2"
					><svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="w-6 h-6 inline-block"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
						/>
					</svg>
					OK</button
				>
			</form>
		</div>
	</div>
</dialog>

<div class="flex flex-col justify-center items-center h-full">
	<div
		class="practice grid grid-flow-row w-5/6 shadow-lg py-6 px-9 border my-auto grid-cols-1 h-[85%] rounded-lg"
	>
		<div class=" flex justify-start items-center">
			<img src={correctWord} alt={correctWord} class="h-[56px] w-[56px]" />
			<h1 class="text-2xl text-[#dd9210]">HÃY CHỌN TỪ ĐÚNG</h1>
		</div>
		<!-- <div class="h-[1px] w-full border border-gray-200 my-4" /> -->

		<div class="flex justify-between items-center text-lg my-[14px]">
			<div class="">Câu <b>1</b> / <b>5</b></div>
			<div class="flex justify-center items-center font-thin">
				<b class="font-bold">0&nbsp;</b>
				Đúng
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					class="w-6 h-6 mx-1 fill-[#29a322]"
				>
					<path
						fill-rule="evenodd"
						d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
						clip-rule="evenodd"
					/>
				</svg>

				-&nbsp;<b class="font-bold">0&nbsp;</b>Sai
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					class="w-6 h-6 mx-1 fill-[#d6493c]"
				>
					<path
						fill-rule="evenodd"
						d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
						clip-rule="evenodd"
					/>
				</svg>
			</div>
		</div>

		<div class="grid text-center grid-flow-row">
			<div class="flex flex-col justify-center items-center row-span-4 text-2xl font-bold">
				Kiem tra
			</div>

			<div
				class="grid grid-cols-2 grid-rows-2 gap-10 w-full max-w-[50%] mx-auto my-0 py-6 row-span-6"
			>
				<div
					class="bg-base-200 rounded-md flex flex-col justify-center items-center p-[10px] hover:bg-base-300 hover:cursor-pointer"
				>
					<p class="text-xl">push</p>
					<span class="text-lg text-blue-800">/'ɪʌɔɪʊə/</span>
				</div>
				<div
					class="bg-base-200 rounded-md flex flex-col justify-center items-center p-[10px] hover:bg-base-300 hover:cursor-pointer"
				>
					<p class="text-xl">check</p>
					<span class="text-lg text-blue-800">/'ɪʌɔɪʊə/</span>
				</div>
				<div
					class="bg-base-200 rounded-md flex flex-col justify-center items-center p-[10px] hover:bg-base-300 hover:cursor-pointer"
				>
					<p class="text-xl">make</p>
					<span class="text-lg text-blue-800">/'ɪʌɔɪʊə/</span>
				</div>
				<div
					class="bg-base-200 rounded-md flex flex-col justify-center items-center p-[10px] hover:bg-base-300 hover:cursor-pointer"
				>
					<p class="text-xl">run</p>
					<span class="text-lg text-blue-800">/'ɪʌɔɪʊə/</span>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.practice {
		grid-template-rows: 2fr 1fr 17fr;
	}
</style>
