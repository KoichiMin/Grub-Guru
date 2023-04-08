import { useEffect, useState } from "react"
import { CloseIcon } from "@chakra-ui/icons";
import styled from "styled-components";

const SingleFavouriteDisplay = () => {
    const [favoriteFoods, setFavoriteFoods] = useState([]);


    const handleDelete = (index) => {
        const getArrayFoods = localStorage.getItem("favorite");
        if (getArrayFoods) {
            const addFoodsInArray = JSON.parse(getArrayFoods);
            addFoodsInArray.splice(index, 1);
            localStorage.setItem("favorite", JSON.stringify(addFoodsInArray));
            setFavoriteFoods(addFoodsInArray);
        }
    }


    useEffect(() => {
        const storedFoods = JSON.parse(localStorage.getItem("favorite")) || [];
        setFavoriteFoods(storedFoods);
    }, []);

    useEffect(() => {
        const getArrayFoods = localStorage.getItem("favorite");
        setFavoriteFoods(JSON.parse(getArrayFoods) || []);
    }, [localStorage.getItem("favorite")]);
    

    return (
        <Wrapper>
            {favoriteFoods.map((food, index) => (
                <div key={index}>
                    {food}{" "}
                    <button onClick={() => handleDelete(index)}><CloseIcon/></button>
                </div>
            ))}
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;

`

export default SingleFavouriteDisplay;
