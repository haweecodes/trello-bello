import React, { ChangeEvent, useState } from "react";
import { TaskValues } from "./task-card.models";
import Task from "./task";
import { message } from "antd";

const TaskCard = () => {
  const [data, setData] = useState<TaskValues>({
    title: "",
    content: [
      {
        innerContent: "",
      },
    ],
  });

  const handleTitleChange = (value: string) => {
    setData({ ...data, title: value });
  };

  const handleAddTask = () => {
    const tempData = data;
    tempData.content.push({
      innerContent: "",
    });
    setData({ ...tempData });
  };

  const handleContentChange = (
    value: string,
    index: number
  ) => {
    const updatedContent = [...data.content];
    updatedContent[index].innerContent = value;
    setData({ ...data, content: updatedContent });
  };

  const handleRemove = (
    index: number
  ) => {
    if(data.content.length < 2) {
      message.warning('Must have one task');
      return;
    }
    const updatedContent = [...data.content];
    updatedContent.splice(index, 1);
    setData({ ...data, content: updatedContent });
  };

  return (
    <Task
      data={data}
      handleTitleChange={handleTitleChange}
      handleAddTask={handleAddTask}
      handleContentChange={handleContentChange}
      handleRemove={handleRemove}
    />
  );
};

export default TaskCard;
