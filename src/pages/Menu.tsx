import { IonContent, IonHeader, IonIcon, IonItem, IonMenu, IonMenuToggle, IonPage, IonRouterOutlet, IonTitle, IonToolbar } from '@ionic/react';
import { homeOutline, settingsOutline } from 'ionicons/icons';
import React from 'react';
import { Redirect, Route } from 'react-router';
import List from './List';
import Settings from './Settings';

const Menu: React.FC = () => {

    const paths = [
        { name: 'Inicio', url: '/menu/list', icon: homeOutline },
        { name: 'Configuración', url: '/menu/settings', icon: settingsOutline },
    ]

    return (
        <IonPage>
            <IonMenu contentId='main'>
                <IonHeader>
                    <IonToolbar color='primary'>
                        <IonTitle>Menú</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent className='ion-padding'>
                    {paths.map((item, index) => (
                        <IonMenuToggle key={index}>
                            <IonItem routerLink={item.url} routerDirection='none'>
                                {item.name}
                                <IonIcon icon={item.icon} slot='end' />
                            </IonItem>
                        </IonMenuToggle>

                    ))}
                </IonContent>
            </IonMenu>

            <IonRouterOutlet id='main'>
                <Route exact path='/menu/list' component={List} />
                <Route path='/menu/settings' component={Settings} />
                <Route exact path='/menu'>
                    <Redirect to='/menu/list' />
                </Route>
            </IonRouterOutlet>
        </IonPage>
    );
};

export default Menu;