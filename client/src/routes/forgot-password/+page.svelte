<script lang="ts">
	let showInput1: boolean = false;
	let showInput2: boolean = false;
</script>

<main class="flex justify-center item-center min-h-screen max-h-max">
	<div class="w-full max-w-xs flex flex-col justify-center items-center">
		<form class="bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4 border">
			<div class="text-center text-2xl font-bold mb-4">
				<h1>Lấy lại mật khẩu</h1>
			</div>
			<div class="mb-4">
				<label class="block text-gray-700 text-sm font-bold mb-2" for="username"> Email </label>
				<input
					class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:border-green-500 leading-tight focus:outline-none focus:shadow-outline"
					id="email"
					type="email"
					placeholder="example@gmail.com"
				/>
			</div>
			<div class="mb-4">
				<label class="block text-gray-700 text-sm font-bold mb-2" for="password"> Mật khẩu </label>
				<!-- <input
					class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
					id="password"
					type="password"
					placeholder="******************"
				/>
				<p class="text-red-500 text-xs italic">Please choose a password.</p> -->
				<div class="flex relative">
					<input
						type={showInput1 ? 'text' : 'password'}
						class="shadow appearance-none border focus:border-green-500 rounded w-full py-2 px-3 pr-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						id="password"
						placeholder="******************"
						minlength="6"
					/>
					<button
						id="eye"
						class="absolute right-0 outline-none px-3 my-auto h-full"
						on:click|preventDefault={() => (showInput1 = !showInput1)}
					>
						{#if showInput1}
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
									d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
								/>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
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
									d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
								/>
							</svg>
						{/if}
					</button>
				</div>
				<!-- <p class="text-red-500 text-xs italic">Please choose a password.</p> -->
			</div>
			<div class="mb-4">
				<label class="block text-gray-700 text-sm font-bold mb-2" for="repassword">
					Nhập lại mật khẩu
				</label>
				<!-- <input
					class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
					id="password"
					type="password"
					placeholder="******************"
				/>
				<p class="text-red-500 text-xs italic">Please choose a password.</p> -->
				<div class="flex relative">
					<input
						type={showInput2 ? 'text' : 'password'}
						class="shadow appearance-none border focus:border-green-500 rounded w-full py-2 px-3 pr-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						id="repassword"
						placeholder="******************"
						minlength="6"
					/>
					<button
						id="eye"
						class="absolute right-0 outline-none px-3 my-auto h-full"
						on:click|preventDefault={() => (showInput2 = !showInput2)}
					>
						{#if showInput2}
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
									d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
								/>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
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
									d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
								/>
							</svg>
						{/if}
					</button>
				</div>

				<!-- <p class="text-red-500 text-xs italic">Please choose a password.</p> -->
			</div>

			<div class="mb-4">
				<label class="block text-gray-700 text-sm font-bold mb-2" for="verifycode">
					Mã xác nhận
				</label>
				<!-- <input
					class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
					id="password"
					type="password"
					placeholder="******************"
				/>
				<p class="text-red-500 text-xs italic">Please choose a password.</p> -->
				<div class="flex">
					<input
						class="w-2/3 mr-2 shadow appearance-none border focus:border-green-500 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						id="repasverifycodesword"
						type="number"
						placeholder="xxxx"
					/>
					<button
						class="w-1/3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline"
						type="button"
					>
						Gửi mã
					</button>
				</div>
				<!-- <p class="text-red-500 text-xs italic">Please choose a password.</p> -->
			</div>
			<div class="mb-4">
				<button
					class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
					type="submit"
				>
					Đổi mật khẩu
				</button>
			</div>
		</form>
	</div>
</main>
