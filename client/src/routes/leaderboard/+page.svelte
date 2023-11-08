<script lang="ts">
	import defaultUser from '$lib/assets/images/default-user.png';
	import medal from '$lib/assets/icons/medal.png';
</script>

<div class="max-w-screen-xl w-screen mx-auto text-left px-2 py-8">
	<div class="flex justify-center items-center my-6">
		<img src={medal} alt={medal} class="h-[50px] w-[50px]" />
		<h1 class="text-4xl font-bold text-title">LEADERBOARD</h1>
	</div>

	<!-- svelte-ignore a11y-label-has-associated-control -->
	<div class="dropdown dropdown-bottom dropdown-end w-full text-right mb-4">
		<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
		<label tabindex="0" class="btn m-1">Bảng xếp hạng: Ngày</label>
		<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
		<ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
			<li><button>Ngày</button></li>
			<li><button>Tháng</button></li>
			<li><button>Năm</button></li>
		</ul>
	</div>

	<div class="grid grid-cols-3 gap-8 h-full">
		<div class="h-[500px] border shadow-lg">
			<div class="bg-purple-600 flex justify-between px-3 py-4 rounded-sm">
				<h3 class="text-white text-lg">Top Triệu Phú Dyno Coin</h3>
				<div class="tooltip tooltip-bottom" data-tip="Top những người dùng có số coin nhiều nhất">
					<button class="text-white"
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
								d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
							/>
						</svg>
					</button>
				</div>
			</div>

			<div class="flex items-center my-4 mx-3 border border-[#FFD700] p-2 rounded-sm">
				<img src={defaultUser} alt={defaultUser} class="h-[50px] w-[50px]" />
				<div class="ml-2 grow">
					<p>name user</p>
					<p class="text-slate-500">130&nbsp;$</p>
				</div>
				<div
					class="flex justify-center items-center nthTop h-10 w-10 bg-[#FFD700] text-center text-2xl font-bold"
				>
					1
				</div>
			</div>
			<div class="flex items-center my-4 mx-3 border border-[#B87333] p-2 rounded-sm">
				<img src={defaultUser} alt={defaultUser} class="h-[50px] w-[50px]" />
				<div class="ml-2 grow">
					<p>name user</p>
					<p class="text-slate-500">130&nbsp;$</p>
				</div>
				<div
					class="flex justify-center items-center nthTop h-10 w-10 bg-[#B87333] text-center text-2xl font-bold"
				>
					2
				</div>
			</div>
			<div class="flex items-center my-4 mx-3 border border-[#C0C0C0] p-2 rounded-sm">
				<img src={defaultUser} alt={defaultUser} class="h-[50px] w-[50px]" />
				<div class="ml-2 grow">
					<p>name user</p>
					<p class="text-slate-500">130&nbsp;$</p>
				</div>
				<div
					class="flex justify-center items-center nthTop h-10 w-10 bg-[#C0C0C0] text-center text-2xl font-bold"
				>
					3
				</div>
			</div>
		</div>
		<div class="h-[500px] border shadow-lg">
			<div class="bg-green-400 flex justify-between px-3 py-4 rounded-sm">
				<h3 class="text-white text-lg">Top Thiện Xạ</h3>
				<div
					class="tooltip tooltip-bottom"
					data-tip="Top những người dùng có số câu đúng nhiều nhất"
				>
					<button class="text-white"
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
								d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
							/>
						</svg>
					</button>
				</div>
			</div>

			<div class="flex items-center my-4 mx-3 border border-[#FFD700] p-2 rounded-sm">
				<img src={defaultUser} alt={defaultUser} class="h-[50px] w-[50px]" />
				<div class="ml-2 grow">
					<p>name user</p>
					<p class="text-slate-500">4&nbsp;câu</p>
				</div>
				<div
					class="flex justify-center items-center nthTop h-10 w-10 bg-[#FFD700] text-center text-2xl font-bold"
				>
					1
				</div>
			</div>
		</div>
		<div class="h-[500px] border shadow-lg">
			<div class="bg-pink-600 flex justify-between px-3 py-4 rounded-sm">
				<h3 class="text-white text-lg">Top Không Trượt Phát Nào</h3>
				<div
					class="tooltip tooltip-bottom"
					data-tip="Top những người dùng có số câu đúng liên tục nhiều nhất"
				>
					<button class="text-white"
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
								d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
							/>
						</svg>
					</button>
				</div>
			</div>

			<div class="flex items-center my-4 mx-3 border border-[#FFD700] p-2 rounded-sm">
				<img src={defaultUser} alt={defaultUser} class="h-[50px] w-[50px]" />
				<div class="ml-2 grow">
					<p>name user</p>
					<p class="text-slate-500">3&nbsp;câu</p>
				</div>
				<div
					class="flex justify-center items-center nthTop h-10 w-10 bg-[#FFD700] text-center text-2xl font-bold"
				>
					1
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.nthTop {
		color: #fff;

		clip-path: polygon(50% 0, 100% 30%, 100% 70%, 50% 100%, 0 70%, 0 30%);
		/* font-size: 1.6rem;
		text-align: center;
		font-weight: 800;
		line-height: 4rem; */
	}
</style>
