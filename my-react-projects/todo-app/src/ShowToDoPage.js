function ShowTodoPage(props) {
    let todoArr = props.todo;

    function handleClick(e, todoId) {
        // delete todo from todoArr where id=todoId
        todoArr = todoArr.filter(todo => todo.id !== todoId);
        props.setTodo(todoArr);
        alert("Todo Completed");
    }

    return (
        <div class="bg-purple-200 min-h-[200px] flex justify-center items-center py-6">
            <table class="table-auto border border-black bg-white shadow-lg rounded-lg overflow-hidden">
                <thead class="bg-purple-400 text-white">
                    <tr>
                        <th class="border px-6 py-3 text-lg">Todo Title</th>
                        <th class="border px-6 py-3 text-lg">Due Date</th>
                        <th class="border px-6 py-3 text-lg">Mark Done</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todoArr.map((value, index) => (
                            <tr class="hover:bg-purple-100 transition">
                                <td class="border px-4 py-2 text-center">{value.todoTitle}</td>
                                <td class="border px-4 py-2 text-center">{value.dueDate}</td>
                                <td class="border px-4 py-2 text-center">
                                    <button
                                        onClick={(e) => handleClick(e, value.id)}
                                        class="text-green-600 hover:text-green-800 text-xl transition"
                                    >
                                        ✅
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ShowTodoPage;
