import React from 'react';
import { Card } from 'react-bootstrap';

const Election = ({ election, click }) => {
    return (
        <Card className='m-2 py-2 rounded btn-outline-dark' style={{ width: '16rem' }}>
            <Card.Body>
                <Card.Title>
                    {click==='enabled' ? <a href={`/elections/${election._id}`}>{election.title}</a> : election.title}
                </Card.Title>
                <Card className='py-2 rounded'>
                    <Card.Text style={{ color: 'green' }}>
                        Opening Time:<br />
                        {new Date(election.openTimestamp).toString()}
                    </Card.Text>
                    <Card.Text style={{ color: 'red' }}>
                        Closing Time:<br />
                        {new Date(election.closeTimestamp).toString()}
                    </Card.Text>
                </Card>
            </Card.Body>
        </Card>
    )
};

export default Election;