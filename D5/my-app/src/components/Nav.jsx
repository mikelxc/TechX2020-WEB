import React from 'react';
import styled from 'styled-components';

/**
 * A styled navigation bar.
 */
export const NavBar = styled.div`      
    background-color: #888;
    
`;

/**
 * The styled content
 */ 
export const Content = styled.div`
    background-color: #EEE;
`;

/**
 * A functional React component as a wrapper for a page with navigation.
 * Renders the page's navbar and content
 */
function WithNavigation (props) {
    return <div>
        <NavBar>
            {/** Placeholder for the NavBar*/}
            NavBar
        </NavBar>
        <Content>
            {
                /** show as content whatever we provide */
                props.children
            }
        </Content>
    </div>;
}

export default WithNavigation;