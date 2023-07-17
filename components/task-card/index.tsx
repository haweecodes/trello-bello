import React, { ChangeEvent, MouseEventHandler, useState } from "react";
import { Button, Input } from "antd";
import styles from "../../styles/TaskCard.module.css";

type TaskValues = {
  title: string;
  content: {
    innerContent: string;
  }[];
};

const TaskCard = ({
  data,
  handleTitleChange,
  handleAddTask,
  handleContentChange,
}: {
  data: TaskValues;
  handleTitleChange: (values: ChangeEvent<HTMLInputElement>) => void;
  handleAddTask: () => void;
  handleContentChange: (
    values: ChangeEvent<HTMLInputElement>,
    index: number
  ) => void;
}) => {
  return (
    <div className={styles.card}>
      <Input
        name="taskTitle"
        placeholder="Title..."
        onChange={handleTitleChange}
        className={styles.cardTitle}
      />

      <div data-testid="card-content" className={styles.cardContent}>
        {data.content.map(
          (
            content: {
              innerContent: string;
            },
            index: number
          ) => (
            <Input
              key={index}
              className={styles.cardInnerContent}
              value={content.innerContent}
              onChange={(e) => handleContentChange(e, index)}
            />
          )
        )}
      </div>
      <div className={styles.cardAction}>
        <Button block onClick={handleAddTask}>
          Add Task
        </Button>
      </div>
    </div>
  );
};

const TaskCardLogics = () => {
  const [data, setData] = useState<TaskValues>({
    title: "",
    content: [
      {
        innerContent: "",
      },
    ],
  });

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, title: e.target.value });
  };

  const handleAddTask = () => {
    const tempData = data;
    tempData.content.push({
      innerContent: "",
    });
    setData({ ...tempData });
  };

  const handleContentChange = (
    e: ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const updatedContent = [...data.content];
    updatedContent[index].innerContent = e.target.value;
    setData({ ...data, content: updatedContent });
  };

  return (
    <TaskCard
      data={data}
      handleTitleChange={handleTitleChange}
      handleAddTask={handleAddTask}
      handleContentChange={handleContentChange}
    />
  );
};

export default TaskCardLogics;
