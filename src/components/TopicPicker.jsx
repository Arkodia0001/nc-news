import { useContext } from 'react';
import { TopicsContext } from '../contexts/TopicsContext';
import { useNavigate } from 'react-router-dom';

const TopicPicker = ({ setSelectedTopic, selectedTopic }) => {
  const navigate = useNavigate()
  const { topics } = useContext(TopicsContext)

  return <section><label htmlFor="topics">Choose a Topic </label>
    <select name="Topics" id="" onChange={(event) => { setSelectedTopic(event.target.value), navigate(`/${event.target.value}`) }}>
      {
        topics.map((topic) => {
          if(selectedTopic === topic.slug){
            return <option value={topic.slug} key={topic.slug} selected >{topic.slug}</option>
          }
          return <option value={topic.slug} key={topic.slug}>{topic.slug}</option>
        })
      }
    </select>
  </section>
};

export default TopicPicker;
