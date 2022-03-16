import Image from 'next/image';
import Triangle from '../assets/images/bg-triangle.svg';

function Game({ setOption, setDecision }) {
    const setChoice = (e) => {
        setOption(e.target.dataset.id);
        setDecision(true);
    };
    return (
        <div className="play">
            <div className="image-container triangle">
                <Image src={Triangle} layout="responsive" priority alt="triangle" />
            </div>
            <div className="items">
                <div data-id="0" onClick={setChoice} onKeyDown={setChoice} className="icon icon-paper" tabIndex={0} role="button" aria-label="Paper" />
                <div data-id="1" onClick={setChoice} onKeyDown={setChoice} className="icon icon-rock" tabIndex={0} role="button" aria-label="Rock" />
                <div data-id="2" onClick={setChoice} onKeyDown={setChoice} className="icon icon-scissors" tabIndex={0} role="button" aria-label="Scissors" />
            </div>
        </div>
    );
}

export default Game;
