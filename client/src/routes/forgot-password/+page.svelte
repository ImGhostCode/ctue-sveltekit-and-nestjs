<script lang="ts">
	import { enhance } from '$app/forms';
	import { FlatToast, ToastContainer, toasts } from 'svelte-toasts';
	import type { ActionData, PageData } from './$types';
	import { goto } from '$app/navigation';

	let showInput1: boolean = false;
	let showInput2: boolean = false;

	export let data: PageData;
	export let form: ActionData;

	let email = '';
	let formCodeLoading = false;
	let isLoadingResetPassword = false;
	let timeout = false;
	let seconds = 0;

	function countDown() {
		if (seconds > 0) {
			seconds = seconds - 1;
		} else {
			timeout = false;
		}
	}

	$: if (form?.success) {
		seconds = 120;
		timeout = true;
		toasts.add({
			title: 'Success',
			description: form?.message,
			duration: 1500,
			placement: 'bottom-right',
			type: 'success',
			theme: 'dark',
			showProgress: true,
			onClick: () => {},
			onRemove: () => {}
		});
		setInterval(countDown, 1000);
	}

	$: if (form?.successGoto) {
		seconds = 120;
		timeout = true;
		toasts.add({
			title: 'Success',
			description: form?.message,
			duration: 1500,
			placement: 'bottom-right',
			type: 'success',
			theme: 'dark',
			showProgress: true,
			onClick: () => {},
			onRemove: () => {
				goto('/login');
			}
		});
		setInterval(countDown, 1000);
	}

	$: if (form?.invalidCredential) {
		toasts.add({
			title: 'Error',
			description: form?.message,
			placement: 'bottom-right',
			type: 'error',
			theme: 'dark',
			showProgress: true,
			onClick: () => {},
			onRemove: () => {}
		});
	}
</script>

<main class="flex justify-center item-center min-h-screen max-h-max">
	<div class="w-full max-w-xs flex flex-col justify-center items-center">
		<form
			class="bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4 border"
			method="post"
			action="?/forgotPassword"
			use:enhance={() => {
				isLoadingResetPassword = true;
				return async ({ update }) => {
					isLoadingResetPassword = false;
					update();
				};
			}}
		>
			<div class="text-center md:text-2xl text-lg font-bold mb-4">
				<h1>Lấy lại mật khẩu</h1>
			</div>
			<div class="mb-4">
				<label class="block text-gray-700 text-sm font-bold mb-2" for="username"> Email </label>
				<input
					class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:border-green-500 leading-tight focus:outline-none focus:shadow-outline"
					id="email"
					type="email"
					name="email"
					placeholder="example@gmail.com"
					bind:value={email}
				/>
				{#if form?.missingEmail}
					<p class="text-xs text-error mt-2">Vui lòng nhập email</p>
				{/if}
			</div>
			<div class="mb-4">
				<label class="block text-gray-700 text-sm font-bold mb-2" for="password"> Mật khẩu </label>
				<div class="flex relative">
					<input
						type={showInput1 ? 'text' : 'password'}
						class="shadow appearance-none border focus:border-green-500 rounded w-full py-2 px-3 pr-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						id="password"
						name="password"
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
				{#if form?.passIsInvalid}
					<p class="text-xs text-error mt-2">Tối thiểu 6 ký tự</p>
				{/if}
			</div>
			<div class="mb-4">
				<label class="block text-gray-700 text-sm font-bold mb-2" for="repassword">
					Nhập lại mật khẩu
				</label>
				<div class="flex relative">
					<input
						type={showInput2 ? 'text' : 'password'}
						class="shadow appearance-none border focus:border-green-500 rounded w-full py-2 px-3 pr-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						id="repassword"
						name="repassword"
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
				{#if form?.notmatch}
					<p class="text-xs text-error mt-2">Mật khẩu không khớp</p>
				{/if}
			</div>
			<div class="mb-4">
				<label class="block text-gray-700 text-sm font-bold mb-2" for="verifycode">
					Mã xác nhận
				</label>
				<div class="flex items-center justify-between">
					<input
						class="w-2/3 mr-2 shadow appearance-none border focus:border-green-500 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						id="code"
						name="code"
						type="number"
						placeholder="xxxxxx"
					/>
					<form
						class="w-1/3"
						method="post"
						action="?/sendVerifyCode"
						use:enhance={() => {
							formCodeLoading = true;
							return async ({ update }) => {
								formCodeLoading = false;
								update();
							};
						}}
					>
						<input class="hidden" id="email" type="email" name="email" bind:value={email} />
						<button
							class="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded py-1 px-2 focus:outline-none focus:shadow-outline w-full h-full"
							type="submit"
							class:disable={formCodeLoading || timeout}
							disabled={formCodeLoading || timeout}
							class:cursor-not-allowed={formCodeLoading || timeout}
						>
							{#if formCodeLoading}
								<span class="loading loading-ring loading-md" />
							{:else if timeout}
								<span>{seconds}s</span>
							{:else}
								<span class="">Gửi mã</span>
							{/if}
						</button>
					</form>
				</div>
				{#if form?.passCode}
					<p class="text-xs text-error mt-2">Vui lòng nhập mã xác nhận</p>
				{/if}
			</div>
			<div class="mb-4">
				<button
					class="btn md:btn-md btn-sm w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
					type="submit"
					class:disable={isLoadingResetPassword}
					disabled={isLoadingResetPassword}
					class:cursor-not-allowed={isLoadingResetPassword}
				>
					{#if isLoadingResetPassword}
						<span class="loading loading-ring loading-md" />
					{:else}
						<span class="">Đổi mật khẩu</span>
					{/if}
				</button>
			</div>
		</form>
	</div>
</main>
<ToastContainer placement="bottom-right" let:data>
	<FlatToast {data} />
</ToastContainer>
