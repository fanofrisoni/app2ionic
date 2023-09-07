import { IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonContent, IonHeader, IonIcon, IonInput, IonPage, IonTitle, IonToolbar, useIonRouter } from '@ionic/react';
import { checkmarkDoneOutline, logInOutline, personCircleOutline } from 'ionicons/icons';
import React from 'react';

const Register: React.FC = () => {
    const router = useIonRouter();
    const doRegister = (event:any) => {
        event.preventDefault();
        console.log('Register');
        router.goBack();
    }
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color="primary">
                    <IonButtons slot='start'>
                        <IonBackButton text='Volver' defaultHref="/"></IonBackButton>
                    </IonButtons>
                    <IonTitle>Crear cuenta</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent scrollY={false}>
                <IonCard>
                    <IonCardContent>
                        <form onSubmit={doRegister}>
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
                            <IonButton color='tertiary' type='submit' className='ion-margin-top' expand='block'>Crear nueva cuenta
                                <IonIcon icon={checkmarkDoneOutline} slot='end'></IonIcon>
                            </IonButton>
                        </form>
                    </IonCardContent>
                </IonCard>
            </IonContent>
        </IonPage>
    );
};

export default Register;