import { useState } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Footer from '../src/components/Footer';
import Match from '../src/components/Match';
import Game from '../src/components/Game';
import { useLocalStorage } from '../src/hooks/useLocalStorage';

const DynamicHeaderWithNoSSR = dynamic(
  () => import('../src/components/Header'),
  { ssr: false },
);

export default function Home() {
  const [score, setScore] = useLocalStorage('score', 0);
  const [option, setOption] = useState();
  const [decision, setDecision] = useState(false);

  return (
    <>
      <Head>
        <title>Rock paper scissors</title>
      </Head>
      <div className="container">
        <DynamicHeaderWithNoSSR score={score} />
        {
          decision
            ? <Match option={option} score={score} setScore={setScore} />
            : <Game setOption={setOption} setDecision={setDecision} />
        }
        <Footer />
      </div>
    </>
  );
}
