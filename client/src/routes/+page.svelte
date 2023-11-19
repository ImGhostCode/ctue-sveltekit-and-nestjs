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
	import bgCtu from '$lib/assets/images/CTU_Blank_white.png';
</script>

<main class="bg-[url('$lib/assets/images/CTU_Blank_white.png')]">
	<div class="max-w-screen-xl flex md:flex-row flex-col flex-wrap mx-auto py-10">
		<div class="md:p-3 p-2 md:w-1/3 w-full h-max">
			<a
				href="/IPA"
				class=" md:h-[240px] border-[#84d8ff] md:px-6 px-3 md:py-4 py-2 flex justify-center items-center transition rounded-md border-2 shadow- bg-green-600 hover:bg-green-700 hover:scale-105 duration-300"
			>
				<div class="w-1/6"><img src={ipa} alt="ipa" /></div>
				<div class="w-5/6">
					<p class="md:text-3xl text-base text-yellow-400 font-bold md:mb-2">Bảng phiên âm (IPA)</p>
					<p class="md:block hidden text-md text-white">
						Luyện nghe, phát âm chuẩn với 44 âm trong bảng phiên âm quốc tế IPA
					</p>
				</div>
			</a>
		</div>
		<div class="md:p-3 p-2 md:w-1/3 w-full h-max">
			<a
				href="/1000-communication-phrase"
				class="md:h-[240px] border-[#84d8ff] md:px-6 px-3 md:py-4 py-2 flex justify-center items-center transition rounded-md border-2 shadow- bg-green-600 hover:bg-green-700 hover:scale-105 duration-300"
			>
				<div class="w-1/6"><img src={communicate} alt={communicate} /></div>
				<div class="w-5/6">
					<p class="md:text-3xl text-base text-yellow-400 font-bold md:mb-2">1000+ câu giao tiếp</p>
					<p class="md:block hidden text-md text-white">
						Luyện nghe, nói câu tiếng Anh giao tiếp hàng ngày cùng CTUE
					</p>
				</div>
			</a>
		</div>
		<div class="md:p-3 p-2 md:w-1/3 w-full h-max">
			<a
				href="/ctue-dictionary"
				class="md:h-[240px] border-[#84d8ff] md:px-6 px-3 md:py-4 py-2 flex justify-center items-center transition rounded-md border-2 shadow- bg-green-600 hover:bg-green-700 hover:scale-105 duration-300"
			>
				<div class="w-1/6"><img src={dictionary} alt="dictionary" /></div>
				<div class="w-5/6">
					<p class="md:text-3xl text-base text-yellow-400 font-bold md:mb-2">Từ điển trong CTUe</p>
					<p class="md:block hidden text-md text-white">
						Danh sách từ vựng được phân loại theo cấp độ, loại từ, ...
					</p>
				</div>
			</a>
		</div>
		<div class="md:p-3 p-2 md:w-1/3 w-full h-max">
			<a
				href="/favorite"
				class="md:h-[240px] border-[#84d8ff] md:px-6 px-3 md:py-4 py-2 flex justify-center items-center transition rounded-md border-2 shadow- bg-green-600 hover:bg-green-700 hover:scale-105 duration-300"
			>
				<div class="w-1/6"><img src={favorite} alt="favorite" /></div>
				<div class="w-5/6">
					<p class="md:text-3xl text-base text-yellow-400 font-bold md:mb-2">
						Từ vựng yêu thích của bạn
					</p>
					<p class="md:block hidden text-md text-white">
						Danh sách những từ vựng yêu thích mà bạn đã lưu
					</p>
				</div>
			</a>
		</div>
		<div class="md:p-3 p-2 md:w-1/3 w-full h-max">
			<a
				href="/irregular-verbs"
				class="md:h-[240px] border-[#84d8ff] md:px-6 px-3 md:py-4 py-2 flex justify-center items-center transition rounded-md border-2 shadow- bg-green-600 hover:bg-green-700 hover:scale-105 duration-300"
			>
				<div class="w-1/6"><img src={verb} alt="verb" /></div>
				<div class="w-5/6">
					<p class="md:text-3xl text-base text-yellow-400 font-bold md:mb-2">Động từ bất quy tắc</p>
					<p class="md:block hidden text-md text-white">
						Tất cả những động từ bất quy tắc trong tiếng Anh
					</p>
				</div>
			</a>
		</div>
		<!-- <div class="md:p-3 p-2 md:w-1/3 w-full h-max">
			<a
				href="/"
				class="md:h-[240px]  border-[#84d8ff] md:px-6 px-3 md:py-4 py-2 flex justify-center items-center transition rounded-md border-2 shadow- bg-green-600 hover:bg-green-700  hover:scale-105 duration-300"
			>
				<div class="w-1/6"><img src={grammar} alt="grammar" /></div>
				<div class="w-5/6">
					<p class="md:text-3xl text-base text-yellow-400 font-bold md:mb-2">Ngữ pháp</p>
					<p class="md:block hidden text-md text-white">Danh sách tổng hợp những cấu trúc câu trong tiếng Anh</p>
				</div>
			</a>
		</div> -->
		<div class="md:p-3 p-2 md:w-1/3 w-full h-max">
			<a
				href="/practice"
				class="md:h-[240px] border-[#84d8ff] md:px-6 px-3 md:py-4 py-2 flex justify-center items-center transition rounded-md border-2 shadow- bg-green-600 hover:bg-green-700 hover:scale-105 duration-300"
			>
				<div class="w-1/6"><img src={game} alt="game" /></div>
				<div class="w-5/6">
					<p class="md:text-3xl text-base text-yellow-400 font-bold md:mb-2">Ôn tập</p>
					<p class="md:block hidden text-md text-white">
						Ôn luyện kiến thức hiệu quả và đỡ nhàm chán hơn qua việc chơi game cùng CTUE nhé
					</p>
				</div>
			</a>
		</div>
		<div class="md:p-3 p-2 md:w-1/3 w-full h-max">
			<a
				href="/leaderboard"
				class="md:h-[240px] border-[#84d8ff] md:px-6 px-3 md:py-4 py-2 flex justify-center items-center transition rounded-md border-2 shadow- bg-green-600 hover:bg-green-700 hover:scale-105 duration-300"
			>
				<div class="w-1/6"><img src={medal} alt="medal" /></div>
				<div class="w-5/6">
					<p class="md:text-3xl text-base text-yellow-400 font-bold md:mb-2">Bảng xếp hạng</p>
					<p class="md:block hidden text-md text-white">
						Cùng xem thành tích của bạn bè và những người khác nhé
					</p>
				</div>
			</a>
		</div>
		<div class="md:p-3 p-2 md:w-1/3 w-full h-max">
			<a
				href="/contribution"
				class="md:h-[240px] border-[#84d8ff] md:px-6 px-3 md:py-4 py-2 flex justify-center items-center transition rounded-md border-2 shadow- bg-green-600 hover:bg-green-700 hover:scale-105 duration-300"
			>
				<div class="w-1/6"><img src={edit} alt="edit" /></div>
				<div class="w-5/6">
					<p class="md:text-3xl text-base text-yellow-400 font-bold md:mb-2">Đóng góp</p>
					<p class="md:block hidden text-md text-white">
						CTUE rất mong được sự đóng góp của bạn. Bạn có thể thêm từ mới, sửa lỗi sai
					</p>
				</div>
			</a>
		</div>
	</div>
</main>

<style>
	main {
		/* background: url(//elearning.ctu.edu.vn/pluginfile.php/1/theme_lambda/pagebackground/1692676992/CTU_Blank_white.png); */
	}
</style>
