<script>
	import correctWord from '$lib/assets/icons/games/correct-word.png';
	import wordMatch from '$lib/assets/icons/games/word-match.png';
</script>

<div class="max-w-screen-xl flex flex-wrap items-center mx-auto p-4">
	<div class="p-3 w-1/3">
		<a
			href="/practice/correct-word"
			class="h-[180px] px-6 py-4 flex justify-center items-center transition rounded-md border shadow-lg bg-[#f1f1f1] hover:bg-[#e5e5e5]"
		>
			<div class="w-1/5"><img src={correctWord} alt={correctWord} /></div>
			<div class="w-4/5">
				<p class="text-2xl text-amber-500 font-bold">Hãy chọn từ đúng</p>
				<p class="text-ms text-gray-500">
					Ôn tập từ vựng bằng cách chọn 1 đáp án đúng nhất trong 4 câu trả lời có nghĩa khớp với từ
					được cho.
				</p>
			</div>
		</a>
	</div>
	<div class="p-3 w-1/3">
		<a
			href="/practice/word-match"
			class="h-[180px] px-6 py-4 flex justify-center items-center transition rounded-md border shadow-lg bg-[#f1f1f1] hover:bg-[#e5e5e5]"
		>
			<div class="w-1/5"><img src={wordMatch} alt={wordMatch} /></div>
			<div class="w-4/5">
				<p class="text-2xl text-amber-500 font-bold">Ghép từ</p>
				<p class="text-ms text-gray-500">
					Ghép các ký tự đã cho thành một chữ có nghĩa đúng với từ đã cho.
				</p>
			</div>
		</a>
	</div>
</div>
