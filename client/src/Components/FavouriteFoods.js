import styled from "styled-components"
import { useState } from "react"
import SingleFavouriteDisplay from "./SingleFavouriteDisplay"

const FavouriteFoods = () => {
        const [foodItem, setFoodItem] = useState("");
    
        const submitHandler = (event) => {
        event.preventDefault();
        const getArrayFoods = localStorage.getItem("favorite");
        let addFoodsInArray = [];
        if (getArrayFoods) {
            addFoodsInArray = JSON.parse(getArrayFoods);
        }
        if (foodItem && !addFoodsInArray.includes(foodItem.toLowerCase())) {
            addFoodsInArray.push(foodItem);
            localStorage.setItem("favorite", JSON.stringify(addFoodsInArray));
        }
        setFoodItem("");
        };
    
        return (
        <Wrapper>
            <div>Favourite Food?</div>
            <form onSubmit={submitHandler} className="form">
            <input
                type="text"
                className="input"
                value={foodItem}
                onChange={(event) => setFoodItem(event.target.value)}
            />
            <button type="submit">Submit</button>
            </form>
            <SingleFavouriteDisplay />
        </Wrapper>
        );
    };
    
    
    

const Wrapper = styled.div`
    background-color:#18388B;
    height: 35vh;
    width:35vw;
    display: flex;
    justify-content: center;
    align-items:center;
    flex-direction: column;
    gap: 3vh;
    border-radius:10px;

    .input{
        height: 2vh;
        width: 5vw;
    }

    .form{
        display: flex;
        justify-content: center;
        align-items:center;
        flex-direction: column;
    }

`

export default FavouriteFoods