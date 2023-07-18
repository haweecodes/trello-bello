import React, { useContext, useState } from "react";
import TaskContainer from "../task-container";
import { Button, Card, Space, message } from "antd";
import { MinusCircleOutlined } from "@ant-design/icons";

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
  const handleRemove = (
    index: number
  ) => {
    if(taskContainerList.length < 2) {
      message.warning('Must have one task container');
      return;
    }
    const updatedContent = [...taskContainerList];
    updatedContent.splice(index, 1);
    setTaskContainerList([...updatedContent ]);
  };

  return (
    <Space align="baseline">
      {taskContainerList.map((_, index) => (
        <div key={index}>
          <Card extra={<Button data-testid='remove-button' name="Remove" onClick={() => handleRemove(index)} icon={<MinusCircleOutlined />}></Button>}>
            <TaskContainer />
          </Card>
        </div>
      ))}

      <div>
        <Button onClick={handleGenerateContainer}>Add Container</Button>
      </div>
    </Space>
  );
};

export default TaskContainerGenerator;
