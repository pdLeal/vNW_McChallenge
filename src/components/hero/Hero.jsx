import React, { useEffect, useState } from 'react';
import * as S from './Hero_Styles';
import Burguer from '../../imgs/bigMac.png';
import Fries from '../../imgs/batata.png';
import IceCream from '../../imgs/sorvete.png';

const urls = [Burguer, Fries, IceCream];

function Hero() {
    const [index, setIndex] = useState(0);
    

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(prevIndex => {
                if(prevIndex === 2) {
                    return 0;
                } else {
                    return prevIndex + 1;
                }
            });
        }, 3000);
        
        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <S.Styled_Hero>
            <S.Container className='gap fig-gap'>
                <S.Figure>
                    {urls.map(url => (
                        <img
                        className='hero-img'
                        key={url}
                        src={url}
                        alt=""
                        style={{translate: `${-100 * index}%`}} />
                    ))}
                </S.Figure>
                <S.H1>BATEU AQUELA <span>#FOME</span> DE <span>MÉQUI?</span></S.H1>
            </S.Container>
            <S.Container>
                <S.Img onClick={() => setIndex(0)} src={Burguer} alt="" />
                <S.Img onClick={() => setIndex(1)} src={Fries} alt="" />
                <S.Img onClick={() => setIndex(2)} src={IceCream} alt="" />
            </S.Container>
        </S.Styled_Hero>
    )
}

export default Hero