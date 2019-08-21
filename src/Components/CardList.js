import React from 'react';
import Card from '../Containers/Card';

const CardList = ({ people }) => {
    const cardsArray = people.map((user, i) =>{
        return(
            <Card key={people[i].id} id={people[i].id} name={people[i].name} email={people[i].email} address={people[i].address}/>
        )
    })

    return (
            <div>
                {cardsArray}
            </div>
    )

}

export default CardList;