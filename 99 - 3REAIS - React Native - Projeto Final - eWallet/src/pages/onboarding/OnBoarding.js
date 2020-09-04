import React from 'react';
import { connect } from 'react-redux';
import { Image } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faWallet, faCogs, faSmileBeam } from '@fortawesome/free-solid-svg-icons';
import icon from '../../img/icon.png';

const OnBoarding = (props) => (
    <Onboarding
        onDone={() => props.dispatch({ type: 'onboarding/Finalizar' })}
        onSkip={() => props.dispatch({ type: 'onboarding/Finalizar' })}
        nextLabel="Proximo"
        skipLabel="Pular"
        pages={[
            {
                backgroundColor: '#c3c3c3',
                image: <FontAwesomeIcon icon={faSmileBeam} size={80} color="black" />,
                title: 'Que felicidade ter você por aqui!',
                subtitle: 'Esperamos que aproveite todas as facilidades que preparamos para você.',
            },
            {
                backgroundColor: '#c3c3c3',
                image: <FontAwesomeIcon icon={faCogs} size={80} color="black" />,
                title: 'Aqui tem tudo que você precisa',
                subtitle: 'Faça seu dinheiro render, pague contas sem taxas, transfira para seus amigos na hora e sem custo e muito mais.',
            },
            {
                backgroundColor: '#c3c3c3',
                image: <FontAwesomeIcon icon={faWallet} size={80} color="black" />,
                title: 'Agora é só aproveitar!',
                subtitle: "Já depositamos 20 Reais pra você começar bem por aqui ",
            },
        ]}
    />
);

export default connect()(OnBoarding);