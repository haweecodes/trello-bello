import React from "react";
import { Button } from "antd";
import styles from '../../styles/TaskCard.module.css'

const TaskCard = () =>
  <div className={styles.card}>
    <textarea defaultValue="Title..." className={styles.cardTitle}></textarea>

    <div className={styles.cardContent}>
      Card content
      Card content
      Card content
      Card content
      Card content
      Card content
      Card content
    </div>
    <div className={styles.cardAction}>
      <Button block>Add Task</Button>
    </div>
  </div>

export default TaskCard;