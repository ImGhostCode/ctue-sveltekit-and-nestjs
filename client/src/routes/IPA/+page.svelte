<script lang="ts">
	import ipa_e from '$lib/assets/images/ipa/e.jpg';
	import ipa_ei from '$lib/assets/images/ipa/ei.jpg';
	import ipa_u from '$lib/assets/images/ipa/u.jpg';
	import ipa_ou from '$lib/assets/images/ipa/ou.jpg';
	import ipa_a from '$lib/assets/images/ipa/a.jpg';
	import ipaChart from '$lib/assets/images/ipa/ipa-chart.png';
	import ipaTable from '$lib/assets/images/ipa/ipa-table.jpg';
	import mouthShape from '$lib/assets/images/ipa/mouth-shape.png';
	let isChecked = false;
</script>

<div class="max-w-screen-xl w-screen mx-auto text-left px-2 py-8">
	<h1 class="text-2xl text-orange-600 mb-2">1. Nguyên âm đơn (Vowels)</h1>
	<p class=" text-slate-500 mb-4">Chúng ta có 12 nguyên âm đơn, mình chia làm 5 nhóm:</p>

	<!-- 1 -->
	<div class="collapse bg-base-200 mb-3">
		<input type="checkbox" class="peer" />
		<div class="collapse-title text-xl font-medium text-green-600">
			😁 Nhóm âm cười &nbsp;<b>/ ɪ /, / i: /</b>
		</div>
		<div class="collapse-content grid grid-cols-2 gap-8">
			<div class="basis-1/2 flex justify-between mx-3">
				<div class="">
					<p class="text-red-700 text-2xl font-bold inline-block leading-10">/ ɪ /</p>
					<button class="py-1 px-1"
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
								d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
							/>
						</svg></button
					>

					<p class="my-3">i ngắn, đọc dứt khoát như đang kêu ai đó, miệng không căng</p>
					<p class="underline font-bold">Ví dụ:</p>
					<ul>
						<li class="my-1">
							ship <span class="text-blue-700">/ʃɪp/</span>
							<button class="py-1 px-1"
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
										d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
									/>
								</svg></button
							>
						</li>
						<li class="my-1">
							hit <span class="text-blue-700">/hɪt/</span>
							<button class="py-1 px-1"
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
										d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
									/>
								</svg></button
							>
						</li>
					</ul>
				</div>
				<div class="">
					<img src={ipa_e} alt={ipa_e} />
				</div>
			</div>
			<div class="basis-1/2 flex justify-between mx-3">
				<div class="">
					<p class="text-red-700 text-2xl font-bold inline-block leading-10">/ i: /</p>
					<button class="py-1 px-1"
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
								d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
							/>
						</svg></button
					>
					<p class="my-3">i dài, miệng cười, nhấn mạnh, nặng và căng</p>
					<p class="underline font-bold">Ví dụ:</p>
					<ul>
						<li class="my-1">
							sheep <span class="text-blue-700">/ʃi:p/</span>
							<button class="py-1 px-1"
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
										d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
									/>
								</svg></button
							>
						</li>
						<li class="my-1">
							heat <span class="text-blue-700">/hi:t/</span>
							<button class="py-1 px-1"
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
										d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
									/>
								</svg></button
							>
						</li>
					</ul>
				</div>
				<div class="">
					<img src={ipa_ei} alt={ipa_ei} />
				</div>
			</div>
		</div>
	</div>

	<!-- 2 -->
	<div class="collapse bg-base-200 mb-3">
		<input type="checkbox" class="peer" />
		<div class="collapse-title text-xl font-medium text-green-600">
			💋 Nhóm âm hôn &nbsp;<b>/ ʊ /, / u: /</b>
		</div>
		<div class="collapse-content grid grid-cols-2 gap-8">
			<div class="basis-1/2 flex justify-between mx-3">
				<div class="">
					<p class="text-red-700 text-2xl font-bold inline-block leading-10">/ ʊ /</p>
					<button class="py-1 px-1"
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
								d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
							/>
						</svg></button
					>

					<p class="my-3">u ngắn, tròn môi nhẹ, dứt khoát, không căng</p>
					<p class="underline font-bold">Ví dụ:</p>
					<ul>
						<li class="my-1">
							foot <span class="text-blue-700">/fʊt/</span>
							<button class="py-1 px-1"
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
										d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
									/>
								</svg></button
							>
						</li>
						<li class="my-1">
							put <span class="text-blue-700">/pʊt/</span>
							<button class="py-1 px-1"
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
										d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
									/>
								</svg></button
							>
						</li>
					</ul>
				</div>
				<div class="">
					<img src={ipa_u} alt={ipa_u} />
				</div>
			</div>
			<div class="basis-1/2 flex justify-between mx-3">
				<div class="">
					<p class="text-red-700 text-2xl font-bold inline-block leading-10">/ u: /</p>
					<button class="py-1 px-1"
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
								d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
							/>
						</svg></button
					>
					<p class="my-3">u dài, chu và tròn môi, căng và mạnh</p>
					<p class="underline font-bold">Ví dụ:</p>
					<ul>
						<li class="my-1">
							blue <span class="text-blue-700">/blu:/</span>
							<button class="py-1 px-1"
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
										d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
									/>
								</svg></button
							>
						</li>
						<li class="my-1">
							group <span class="text-blue-700">/gru:p/</span>
							<button class="py-1 px-1"
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
										d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
									/>
								</svg></button
							>
						</li>
					</ul>
				</div>
				<div class="">
					<img src={ipa_ou} alt={ipa_ou} />
				</div>
			</div>
		</div>
	</div>

	<!-- 3 -->
	<div class="collapse bg-base-200 mb-3">
		<input type="checkbox" class="peer" />
		<div class="collapse-title text-xl font-medium text-green-600">
			😱 Nhóm âm shock &nbsp;<b>/ ɔ: /, / ɒ /</b>
		</div>
		<div class="collapse-content grid grid-cols-2 gap-8">
			<div class="basis-1/2 flex justify-between mx-3">
				<div class="">
					<p class="text-red-700 text-2xl font-bold inline-block leading-10">/ ɔ: /</p>
					<button class="py-1 px-1"
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
								d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
							/>
						</svg></button
					>

					<p class="my-3">Như o dài hoặc ô, nặng và nhấn mạnh</p>
					<p class="underline font-bold">Ví dụ:</p>
					<ul>
						<li class="my-1">
							law <span class="text-blue-700">/lɔ:/</span>
							<button class="py-1 px-1"
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
										d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
									/>
								</svg></button
							>
						</li>
						<li class="my-1">
							thought <span class="text-blue-700">/θɔ:t/</span>
							<button class="py-1 px-1"
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
										d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
									/>
								</svg></button
							>
						</li>
					</ul>
				</div>
				<div class="">
					<img src={ipa_a} alt={ipa_a} />
				</div>
			</div>
			<div class="basis-1/2 flex justify-between mx-3">
				<div class="">
					<p class="text-red-700 text-2xl font-bold inline-block leading-10">/ ɒ /</p>
					<button class="py-1 px-1"
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
								d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
							/>
						</svg></button
					>
					<p class="my-3">Đọc như o ngắn, dứt khoát. Âm này trong UK như ɔ: còn US như ɑ:</p>
					<p class="underline font-bold">Ví dụ:</p>
					<ul>
						<li class="my-1">
							got <span class="text-blue-700">/ɡɒt/</span>
							<button class="py-1 px-1"
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
										d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
									/>
								</svg></button
							>
						</li>
						<li class="my-1">
							shot <span class="text-blue-700">/ʃɒt/</span>
							<button class="py-1 px-1"
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
										d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
									/>
								</svg></button
							>
						</li>
					</ul>
				</div>
				<div class="">
					<img src={ipa_a} alt={ipa_a} />
				</div>
			</div>
		</div>
	</div>

	<!-- 4 -->
	<div class="collapse bg-base-200 mb-3">
		<input type="checkbox" class="peer" />
		<div class="collapse-title text-xl font-medium text-green-600">
			😮 Nhóm âm mở &nbsp;<b>/ e /, / æ /, / ɑ: /, / ʌ /</b>
		</div>
		<div class="collapse-content grid grid-cols-2 gap-8">
			<div class="basis-1/2 flex justify-between mx-3">
				<div class="">
					<p class="text-red-700 text-2xl font-bold inline-block leading-10">/ e /</p>
					<button class="py-1 px-1"
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
								d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
							/>
						</svg></button
					>

					<p class="my-3">Mở miệng vừa, đọc như e. Giữ trọng tâm</p>
					<p class="underline font-bold">Ví dụ:</p>
					<ul>
						<li class="my-1">
							ten <span class="text-blue-700">/ten//</span>
							<button class="py-1 px-1"
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
										d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
									/>
								</svg></button
							>
						</li>
						<li class="my-1">
							medal <span class="text-blue-700">/medəl/</span>
							<button class="py-1 px-1"
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
										d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
									/>
								</svg></button
							>
						</li>
					</ul>
				</div>
				<div class="">
					<img src={ipa_e} alt={ipa_e} />
				</div>
			</div>

			<div class="basis-1/2 flex justify-between mx-3">
				<div class="">
					<p class="text-red-700 text-2xl font-bold inline-block leading-10">/ æ /</p>
					<button class="py-1 px-1"
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
								d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
							/>
						</svg></button
					>
					<p class="my-3">
						Mở miệng đọc nhẹ e nối liền a, bắt đầu với e và kết thúc a. Giữ trọng tâm
					</p>
					<p class="underline font-bold">Ví dụ:</p>
					<ul>
						<li class="my-1">
							back <span class="text-blue-700">/bæk/</span>
							<button class="py-1 px-1"
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
										d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
									/>
								</svg></button
							>
						</li>
						<li class="my-1">
							trap <span class="text-blue-700">/træp/</span>
							<button class="py-1 px-1"
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
										d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
									/>
								</svg></button
							>
						</li>
					</ul>
				</div>
				<div class="">
					<img src={ipa_ei} alt={ipa_ei} />
				</div>
			</div>

			<div class="basis-1/2 flex justify-between mx-3">
				<div class="">
					<p class="text-red-700 text-2xl font-bold inline-block leading-10">/ ɑ: /</p>
					<button class="py-1 px-1"
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
								d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
							/>
						</svg></button
					>
					<p class="my-3">Đọc là a nhưng dài, nặng, nhấn mạnh. Giữ trọng tâm</p>
					<p class="underline font-bold">Ví dụ:</p>
					<ul>
						<li class="my-1">
							fast <span class="text-blue-700">/fɑ:st/</span>
							<button class="py-1 px-1"
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
										d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
									/>
								</svg></button
							>
						</li>
						<li class="my-1">
							arm <span class="text-blue-700">/ɑ:m/</span>
							<button class="py-1 px-1"
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
										d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
									/>
								</svg></button
							>
						</li>
					</ul>
				</div>
				<div class="">
					<img src={ipa_a} alt={ipa_a} />
				</div>
			</div>
			<div class="basis-1/2 flex justify-between mx-3">
				<div class="">
					<p class="text-red-700 text-2xl font-bold inline-block leading-10">/ ʌ /</p>
					<button class="py-1 px-1"
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
								d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
							/>
						</svg></button
					>
					<p class="my-3">Đọc như â. Giữ trọng tâm</p>
					<p class="underline font-bold">Ví dụ:</p>
					<ul>
						<li class="my-1">
							cup <span class="text-blue-700">/kʌp/</span>
							<button class="py-1 px-1"
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
										d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
									/>
								</svg></button
							>
						</li>
						<li class="my-1">
							drum <span class="text-blue-700">/drʌm/</span>
							<button class="py-1 px-1"
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
										d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
									/>
								</svg></button
							>
						</li>
					</ul>
				</div>
				<div class="">
					<img src={ipa_a} alt={ipa_a} />
				</div>
			</div>
		</div>
	</div>

	<!-- 5 -->
	<div class="collapse bg-base-200 mb-3">
		<input type="checkbox" class="peer" />
		<div class="collapse-title text-xl font-medium text-green-600">
			😝 Nhóm âm ơ &nbsp;<b>/ ə /, / ɜ: /</b>
		</div>
		<div class="collapse-content flex">
			<div class="basis-1/2 flex justify-between mx-3">
				<div class="">
					<p class="text-red-700 text-2xl font-bold inline-block leading-10">/ ə /</p>
					<button class="py-1 px-1"
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
								d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
							/>
						</svg></button
					>

					<p class="my-3">Đọc như ơ, cong nhẹ lưỡi nếu có r, dứt khoát</p>
					<p class="underline font-bold">Ví dụ:</p>
					<ul>
						<li class="my-1">
							ago <span class="text-blue-700">/əˈɡəʊ/</span>
							<button class="py-1 px-1"
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
										d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
									/>
								</svg></button
							>
						</li>
						<li class="my-1">
							Never <span class="text-blue-700">/ˈnevə(r)/</span>
							<button class="py-1 px-1"
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
										d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
									/>
								</svg></button
							>
						</li>
					</ul>
				</div>
				<div class="">
					<img src={ipa_u} alt={ipa_u} />
				</div>
			</div>
			<div class="basis-1/2 flex justify-between mx-3">
				<div class="">
					<p class="text-red-700 text-2xl font-bold inline-block leading-10">/ ɜ: /</p>
					<button class="py-1 px-1"
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
								d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
							/>
						</svg></button
					>
					<p class="my-3">Đọc như ơ dài, cong lưỡi, nhấn mạnh</p>
					<p class="underline font-bold">Ví dụ:</p>
					<ul>
						<li class="my-1">
							bird <span class="text-blue-700">/bɜ:d/</span>
							<button class="py-1 px-1"
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
										d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
									/>
								</svg></button
							>
						</li>
						<li class="my-1">
							bibirdrd <span class="text-blue-700">/nɜ:s/</span>
							<button class="py-1 px-1"
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
										d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
									/>
								</svg></button
							>
						</li>
					</ul>
				</div>
				<div class="">
					<img src={ipa_u} alt={ipa_u} />
				</div>
			</div>
		</div>
	</div>

	<h1 class="text-2xl text-orange-600 mb-2">2. Nguyên âm đôi (Diphthongs)</h1>
	<p class=" text-slate-500 mb-4">
		Chúng ta có 8 nguyên âm đôi, mình chia làm 3 nhóm, phát âm theo nguyên tắc 7/3, 7 phần cho âm
		đầu và 3 phần âm sau:
	</p>

	<h1 class="text-2xl text-orange-600 mb-2">3. Phụ âm (Consonants)</h1>
	<p class=" text-slate-500 mb-4">
		Chúng ta có 24 phụ âm, mình chia làm 8 nhóm. Lưu ý về các dạng phụ âm như âm vô thanh thì không
		phát ra âm thanh, luồng hơi không làm rung dây thanh quản. Âm hữu thanh phát ra âm thanh, hơi
		thở đi từ họng, qua lưỡi, răng sau đó ra ngoài là cách phát âm của các âm này, dây thanh quản bị
		rung.
	</p>

	<h1 class="text-2xl text-orange-600 mb-2">4. Biểu đồ IPA (IPA Chart)</h1>
	<div class="">
		<img class="mx-auto" src={ipaChart} alt={ipaChart} />
	</div>
	<h1 class="text-2xl text-orange-600 mb-2">5. Tóm lượt (Summary)</h1>
	<div class="mb-4">
		<img src={ipaTable} alt={ipaTable} />
	</div>

	<div class="mb-4">
		<img class="mx-auto" src={mouthShape} alt={mouthShape} />
	</div>

	<!-- <div id="accordion-open" data-accordion="open">
		<h2 id="accordion-open-heading-1">
			<button
				type="button"
				class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
				data-accordion-target="#accordion-open-body-1"
				aria-expanded="true"
				aria-controls="accordion-open-body-1"
			>
				<span class="flex items-center"
					><p class="makeStyles-gcTitle-119 text-green-500 text-lg">
						😁 Nhóm âm cười &nbsp;<b>/ ɪ /, / i: /</b>
					</p>
				</span>
				<svg
					data-accordion-icon
					class="w-3 h-3 rotate-180 shrink-0"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 10 6"
				>
					<path
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M9 5 5 1 1 5"
					/>
				</svg>
			</button>
		</h2>
		<div id="accordion-open-body-1" class="hidden" aria-labelledby="accordion-open-heading-1">
			<div class="flex p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
				<div class="basis-1/2 flex justify-between mr-3">
					<div class="">
						<p class="text-red-700">/ ɪ /</p>
						<p>i ngắn, đọc dứt khoát như đang kêu ai đó, miệng không căng</p>
						<p>Ví dụ:</p>
						<ul>
							<li>ship <span>/ʃɪp/</span></li>
							<li>hit <span>/hɪt/</span></li>
						</ul>
					</div>
					<div class="">
						<img src={ipa_e} alt={ipa_e} />
					</div>
				</div>
				<div class="basis-1/2 ml-3">test</div>
			</div>
		</div>
		<h2 id="accordion-open-heading-2">
			<button
				type="button"
				class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
				data-accordion-target="#accordion-open-body-2"
				aria-expanded="false"
				aria-controls="accordion-open-body-2"
			>
				<span class="flex items-center"
					><svg
						class="w-5 h-5 mr-2 shrink-0"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
						><path
							fill-rule="evenodd"
							d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
							clip-rule="evenodd"
						/></svg
					>Is there a Figma file available?</span
				>
				<svg
					data-accordion-icon
					class="w-3 h-3 rotate-180 shrink-0"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 10 6"
				>
					<path
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M9 5 5 1 1 5"
					/>
				</svg>
			</button>
		</h2>
		<div id="accordion-open-body-2" class="hidden" aria-labelledby="accordion-open-heading-2">
			<div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
				<p class="mb-2 text-gray-500 dark:text-gray-400">
					Flowbite is first conceptualized and designed using the Figma software so everything you
					see in the library has a design equivalent in our Figma file.
				</p>
				<p class="text-gray-500 dark:text-gray-400">
					Check out the <a
						href="https://flowbite.com/figma/"
						class="text-blue-600 dark:text-blue-500 hover:underline">Figma design system</a
					> based on the utility classes from Tailwind CSS and components from Flowbite.
				</p>
			</div>
		</div>
		<h2 id="accordion-open-heading-3">
			<button
				type="button"
				class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
				data-accordion-target="#accordion-open-body-3"
				aria-expanded="false"
				aria-controls="accordion-open-body-3"
			>
				<span class="flex items-center"
					><svg
						class="w-5 h-5 mr-2 shrink-0"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
						><path
							fill-rule="evenodd"
							d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
							clip-rule="evenodd"
						/></svg
					> What are the differences between Flowbite and Tailwind UI?</span
				>
				<svg
					data-accordion-icon
					class="w-3 h-3 rotate-180 shrink-0"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 10 6"
				>
					<path
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M9 5 5 1 1 5"
					/>
				</svg>
			</button>
		</h2>
		<div id="accordion-open-body-3" class="hidden" aria-labelledby="accordion-open-heading-3">
			<div class="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
				<p class="mb-2 text-gray-500 dark:text-gray-400">
					The main difference is that the core components from Flowbite are open source under the
					MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite
					relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.
				</p>
				<p class="mb-2 text-gray-500 dark:text-gray-400">
					However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as
					there is no technical reason stopping you from using the best of two worlds.
				</p>
				<p class="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
				<ul class="pl-5 text-gray-500 list-disc dark:text-gray-400">
					<li>
						<a
							href="https://flowbite.com/pro/"
							class="text-blue-600 dark:text-blue-500 hover:underline">Flowbite Pro</a
						>
					</li>
					<li>
						<a
							href="https://tailwindui.com/"
							rel="nofollow"
							class="text-blue-600 dark:text-blue-500 hover:underline">Tailwind UI</a
						>
					</li>
				</ul>
			</div>
		</div>
	</div> -->
</div>
