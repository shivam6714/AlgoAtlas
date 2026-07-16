import "./Algorithms.css";

import { categories } from "../../data/categories";

import CategoryCard from "../../components/algorithms/CategoryCard";

const Algorithms = () => {

    return (

        <div className="algorithms-page">

            <h1>Algorithms</h1>

            <div className="algorithm-grid">

                {categories.map((category)=>{

                    return(

                        <CategoryCard

                            key={category.id}

                            category={category}

                        />

                    )

                })}

            </div>

        </div>

    )

}

export default Algorithms;