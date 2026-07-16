import "./Category.css";

import { useParams } from "react-router-dom";

import { topicsByCategory } from "../../data/topics";

import TopicCard from "../../components/category/TopicCard";

const Category = () => {

    const { slug } = useParams();

    const topics = topicsByCategory[slug] || [];

    return (

        <div className="category-page">

            <h1>{slug.replace("-", " ")}</h1>

            <p>{topics.length} Topics</p>

            <div className="topic-list">

                {topics.map((topic)=>{

                    return(

                        <TopicCard

                            key={topic.id}

                            topic={topic}

                        />

                    )

                })}

            </div>

        </div>

    )

}

export default Category;