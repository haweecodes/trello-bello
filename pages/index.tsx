
import styles from '../styles/Home.module.css'
import WorkSpaceLayout from '../components/layout'
import TaskCard from '../components/task-card'


export default function Home() {
  return (
   <WorkSpaceLayout>
      <TaskCard></TaskCard>
   </WorkSpaceLayout>
  )
}
