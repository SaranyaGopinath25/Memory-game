import GameBoard from "../components/GameBoard";
import ScoreBoard from "../components/ScoreBoard"


function Game () {
    return(
        <div className="game-container">
            <ScoreBoard/>            
            <GameBoard/>
        </div>
    )
}
export default Game;