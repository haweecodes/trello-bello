
import styles from '../styles/Home.module.css'
import WorkSpaceLayout from '../components/layout'
import TaskCard from '../components/task-card'
import TaskContainer from '../components/task-container'


export default function Home() {
  return (
   <WorkSpaceLayout>
     <TaskContainer></TaskContainer>
   </WorkSpaceLayout>
  )
}
