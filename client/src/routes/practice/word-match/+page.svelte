<script lang="ts">
	import tree from '$lib/assets/icons/topics/tree.png';
	import social from '$lib/assets/icons/topics/social.png';

	import wordMatch from '$lib/assets/icons/games/word-match.png';
	import Speaker from '../../../components/Speaker.svelte';

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

	let myModal33: HTMLDialogElement;

	let word: string = 'Test';
	let isCheck: boolean = false;

	const userSplitId = 'userSplitId';

	let userSplit: { index: number; ch: string }[] = [];

	function splitWord(word = '') {
		let splitArr: string[] = [];
		let failFlag = 1;

		while (failFlag) {
			// Prevent infinite loop
			if (failFlag >= 50) {
				break;
			}

			splitArr = word.split('').sort(() => Math.random() - 0.5);

			if (splitArr.join('') === word) {
				failFlag++;
			} else {
				failFlag = 0;
				break;
			}
		}

		return splitArr;
	}

	const originSplit: string[] = splitWord(word.toLocaleLowerCase());

	const handleSelectCharacter = (index: number): void => {
		console.log('click');

		const newUserSplit = [...userSplit, { index, ch: originSplit[index] }];
		userSplit = newUserSplit;
		console.log(newUserSplit);

		if (newUserSplit.length === word.length) {
			isCheck = true;
		}
	};

	const handleReturnCharacter = (index: number): void => {
		if (isCheck) {
			isCheck = false;
		}

		const newUserSplit = userSplit.slice(0, index);
		userSplit = newUserSplit;
	};

	$: isSelected = (index: number) => {
		return userSplit.findIndex((item) => index === item.index) !== -1;
	};

	const correctClass = (item: { index: number; ch: string }, key: number) => {
		return item.ch === word.toLowerCase()[key] ? 'right' : 'wrong';
	};
</script>

<div class="absolute">
	<dialog id="" class="modal">
		<div class="modal-box max-w-3xl">
			<h3 class="font-bold text-xl text-orange-600 mb-2">Lựa chọn gói từ vựng</h3>
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
						<option class="block bg-base-200 text-[16px] px-4 py-2" value="V">Verb - Động từ</option
						>
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
						<option class="block bg-base-200 text-[16px] px-4 py-2" selected value="0">Không</option
						>
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
						<option class="block bg-base-200 text-[16px] px-4 py-2" value="9"
							>Ngành Marketing</option
						>
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
</div>

<div class="flex flex-col justify-center items-center h-full">
	<div
		class="practice grid grid-flow-row w-5/6 shadow-lg py-6 px-9 border my-auto grid-cols-1 h-[85%] rounded-lg"
	>
		<div class=" flex justify-start items-center">
			<img src={wordMatch} alt={wordMatch} class="h-[56px] w-[56px]" />
			<h1 class="text-2xl text-[#dd9210]">GHÉP TỪ</h1>
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

		<div class="grid text-center grid-flow-row grid-rows-3">
			<!-- Selected -->
			<div class="flex justify-center items-center">
				{#each userSplit as { index, ch }, idx (index)}
					<button
						class="h-[42px] w-[42px] bg-base-200 rounded-lg shadow-md m-[6px] leading-10 text-lg cursor-pointer hover:bg-base-300"
						on:click={() => handleReturnCharacter(idx)}
					>
						{ch}
					</button>
				{/each}
			</div>

			<div class="flex justify-between items-start px-10 relative">
				<span class="absolute left-0 rotate-180 cursor-pointer"
					><svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="currentColor"
						class="w-6 h-6 fill-[#04a359] hover:fill-[rgb(0,129,69)]"
					>
						<path
							d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z"
						/>
					</svg>
				</span>
				<span class="absolute right-0 cursor-pointer"
					><svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="currentColor"
						class="w-6 h-6 fill-[#04a359] hover:fill-[rgb(0,129,69)]"
					>
						<path
							d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z"
						/>
					</svg>
				</span>

				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<div
					class="tooltip tooltip-bottom"
					on:click={() => myModal33.showModal()}
					data-tip="Xem đáp án"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="w-6 h-6 fill-yellow-400 text-yellow-400"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
						/>
					</svg>
				</div>

				<!-- Answer -->
				<div class="absolute">
					<dialog bind:this={myModal33} id="my_modal_33" class="modal text-left">
						<div class="modal-box">
							<form method="dialog">
								<button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-xl"
									>✕</button
								>
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
								Thuộc chuyên ngành: <span class="font-normal"
									>Công nghệ thực phẩm (Food Technology)</span
								>
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
				</div>

				<div class="">
					<p class="text-xl font-semibold mb-2">Test</p>
					<p class="text-red-500">Sai rồi</p>
				</div>
				<Speaker />
			</div>

			<!-- Select to answer -->
			<div class="flex justify-center items-center">
				{#each originSplit as ch, index (index)}
					{#if isSelected(index)}
						<button
							class="h-[42px] w-[42px] bg-base-200 rounded-lg shadow-md m-[6px] leading-10 text-lg hover:bg-base-300 cursor-not-allowed"
							disabled
						/>
					{:else}
						<button
							on:click={() => handleSelectCharacter(index)}
							class="h-[42px] w-[42px] bg-base-200 rounded-lg shadow-md m-[6px] leading-10 text-lg cursor-pointer hover:bg-base-300"
						>
							{ch}
						</button>
					{/if}
				{/each}
			</div>
		</div>
	</div>
</div>

<style>
	.practice {
		grid-template-rows: 2fr 1fr 17fr;
	}
</style>
