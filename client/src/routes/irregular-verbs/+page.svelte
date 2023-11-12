<script>
	import Pagination from '../../components/Pagination.svelte';
</script>

<div class="max-w-screen-xl w-screen mx-auto text-left px-2 py-8 min-h-screen max-h-max">
	<h1 class="header-page">Động từ bất quy tắc (Irregular Verb)</h1>
	<p class="my-2 text-slate-500 mb-4 max-w-screen-lg">
		Chúng ta có hơn 600 động từ bất quy tắc, nhưng chỉ có khoảng 360 từ thường xuyên xuất hiện nhất.
		Bạn hãy tập trung học những từ này trước nhé 😎 (Click vào từ để nghe phát âm)
	</p>
	<div class="h-[1px] w-full border border-gray-200" />
	<div class="flex justify-between items-center">
		<input
			class="shadow appearance-none border rounded w-[450px] py-2 px-3 text-gray-700 focus:border-green-500 leading-tight focus:outline-none focus:shadow-outline"
			id="find-word"
			type="text"
			placeholder="Nhập từ..."
		/>
		<div class="my-4">
			<button
				class="btn outline-none border-none bg-transparent hover:bg-transparent hover:opacity-100 opacity-70"
				>Sắp xếp <span
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
							d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
						/>
					</svg>
				</span></button
			>
			<button
				class="btn outline-none border-none bg-transparent hover:bg-transparent hover:opacity-100 opacity-70"
				>Lọc <span
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
							d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
						/>
					</svg>
				</span></button
			>
		</div>
	</div>

	<div class="overflow-x-auto">
		<table class="table">
			<!-- head -->
			<thead>
				<tr>
					<th />
					<th class="text-green-700 text-lg">Infinitive (V1)</th>
					<th class="text-green-700 text-lg">Simple Past (V2)</th>
					<th class="text-green-700 text-lg">Past Participle (V3)</th>
					<th class="text-green-700 text-lg">Mean</th>
				</tr>
			</thead>
			<tbody class="">
				<!-- row 1 -->
				<tr class="hover:bg-base-200">
					<th>1</th>
					<td>abide </td>
					<td>abode/abided</td>
					<td>abode / abided</td>
					<td>lưu trú, lưu lại</td>
				</tr>
				<!-- row 2 -->
				<tr class="hover:bg-base-200">
					<th>2</th>
					<td>arise </td>
					<td>arose</td>
					<td>arisen</td>
					<td>phát sinh</td>
				</tr>
				<!-- row 3 -->
				<tr class="hover:bg-base-200">
					<th>3</th>
					<td>backslide </td>
					<td>backslid</td>
					<td>backslidden / backslid</td>
					<td>tái phạm</td>
				</tr>
				<!-- row 4 -->
				<tr class="hover:bg-base-200">
					<th>3</th>
					<td>be </td>
					<td>was/were</td>
					<td>been</td>
					<td>thì, là, bị, ở</td>
				</tr>
			</tbody>
		</table>
	</div>

	<Pagination />
</div>
