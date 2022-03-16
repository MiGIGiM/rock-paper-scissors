import Image from 'next/image';
import Triangle from '../assets/images/bg-pentagon.svg';

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
                <div data-id="4" onClick={setChoice} onKeyDown={setChoice} className="icon icon-spock" tabIndex={0} role="button" aria-label="Spock" />
                <div data-id="3" onClick={setChoice} onKeyDown={setChoice} className="icon icon-lizard" tabIndex={0} role="button" aria-label="Lizard" />
                <div data-id="2" onClick={setChoice} onKeyDown={setChoice} className="icon icon-scissors" tabIndex={0} role="button" aria-label="Scissors" />
                <div data-id="1" onClick={setChoice} onKeyDown={setChoice} className="icon icon-rock" tabIndex={0} role="button" aria-label="Rock" />
                <div data-id="0" onClick={setChoice} onKeyDown={setChoice} className="icon icon-paper" tabIndex={0} role="button" aria-label="Paper" />
            </div>
        </div>
    );
}

export default Game;
