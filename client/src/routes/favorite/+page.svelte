<script lang="ts">
	import tree from '$lib/assets/icons/topics/tree.png';
	import social from '$lib/assets/icons/topics/social.png';
	import culture from '$lib/assets/icons/topics/culture.png';
	import exciting from '$lib/assets/icons/topics/exciting.png';
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
</script>

<div class="max-w-screen-xl w-screen mx-auto text-left px-2 py-8">
	<div class="items-center mb-4">
		<h1 class="h1 text-2xl text-title">Từ điển của bạn</h1>
	</div>
	<div class="h-[1px] w-full border border-gray-200" />

	<div class="flex justify-between items-center mb-4">
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
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label tabindex="0" class="btn btn-ghost m-1"
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
				</span></label
			>
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<ul tabindex="0" class=" dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
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
					<p class="text-left">Thêm</p>
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
						class="w-6 h-6 fill-red-500 text-red-500"
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
				<img src={culture} alt={culture} class="h-[50px] w-[50px] inline-block" />
				<div class="inline-block ml-4">
					<div class="flex justify-center items-center">
						<p class="mr-2 text-green-600 text-xl font-semibold">Push</p>
						<span class="mr-2 text-blue-600">/æd/</span>
					</div>
					<p class="text-left">Đẩy</p>
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
						class="w-6 h-6 fill-red-500 text-red-500"
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
				<img src={exciting} alt={exciting} class="h-[50px] w-[50px] inline-block" />
				<div class="inline-block ml-4">
					<div class="flex justify-center items-center">
						<p class="mr-2 text-green-600 text-xl font-semibold">make</p>
						<span class="mr-2 text-blue-600">/æd/</span>
					</div>
					<p class="text-left">Làm</p>
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
						class="w-6 h-6 fill-red-500 text-red-500"
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
			<h3 class="font-bold text-2xl text-title mb-2">Chi Tiết Từ "Add"</h3>
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
