import React from 'react'
import Card from '../Card/Card';

interface Props {}

const CardList : React.FC<Props> = (props: Props) : JSX.Element => {
    return (
    <div>
        <Card companyName='Apple' ticker='iPhone' price={100}/>
        <Card companyName='Microsoft' ticker='Windows' price={200}/>
        <Card companyName='AWS' ticker='ML Models' price={300}/>
    </div>
    );
};

export default CardList;