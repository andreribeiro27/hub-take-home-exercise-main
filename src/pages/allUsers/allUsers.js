import React from 'react';

import UserCard from '../../components/user/userCard';

import LoadingContainer from '../../components/containers/loading';
import ErrorContainer from '../../components/containers/error';

import {useGetUsersQuery} from '../../features/api/api-slice';

import {Section, StyledContainer} from './allUsers.styles';


const AllUsers = () => {
    const { data, error, isLoading } = useGetUsersQuery();

    if (isLoading) {
        return (
            <section>
                <LoadingContainer />
            </section>
        );
    }

    if(error) {
        return (
            <section>
                <ErrorContainer message={error?.message} hasLink={false} />
            </section>
        );
    }

    return (
        <Section data-testid={'home-element'}>
            <StyledContainer>
                {data.map((user, index) => {
                    return <UserCard user={user} key={`${index}-user-card`} />;
                })}
            </StyledContainer>
        </Section>
    );
};

export default AllUsers;
