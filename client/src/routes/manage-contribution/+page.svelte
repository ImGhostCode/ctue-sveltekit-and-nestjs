<script lang="ts">
	import { onMount } from 'svelte';

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

	export let form: ActionData;
	/** @type {import('./$types').PageData} */
	export let data: any;

	let showTopics = false;

	let topicsSentence = [
		{ id: 1, name: 'Giao tiếp thông dụng', selected: false },
		{ id: 2, name: 'Chào hỏi', selected: false }
	];

	let myModal4: HTMLDialogElement;
	let myModal5: HTMLDialogElement;
	let myModal6: HTMLDialogElement;

	const statusCon: { [key: string]: { status: string; color: string } } = {
		'-1': { status: 'Chờ duyệt', color: 'text-yellow-600' },
		'0': { status: 'Từ chối', color: 'text-red-600' },
		'1': { status: 'Đã duyệt', color: 'text-green-600' }
	};

	onMount(() => {});

	function classifyContribution(contributionId: number) {
		// TODO: classify contribution
	}

	function confirmContribution(contributionId: number) {
		// TODO: confirm contribution
	}

	function deleteContribution(contributionId: number) {
		// TODO: delete contribution
	}

	let dataDetail: any;
	function getTypeName(typeId: number) {
		let foundType: any;
		if (dataDetail.type === 'word') {
			foundType = data.typesWord.find((type: any) => type.id === typeId);
		} else {
			foundType = data.typesSentence.find((type: any) => type.id === typeId);
		}
		console.log(foundType);

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

	// Hàm mở Modal và truyền dữ liệu chi tiết của đóng góp vào
	function openModal(modal: HTMLDialogElement, contribution: any) {
		console.log(contribution);

		modal.showModal();
		dataDetail = contribution;
		dataDetail.typeId = getTypeName(dataDetail.typeId);
		dataDetail.topics = getTopicNames(dataDetail.topicId);
		dataDetail.specializationId = getSpecializationName(dataDetail.specializationId);
		dataDetail.examples = dataDetail.examples.split(/\r?\n/);
		dataDetail.synonyms = dataDetail.synonyms.split(/\r?\n/).join(',');
		dataDetail.antonyms = dataDetail.antonyms.split(/\r?\n/).join(',');
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
				<li><button>Từ</button></li>
				<li><button>Câu</button></li>
			</ul>
		</div>
	</div>
	{#if data.listPendingContribution.length}
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
				{#each data.listPendingContribution as con (con.id)}
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
							<button
								class="btn btn-sm bg-green-600 hover:bg-green-700 text-white"
								on:click={() => confirmContribution(1)}>Xác nhận</button
							>
							<button
								class="btn btn-sm bg-red-600 hover:bg-red-700 text-white"
								on:click={() => myModal6.showModal()}>Từ chối</button
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
	<Pagination />
</div>

<dialog bind:this={myModal5} id="my_modal_3" class="modal">
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
			<div class="flex flex-wrap p-3">
				{#each dataDetail.topics as topic, index (topic)}
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<div
						class="topic-item px-2 py-1 m-1 flex justify-between items-center w-fit rounded-full border-2 border-green-600 text-slate-700"
					>
						<span class="pr-1 text-sm">{topic}</span>
					</div>
				{/each}
			</div>

			<p class="font-bold">Ghi chú: <span class="font-normal">{dataDetail.note}</span></p>
		</div>
	{/if}
</dialog>

<dialog bind:this={myModal4} id="my_modal_3" class="modal">
	{#if dataDetail}
		<div class="modal-box">
			<form method="dialog">
				<button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-xl">✕</button>
			</form>
			<h3 class="font-bold text-2xl text-orange-600 mb-2">Chi tiết đóng góp</h3>
			<div class="h-[1px] w-full border border-gray-200" />

			<div class="flex my-4">
				<img src={tree} alt={tree} class="h-[50px] w-[50px] inline-block" />
				<div class="inline-block ml-4">
					<div class="flex justify-center items-center">
						<p class="mr-2 text-green-600 text-xl font-semibold">{dataDetail.content}</p>
						<span class="mr-2 text-blue-600">{dataDetail.phonetic}</span>
					</div>
					<p>{dataDetail.mean}</p>
				</div>
			</div>
			<p class="font-bold">Cấp độ: <span class="font-normal">A2</span></p>
			<p class="font-bold">Câu ví dụ:</p>
			<ol>
				{#each dataDetail.examples as example, index (index)}
					<li>{example}</li>
				{/each}
			</ol>
			<p class="font-bold">
				Thuộc chuyên ngành: <span class="font-normal">{dataDetail.specializationId}</span>
			</p>
			<p class="font-bold">Chủ đề:</p>
			<div class="p-2 flex flex-wrap rounded-md">
				{#each dataDetail.topics as topic, index (topic.name)}
					{#if topic.name !== 'Không xác định'}
						<div
							class="topic-item px-2 py-1 m-1 flex justify-between items-center w-fit rounded-full border border-teal-500"
						>
							<img class="mr-1" src={`${imgTopics[topic.image]}`} alt={topic.name} />
							<span class="pr-1 text-sm">{topic.name}</span>
						</div>
					{/if}
				{/each}
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

<dialog bind:this={myModal6} id="my_modal_4" class="modal">
	<div class="modal-box w-11/12 max-w-5xl">
		<form action="" method="post">
			<h3 class="font-bold text-xl text-orange-600 mb-2">Từ chối đóng góp</h3>
			<div class="h-[1px] w-full border border-gray-200" />

			<div class="">
				<div class="form-control w-full mb-3">
					<label class="label" for="feedback">
						<span class="label-text">Lý do (*)</span>
					</label>
					<textarea
						class="input input-bordered h-[120px] w-full focus:border-green-600 focus:outline-none p-4"
						id="feedback"
						name="feedback"
					/>
				</div>
			</div>

			<div class="h-[1px] w-full border border-gray-200" />

			<div class="modal-action">
				<form method="dialog">
					<!-- if there is a button, it will close the modal -->
					<button class="btn">Close</button>
					<button type="submit" class="btn bg-green-600 hover:bg-green-700 text-white">OK</button>
				</form>
			</div>
		</form>
	</div>
</dialog>
