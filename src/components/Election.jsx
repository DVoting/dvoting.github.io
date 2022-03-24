import React from 'react';
import { Card } from 'react-bootstrap';

const Election = ({ election }) => {
    return (
        <Card className='m-2 py-2 rounded ' style={{ width: '25vw' }}>
            <Card.Body>
                <Card.Title>
                    <a href={`/elections/${election._id}`}>{election.title}</a>
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