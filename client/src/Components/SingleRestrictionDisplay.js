import { useEffect, useState } from "react"
import { CloseIcon } from "@chakra-ui/icons";
import styled from "styled-components";

const SingleRestrictionDisplay = () => {
    const [restrictionFoods, setRestrictionFoods] = useState([]);
    
const handleDelete = (index) => {

    const getArrayFoods = localStorage.getItem("restrictions");
    if (getArrayFoods) {
    const addFoodsInArray = JSON.parse(getArrayFoods);
    addFoodsInArray.splice(index, 1);
    localStorage.setItem("restrictions", JSON.stringify(addFoodsInArray));
    setRestrictionFoods(addFoodsInArray);
    }
};

useEffect(() => {
    const getArrayFoods = localStorage.getItem("restrictions");
    if (getArrayFoods) {
    const addFoodsInArray = JSON.parse(getArrayFoods);
    setRestrictionFoods(addFoodsInArray);
    }
}, []);

useEffect(() => {
    const getArrayFoods = localStorage.getItem("restrictions");
    setRestrictionFoods(JSON.parse(getArrayFoods) || []);
}, [localStorage.getItem("restrictions")]);

return (
    <Wrapper>
    {restrictionFoods.map((food, index) => (
        <div key={index}>
        {food} <button onClick={() => handleDelete(index)}><CloseIcon/></button>
        </div>
    ))}
    </Wrapper>
);
};

const Wrapper = styled.div`
    display: flex;

`

export default SingleRestrictionDisplay;