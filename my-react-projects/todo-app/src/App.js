import Header from "./Header"
import HomePage from "./HomePage"
import Footer from "./Footer"
import AddToDoPage from "./AddToDoPage"
import ShowToDoPage from "./ShowToDoPage"
import DoneToDoPage from "./DoneToDoPage"
import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom" // ✅ Added this line

function App() {
  //todo is a type of arrays of object
  let [todo,setTodo] = useState([
   {
      "id": 1,
      "todoTitle": "buy grocery",
      "dueDate": "05/08/2025",
      "completeDate": "",
      "status": "pending"
    },
    {
      "id": 2,
      "todoTitle": "go to gym",
      "dueDate": "05/08/2025",
      "completeDate": "",
      "status": "pending"
    },
    {
      "id": 3,
      "todoTitle": "learn react",
      "dueDate": "05/08/2025",
      "completeDate": "",
      "status": "pending"
    },
    {
      "id": 4,
      "todoTitle": "play cricket",
      "dueDate": "05/08/2025",
      "completeDate": "",
      "status": "pending"
    }])

     return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/todo-add" element={<AddToDoPage />} />
        <Route path="/todo-show" element={<ShowToDoPage todo={todo} setTodo={setTodo} />} />
        <Route path="/todo-done" element={<DoneToDoPage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
