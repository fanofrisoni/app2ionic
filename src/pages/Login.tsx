import { IonCard, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCardContent, IonInput, IonButton, IonIcon, useIonRouter } from '@ionic/react';
import React, { useState, useEffect } from 'react';
import {bookOutline, logInOutline, personCircleOutline} from 'ionicons/icons';
import elephant from '../assets/elephant.svg';
import Intro from '../components/Intro';
import { Preferences } from '@capacitor/preferences';

const INTRO_KEY = 'intro-seen';

const Login: React.FC = () => {
    const router = useIonRouter();

    const [introSeen, setIntroSeen] = useState(true);

    const doLogin = (event:any) => {
        event.preventDefault();
        console.log('login');
        //router.push('/home', 'root');
    }

    const finishIntro = async() => {
        console.log('end intro');
        setIntroSeen(true);
        Preferences.set({ key: INTRO_KEY, value: 'true' });
    }

    const seeIntroAgain = () => {
        setIntroSeen(false);
        Preferences.remove({ key: INTRO_KEY });
    }

    useEffect(() => {
        const checkStorage = async() => {
            const seen = await Preferences.get({ key: INTRO_KEY });
            setIntroSeen(seen.value==='true');
        }
        checkStorage();
    }, []);

    return (
        <>
        {!introSeen ? (
            <Intro onFinish={finishIntro}/>
        ) :(
        <IonPage>
            <IonHeader>
                <IonToolbar color="primary">
                    <IonTitle>LeApp</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent scrollY={false}>
                <img src={elephant} alt="person" className='ion-text-center ion-padding' />
                <IonCard>
                    <IonCardContent>
                        <form onSubmit={doLogin}>
                            <IonInput 
                                label='Email'
                                labelPlacement='floating'
                                type='email'
                                placeholder='fano@gmail.com'
                                fill='outline'
                                >
                            </IonInput>
                            <IonInput 
                                className='ion-margin-top'
                                label='Contraseña'
                                labelPlacement='floating'
                                type='password'
                                fill='outline'
                                >
                            </IonInput>
                            <IonButton color='tertiary' type='submit' className='ion-margin-top' expand='block'>Ingresar
                                <IonIcon icon={logInOutline} slot='end'></IonIcon>
                            </IonButton>
                            <IonButton color='light' routerLink='/register' type='button' className='ion-margin-top' expand='block'>Registrarse
                                <IonIcon icon={personCircleOutline} slot='end'></IonIcon>
                            </IonButton>
                            <IonButton onClick={seeIntroAgain} fill='clear' color='medium' size='small' type='button' className='ion-margin-top' expand='block'>Ver Introducción
                                <IonIcon icon={bookOutline} slot='end'></IonIcon>
                            </IonButton>
                        </form>
                    </IonCardContent>
                </IonCard>
            </IonContent>
        </IonPage>
        ) }
        </>
    );
};

export default Login;