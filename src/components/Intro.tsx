import { IonContent, IonHeader, IonPage, IonText, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import React, { useRef, useState } from "react";
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react';
import "swiper/css";
import './Intro.css'

interface ContainerProps {
    onFinish: () => void;
}

const SwiperButtonNext = ({children} :any) => {
    const swiper = useSwiper()
    return <IonButton size='large' color='tertiary' className='ion-margin-top' onClick={() => swiper.slideNext()}>{children}</IonButton>
};
const Intro: React.FC<ContainerProps> = ({onFinish}) => {

    return (
        <>
        <Swiper>
            <SwiperSlide>
                <IonText className='tit1'>
                    Bienvenido
                </IonText>
                <SwiperButtonNext>Siguiente</SwiperButtonNext>
            </SwiperSlide>
            <SwiperSlide>
                <IonText className='tit2'>
                    A esta app de prueba.
                </IonText>
                <IonButton size='large' color='danger' className='ion-margin-top' onClick={() => onFinish()}>Comenzar</IonButton>
            </SwiperSlide>
        </Swiper>
        </>
    );
};

export default Intro;