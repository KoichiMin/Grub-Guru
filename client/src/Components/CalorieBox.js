import styled from "styled-components"


const CalorieBox = () =>{
    return(
        <Wrapper> 
        <div className="calorie-box">
            <div>How many calories do you want to eat? </div>
            <input type="text" className="input"/>
        </div>
        <div className="calorie-box">
            <div>How many meals a day?</div>
            <input type="text" className="input"/>
        </div>
        </Wrapper> 
    )
}

const Wrapper = styled.div`
    background-color:#B05D39;
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

    .calorie-box{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
`

export default CalorieBox


// const appId = "0d2ff249";
// const appKey = "5437cad2738d94c4b510767ca0728076";
// const like = "chicken";
// const dislike = "kale";

// const test = `https://api.edamam.com/api/recipes/v2?type=public&q=${like}&app_id=${appId}&app_key=${appKey}&excluded=${dislike}`;