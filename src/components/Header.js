import Image from 'next/image';
import Logo from '../assets/images/logo-bonus.svg';

function Header({ score }) {
  return (
    <div className="header">
      <div className="image-container">
        <Image src={Logo} layout="responsive" alt="rock, paper, scissors, lizard, spock" />
      </div>
      <span className="score-box">
        <p>Score</p>
        <p className="score-box-points">{score}</p>
      </span>
    </div>
  );
}

export default Header;
