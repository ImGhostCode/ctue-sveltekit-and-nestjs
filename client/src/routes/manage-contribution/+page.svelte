<script lang="ts">
	import { onMount } from 'svelte';
	import { toasts, ToastContainer, FlatToast, BootstrapToast } from 'svelte-toasts';

	import tree from '$lib/assets/icons/topics/tree.png';
	import social from '$lib/assets/icons/topics/social.png';
	import animal from '$lib/assets/icons/topics/animal.png';
	import academy from '$lib/assets/icons/topics/academy.png';
	import body from '$lib/assets/icons/topics/body.png';
	import color from '$lib/assets/icons/topics/color.png';
	import clothes from '$lib/assets/icons/topics/clothes.png';
	import culture from '$lib/assets/icons/topics/culture.png';
	import entertainment from '$lib/assets/icons/topics/entertainment.png';
	import exciting from '$lib/assets/icons/topics/exciting.png';
	import family from '$lib/assets/icons/topics/family.png';
	import flag from '$lib/assets/icons/topics/flag.png';
	import food from '$lib/assets/icons/topics/food.png';
	import health from '$lib/assets/icons/topics/health.png';
	import hobby from '$lib/assets/icons/topics/hobby.png';
	import ielts from '$lib/assets/icons/topics/ielts.png';
	import job from '$lib/assets/icons/topics/job.png';
	import nature from '$lib/assets/icons/topics/nature.png';
	import others from '$lib/assets/icons/topics/others.png';
	import skill from '$lib/assets/icons/topics/skill.png';
	import spirituality from '$lib/assets/icons/topics/spirituality.png';
	import sport from '$lib/assets/icons/topics/sport.png';
	import technology from '$lib/assets/icons/topics/technology.png';
	import toeic from '$lib/assets/icons/topics/toeic.png';
	import travel from '$lib/assets/icons/topics/travel.png';

	const imgTopics: { [key: string]: string } = {
		tree,
		social,
		animal,
		academy,
		body,
		color,
		clothes,
		culture,
		entertainment,
		exciting,
		family,
		flag,
		food,
		health,
		hobby,
		ielts,
		job,
		nature,
		others,
		skill,
		spirituality,
		sport,
		technology,
		toeic,
		travel
	};

	import Pagination from '../../components/Pagination.svelte';
	import type { ActionData } from './$types';
	import moment from 'moment';
	import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';
	import { list } from 'postcss';

	export let form: ActionData;
	/** @type {import('./$types').PageData} */
	export let data: any;

	let selectedId: number | undefined;
	let isLoadingForm = false;
	let banId: number;
	let feedback: string = '';
	let category: string = '';

	let renderContribution: any[] = [];

	let myModal4: HTMLDialogElement;
	let myModal5: HTMLDialogElement;
	let myModal6: HTMLDialogElement;

	const statusCon: { [key: string]: { status: string; color: string } } = {
		'-1': { status: 'Chờ duyệt', color: 'text-yellow-600' },
		'0': { status: 'Từ chối', color: 'text-red-600' },
		'1': { status: 'Đã duyệt', color: 'text-green-600' }
	};

	onMount(() => {
		renderContribution = data.listPendingContribution;
	});

	let dataDetail: any;
	function getTypeName(typeId: number) {
		let foundType: any;
		if (dataDetail.type === 'word') {
			foundType = data.typesWord.find((type: any) => type.id === typeId);
		} else {
			foundType = data.typesSentence.find((type: any) => type.id === typeId);
		}

		return foundType ? foundType.name : 'Không xác định';
	}

	function getTopicNames(topicIds: string[]) {
		return topicIds.map((id) => {
			let foundTopic: any;
			if (dataDetail.type === 'word') {
				foundTopic = data.topicsWord.find((topic: any) => topic.id === parseInt(id));
				return foundTopic ? foundTopic : { name: 'Không xác định', isWord: false, image: '' };
			} else {
				foundTopic = data.topicsSentence.find((topic: any) => topic.id === parseInt(id));
				return foundTopic ? foundTopic.name : 'Không xác định';
			}
		});
	}
	function getSpecializationName(speId: string[]) {
		let foundSpe: any;

		foundSpe = data.specializations.find((spe: any) => spe.id === speId);

		return foundSpe ? foundSpe.name : 'Không xác định';
	}
	function getLevelName(levelId: string[]) {
		let foundLevel: any;

		foundLevel = data.levels.find((level: any) => level.id === levelId);

		return foundLevel ? foundLevel.name : 'Không xác định';
	}

	// Hàm mở Modal và truyền dữ liệu chi tiết của đóng góp vào
	function openModal(modal: HTMLDialogElement, contribution: any) {
		modal.showModal();
		dataDetail = contribution;
		dataDetail.typeId = getTypeName(dataDetail.typeId);
		dataDetail.topics = getTopicNames(dataDetail.topicId);
		dataDetail.specializationId = getSpecializationName(dataDetail.specializationId);
		dataDetail.levelId = getLevelName(dataDetail.levelId);

		if (dataDetail.type === 'word') {
			dataDetail.examples = dataDetail.examples.split(/\r?\n/);
			dataDetail.synonyms = dataDetail.synonyms.split(/\r?\n/).join(',');
			dataDetail.antonyms = dataDetail.antonyms.split(/\r?\n/).join(',');
		}
	}

	$: renderContribution = data.listPendingContribution.filter((con: any) => {
		return category !== '' ? con.type === category : true;
	});

	$: if (form?.noToken) {
		goto('/login'); // Redirect to the login page if not authenticated
	}

	$: if (form?.success) {
		if (myModal6) {
			myModal6.close();
			banId = 0;
		}
		const toast = toasts.add({
			title: 'Success',
			description: form?.message,
			duration: 1500, // Set the duration to 0 to keep it open until manually closed
			placement: 'top-right',
			type: 'success',
			theme: 'dark',
			showProgress: true,
			// type: 'success',
			// theme: 'dark',
			onClick: () => {},
			onRemove: () => {
				// goto('/'); // Use goto to redirect to the '/login' route.
			}
			//component: BootstrapToast // You can customize the toast component here
		});
	}

	$: if (form?.error) {
		const toast = toasts.add({
			title: 'Error',
			description: form?.message,
			duration: 1500, // Set the duration to 0 to keep it open until manually closed
			placement: 'top-right',
			type: 'error',
			theme: 'dark',
			showProgress: true,
			// type: 'error',
			// theme: 'dark',
			onClick: () => {},
			onRemove: () => {}
			//component: BootstrapToast // You can customize the toast component here
		});
	}
