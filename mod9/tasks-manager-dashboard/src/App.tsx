import DashBoard from "./components/DashBoard/DashBoard";



function App() {
  return (
    <div className="flex flex-col items-center bg-zinc-900 text-white h-screen">
      <h1 className="text-5xl my-10">Task Manager Dashboard</h1>

      <DashBoard />
    </div>
  );
}

export default App;
