import React, { useEffect } from 'react';

function PDP() {

    const myHeaders = new Headers({
        'Content-Type': 'application/json',
        'secret-key': '$2b$10$r4P7LTaHKK2s4Qt7pkay0eCnMu3xz0bmO2nyV96RoKzQxcCAlw3UO'
    });

    useEffect(() => {
        fetch('https://api.jsonbin.io/b/607da39c5b165e19f6240247/1', {
            method: 'GET',
            headers: myHeaders,
        })
        .then(response => response.json())
        .then((user) => {
        console.log(user.name);
        console.log(user.location);
        })
        .catch((error) => {
        console.error(error);
        });
        console.log('run once  secret-key ');
      }, [])


    return (
        <div>
            <div>
                PDP Page
            </div>
        </div>
    )
}

export default PDP;