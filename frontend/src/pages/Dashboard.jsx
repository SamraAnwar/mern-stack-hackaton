import { useNavigate } from "react-router-dom";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd"; // yeh line change hui hai
import { useState } from "react";

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  const [columns, setColumns] = useState({
    pending: [
      { id: "6", title: "Your Tasks Soon", time: "", status: "Coming" },
    ],
    running: [
      { id: "1", title: "Today Now", time: "8:10 AM", status: "Running" },
      { id: "3", title: "Team Mun", time: "1:30 PM", status: "Running" },
      { id: "5", title: "Team Meet Test", time: "5:00 PM", status: "Running" },
    ],
    done: [
      { id: "2", title: "web class", time: "9:00 AM", status: "Done" },
      { id: "4", title: "Lesson 1 Task", time: "3:00 PM", status: "Done" },
    ],
  });

  const onDragEnd = (result) => {
    const { source, destination } = result;

    if (!destination) return;

    const sourceCol = columns[source.droppableId];
    const destCol = columns[destination.droppableId];
    const sourceItems = [...sourceCol];
    const destItems = [...destCol];
    const [movedItem] = sourceItems.splice(source.index, 1);

    if (source.droppableId === destination.droppableId) {
      sourceItems.splice(destination.index, 0, movedItem);
      setColumns({
        ...columns,
        [source.droppableId]: sourceItems,
      });
    } else {
      destItems.splice(destination.index, 0, movedItem);
      setColumns({
        ...columns,
        [source.droppableId]: sourceItems,
        [destination.droppableId]: destItems,
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-5 font-sans">
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-2xl font-bold text-gray-800">Today Tasks</h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white p-2 rounded-full shadow"
        >
          Logout
        </button>
      </div>
      

      <DragDropContext onDragEnd={onDragEnd}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Object.entries(columns).map(([columnId, tasks]) => (
            <Droppable droppableId={columnId} key={columnId}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className="bg-white p-4 rounded-2xl shadow-md min-h-[300px]"
                >
                  <h2
                    className={`text-xl font-bold mb-4 ${
                      columnId === "pending"
                        ? "text-yellow-500"
                        : columnId === "running"
                        ? "text-blue-500"
                        : "text-green-500"
                    }`}
                  >
                    {columnId.charAt(0).toUpperCase() + columnId.slice(1)}
                  </h2>
                  {tasks.map((task, index) => (
                    <Draggable draggableId={task.id} index={index} key={task.id}>
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="bg-gray-100 p-3 mb-3 rounded-xl shadow-sm"
                        >
                          <div className="flex items-center">
                            <div className="w-10 h-10 bg-pink-400 flex items-center justify-center rounded-full mr-3 text-white font-bold">
                              {task.title.slice(0, 2).toUpperCase()}
                            </div>
                            <div>
                              <h3 className="font-semibold">{task.title}</h3>
                              {task.time && (
                                <p className="text-xs text-gray-500">{task.time}</p>
                              )}
                            </div>
                          </div>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </DragDropContext>
    </div>
  );
}

export default Dashboard;