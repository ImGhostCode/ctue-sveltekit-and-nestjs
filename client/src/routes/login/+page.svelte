<main class="flex justify-center item-center h-screen">
	<div class="w-full max-w-xs flex flex-col justify-center items-center">
		<form class="bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4 border">
			<div class="text-center text-2xl font-bold mb-4">
				<h1>Đăng nhập</h1>
			</div>
			<div class="mb-4">
				<label class="block text-gray-700 text-sm font-bold mb-2" for="username"> Email </label>
				<input
					class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:border-green-500 leading-tight focus:outline-none focus:shadow-outline"
					id="email"
					type="text"
					placeholder="Email"
				/>
			</div>
			<div class="mb-6">
				<label class="block text-gray-700 text-sm font-bold mb-2" for="password"> Mật khẩu </label>
				<!-- <input
					class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
					id="password"
					type="password"
					placeholder="******************"
				/>
				<p class="text-red-500 text-xs italic">Please choose a password.</p> -->
				<input
					class="shadow appearance-none border focus:border-green-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
					id="password"
					type="password"
					placeholder="******************"
				/>
				<!-- <p class="text-red-500 text-xs italic">Please choose a password.</p> -->
			</div>
			<div class="flex items-center justify-between">
				<button
					class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
					type="button"
				>
					Đăng nhập
				</button>
				<a
					class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
					href="/forgot-password"
				>
					Quên mật khẩu?
				</a>
			</div>
		</form>
		<p class="text-center text-gray-500 text-sm">
			Bạn chưa có tài khoản? <a class="text-blue-700" href="/register">Đăng ký</a>
		</p>
	</div>
</main>
