import React from 'react';
import * as S from './Promo_Styles'
import McSofa from '../../imgs/mequiNoSofa.png';

function Card() {
    return (
        <S.Styled_Card>
            <img src={McSofa} alt="" />
            <h3>Que tal um mequi?</h3>
            <button>Clique aqui</button>
        </S.Styled_Card>
    )
}

function Promo() {
  return (
    <section>
        <h2>Promoção</h2>
        <S.Grid>
            <Card />
            <Card />
            <Card />
        </S.Grid>
    </section>
  )
}

export default Promo