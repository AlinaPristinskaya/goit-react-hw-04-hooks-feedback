
import SectionTitle from '../SectionTitle'
import Notification from '../Notification';

const Statistics=({good,neutral,bad,total,positivePercentage})=>{
  if (total===0) {
    return <SectionTitle><Notification messadge={`No feedback given`}/></SectionTitle>;
  }
   return (
     <div>
      <SectionTitle><p>Кол-во хороших комментариев: {good}</p></SectionTitle>
      <SectionTitle><p>Кол-во нейтральных комментариев: {neutral}</p></SectionTitle>
      <SectionTitle><p>Кол-во плохих комментариев: {bad}</p></SectionTitle>
      <SectionTitle><p>Общее кол-во комментариев:{total}</p></SectionTitle>
      <SectionTitle><p>% хороших комментариев от общего кол-ва:{positivePercentage}%</p></SectionTitle>
    </div>
    )
}

export default Statistics;