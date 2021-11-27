import React, {useEffect, useState} from 'react';

import {useLocation} from 'react-router-dom';

import Link from '../link';

import fuzeLogo from '../../assets/fuze-logo.png';

import {BackArrowIcon, Header, Logo} from './mainNavigation.styles';

const POSTS_PAGE = '/posts';

const MainNavigation = () => {
    const [hide, setHide] = useState(true);
    const { pathname } = useLocation();

    useEffect(() => {
        setHide(pathname.toLowerCase().includes(POSTS_PAGE));
    }, [pathname]);


    return (
        <Header data-testid={'header-element'}>
            <Link to='/'>
                <BackArrowIcon sx={{ visibility: !hide ? 'hidden' : 'visible'}} size='large' />
                <Logo src={fuzeLogo} alt='fuze-logo'/>
            </Link>
        </Header>
    );
};

export default MainNavigation;
