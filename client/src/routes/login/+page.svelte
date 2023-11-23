<script lang="ts">
	import { enhance } from '$app/forms';
	import type { PageData, ActionData } from './$types';
	import { toasts, ToastContainer, FlatToast } from 'svelte-toasts';
	import { goto } from '$app/navigation';
	import { isLoading } from '$lib/store';

	let myModal20: HTMLDialogElement;

	let showInput1: boolean = false;

	export let data: PageData;
	export let form: ActionData;

	let feedback: string = '';

	$: if (form?.success) {
		toasts.add({
			title: 'Success',
			description: form?.message,
			duration: 800,
			placement: 'bottom-right',
			type: 'success',
			theme: 'dark',
			showProgress: true,
			onClick: () => {},
			onRemove: () => {
				goto('/');
			}
		});
		feedback = '';
	}

	$: if (form?.invalidCredential) {
		toasts.add({
			title: 'Error',
			description: form?.message,
			duration: 1500,
			placement: 'bottom-right',
			type: 'error',
			theme: 'dark',
			showProgress: true,
			onClick: () => {},
			onRemove: () => {}
		});
		feedback = '';
	}

	$: if (form?.isBan) {
		toasts.add({
			title: 'Error',
			description: form?.message,
			duration: 1500,
			placement: 'bottom-right',
			type: 'error',
			theme: 'dark',
			showProgress: true,
			onClick: () => {},
			onRemove: () => {}
		});
		feedback = form.feedback;
		if (feedback != '') {
			myModal20.showModal();
		}
	}
</script>

{#if $isLoading}
	<div class="w-full h-full flex justify-center items-center">
		<span class="loading loading-ring loading-lg" />
	</div>
{:else}
	<main class="flex justify-center item-center min-h-screen max-h-max">
		<div class="w-full max-w-xs flex flex-col justify-center items-center">
			<form
				class="bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4 border"
				method="post"
				action="?/login"
				use:enhance
			>
				<div class="text-center md:text-2xl text-lg font-bold mb-4">
					<h1>Đăng nhập</h1>
				</div>
				<div class="mb-4">
					<label class="block text-gray-700 text-sm font-bold mb-2" for="username"> Email </label>
					<input
						class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:border-green-500 leading-tight focus:outline-none focus:shadow-outline"
						id="email"
						type="email"
						name="email"
						placeholder="example@gmail.com"
						class:border-red-500={form?.missingEmail || form?.invalidCredential}
					/>
					{#if form?.missingEmail}
						<p class="text-xs text-error mt-2">Vui lòng nhập email</p>
					{/if}
				</div>
				<div class="mb-6">
					<label class="block text-gray-700 text-sm font-bold mb-2" for="password">
						Mật khẩu
					</label>
					<div class="flex relative">
						<input
							type={showInput1 ? 'text' : 'password'}
							class="shadow appearance-none border focus:border-green-500 rounded w-full py-2 px-3 pr-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							id="password"
							placeholder="******************"
							name="password"
							class:border-red-500={form?.invalidCredential || form?.passIsInvalid}
						/>
						<button
							id="eye"
							class="absolute right-0 outline-none px-3 my-auto h-full"
							on:click={() => (showInput1 = !showInput1)}
							type="button"
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
						<p class="text-xs text-error mt-2">Vui lòng nhập mật khẩu ít nhất 6 ký tự</p>
					{/if}
				</div>
				<div class="flex items-center justify-between mb-6">
					<button
						class="bg-blue-500 hover:bg-blue-700 btn md:btn-md btn-sm text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
						type="submit"
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
{/if}
<dialog bind:this={myModal20} id="my_modal_20" class="modal">
	<div class="modal-box w-11/12 max-w-5xl">
		{#if feedback !== ''}
			<h1 class="text-lg">Tài khoản của bạn đã bị khóa với lý do:</h1>
			<h1 class="text-2xl text-red-500 text-center my-4">{feedback}</h1>
			<h1 class="text-lg">
				Vui lòng liên hệ qua email: <span class="text-green-500">help.ctue@gmail.com</span>, để được
				hổ trợ.
			</h1>
			<form method="dialog" class="text-end">
				<button class="btn">Đóng</button>
			</form>
		{/if}
	</div>
</dialog>
<ToastContainer placement="bottom-right" let:data>
	<FlatToast {data} />
</ToastContainer>
