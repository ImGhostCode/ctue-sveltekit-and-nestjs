<script lang="ts">
	import ipa_e from '$lib/assets/images/ipa/e.jpg';
	import ipa_ei from '$lib/assets/images/ipa/ei.jpg';
	import ipa_u from '$lib/assets/images/ipa/u.jpg';
	import ipa_ou from '$lib/assets/images/ipa/ou.jpg';
	import ipa_a from '$lib/assets/images/ipa/a.jpg';
	import ipa_b from '$lib/assets/images/ipa/b.jpg';
	import ipa_f from '$lib/assets/images/ipa/f.jpg';
	import ipa_l from '$lib/assets/images/ipa/l.jpg';
	import ipa_t from '$lib/assets/images/ipa/t.jpg';
	import ipa_d from '$lib/assets/images/ipa/d.jpg';
	import ipa_i from '$lib/assets/images/ipa/i.jpg';
	import ipaChart from '$lib/assets/images/ipa/ipa-chart.png';
	import ipaTable from '$lib/assets/images/ipa/ipa-table.jpg';
	import mouthShape from '$lib/assets/images/ipa/mouth-shape.png';

	import i_short from '$lib/assets/audios/ipa/vowels/i-short.mp3';
	import i_long from '$lib/assets/audios/ipa/vowels/i-long.mp3';
	import u_short from '$lib/assets/audios/ipa/vowels/u-short.mp3';
	import u_long from '$lib/assets/audios/ipa/vowels/u-long.mp3';
	import o from '$lib/assets/audios/ipa/vowels/o.mp3';
	import o_uk from '$lib/assets/audios/ipa/vowels/o-uk.mp3';
	import e from '$lib/assets/audios/ipa/vowels/e.mp3';
	import ae from '$lib/assets/audios/ipa/vowels/ae.mp3';
	import a_long from '$lib/assets/audios/ipa/vowels/a-long.mp3';
	import aa from '$lib/assets/audios/ipa/vowels/aa.mp3';
	import ow from '$lib/assets/audios/ipa/vowels/ow.mp3';
	import ow_long from '$lib/assets/audios/ipa/vowels/ow-long.mp3';
	import iow from '$lib/assets/audios/ipa/diphthongs/iow.mp3';
	import uow from '$lib/assets/audios/ipa/diphthongs/uow.mp3';
	import eow from '$lib/assets/audios/ipa/diphthongs/eow.mp3';
	import ei from '$lib/assets/audios/ipa/diphthongs/ei.mp3';
	import ai from '$lib/assets/audios/ipa/diphthongs/ai.mp3';
	import oi from '$lib/assets/audios/ipa/diphthongs/oi.mp3';
	import owu from '$lib/assets/audios/ipa/diphthongs/owu.mp3';
	import au from '$lib/assets/audios/ipa/diphthongs/au.mp3';

	import { HandlerSpeaker } from '$lib/store';
	import Speaker from '../../components/Speaker.svelte';
	import PlayAudio from '../../components/PlayAudio.svelte';

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
					<PlayAudio key={i_short} />
					<p class="my-3">i ngắn, đọc dứt khoát như đang kêu ai đó, miệng không căng</p>
					<p class="underline font-bold">Ví dụ:</p>
					<ul>
						<li class="my-1">
							ship <span class="text-blue-700">/ʃɪp/</span>
							<Speaker key={'ship'} />
						</li>
						<li class="my-1">
							hit <span class="text-blue-700">/hɪt/</span>
							<Speaker key={'hit'} />
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
					<PlayAudio key={i_long} />
					<p class="my-3">i dài, miệng cười, nhấn mạnh, nặng và căng</p>
					<p class="underline font-bold">Ví dụ:</p>
					<ul>
						<li class="my-1">
							sheep <span class="text-blue-700">/ʃi:p/</span>
							<Speaker key={'sheep'} />
						</li>
						<li class="my-1">
							heat <span class="text-blue-700">/hi:t/</span>
							<Speaker key={'heat'} />
						</li>
					</ul>
				</div>
				<div class="">
					<img src={ipa_ei} alt={ipa_ei} />
				</div>
			</div>
		</div>
	</div>
	<div class="collapse bg-base-200 mb-3">
		<input type="checkbox" class="peer" />
		<div class="collapse-title text-xl font-medium text-green-600">
			💋 Nhóm âm hôn &nbsp;<b>/ ʊ /, / u: /</b>
		</div>
		<div class="collapse-content grid grid-cols-2 gap-8">
			<div class="basis-1/2 flex justify-between mx-3">
				<div class="">
					<p class="text-red-700 text-2xl font-bold inline-block leading-10">/ ʊ /</p>
					<PlayAudio key={u_short} />
					<p class="my-3">u ngắn, tròn môi nhẹ, dứt khoát, không căng</p>
					<p class="underline font-bold">Ví dụ:</p>
					<ul>
						<li class="my-1">
							foot <span class="text-blue-700">/fʊt/</span>
							<Speaker key={'foot'} />
						</li>
						<li class="my-1">
							put <span class="text-blue-700">/pʊt/</span>
							<Speaker key={'put'} />
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
					<PlayAudio key={u_long} />
					<p class="my-3">u dài, chu và tròn môi, căng và mạnh</p>
					<p class="underline font-bold">Ví dụ:</p>
					<ul>
						<li class="my-1">
							blue <span class="text-blue-700">/blu:/</span>
							<Speaker key={'blue'} />
						</li>
						<li class="my-1">
							group <span class="text-blue-700">/gru:p/</span>
							<Speaker key={'group'} />
						</li>
					</ul>
				</div>
				<div class="">
					<img src={ipa_ou} alt={ipa_ou} />
				</div>
			</div>
		</div>
	</div>
	<div class="collapse bg-base-200 mb-3">
		<input type="checkbox" class="peer" />
		<div class="collapse-title text-xl font-medium text-green-600">
			😱 Nhóm âm shock &nbsp;<b>/ ɔ: /, / ɒ /</b>
		</div>
		<div class="collapse-content grid grid-cols-2 gap-8">
			<div class="basis-1/2 flex justify-between mx-3">
				<div class="">
					<p class="text-red-700 text-2xl font-bold inline-block leading-10">/ ɔ: /</p>
					<PlayAudio key={o} />
					<p class="my-3">Như o dài hoặc ô, nặng và nhấn mạnh</p>
					<p class="underline font-bold">Ví dụ:</p>
					<ul>
						<li class="my-1">
							law <span class="text-blue-700">/lɔ:/</span>
							<Speaker key={'law'} />
						</li>
						<li class="my-1">
							thought <span class="text-blue-700">/θɔ:t/</span>
							<Speaker key={'thought'} />
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
					<PlayAudio key={o_uk} />
					<p class="my-3">Đọc như o ngắn, dứt khoát. Âm này trong UK như ɔ: còn US như ɑ:</p>
					<p class="underline font-bold">Ví dụ:</p>
					<ul>
						<li class="my-1">
							got <span class="text-blue-700">/ɡɒt/</span>
							<Speaker key={'got'} />
						</li>
						<li class="my-1">
							shot <span class="text-blue-700">/ʃɒt/</span>
							<Speaker key={'shot'} />
						</li>
					</ul>
				</div>
				<div class="">
					<img src={ipa_a} alt={ipa_a} />
				</div>
			</div>
		</div>
	</div>
	<div class="collapse bg-base-200 mb-3">
		<input type="checkbox" class="peer" />
		<div class="collapse-title text-xl font-medium text-green-600">
			😮 Nhóm âm mở &nbsp;<b>/ e /, / æ /, / ɑ: /, / ʌ /</b>
		</div>
		<div class="collapse-content grid grid-cols-2 gap-8">
			<div class="basis-1/2 flex justify-between mx-3">
				<div class="">
					<p class="text-red-700 text-2xl font-bold inline-block leading-10">/ e /</p>
					<PlayAudio key={e} />
					<p class="my-3">Mở miệng vừa, đọc như e. Giữ trọng tâm</p>
					<p class="underline font-bold">Ví dụ:</p>
					<ul>
						<li class="my-1">
							ten <span class="text-blue-700">/ten//</span>
							<Speaker key={'ten'} />
						</li>
						<li class="my-1">
							medal <span class="text-blue-700">/medəl/</span>
							<Speaker key={'medal'} />
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
					<PlayAudio key={ae} />
					<p class="my-3">
						Mở miệng đọc nhẹ e nối liền a, bắt đầu với e và kết thúc a. Giữ trọng tâm
					</p>
					<p class="underline font-bold">Ví dụ:</p>
					<ul>
						<li class="my-1">
							back <span class="text-blue-700">/bæk/</span>
							<Speaker key={'back'} />
						</li>
						<li class="my-1">
							trap <span class="text-blue-700">/træp/</span>
							<Speaker key={'trap'} />
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
					<PlayAudio key={a_long} />
					<p class="my-3">Đọc là a nhưng dài, nặng, nhấn mạnh. Giữ trọng tâm</p>
					<p class="underline font-bold">Ví dụ:</p>
					<ul>
						<li class="my-1">
							fast <span class="text-blue-700">/fɑ:st/</span>
							<Speaker key={'fast'} />
						</li>
						<li class="my-1">
							arm <span class="text-blue-700">/ɑ:m/</span>
							<Speaker key={'arm'} />
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
					<PlayAudio key={aa} />
					<p class="my-3">Đọc như â. Giữ trọng tâm</p>
					<p class="underline font-bold">Ví dụ:</p>
					<ul>
						<li class="my-1">
							cup <span class="text-blue-700">/kʌp/</span>
							<Speaker key={'cup'} />
						</li>
						<li class="my-1">
							drum <span class="text-blue-700">/drʌm/</span>
							<Speaker key={'drum'} />
						</li>
					</ul>
				</div>
				<div class="">
					<img src={ipa_a} alt={ipa_a} />
				</div>
			</div>
		</div>
	</div>
	<div class="collapse bg-base-200 mb-3">
		<input type="checkbox" class="peer" />
		<div class="collapse-title text-xl font-medium text-green-600">
			😝 Nhóm âm ơ &nbsp;<b>/ ə /, / ɜ: /</b>
		</div>
		<div class="collapse-content flex">
			<div class="basis-1/2 flex justify-between mx-3">
				<div class="">
					<p class="text-red-700 text-2xl font-bold inline-block leading-10">/ ə /</p>
					<PlayAudio key={ow} />
					<p class="my-3">Đọc như ơ, cong nhẹ lưỡi nếu có r, dứt khoát</p>
					<p class="underline font-bold">Ví dụ:</p>
					<ul>
						<li class="my-1">
							ago <span class="text-blue-700">/əˈɡəʊ/</span>
							<Speaker key={'ago'} />
						</li>
						<li class="my-1">
							never <span class="text-blue-700">/ˈnevə(r)/</span>
							<Speaker key={'never'} />
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
					<PlayAudio key={ow_long} />
					<p class="my-3">Đọc như ơ dài, cong lưỡi, nhấn mạnh</p>
					<p class="underline font-bold">Ví dụ:</p>
					<ul>
						<li class="my-1">
							bird <span class="text-blue-700">/bɜ:d/</span>
							<Speaker key={'bird'} />
						</li>
						<li class="my-1">
							nurse <span class="text-blue-700">/nɜ:s/</span>
							<Speaker key={'nurse'} />
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
	<div class="collapse bg-base-200 mb-3">
		<input type="checkbox" class="peer" />
		<div class="collapse-title text-xl font-medium text-green-600">
			😯 Nhóm âm ơ &nbsp;<b>/ iə /, / ʊə /, / eə /</b>
		</div>
		<div class="collapse-content grid grid-cols-2 gap-8">
			<div class="basis-1/2 flex justify-between mx-3">
				<div class="">
					<p class="text-red-700 text-2xl font-bold inline-block leading-10">/ iə /</p>
					<PlayAudio key={iow} />
					<p class="my-3">Đọc là iơ hoặc ia, cong lưỡi nếu có r</p>
					<p class="underline font-bold">Ví dụ:</p>
					<ul>
						<li class="my-1">
							here <span class="text-blue-700">/hiə(r)/</span>
							<Speaker key={'here'} />
						</li>
						<li class="my-1">
							near <span class="text-blue-700">/niə(r)/</span>
							<Speaker key={'near'} />
						</li>
					</ul>
				</div>
				<div class="">
					<img src={ipa_e} alt={ipa_e} />
				</div>
			</div>
			<div class="basis-1/2 flex justify-between mx-3">
				<div class="">
					<p class="text-red-700 text-2xl font-bold inline-block leading-10">/ ʊə /</p>
					<PlayAudio key={uow} />
					<p class="my-3">Đọc là uơ hoặc ua, cong lưỡi nếu có r</p>
					<p class="underline font-bold">Ví dụ:</p>
					<ul>
						<li class="my-1">
							pure <span class="text-blue-700">/pjʊə(r)/</span>
							<Speaker key={'pure'} />
						</li>
						<li class="my-1">
							tour <span class="text-blue-700">/tʊə(r)/</span>
							<Speaker key={'tour'} />
						</li>
					</ul>
				</div>
				<div class="">
					<img src={ipa_u} alt={ipa_u} />
				</div>
			</div>
			<div class="basis-1/2 flex justify-between mx-3">
				<div class="">
					<p class="text-red-700 text-2xl font-bold inline-block leading-10">/ eə /</p>
					<PlayAudio key={eow} />
					<p class="my-3">Đọc là eơ liền nhau, nhanh, ơ hơi câm</p>
					<p class="underline font-bold">Ví dụ:</p>
					<ul>
						<li class="my-1">
							care <span class="text-blue-700">/keə(r)/</span>
							<Speaker key={'care'} />
						</li>
						<li class="my-1">
							hair <span class="text-blue-700">/heə(r)/</span>
							<Speaker key={'hair'} />
						</li>
					</ul>
				</div>
				<div class="">
					<img src={ipa_e} alt={ipa_e} />
				</div>
			</div>
		</div>
	</div>
	<div class="collapse bg-base-200 mb-3">
		<input type="checkbox" class="peer" />
		<div class="collapse-title text-xl font-medium text-green-600">
			😄 Nhóm âm ɪ &nbsp;<b>/ eɪ /, / aɪ /, / ɔi /</b>
		</div>
		<div class="collapse-content grid grid-cols-2 gap-8">
			<div class="basis-1/2 flex justify-between mx-3">
				<div class="">
					<p class="text-red-700 text-2xl font-bold inline-block leading-10">/ eɪ /</p>
					<PlayAudio key={ei} />
					<p class="my-3">Đọc là êi hoặc ây</p>
					<p class="underline font-bold">Ví dụ:</p>
					<ul>
						<li class="my-1">
							page <span class="text-blue-700">/peɪdʒ/</span>
							<Speaker key={'page'} />
						</li>
						<li class="my-1">
							say <span class="text-blue-700">/seɪ/</span>
							<Speaker key={'say'} />
						</li>
					</ul>
				</div>
				<div class="">
					<img src={ipa_ei} alt={ipa_ei} />
				</div>
			</div>
			<div class="basis-1/2 flex justify-between mx-3">
				<div class="">
					<p class="text-red-700 text-2xl font-bold inline-block leading-10">/ aɪ /</p>
					<PlayAudio key={ai} />
					<p class="my-3">Đọc là ai</p>
					<p class="underline font-bold">Ví dụ:</p>
					<ul>
						<li class="my-1">
							five <span class="text-blue-700">/faɪv/</span>
							<Speaker key={'five'} />
						</li>
						<li class="my-1">
							sky <span class="text-blue-700">/skaɪ/</span>
							<Speaker key={'sky'} />
						</li>
					</ul>
				</div>
				<div class="">
					<img src={ipa_a} alt={ipa_a} />
				</div>
			</div>
			<div class="basis-1/2 flex justify-between mx-3">
				<div class="">
					<p class="text-red-700 text-2xl font-bold inline-block leading-10">/ ɔi /</p>
					<PlayAudio key={oi} />
					<p class="my-3">Đọc là oi</p>
					<p class="underline font-bold">Ví dụ:</p>
					<ul>
						<li class="my-1">
							boy <span class="text-blue-700">/bɔi/</span>
							<Speaker key={'boy'} />
						</li>
						<li class="my-1">
							join <span class="text-blue-700">/dʒɔin/</span>
							<Speaker key={'join'} />
						</li>
					</ul>
				</div>
				<div class="">
					<img src={ipa_u} alt={ipa_u} />
				</div>
			</div>
		</div>
	</div>
	<div class="collapse bg-base-200 mb-3">
		<input type="checkbox" class="peer" />
		<div class="collapse-title text-xl font-medium text-green-600">
			🤯 Nhóm âm ơ &nbsp;<b>/ əʊ /, / aʊ /</b>
		</div>
		<div class="collapse-content grid grid-cols-2 gap-8">
			<div class="basis-1/2 flex justify-between mx-3">
				<div class="">
					<p class="text-red-700 text-2xl font-bold inline-block leading-10">/ əʊ /</p>
					<PlayAudio key={owu} />
					<p class="my-3">Đọc là âu, chu môi</p>
					<p class="underline font-bold">Ví dụ:</p>
					<ul>
						<li class="my-1">
							home <span class="text-blue-700">/həʊm/</span>
							<Speaker key={'home'} />
						</li>
						<li class="my-1">
							low <span class="text-blue-700">/ləʊ/</span>
							<Speaker key={'low'} />
						</li>
					</ul>
				</div>
				<div class="">
					<img src={ipa_u} alt={ipa_u} />
				</div>
			</div>
			<div class="basis-1/2 flex justify-between mx-3">
				<div class="">
					<p class="text-red-700 text-2xl font-bold inline-block leading-10">/ aʊ /</p>
					<PlayAudio key={au} />
					<p class="my-3">Đọc như ao</p>
					<p class="underline font-bold">Ví dụ:</p>
					<ul>
						<li class="my-1">
							house <span class="text-blue-700">/haʊs/</span>
							<Speaker key={'house'} />
						</li>
						<li class="my-1">
							flower <span class="text-blue-700">/ˈflaʊə(r)/</span>
							<Speaker key={'flower'} />
						</li>
					</ul>
				</div>
				<div class="">
					<img src={ipa_u} alt={ipa_u} />
				</div>
			</div>
		</div>
	</div>
	<h1 class="text-2xl text-orange-600 mb-2">3. Phụ âm (Consonants)</h1>
	<p class=" text-slate-500 mb-4">
		Chúng ta có 24 phụ âm, mình chia làm 8 nhóm. Lưu ý về các dạng phụ âm như âm vô thanh thì không
		phát ra âm thanh, luồng hơi không làm rung dây thanh quản. Âm hữu thanh phát ra âm thanh, hơi
		thở đi từ họng, qua lưỡi, răng sau đó ra ngoài là cách phát âm của các âm này, dây thanh quản bị
		rung.
	</p>
	<div class="collapse bg-base-200 mb-3">
		<input type="checkbox" class="peer" />
		<div class="collapse-title text-xl font-medium text-green-600">
			💋 Nhóm 2 môi &nbsp;<b>/ m /, / p /, / b /</b>
		</div>
		<div class="collapse-content grid grid-cols-2 gap-8">
			<div class="basis-1/2 flex justify-between mx-3">
				<div class="">
					<p class="text-red-700 text-2xl font-bold inline-block leading-10">/ m /</p>
					<p class="my-3">Mím 2 môi, phát âm là m. Hữu thanh</p>
					<p class="underline font-bold">Ví dụ:</p>
					<ul>
						<li class="my-1">
							man <span class="text-blue-700">/mæn/</span>
							<Speaker key={'man'} />
						</li>
						<li class="my-1">
							some <span class="text-blue-700">/sʌm/</span>
							<Speaker key={'some'} />
						</li>
					</ul>
				</div>
				<div class="">
					<img src={ipa_b} alt={ipa_b} />
				</div>
			</div>
			<div class="basis-1/2 flex justify-between mx-3">
				<div class="">
					<p class="text-red-700 text-2xl font-bold inline-block leading-10">/ p /</p>
					<p class="my-3">Mím 2 môi, phát âm là p dứt khoát, bật hơi. Vô thanh</p>
					<p class="underline font-bold">Ví dụ:</p>
					<ul>
						<li class="my-1">
							park <span class="text-blue-700">/pɑːk/</span>
							<Speaker key={'park'} />
						</li>
						<li class="my-1">
							soup <span class="text-blue-700">/suːp/</span>
							<Speaker key={'soup'} />
						</li>
					</ul>
				</div>
				<div class="">
					<img src={ipa_b} alt={ipa_b} />
				</div>
			</div>
			<div class="basis-1/2 flex justify-between mx-3">
				<div class="">
					<p class="text-red-700 text-2xl font-bold inline-block leading-10">/ b /</p>
					<p class="my-3">Mím 2 môi, phát âm là b dứt khoát, KHÔNG bật hơi. Hữu thanh</p>
					<p class="underline font-bold">Ví dụ:</p>
					<ul>
						<li class="my-1">
							bad <span class="text-blue-700">/bæd/</span>
							<Speaker key={'bad'} />
						</li>
						<li class="my-1">
							web <span class="text-blue-700">/web/</span>
							<Speaker key={'web'} />
						</li>
					</ul>
				</div>
				<div class="">
					<img src={ipa_b} alt={ipa_b} />
				</div>
			</div>
		</div>
	</div>
	<div class="collapse bg-base-200 mb-3">
		<input type="checkbox" class="peer" />
		<div class="collapse-title text-xl font-medium text-green-600">
			👄 Nhóm môi răng &nbsp;<b>/ f /, / v /</b>
		</div>
		<div class="collapse-content grid grid-cols-2 gap-8">
			<div class="basis-1/2 flex justify-between mx-3">
				<div class="">
					<p class="text-red-700 text-2xl font-bold inline-block leading-10">/ f /</p>
					<p class="my-3">Răng trên chạm nhẹ môi dưới, thổi hơi nhẹ. Vô thanh</p>
					<p class="underline font-bold">Ví dụ:</p>
					<ul>
						<li class="my-1">
							fall <span class="text-blue-700">/fɔ:l/</span>
							<Speaker key={'fall'} />
						</li>
						<li class="my-1">
							safe <span class="text-blue-700">/seɪf/</span>
							<Speaker key={'safe'} />
						</li>
					</ul>
				</div>
				<div class="">
					<img src={ipa_f} alt={ipa_f} />
				</div>
			</div>
			<div class="basis-1/2 flex justify-between mx-3">
				<div class="">
					<p class="text-red-700 text-2xl font-bold inline-block leading-10">/ v /</p>
					<p class="my-3">Răng trên chạm nhẹ môi dưới, phát âm v. Hữu thanh</p>
					<p class="underline font-bold">Ví dụ:</p>
					<ul>
						<li class="my-1">
							voice <span class="text-blue-700">/vɔɪs/</span>
							<Speaker key={'voice'} />
						</li>
						<li class="my-1">
							save <span class="text-blue-700">/seɪv/</span>
							<Speaker key={'save'} />
						</li>
					</ul>
				</div>
				<div class="">
					<img src={ipa_f} alt={ipa_f} />
				</div>
			</div>
		</div>
	</div>
	<div class="collapse bg-base-200 mb-3">
		<input type="checkbox" class="peer" />
		<div class="collapse-title text-xl font-medium text-green-600">
			🦷 Nhóm răng &nbsp;<b>/ θ /, / ð /</b>
		</div>
		<div class="collapse-content grid grid-cols-2 gap-8">
			<div class="basis-1/2 flex justify-between mx-3">
				<div class="">
					<p class="text-red-700 text-2xl font-bold inline-block leading-10">/ θ /</p>
					<p class="my-3">
						Lưỡi đặt giữ 2 răng, cắn nhẹ đầu lưỡi (nhẹ thôi nhé 🙂), thổi hơi, thụt lưỡi vào và đọc
						"th". Vô thanh
					</p>
					<p class="underline font-bold">Ví dụ:</p>
					<ul>
						<li class="my-1">
							think <span class="text-blue-700">/θɪŋk/</span>
							<Speaker key={'think'} />
						</li>
						<li class="my-1">
							thank <span class="text-blue-700">/θæŋk/</span>
							<Speaker key={'thank'} />
						</li>
					</ul>
				</div>
				<div class="">
					<img src={ipa_l} alt={ipa_l} />
				</div>
			</div>
			<div class="basis-1/2 flex justify-between mx-3">
				<div class="">
					<p class="text-red-700 text-2xl font-bold inline-block leading-10">/ ð /</p>
					<p class="my-3">
						Lưỡi đặt giữ 2 răng, cắn nhẹ đầu lưỡi, rung dây thanh, thụt lưỡi vào và đọc "đ". Hữu
						thanh
					</p>
					<p class="underline font-bold">Ví dụ:</p>
					<ul>
						<li class="my-1">
							there <span class="text-blue-700">/ðeə(r)/</span>
							<Speaker key={'there'} />
						</li>
						<li class="my-1">
							then <span class="text-blue-700">/ðen/</span>
							<Speaker key={'then'} />
						</li>
					</ul>
				</div>
				<div class="">
					<img src={ipa_l} alt={ipa_l} />
				</div>
			</div>
		</div>
	</div>
	<div class="collapse bg-base-200 mb-3">
		<input type="checkbox" class="peer" />
		<div class="collapse-title text-xl font-medium text-green-600">
			😀 Nhóm ổ răng &nbsp;<b>/ t /, / d /, / s /, / z /, / n /, / l /</b>
		</div>
		<div class="collapse-content grid grid-cols-2 gap-8">
			<div class="basis-1/2 flex justify-between mx-3">
				<div class="">
					<p class="text-red-700 text-2xl font-bold inline-block leading-10">/ t /</p>
					<p class="my-3">Âm tắc, chặn hơi, phát âm như t nhưng không rung dây thanh. Vô thanh</p>
					<p class="underline font-bold">Ví dụ:</p>
					<ul>
						<li class="my-1">
							tea <span class="text-blue-700">/tiː/</span>
							<Speaker key={'tea'} />
						</li>
						<li class="my-1">
							sent <span class="text-blue-700">/sent/</span>
							<Speaker key={'sent'} />
						</li>
					</ul>
				</div>
				<div class="">
					<img src={ipa_t} alt={ipa_t} />
				</div>
			</div>
			<div class="basis-1/2 flex justify-between mx-3">
				<div class="">
					<p class="text-red-700 text-2xl font-bold inline-block leading-10">/ d /</p>
					<p class="my-3">Âm tắc, chặn hơi, phát âm như d. Hữu thanh</p>
					<p class="underline font-bold">Ví dụ:</p>
					<ul>
						<li class="my-1">
							sand <span class="text-blue-700">/sænd/</span>
							<Speaker key={'sand'} />
						</li>
						<li class="my-1">
							stand <span class="text-blue-700">/stænd/</span>
							<Speaker key={'stand'} />
						</li>
					</ul>
				</div>
				<div class="">
					<img src={ipa_d} alt={ipa_d} />
				</div>
			</div>
			<div class="basis-1/2 flex justify-between mx-3">
				<div class="">
					<p class="text-red-700 text-2xl font-bold inline-block leading-10">/ s /</p>
					<p class="my-3">Đọc là s nhanh, nhẹ, phát âm gió "xì xì", không rung. Vô thanh</p>
					<p class="underline font-bold">Ví dụ:</p>
					<ul>
						<li class="my-1">
							say <span class="text-blue-700">/seɪ/</span>
							<Speaker key={'say'} />
						</li>
						<li class="my-1">
							rice <span class="text-blue-700">/raɪs/</span>
							<Speaker key={'rice'} />
						</li>
					</ul>
				</div>
				<div class="">
					<img src={ipa_i} alt={ipa_i} />
				</div>
			</div>
			<div class="basis-1/2 flex justify-between mx-3">
				<div class="">
					<p class="text-red-700 text-2xl font-bold inline-block leading-10">/ z /</p>
					<p class="my-3">Đọc là s nhanh, nhẹ, phát âm gió như con ruồi kêu, rung. Hữu thanh</p>
					<p class="underline font-bold">Ví dụ:</p>
					<ul>
						<li class="my-1">
							rose <span class="text-blue-700">/rəʊz/</span>
							<Speaker key={'rose'} />
						</li>
						<li class="my-1">
							zoo <span class="text-blue-700">/zuː/</span>
							<Speaker key={'zoo'} />
						</li>
					</ul>
				</div>
				<div class="">
					<img src={ipa_i} alt={ipa_i} />
				</div>
			</div>
			<div class="basis-1/2 flex justify-between mx-3">
				<div class="">
					<p class="text-red-700 text-2xl font-bold inline-block leading-10">/ n /</p>
					<p class="my-3">Đọc như n nhưng hơi nghẹn lại. Hữu thanh</p>
					<p class="underline font-bold">Ví dụ:</p>
					<ul>
						<li class="my-1">
							no <span class="text-blue-700">/nəʊ/</span>
							<Speaker key={'no'} />
						</li>
						<li class="my-1">
							button <span class="text-blue-700">/ˈbʌtn/</span>
							<Speaker key={'button'} />
						</li>
					</ul>
				</div>
				<div class="">
					<img src={ipa_d} alt={ipa_d} />
				</div>
			</div>
			<div class="basis-1/2 flex justify-between mx-3">
				<div class="">
					<p class="text-red-700 text-2xl font-bold inline-block leading-10">/ l /</p>
					<p class="my-3">Đọc là l. Hữu thanh</p>
					<p class="underline font-bold">Ví dụ:</p>
					<ul>
						<li class="my-1">
							leg <span class="text-blue-700">/leɡ/</span>
							<Speaker key={'leg'} />
						</li>
						<li class="my-1">
							call <span class="text-blue-700">/kɔːl/</span>
							<Speaker key={'call'} />
						</li>
					</ul>
				</div>
				<div class="">
					<img src={ipa_l} alt={ipa_l} />
				</div>
			</div>
		</div>
	</div>
	<div class="collapse bg-base-200 mb-3">
		<input type="checkbox" class="peer" />
		<div class="collapse-title text-xl font-medium text-green-600">
			😗 Nhóm âm sau ổ răng &nbsp;<b>/ ʃ /, / ʒ /, / tʃ /, / dʒ /, / r /</b>
		</div>
		<div class="collapse-content grid grid-cols-2 gap-8">
			<div class="basis-1/2 flex justify-between mx-3">
				<div class="">
					<p class="text-red-700 text-2xl font-bold inline-block leading-10">/ ʃ /</p>
					<p class="my-3">Đọc là s nhẹ (uốn lưỡi), chu môi, hơi gió. Vô thanh</p>
					<p class="underline font-bold">Ví dụ:</p>
					<ul>
						<li class="my-1">
							she <span class="text-blue-700">/ʃiː/</span>
							<Speaker key={'she'} />
						</li>
						<li class="my-1">
							wash <span class="text-blue-700">/wɒʃ/</span>
							<Speaker key={'wash'} />
						</li>
					</ul>
				</div>
				<div class="">
					<img src={ipa_i} alt={ipa_i} />
				</div>
			</div>
			<div class="basis-1/2 flex justify-between mx-3">
				<div class="">
					<p class="text-red-700 text-2xl font-bold inline-block leading-10">/ ʒ /</p>
					<p class="my-3">Đọc là giơ nhẹ, phát âm ngắn. Hữu thanh</p>
					<p class="underline font-bold">Ví dụ:</p>
					<ul>
						<li class="my-1">
							casual <span class="text-blue-700">/ˈkæʒuəl/</span>
							<Speaker key={'casual'} />
						</li>
						<li class="my-1">
							vision <span class="text-blue-700">/ˈvɪʒn/</span>
							<Speaker key={'vision'} />
						</li>
					</ul>
				</div>
				<div class="">
					<img src={ipa_i} alt={ipa_i} />
				</div>
			</div>
			<div class="basis-1/2 flex justify-between mx-3">
				<div class="">
					<p class="text-red-700 text-2xl font-bold inline-block leading-10">/ tʃ /</p>
					<p class="my-3">Đọc là ch. Vô thanh</p>
					<p class="underline font-bold">Ví dụ:</p>
					<ul>
						<li class="my-1">
							chuck <span class="text-blue-700">/tʃʌk/</span>
							<Speaker key={'chuck'} />
						</li>
						<li class="my-1">
							match <span class="text-blue-700">/mætʃ/</span>
							<Speaker key={'match'} />
						</li>
					</ul>
				</div>
				<div class="">
					<img src={ipa_t} alt={ipa_t} />
				</div>
			</div>
			<div class="basis-1/2 flex justify-between mx-3">
				<div class="">
					<p class="text-red-700 text-2xl font-bold inline-block leading-10">/ dʒ /</p>
					<p class="my-3">Đọc là jơ (uốn lưỡi) ngắn và dứt khoát. Hữu thanh</p>
					<p class="underline font-bold">Ví dụ:</p>
					<ul>
						<li class="my-1">
							june <span class="text-blue-700">/dʒuːn/</span>
							<Speaker key={'june'} />
						</li>
						<li class="my-1">
							page <span class="text-blue-700">/peɪdʒ/</span>
							<Speaker key={'page'} />
						</li>
					</ul>
				</div>
				<div class="">
					<img src={ipa_d} alt={ipa_d} />
				</div>
			</div>
			<div class="basis-1/2 flex justify-between mx-3">
				<div class="">
					<p class="text-red-700 text-2xl font-bold inline-block leading-10">/ r /</p>
					<p class="my-3">Đọc là r, cong lưỡi. Hữu thanh</p>
					<p class="underline font-bold">Ví dụ:</p>
					<ul>
						<li class="my-1">
							red <span class="text-blue-700">/red/</span>
							<Speaker key={'red'} />
						</li>
						<li class="my-1">
							per <span class="text-blue-700">/pə(r)/</span>
							<Speaker key={'per'} />
						</li>
					</ul>
				</div>
				<div class="">
					<img src={ipa_u} alt={ipa_u} />
				</div>
			</div>
		</div>
	</div>
	<div class="collapse bg-base-200 mb-3">
		<input type="checkbox" class="peer" />
		<div class="collapse-title text-xl font-medium text-green-600">
			💪 Nhóm âm ngạc cứng &nbsp;<b>/ j /, / w /</b>
		</div>
		<div class="collapse-content grid grid-cols-2 gap-8">
			<div class="basis-1/2 flex justify-between mx-3">
				<div class="">
					<p class="text-red-700 text-2xl font-bold inline-block leading-10">/ j /</p>
					<p class="my-3">
						Đọc như chữ z (nhấn mạnh). Khẩu hình như nhóm âm cười nhưng mạnh hơn. Hữu thanh
					</p>
					<p class="underline font-bold">Ví dụ:</p>
					<ul>
						<li class="my-1">
							yes <span class="text-blue-700">/jes/</span>
							<Speaker key={'yes'} />
						</li>
						<li class="my-1">
							menu <span class="text-blue-700">/ˈmenjuː/</span>
							<Speaker key={'menu'} />
						</li>
					</ul>
				</div>
				<div class="">
					<img src={ipa_i} alt={ipa_i} />
				</div>
			</div>
			<div class="basis-1/2 flex justify-between mx-3">
				<div class="">
					<p class="text-red-700 text-2xl font-bold inline-block leading-10">/ w /</p>
					<p class="my-3">Đọc như qu. Hữu thanh</p>
					<p class="underline font-bold">Ví dụ:</p>
					<ul>
						<li class="my-1">
							why <span class="text-blue-700">/waɪ/</span>
							<Speaker key={'why'} />
						</li>
						<li class="my-1">
							question <span class="text-blue-700">/ˈkwestʃən/</span>
							<Speaker key={'question'} />
						</li>
					</ul>
				</div>
				<div class="">
					<img src={ipa_ou} alt={ipa_ou} />
				</div>
			</div>
		</div>
	</div>
	<div class="collapse bg-base-200 mb-3">
		<input type="checkbox" class="peer" />
		<div class="collapse-title text-xl font-medium text-green-600">
			🍦 Nhóm âm mềm &nbsp;<b>/ k /, / g /, / ŋ /</b>
		</div>
		<div class="collapse-content grid grid-cols-2 gap-8">
			<div class="basis-1/2 flex justify-between mx-3">
				<div class="">
					<p class="text-red-700 text-2xl font-bold inline-block leading-10">/ k /</p>
					<p class="my-3">Đọc như c nhưng nghẹn lại, không rung. Vô thanh</p>
					<p class="underline font-bold">Ví dụ:</p>
					<ul>
						<li class="my-1">
							cat <span class="text-blue-700">/kæt/</span>
							<Speaker key={'cat'} />
						</li>
						<li class="my-1">
							dark <span class="text-blue-700">/dɑːk/</span>
							<Speaker key={'dark'} />
						</li>
					</ul>
				</div>
				<div class="">
					<img src={ipa_d} alt={ipa_d} />
				</div>
			</div>
			<div class="basis-1/2 flex justify-between mx-3">
				<div class="">
					<p class="text-red-700 text-2xl font-bold inline-block leading-10">/ g /</p>
					<p class="my-3">Đọc như g. Hữu thanh</p>
					<p class="underline font-bold">Ví dụ:</p>
					<ul>
						<li class="my-1">
							go <span class="text-blue-700">/ɡəʊ/</span>
							<Speaker key={'go'} />
						</li>
						<li class="my-1">
							bag <span class="text-blue-700">/bæg/</span>
							<Speaker key={'bag'} />
						</li>
					</ul>
				</div>
				<div class="">
					<img src={ipa_d} alt={ipa_d} />
				</div>
			</div>
			<div class="basis-1/2 flex justify-between mx-3">
				<div class="">
					<p class="text-red-700 text-2xl font-bold inline-block leading-10">/ ŋ /</p>
					<p class="my-3">Đọc như ng, nhẹ và dứt khoát. Hữu thanh</p>
					<p class="underline font-bold">Ví dụ:</p>
					<ul>
						<li class="my-1">
							singer <span class="text-blue-700">/ˈsɪŋə(r)/</span>
							<Speaker key={'singer'} />
						</li>
						<li class="my-1">
							tongue <span class="text-blue-700">/tʌŋ/</span>
							<Speaker key={'tongue'} />
						</li>
					</ul>
				</div>
				<div class="">
					<img src={ipa_d} alt={ipa_d} />
				</div>
			</div>
		</div>
	</div>
	<div class="collapse bg-base-200 mb-3">
		<input type="checkbox" class="peer" />
		<div class="collapse-title text-xl font-medium text-green-600">
			😶 âm thanh môn &nbsp;<b>/ h /</b>
		</div>
		<div class="collapse-content grid grid-cols-2 gap-8">
			<div class="basis-1/2 flex justify-between mx-3">
				<div class="">
					<p class="text-red-700 text-2xl font-bold inline-block leading-10">/ h /</p>
					<p class="my-3">Đọc như h nhẹ nhàng, thở phào nhẹ nhõm. Vô thanh</p>
					<p class="underline font-bold">Ví dụ:</p>
					<ul>
						<li class="my-1">
							her <span class="text-blue-700">/hə(r)/</span>
							<Speaker key={'her'} />
						</li>
						<li class="my-1">
							who <span class="text-blue-700">/huː/</span>
							<Speaker key={'who'} />
						</li>
					</ul>
				</div>
				<div class="">
					<img src={ipa_a} alt={ipa_a} />
				</div>
			</div>
		</div>
	</div>
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
</div>