</script>

<div class="max-w-screen-xl w-screen mx-auto text-left px-2 py-8 min-h-screen max-h-max">
	<h1 class="text-2xl text-orange-600 mb-2">Quản lý đóng góp</h1>

	<div class="h-[1px] w-full border border-gray-200" />

	<div class="text-right my-2">
		<div class="dropdown">
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label tabindex="0" class="btn m-1 bg-sky-500 hover:bg-sky-600 text-white">Phân loại</label>
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
				<li><button on:click={() => (category = 'word')}>Từ</button></li>
				<li><button on:click={() => (category = 'sentence')}>Câu</button></li>
				<li><button on:click={() => (category = '')}>Tất cả</button></li>
			</ul>
		</div>
	</div>
	{#if renderContribution.length}
		<table class=" mt-10 table table-hover">
			<thead>
				<tr>
					<!-- <th>ID</th> -->
					<th>Thời gian</th>
					<th>Loại</th>
					<th>Nội dung</th>
					<th>Trạng thái</th>
					<th>Hành động</th>
				</tr>
			</thead>
			<tbody>
				{#each renderContribution as con (con.id)}
					<tr class="hover">
						<td>{moment(con.createdAt).format('DD/MM/YYYY')}</td>
						<td>{con.type === 'word' ? 'Từ' : 'Câu'}</td>
						<td class="max-w-xs">
							<p class="truncate mb-2">
								{con.content.content} - {con.content.mean}
							</p>
							<button
								type="button"
								class="btn btn-xs btn-info text-white"
								on:click={() =>
									con.type === 'word'
										? openModal(myModal4, { ...con.content, type: con.type })
										: openModal(myModal5, { ...con.content, type: con.type })}>Chi tiết</button
							>
						</td>
						<td
							class="text-yellow-400 font-semibold"
							class:text-red-600={statusCon[con.status].color === 'red'}
							class:text-yellow-600={statusCon[con.status].color === 'yellow'}
							class:text-green-600={statusCon[con.status].color === 'green'}
							>{statusCon[con.status].status}</td
						>
						<td>
							<form
								method="post"
								use:enhance={() => {
									isLoadingForm = true;
									return async ({ update }) => {
										isLoadingForm = false;
										update();
									};
								}}
								action="?/verify-contribution"
								class="btn btn-sm bg-green-600 hover:bg-green-700 text-white"
							>
								<!-- <button
									class="btn btn-sm bg-green-600 hover:bg-green-700 text-white"
									on:click={(e) => handleAccept(e, 1, { status: 1, feedback: '' })}>Xác nhận</button
								> -->
								<input class="hidden" type="number" name="conId" value={con.id} />
								<input class="hidden" type="number" name="status" value="1" />
								<input class="hidden" type="text" name="feedback" value="" />
								<button class="" type="submit">Xác nhận</button>
							</form>
							<button
								class="btn btn-sm bg-red-600 hover:bg-red-700 text-white"
								on:click={() => {
									selectedId = con.id;
									myModal6.showModal();
								}}>Từ chối</button
							>
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	{:else}
		<p class="text-center text-base my-4 text-slate-600">Chưa có đóng góp nào</p>
	{/if}

	<!-- Pagination -->
	<!-- <Pagination /> -->
</div>

<dialog bind:this={myModal5} id="my_modal_" class="modal">
	{#if dataDetail}
		<div class="modal-box">
			<form method="dialog">
				<button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-xl">✕</button>
			</form>
			<h3 class="font-bold text-2xl text-orange-600 mb-2">Chi tiết đóng góp</h3>
			<div class="h-[1px] w-full border border-gray-200" />

			<div class="mt-2"><b>Câu: </b> {dataDetail.content}</div>
			<div class=""><b>Nghĩa: </b> {dataDetail.mean}</div>

			<p class="font-bold">
				Loại câu: <span class="font-normal">{dataDetail.typeId}</span>
			</p>
			<p class="font-bold">Chủ đề:</p>
			{#if dataDetail.topics.length}
				<div class="flex flex-wrap p-3">
					{#each dataDetail.topics as topic, index (index)}
						<!-- svelte-ignore a11y-click-events-have-key-events -->
						<div
							class="topic-item px-2 py-1 m-1 flex justify-between items-center w-fit rounded-full border-2 border-green-600 text-slate-700"
						>
							<span class="pr-1 text-sm">{topic}</span>
						</div>
					{/each}
				</div>
			{/if}
			<p class="font-bold">Ghi chú: <span class="font-normal">{dataDetail.note}</span></p>
		</div>
	{/if}
</dialog>

<dialog bind:this={myModal4} id="my_modal_4" class="modal">
	{#if dataDetail}
		<div class="modal-box">
			<form method="dialog">
				<button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-xl">✕</button>
			</form>
			<h3 class="font-bold text-2xl text-orange-600 mb-2">Chi tiết đóng góp</h3>
			<div class="h-[1px] w-full border border-gray-200" />

			<div class="flex my-4">
				<img
					src={dataDetail.picture}
					alt={dataDetail.content}
					class="h-[50px] w-[50px] inline-block"
				/>
				<div class="inline-block ml-4">
					<div class="flex justify-center items-center">
						<p class="mr-2 text-green-600 text-xl font-semibold">{dataDetail.content}</p>
						<span class="mr-2 text-blue-600">{dataDetail.phonetic}</span>
					</div>
					<p>{dataDetail.mean}</p>
				</div>
			</div>
			<p class="font-bold">Cấp độ: <span class="font-normal">{dataDetail.levelId}</span></p>
			<p class="font-bold">Câu ví dụ:</p>
			{#if dataDetail?.examples?.length}
				<ol>
					{#each dataDetail.examples as example, index (index)}
						<li>{example}</li>
					{/each}
				</ol>
			{/if}
			<p class="font-bold">
				Thuộc chuyên ngành: <span class="font-normal">{dataDetail.specializationId}</span>
			</p>
			<p class="font-bold">Chủ đề:</p>
			<div class="p-2 flex flex-wrap rounded-md">
				{#if dataDetail.topics.length}
					{#each dataDetail.topics as topic, index (index)}
						{#if topic.name !== 'Không xác định'}
							<div
								class="topic-item px-2 py-1 m-1 flex justify-between items-center w-fit rounded-full border border-teal-500"
							>
								<img class="mr-1" src={`${imgTopics[topic.image]}`} alt={topic.name} />
								<span class="pr-1 text-sm">{topic.name}</span>
							</div>
						{/if}
					{/each}
				{/if}
			</div>
			<p class="font-bold">
				Các từ đồng nghĩa: <span class="font-normal">{dataDetail.synonyms}</span>
			</p>
			<p class="font-bold">
				Các từ trái nghĩa: <span class="font-normal">{dataDetail.antonyms}</span>
			</p>
			<p class="font-bold">Ghi chú: <span class="font-normal">{dataDetail.note} </span></p>
		</div>
	{/if}
</dialog>

<dialog bind:this={myModal6} id="my_modal_6" class="modal">
	<div class="modal-box w-11/12 max-w-5xl">
		<form
			method="post"
			use:enhance={() => {
				isLoadingForm = true;
				return async ({ update }) => {
					isLoadingForm = false;
					update();
				};
			}}
			action="?/verify-contribution"
		>
			<h3 class="font-bold text-xl text-orange-600 mb-2">Từ chối đóng góp</h3>
			<div class="h-[1px] w-full border border-gray-200" />

			<div class="">
				<div class="form-control w-full mb-3">
					<label class="label" for="feedback">
						<span class="label-text">Lý do (*)</span>
					</label>
					<textarea
						bind:value={feedback}
						required
						maxlength="200"
						class="input input-bordered h-[120px] w-full focus:border-green-600 focus:outline-none p-4"
						id="feedback"
						name="feedback"
					/>
				</div>
			</div>

			<input class="hidden" type="number" name="conId" value={selectedId} />
			<input class="hidden" type="number" name="status" value="0" />

			<div class="h-[1px] w-full border border-gray-200" />

			<div class="modal-action">
				<form method="dialog">
					<button
						class="btn"
						on:click={() => {
							banId = 0;
							feedback = '';
						}}
					>
						Đóng
					</button>
				</form>
				<button type="submit" class="btn bg-green-600 hover:bg-green-700 text-white mr-2"
					>Đồng ý</button
				>
			</div>
		</form>
	</div>
</dialog>

<ToastContainer placement="bottom-right" let:data>
	<FlatToast {data} />
	<!-- Provider template for your toasts -->
</ToastContainer>
