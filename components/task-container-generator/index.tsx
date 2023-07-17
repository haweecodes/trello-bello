import React, { useContext, useState } from "react";
import TaskContainer from "../task-container";
import { Button, Space } from "antd";

const TaskContainerGenerator = () => {
  const [taskContainerList, setTaskContainerList] = useState([
    {
      id: 1,
      title: "",
    },
  ]);

  const handleGenerateContainer = () => {
    const tempData = taskContainerList;
    tempData.push({
      id: 2,
      title: "",
    });
    setTaskContainerList([ ...tempData ]);
  }

  return (
    <Space align="baseline">
      {taskContainerList.map((_, index) => (
        <div key={index}>
          <TaskContainer />
        </div>
      ))}

      <div>
        <Button onClick={handleGenerateContainer}>Add Container</Button>
      </div>
    </Space>
  );
};

export default TaskContainerGenerator;
