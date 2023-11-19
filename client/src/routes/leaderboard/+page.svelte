<script lang="ts">
	import medal from '$lib/assets/icons/medal.png';
	import type { ActionData, PageData } from './$types';

	export let data: PageData;

	let leaderboard: any = {};

	$: if (data.leaderboard) leaderboard = data.leaderboard;
</script>

<div class="max-w-screen-xl w-screen mx-auto text-left px-2 py-8 min-h-screen max-h-max">
	<div class="flex justify-center items-center my-6">
		<img src={medal} alt={medal} class="h-[50px] w-[50px]" />
		<h1 class="text-4xl font-bold text-title">BẢNG XẾP HẠNG</h1>
	</div>
	<!-- svelte-ignore a11y-label-has-associated-control -->
	<div class="dropdown dropdown-bottom dropdown-end w-full text-right mb-4">
		<label class="btn m-1 bg-sky-500 text-white hover:bg-sky-600">
			Bảng xếp hạng:&nbsp;
			<span class="text-amber-300">Tháng {data.leaderboard.currenMonth}</span>
		</label>
	</div>
	<div class="grid grid-cols-3 gap-8 h-full">
		<div class="h-[500px] border shadow-lg">
			<div class="bg-purple-600 flex justify-between px-3 py-4 rounded-sm">
				<h3 class="text-white text-lg">Top Triệu Phú CTUe Coin</h3>
				<div class="tooltip tooltip-bottom" data-tip="Top những người dùng có số coin nhiều nhất">
					<button class="text-white">
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
								d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
							/>
						</svg>
					</button>
				</div>
			</div>
			{#each leaderboard.topCoin as element, i}
				<div
					class="flex items-center my-4 mx-3 border p-2 rounded-sm"
					class:border-[#FFD700]={i + 1 == 1}
					class:border-[#B87333]={i + 1 == 2}
					class:border-[#636362]={i + 1 == 3}
					class:border-[#C0C0C0]={i + 1 == 4 || i + 1 == 5}
				>
					<img src={element.avt} alt={element.avt} class="h-[50px] w-[50px]" />
					<div class="ml-2 grow">
						<p class="text-lg">{element.name}</p>
						<p class="text-slate-500">{element.result.coin}&nbsp;$</p>
					</div>
					<div
						class="flex justify-center items-center nthTop h-10 w-10 text-center text-2xl font-bold"
						class:bg-[#FFD700]={i + 1 == 1}
						class:bg-[#B87333]={i + 1 == 2}
						class:bg-[#636362]={i + 1 == 3}
						class:bg-[#C0C0C0]={i + 1 == 4 || i + 1 == 5}
					>
						{i + 1}
					</div>
				</div>
			{/each}
		</div>
		<div class="h-[500px] border shadow-lg">
			<div class="bg-green-400 flex justify-between px-3 py-4 rounded-sm">
				<h3 class="text-white text-lg">Top Thiện Xạ</h3>
				<div
					class="tooltip tooltip-bottom"
					data-tip="Top những người dùng có số câu đúng nhiều nhất"
				>
					<button class="text-white">
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
								d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
							/>
						</svg>
					</button>
				</div>
			</div>
			{#each leaderboard.topNRight as element, i}
				<div
					class="flex items-center my-4 mx-3 border p-2 rounded-sm"
					class:border-[#FFD700]={i + 1 == 1}
					class:border-[#B87333]={i + 1 == 2}
					class:border-[#636362]={i + 1 == 3}
					class:border-[#C0C0C0]={i + 1 == 4 || i + 1 == 5}
				>
					<img src={element.avt} alt={element.avt} class="h-[50px] w-[50px]" />
					<div class="ml-2 grow">
						<p class="text-lg">{element.name}</p>
						<p class="text-slate-500">{element._sum.nRight}&nbsp;câu</p>
					</div>
					<div
						class="flex justify-center items-center nthTop h-10 w-10 text-center text-2xl font-bold"
						class:bg-[#FFD700]={i + 1 == 1}
						class:bg-[#B87333]={i + 1 == 2}
						class:bg-[#636362]={i + 1 == 3}
						class:bg-[#C0C0C0]={i + 1 == 4 || i + 1 == 5}
					>
						{i + 1}
					</div>
				</div>
			{/each}
		</div>
		<div class="h-[500px] border shadow-lg">
			<div class="bg-pink-600 flex justify-between px-3 py-4 rounded-sm">
				<h3 class="text-white text-lg">Top Không Trượt Phát Nào</h3>
				<div
					class="tooltip tooltip-bottom"
					data-tip="Top những người dùng có số câu đúng liên tục nhiều nhất"
				>
					<button class="text-white">
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
								d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
							/>
						</svg>
					</button>
				</div>
			</div>
			{#each leaderboard.topNRightConsecutive as element, i}
				<div
					class="flex items-center my-4 mx-3 border p-2 rounded-sm"
					class:border-[#FFD700]={i + 1 == 1}
					class:border-[#B87333]={i + 1 == 2}
					class:border-[#636362]={i + 1 == 3}
					class:border-[#C0C0C0]={i + 1 == 4 || i + 1 == 5}
				>
					<img src={element.User.avt} alt={element.User.avt} class="h-[50px] w-[50px]" />
					<div class="ml-2 grow">
						<p class="text-lg">{element.User.name}</p>
						<p class="text-slate-500">{element.nRightConsecutive}&nbsp;câu</p>
					</div>
					<div
						class="flex justify-center items-center nthTop h-10 w-10 text-center text-2xl font-bold"
						class:bg-[#FFD700]={i + 1 == 1}
						class:bg-[#B87333]={i + 1 == 2}
						class:bg-[#636362]={i + 1 == 3}
						class:bg-[#C0C0C0]={i + 1 == 4 || i + 1 == 5}
					>
						{i + 1}
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
	.nthTop {
		color: #fff;
		clip-path: polygon(50% 0, 100% 30%, 100% 70%, 50% 100%, 0 70%, 0 30%);
	}
</style>
