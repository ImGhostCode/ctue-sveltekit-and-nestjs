<script lang="ts">
	import default_image from '$lib/assets/images/default-image.png';
	let isEditing = false;
</script>

<div class="w-full h-full flex justify-center items-center">
	<div class="px-14 py-9 shadow-lg w-[360px] text-center border-2 border-gray-100 rounded-md">
		<div class="h-[150px] w-[150px] mx-auto relative mb-4">
			<img
				class="h-[150px] w-[150px] mx-auto rounded-full"
				src={default_image}
				alt={default_image}
			/>
			{#if isEditing}
				<div class="absolute right-0 bottom-0 border-[5px] rounded-full border-white">
					<label
						for="avatar"
						class="h-10 w-10 bg-blue-600 rounded-full flex justify-center items-center cursor-pointer"
					>
						<span class="inline-block"
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
									d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
								/>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
								/>
							</svg></span
						>
					</label>
					<input type="file" class="hidden" name="avatar" id="avatar" />
				</div>
			{/if}
		</div>
		{#if isEditing}
			<div class="mb-4">
				<label class="block text-gray-700 text-sm font-bold mb-2" for="name"> Họ và Tên </label>
				<input
					class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:border-green-500 leading-tight focus:outline-none focus:shadow-outline"
					id="name"
					type="text"
					placeholder="Nhập họ và tên"
					value="testtt"
				/>
			</div>
		{:else}
			<h2 class="leading-12 text-2xl">testttt</h2>
		{/if}
		<h4 class="leading-6 mb-6 font-light">test35e724</h4>
		<p class="font-light">test3@gmail.com</p>
		<p class="font-light mb-4">Đã tham gia vào 21-09-2023</p>

		{#if isEditing}
			<div class="flex justify-between items-center">
				<button
					on:click={() => (isEditing = false)}
					class="w-full mr-1 px-6 py-2 flex justify-center items-center bg-none hover:bg-gray-100 rounded-sm shadow border-red-600 border text-red-600 font-semibold"
				>
					<span class="">Huỷ bỏ</span>
				</button>
				<button
					on:click={() => (isEditing = false)}
					class="w-full ml-1 px-6 py-2 flex justify-center items-center bg-blue-600 hover:bg-blue-700 border border-blue-600 rounded-sm shadow text-white font-semibold"
				>
					<span class="">Cập nhật</span>
				</button>
			</div>
		{:else}
			<button
				on:click={() => (isEditing = true)}
				class="w-full px-6 py-2 flex justify-center items-center bg-blue-600 hover:bg-blue-700 rounded-sm shadow text-white font-semibold"
			>
				<span class="inline-block"
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
							d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
						/>
					</svg></span
				>
				<span class="">Chỉnh sửa</span>
			</button>
		{/if}
	</div>
</div>
