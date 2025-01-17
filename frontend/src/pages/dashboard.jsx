import React from "react";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">Task Manager</div>
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
        </div>
      </nav>

      {/* Tasks Section */}
      <div className="tasks-container">
        <h2>Your Notes</h2>
        <div className="tasks">
          {tasks.map((task) => (
            <div key={task.id} className="task-`card">
              <span className={`category ${task.category.toLowerCase()}`}>
                {task.category}
              </span>
              <h3>{task.title}</h3>
              <p>{task.description}</p>
              <p className="date">{task.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
