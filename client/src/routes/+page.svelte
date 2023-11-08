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

<main class="">
	<div class="max-w-screen-xl flex flex-wrap mx-auto py-10">
		<div class="p-3 w-1/3 h-max">
			<a
				href="/IPA"
				class=" h-[240px] border-[#84d8ff] px-6 py-4 flex justify-center items-center transition rounded-md border-2 shadow-lg bg-[#58cc02] hover:bg-green-600"
			>
				<div class="w-1/6"><img src={ipa} alt="ipa" /></div>
				<div class="w-5/6">
					<p class="text-3xl text-white font-bold mb-2">Bảng phiên âm (IPA)</p>
					<p class="text-md text-white">
						Luyện nghe, phát âm chuẩn với 44 âm trong bảng phiên âm quốc tế IPA
					</p>
				</div>
			</a>
		</div>
		<div class="p-3 w-1/3 h-max">
			<a
				href="/1000-communication-phrase"
				class="h-[240px] border-[#84d8ff] px-6 py-4 flex justify-center items-center transition rounded-md border-2 shadow-lg bg-green-500 hover:bg-green-600"
			>
				<div class="w-1/6"><img src={communicate} alt={communicate} /></div>
				<div class="w-5/6">
					<p class="text-3xl text-yellow-400 font-bold mb-2">1000+ câu giao tiếp</p>
					<p class="text-md text-white">
						Luyện nghe, nói câu tiếng Anh giao tiếp hàng ngày cùng CTUE
					</p>
				</div>
			</a>
		</div>
		<div class="p-3 w-1/3 h-max">
			<a
				href="/ctue-dictionary"
				class="h-[240px] border-[#84d8ff] px-6 py-4 flex justify-center items-center transition rounded-md border-2 shadow-lg bg-green-500 hover:bg-green-600"
			>
				<div class="w-1/6"><img src={dictionary} alt="dictionary" /></div>
				<div class="w-5/6">
					<p class="text-3xl text-yellow-400 font-bold mb-2">Từ điển trong CTUe</p>
					<p class="text-md text-white">
						Danh sách từ vựng được phân loại theo cấp độ, loại từ, ...
					</p>
				</div>
			</a>
		</div>
		<div class="p-3 w-1/3 h-max">
			<a
				href="/favorite"
				class="h-[240px] border-[#84d8ff] px-6 py-4 flex justify-center items-center transition rounded-md border-2 shadow-lg bg-green-500 hover:bg-green-600"
			>
				<div class="w-1/6"><img src={favorite} alt="favorite" /></div>
				<div class="w-5/6">
					<p class="text-3xl text-yellow-400 font-bold mb-2">Từ vựng yêu thích của bạn</p>
					<p class="text-md text-white">Danh sách những từ vựng yêu thích mà bạn đã lưu</p>
				</div>
			</a>
		</div>
		<div class="p-3 w-1/3 h-max">
			<a
				href="/irregular-verbs"
				class="h-[240px] border-[#84d8ff] px-6 py-4 flex justify-center items-center transition rounded-md border-2 shadow-lg bg-green-500 hover:bg-green-600"
			>
				<div class="w-1/6"><img src={verb} alt="verb" /></div>
				<div class="w-5/6">
					<p class="text-3xl text-yellow-400 font-bold mb-2">Động từ bất quy tắc</p>
					<p class="text-md text-white">Tất cả những động từ bất quy tắc trong tiếng Anh</p>
				</div>
			</a>
		</div>
		<!-- <div class="p-3 w-1/3 h-max">
			<a
				href="/"
				class="h-[240px] border-[#84d8ff] px-6 py-4 flex justify-center items-center transition rounded-md border-2 shadow-lg bg-green-500 hover:bg-green-600"
			>
				<div class="w-1/6"><img src={grammar} alt="grammar" /></div>
				<div class="w-5/6">
					<p class="text-3xl text-yellow-400 font-bold mb-2">Ngữ pháp</p>
					<p class="text-md text-white">Danh sách tổng hợp những cấu trúc câu trong tiếng Anh</p>
				</div>
			</a>
		</div> -->
		<div class="p-3 w-1/3 h-max">
			<a
				href="/practice"
				class="h-[240px] border-[#84d8ff] px-6 py-4 flex justify-center items-center transition rounded-md border-2 shadow-lg bg-green-500 hover:bg-green-600"
			>
				<div class="w-1/6"><img src={game} alt="game" /></div>
				<div class="w-5/6">
					<p class="text-3xl text-yellow-400 font-bold mb-2">Ôn tập</p>
					<p class="text-md text-white">
						Ôn luyện kiến thức hiệu quả và đỡ nhàm chán hơn qua việc chơi game cùng CTUE nhé
					</p>
				</div>
			</a>
		</div>
		<div class="p-3 w-1/3 h-max">
			<a
				href="/leaderboard"
				class="h-[240px] border-[#84d8ff] px-6 py-4 flex justify-center items-center transition rounded-md border-2 shadow-lg bg-green-500 hover:bg-green-600"
			>
				<div class="w-1/6"><img src={medal} alt="medal" /></div>
				<div class="w-5/6">
					<p class="text-3xl text-yellow-400 font-bold mb-2">Bảng xếp hạng</p>
					<p class="text-md text-white">Cùng xem thành tích của bạn bè và những người khác nhé</p>
				</div>
			</a>
		</div>
		<div class="p-3 w-1/3 h-max">
			<a
				href="/contribution"
				class="h-[240px] border-[#84d8ff] px-6 py-4 flex justify-center items-center transition rounded-md border-2 shadow-lg bg-green-500 hover:bg-green-600"
			>
				<div class="w-1/6"><img src={edit} alt="edit" /></div>
				<div class="w-5/6">
					<p class="text-3xl text-yellow-400 font-bold mb-2">Đóng góp</p>
					<p class="text-md text-white">
						CTUE rất mong được sự đóng góp của bạn. Bạn có thể thêm từ mới, sửa lỗi sai
					</p>
				</div>
			</a>
		</div>
	</div>
</main>
