import React from 'react';
import { connect } from 'react-redux';
import { Image, Alert } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faWallet, faCogs } from '@fortawesome/free-solid-svg-icons';
import icon from '../../img/icon.png';

const OnBoarding = (props) => (
    <Onboarding
        onDone={() => props.dispatch({ type: 'onboarding/finalizar' })}
        onSkip={() => props.dispatch({ type: 'onboarding/finalizar' })}
        // NextButtonComponent={Next}
        // SkipButtonComponent={Skip}
        // DoneButtonComponent={Done}
        nextLabel="Proximo"
        skipLabel="Pular"
        pages={[
            {
                backgroundColor: '#c3c3c3',
                image: <FontAwesomeIcon icon={faWallet} size={80} color="black" />,
                title: 'Inicio',
                subtitle: 'Boas VIndas por aqui',
            },
            {
                backgroundColor: '#c3c3c3',
                image: <FontAwesomeIcon icon={faCogs} size={80} color="black" />,
                title: 'Funcionalidaes',
                subtitle: 'Funcionalidades aqui',
            },
            {
                backgroundColor: '#c3c3c3',
                image: <Image source={icon} />,
                title: 'Final',
                subtitle: "Texto Final",
            },
        ]}
    />
);

export default connect()(OnBoarding);