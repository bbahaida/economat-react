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
const Invoice = Loadable({
  loader: () => import('./views/Invoice/invoice'),
  loading: Loading,
});




// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home', component: DefaultLayout },
 
  { path: '/agents', exact: true, name: 'Agents', component: Agent },
  { path: '/commandes', exact: true, name: 'Commandes', component: Commande },
  { path: '/articles', exact: true, name: 'Articles', component: Article },
  { path: '/invoice', exact: true, name: 'Invoice', component: Invoice },
];

export default routes;
