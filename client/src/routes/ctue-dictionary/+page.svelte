<script lang="ts">
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

	function toggleSelected(index: number) {
		topics[index].selected = !topics[index].selected;
	}

	let myModal4: HTMLDialogElement;
	let myModal5: HTMLDialogElement;
</script>

<div class="max-w-screen-xl w-screen mx-auto text-left px-2 py-8">
	<div class="flex justify-between items-center mb-4">
		<h1 class="h1 text-2xl text-orange-600">Từ điển CTUE</h1>

		<!-- You can open the modal using ID.showModal() method -->
		<button class="" on:click={() => myModal5.showModal()}
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
		<dialog bind:this={myModal5} id="my_modal_5" class="modal">
			<div class="modal-box w-11/12 max-w-5xl">
				<h3 class="font-bold text-xl text-orange-600 mb-2">Gói từ vựng</h3>
				<div class="h-[1px] w-full border border-gray-200" />

				<div class="grid grid-cols-2 gap-2 mt-4">
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
							<option class="block bg-base-200 text-[16px] px-4 py-2" value="V"
								>Verb - Động từ</option
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
							<option class="block bg-base-200 text-[16px] px-4 py-2" selected value="0"
								>Không</option
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

	<div class="flex justify-between items-center">
		<input
			class="shadow appearance-none border rounded w-[450px] py-2 px-3 text-gray-700 focus:border-green-500 leading-tight focus:outline-none focus:shadow-outline"
			id="find-word"
			type="text"
			placeholder="Nhập từ..."
		/>
		<!-- <div class="my-4">
			<button
				class="btn outline-none border-none bg-transparent hover:bg-transparent hover:opacity-100 opacity-70"
				>Sắp xếp <span
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
							d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
						/>
					</svg>
				</span></button
			>
		</div> -->
		<div class="dropdown">
			<!-- svelte-ignore a11y-positive-tabindex -->
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label tabindex="11" class="btn btn-ghost m-1"
				>Sắp xếp <span>
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
							d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
						/>
					</svg>
				</span></label
			>
			<!-- svelte-ignore a11y-positive-tabindex -->
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<ul tabindex="11" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
				<li><button>A-Z</button></li>
				<li><button>Z-A</button></li>
				<li><button>Random</button></li>
			</ul>
		</div>
	</div>

	<div class="border rounded-md p-4">
		<div class="flex border-b-2 hover:border-green-600 mb-4">
			<button class="flex hover:cursor-pointer grow" on:click={() => myModal4.showModal()}>
				<img src={tree} alt={tree} class="h-[50px] w-[50px] inline-block" />
				<div class="inline-block ml-4">
					<div class="flex justify-center items-center">
						<p class="mr-2 text-green-600 text-xl font-semibold">add</p>
						<span class="mr-2 text-blue-600">/æd/</span>
					</div>
					<p>Thêm</p>
				</div>
			</button>
			<div class="grow-0">
				<Speaker />
				<button class="hover:scale-110 transition-all ml-2"
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
							d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
						/>
					</svg>
				</button>
			</div>
		</div>
		<div class="flex border-b-2 hover:border-green-600 mb-4">
			<button class="flex hover:cursor-pointer grow" on:click={() => myModal4.showModal()}>
				<img src={tree} alt={tree} class="h-[50px] w-[50px] inline-block" />
				<div class="inline-block ml-4">
					<div class="flex justify-center items-center">
						<p class="mr-2 text-green-600 text-xl font-semibold">add</p>
						<span class="mr-2 text-blue-600">/æd/</span>
					</div>
					<p>Thêm</p>
				</div>
			</button>
			<div class="grow-0">
				<Speaker />
				<button class="hover:scale-110 transition-all ml-2"
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
							d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
						/>
					</svg>
				</button>
			</div>
		</div>
		<div class="flex border-b-2 hover:border-green-600 mb-4">
			<button class="flex hover:cursor-pointer grow" on:click={() => myModal4.showModal()}>
				<img src={tree} alt={tree} class="h-[50px] w-[50px] inline-block" />
				<div class="inline-block ml-4">
					<div class="flex justify-center items-center">
						<p class="mr-2 text-green-600 text-xl font-semibold">add</p>
						<span class="mr-2 text-blue-600">/æd/</span>
					</div>
					<p>Thêm</p>
				</div>
			</button>
			<div class="grow-0">
				<Speaker />
				<button class="hover:scale-110 transition-all ml-2"
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
							d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
						/>
					</svg>
				</button>
			</div>
		</div>
	</div>

	<!-- You can open the modal using ID.showModal() method -->
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
</div>
