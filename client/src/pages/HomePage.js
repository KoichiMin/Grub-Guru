import CalorieBox from "../Components/CalorieBox"
import FavouriteFoods from "../Components/FavouriteFoods"
import RestrictionBox from "../Components/RestrictionBox"
import styled from "styled-components"
import Submit from "../Components/Submit"

const HomePage = () =>{
    return(
        <Wrapper>
            <CalorieBox />
            <RestrictionBox />
            <FavouriteFoods />
            <Submit/>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display:flex;
    justify-content:center;
    align-items: center;
    flex-direction:column;
    gap: 20px;
    

`

export default HomePage