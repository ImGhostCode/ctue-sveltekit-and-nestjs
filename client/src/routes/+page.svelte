<script>
	import ipa from '$lib/assets/icons/ipa.png';
	import game from '$lib/assets/icons/game.png';
	import communicate from '$lib/assets/icons/communicate.png';
	import dictionary from '$lib/assets/icons/dictionary.png';
	import donate from '$lib/assets/icons/donate.png';
	import edit from '$lib/assets/icons/edit.png';
	import favorite from '$lib/assets/icons/favorite.png';
	import friends from '$lib/assets/icons/friends.png';
	import grammar from '$lib/assets/icons/grammar.png';
	import job from '$lib/assets/icons/job.png';
	import medal from '$lib/assets/icons/medal.png';
	import voice from '$lib/assets/icons/voice.png';
	import verb from '$lib/assets/icons/verb.png';
	import translate from '$lib/assets/icons/translate.png';
</script>

<!-- <main class="h-[2000px]">
	<div class="max-w-screen-xl flex flex-wrap items-center mx-auto p-4">
		<div class="p-3 w-1/3">
			<a
				href="/"
				class="h-[180px] px-6 py-4 flex justify-center items-center transition rounded-md border shadow-lg bg-[#f1f1f1] hover:bg-[#e5e5e5]"
			>
				<div class="w-1/5"><img src={ipa} alt="ipa" /></div>
				<div class="w-4/5">
					<p class="text-2xl text-amber-500 font-bold">Bảng phiên âm (IPA)</p>
					<p class="text-ms text-gray-500">
						Luyện nghe, phát âm chuẩn với 44 âm trong bảng phiên âm quốc tế IPA
					</p>
				</div>
			</a>
		</div>
		<div class="p-3 w-1/3">
			<a
				href="/"
				class="h-[180px] px-6 py-4 flex justify-center items-center transition rounded-md border shadow-lg bg-[#f1f1f1] hover:bg-[#e5e5e5]"
			>
				<div class="w-1/5"><img src={dictionary} alt="dictionary" /></div>
				<div class="w-4/5">
					<p class="text-2xl text-amber-500 font-bold">Từ điển trong CTUe</p>
					<p class="text-ms text-gray-500">
						Danh sách từ vựng được phân loại theo cấp độ, loại từ, ...
					</p>
				</div>
			</a>
		</div>
		<div class="p-3 w-1/3">
			<a
				href="/"
				class="h-[180px] px-6 py-4 flex justify-center items-center transition rounded-md border shadow-lg bg-[#f1f1f1] hover:bg-[#e5e5e5]"
			>
				<div class="w-1/5"><img src={favorite} alt="favorite" /></div>
				<div class="w-4/5">
					<p class="text-2xl text-amber-500 font-bold">Từ vựng yêu thích của bạn</p>
					<p class="text-ms text-gray-500">Danh sách những từ vựng yêu thích mà bạn đã lưu</p>
				</div>
			</a>
		</div>
		<div class="p-3 w-1/3">
			<a
				href="/"
				class="h-[180px] px-6 py-4 flex justify-center items-center transition rounded-md border shadow-lg bg-[#f1f1f1] hover:bg-[#e5e5e5]"
			>
				<div class="w-1/5"><img src={verb} alt="verb" /></div>
				<div class="w-4/5">
					<p class="text-2xl text-amber-500 font-bold">Động từ bất quy tắc</p>
					<p class="text-ms text-gray-500">Tất cả những động từ bất quy tắc trong tiếng Anh</p>
				</div>
			</a>
		</div>
		<div class="p-3 w-1/3">
			<a
				href="/"
				class="h-[180px] px-6 py-4 flex justify-center items-center transition rounded-md border shadow-lg bg-[#f1f1f1] hover:bg-[#e5e5e5]"
			>
				<div class="w-1/5"><img src={grammar} alt="grammar" /></div>
				<div class="w-4/5">
					<p class="text-2xl text-amber-500 font-bold">Ngữ pháp</p>
					<p class="text-ms text-gray-500">Danh sách tổng hợp những cấu trúc câu trong tiếng Anh</p>
				</div>
			</a>
		</div>
		<div class="p-3 w-1/3">
			<a
				href="/"
				class="h-[180px] px-6 py-4 flex justify-center items-center transition rounded-md border shadow-lg bg-[#f1f1f1] hover:bg-[#e5e5e5]"
			>
				<div class="w-1/5"><img src={game} alt="game" /></div>
				<div class="w-4/5">
					<p class="text-2xl text-amber-500 font-bold">Ôn tập</p>
					<p class="text-ms text-gray-500">
						Ôn luyện kiến thức hiệu quả và đỡ nhàm chán hơn qua việc chơi game cùng CTUE nhé
					</p>
				</div>
			</a>
		</div>
		<div class="p-3 w-1/3">
			<a
				href="/"
				class="h-[180px] px-6 py-4 flex justify-center items-center transition rounded-md border shadow-lg bg-[#f1f1f1] hover:bg-[#e5e5e5]"
			>
				<div class="w-1/5"><img src={medal} alt="medal" /></div>
				<div class="w-4/5">
					<p class="text-2xl text-amber-500 font-bold">Bảng xếp hạng</p>
					<p class="text-ms text-gray-500">
						Cùng xem thành tích của bạn bè và những người khác nhé
					</p>
				</div>
			</a>
		</div>
		<div class="p-3 w-1/3">
			<a
				href="/"
				class="h-[180px] px-6 py-4 flex justify-center items-center transition rounded-md border shadow-lg bg-[#f1f1f1] hover:bg-[#e5e5e5]"
			>
				<div class="w-1/5"><img src={edit} alt="edit" /></div>
				<div class="w-4/5">
					<p class="text-2xl text-amber-500 font-bold">Đóng góp</p>
					<p class="text-ms text-gray-500">
						CTUE rất mong được sự đóng góp của bạn. Bạn có thể thêm từ mới, sửa lỗi sai
					</p>
				</div>
			</a>
		</div>
	</div>
</main> -->
