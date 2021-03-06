import React from 'react';
import Loadable from 'react-loadable'

import DefaultLayout from './containers/DefaultLayout';

function Loading() {
  return <div style={loadingStyle}><img src={'/assets/snim_load.gif'} alt="Loading...." /></div>;
}

const loadingStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
}


const Agent = Loadable({
  loader: () => import('./views/Agent/agent'),
  loading: Loading,
});
const Article = Loadable({
  loader: () => import('./views/Article/article'),
  loading: Loading,
});
const Commande = Loadable({
  loader: () => import('./views/Commande/commande'),
  loading: Loading,
});
const Dashboard = Loadable({
  loader: () => import('./views/Dashboard/dashboard'),
  loading: Loading,
});
const Invoice = Loadable({
  loader: () => import('./views/Invoice/invoice'),
  loading: Loading,
});
const Login = Loadable({
  loader: () => import('./views/Login/login'),
  loading: Loading,
});




// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Accueil', component: DefaultLayout },
 
  { path: '/agents', exact: true, name: 'Agents', component: Agent },
  
  { path: '/articles', exact: true, name: 'Articles', component: Article },
  { path: '/commandes', exact: true, name: 'Commandes', component: Commande },
  { path: '/dashboard', exact: true, name: 'Tableau de bord', component: Dashboard },
  { path: '/facture', exact: true, name: 'Facture', component: Invoice },
];

export default routes;
