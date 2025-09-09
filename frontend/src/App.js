import { useState } from "react";

function App() {
  // Example state for stats
  const [stats] = useState({
    quizzes: 5,
    completed: 2,
    points: 120,
  });

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Navbar */}
      <nav className="bg-green-600 text-white p-4 shadow-md">
        <h1 className="text-2xl font-bold">🌍 EcoQuest Dashboard</h1>
      </nav>

      {/* Main Dashboard */}
      <main className="flex-1 p-6">
        <h2 className="text-xl font-semibold mb-4">Welcome back!</h2>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <div className="bg-white p-4 rounded-xl shadow">
            <h3 className="text-gray-500">Total Quizzes</h3>
            <p className="text-2xl font-bold">{stats.quizzes}</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow">
            <h3 className="text-gray-500">Completed</h3>
            <p className="text-2xl font-bold">{stats.completed}</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow">
            <h3 className="text-gray-500">Points</h3>
            <p className="text-2xl font-bold">{stats.points}</p>
          </div>
        </div>

        {/* Buttons/Navigation */}
        <div className="flex gap-4">
          <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg">
            Take a Quiz
          </button>
          <button className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-lg">
            View Leaderboard
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;
// Main App.js with routing
