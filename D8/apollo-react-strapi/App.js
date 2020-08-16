import React from 'react';
import {gql} from 'apollo-boost';
import {Query, useMutation} from 'react-apollo';
// import ClassItem from "./ClassItem";
import Item from './Item';
import "./style.css"
import Loading from '@bit/darskakaoo.dollop.loading';
// import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const GET_CLASS = gql`
query {
    classes {
        enddate
        startdate
        classname
        created_at
        image{
            url
        }
    }
}
`;

const App = () => (
    <Query query={GET_CLASS}> 
        {({loading, error, data}) => {
            if(loading) return <Loading/>;
            if(error) return <h1>Error</h1>;
            return(
                // <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3}}>
                //     <Masonry> 
                <div className = "grid">
                    {data.classes.map((item, i)=>
                        <Item key={i} item={item}>
                        </Item>)}; 
                </div>
                   
                //     </Masonry>
                // </ResponsiveMasonry>    
            );
        }}
    </Query>
)

export default App;