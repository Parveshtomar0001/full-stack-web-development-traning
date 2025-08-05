function DoneToDoPage() {
    return(
        <div class="bg-yellow-100 min-h-[300px] flex justify-center items-center py-10 px-4">
            <table class="table-auto border border-black shadow-lg rounded-lg bg-white">
                <thead class="bg-yellow-300">
                    <tr>
                        <th class="border px-6 py-3 text-lg font-semibold text-gray-800">Completed Todo Title</th>
                        <th class="border px-6 py-3 text-lg font-semibold text-gray-800">Completed On</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="hover:bg-yellow-100 transition">
                        <td class="border px-6 py-3">Meditate for 10 mins</td>
                        <td class="border px-6 py-3">4/aug/2025</td>
                    </tr>
                    <tr class="hover:bg-yellow-100 transition">
                        <td class="border px-6 py-3">Watch React tutorial</td>
                        <td class="border px-6 py-3">6/aug/2025</td>
                    </tr>
                    <tr class="hover:bg-yellow-100 transition">
                        <td class="border px-6 py-3">Buy groceries</td>
                        <td class="border px-6 py-3">1/aug/2025</td>
                    </tr>
                    <tr class="hover:bg-yellow-100 transition">
                        <td class="border px-6 py-3">Review PR on GitHub</td>
                        <td class="border px-6 py-3">4/aug/2025</td>
                    </tr>
                    <tr class="hover:bg-yellow-100 transition">
                        <td class="border px-6 py-3">Drink 2L water</td>
                        <td class="border px-6 py-3">10/sep/2025</td>
                    </tr>
                    <tr class="hover:bg-yellow-100 transition">
                        <td class="border px-6 py-3">Stretch after work</td>
                        <td class="border px-6 py-3">15/dec/2025</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default DoneToDoPage
