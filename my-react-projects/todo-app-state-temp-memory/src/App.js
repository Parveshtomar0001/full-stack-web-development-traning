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
  let [todo,setTodo] = useState([])

     return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/todo-add" element={<AddToDoPage todo={todo} setTodo={setTodo} />} />
        <Route path="/todo-show" element={<ShowToDoPage todo={todo} setTodo={setTodo} />} />
        <Route path="/todo-done" element={<DoneToDoPage todo={todo} setTodo={setTodo} />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
