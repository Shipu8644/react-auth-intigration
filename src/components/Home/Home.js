import React from 'react';
import useAuth from '../../hooks/useAuth';

const Home = () => {
    const { user } = useAuth();
    return (
        <div>
            <h2>This is Home</h2>
            <h2>User: {user.displayName}</h2>
        </div>
    );
};

export default Home;