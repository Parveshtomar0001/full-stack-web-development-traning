function Pendinglist() {
  const pending = ["chemistry", "Math", "Physics", "Home Science"];

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 mb-6 transition-transform duration-300 hover:scale-[1.03] hover:shadow-2xl">
      <h2 className="text-2xl font-bold text-yellow-700 mb-4 border-b-2 border-yellow-400 pb-2">⏳ Pending Tasks</h2>
      {pending.map((value, index) => (
        <h3
          key={index}
          className="text-gray-900 text-lg py-2 px-4 my-1 border-l-4 border-yellow-500 bg-yellow-50 rounded-md hover:bg-yellow-100 transition-all duration-200"
        >
          {index + 1}. {value}
        </h3>
      ))}
    </div>
  );
}

export { Pendinglist };





    