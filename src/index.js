import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyle, FontFamilies, Container } from './theme';
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter } from 'react-router-dom';
import Routes from './router';
import { Header } from './components';
import { registerServiceWorker } from './serviceWorker'

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Header />
            <Container>
                <Routes />
            </Container>
            <GlobalStyle />
            <FontFamilies />
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));

registerServiceWorker();
