import CalorieBox from "../Components/CalorieBox"
import FavouriteFoods from "../Components/FavouriteFoods"
import RestrictionBox from "../Components/RestrictionBox"
import styled from "styled-components"

const HomePage = () =>{
    return(
        <Wrapper>
            <CalorieBox />
            <RestrictionBox />
            <FavouriteFoods />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display:flex;
    justify-content:center;
    align-items: center;
    flex-direction:column;
    

`

export default HomePage