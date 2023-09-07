import { IonCard, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCardContent, IonInput, IonButton, IonIcon } from '@ionic/react';
import React from 'react';
import {logInOutline, personCircleOutline} from 'ionicons/icons';
import elephant from '../assets/elephant.svg';
const Login: React.FC = () => {
    const doLogin = (event:any) => {
        event.preventDefault();
        console.log('login');
    }
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color="primary">
                    <IonTitle>Title</IonTitle>
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
                                label='Password'
                                labelPlacement='floating'
                                type='password'
                                fill='outline'
                                >
                            </IonInput>
                            <IonButton color='tertiary' type='submit' className='ion-margin-top' expand='block'>Log In
                                <IonIcon icon={logInOutline} slot='end'></IonIcon>
                            </IonButton>
                            <IonButton color='light' routerLink='/register' type='button' className='ion-margin-top' expand='block'>Create Account
                                <IonIcon icon={personCircleOutline} slot='end'></IonIcon>
                            </IonButton>
                        </form>
                    </IonCardContent>
                </IonCard>
            </IonContent>
        </IonPage>
    );
};

export default Login;