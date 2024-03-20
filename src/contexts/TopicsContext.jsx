import { fetchTopics } from "../components/api";
import { createContext, useState, useEffect } from "react";

export const TopicsContext = createContext()

export const TopicsProvider = ({ children }) => {
    const [topics, setTopics] = useState([]);
    
    useEffect(() => {
        fetchTopics()
        .then((topicsFromApi) => {
          const topicArray = [{slug: 'All'}, ...topicsFromApi]
          setTopics(topicArray)
        })}, [])

    return (
      <TopicsContext.Provider value={{ topics, setTopics }}>
        {children}
      </TopicsContext.Provider>
    );
  };