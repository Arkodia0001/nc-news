import { useContext } from 'react';
import { TopicsContext } from '../contexts/TopicsContext';
import { useNavigate } from 'react-router-dom';

const TopicPicker = ({topic}) => {
  const navigate = useNavigate()
  const { topics } = useContext(TopicsContext)

  return <section>
    <label htmlFor="topics">Choose a Topic </label>
    <select name="Topics" id="" onChange={(event) => { navigate(`/articles/topic/${event.target.value}`) }}>
      {
        topics.map((topicItem) => {
          if(topic === topicItem.slug){
            return <option value={topicItem.slug} key={topicItem.slug} selected >{topicItem.slug}</option>
          }
          return <option value={topicItem.slug} key={topicItem.slug}>{topicItem.slug}</option>
        })
      }
    </select>
    
  </section>
};

export default TopicPicker;
