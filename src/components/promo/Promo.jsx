import React from 'react';
import * as S from './Promo_Styles'
import McSofa from '../../imgs/mequiNoSofa.png';
import Lojas from '../../imgs/Restaurantes_Participantes.png';
import Banner from '../../imgs/banner_Rodapee.png';

function Card({featuredImg, title}) {
    return (
        <S.Styled_Card>
            <img src={featuredImg} alt="" />
            <h3>{title}</h3>
            <button>Clique aqui</button>
        </S.Styled_Card>
    )
}

function Promo() {
  return (
    <S.Promo_Section>
        <S.H2>Promoção</S.H2>
        <S.Grid>
            <Card featuredImg={McSofa} title='Que tal um #MéquiNoSofá?'  />
            <Card featuredImg={Lojas} title='Venha conhecer nossa nova loja!' />
            <Card featuredImg={Banner} title='Confira as medidas que o Méqui adotou!' />
        </S.Grid>
    </S.Promo_Section>
  )
}

export default Promo