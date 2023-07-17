import React, { ChangeEvent } from "react";
import { Button, Input, Space } from "antd";
import { TaskValues } from "./task-card.models";
import { MinusCircleOutlined } from "@ant-design/icons";
import styles from "../../styles/TaskCard.module.css";

const Task = ({
  data,
  handleTitleChange,
  handleAddTask,
  handleContentChange,
  handleRemove
}: {
  data: TaskValues;
  handleTitleChange: (value: string) => void;
  handleAddTask: () => void;
  handleContentChange: (value: string, index: number) => void;
  handleRemove: (index: number) => void;
}) => {
  return (
    <div className={styles.card} data-testid="task-card">
      <Input
        name="taskTitle"
        placeholder="Title..."
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          handleTitleChange(e.target.value)
        }
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
            <Space.Compact block key={index} className={styles.cardInnerContent}>
              <Input
                value={content.innerContent}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  handleContentChange(e.target?.value, index)
                }
                placeholder="Inner Content..."
              />
              <Button data-testid='remove-button' name="Remove" onClick={() => handleRemove(index)} icon={<MinusCircleOutlined />}></Button>
            </Space.Compact>
          )
        )}
      </div>
      <div className={styles.cardAction}>
        <Button block role="button" name="Add" onClick={handleAddTask}>
          Add Task
        </Button>
      </div>
    </div>
  );
};

export default Task;
