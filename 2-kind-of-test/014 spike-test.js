import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
    stages: [
        {
        //This stage ramps up the number of virtual users from 0 to 10,000 over 2 minutes.
        // This simulates a sudden and significant increase in load on the system.
            duration: '2m',
            target: 10000
        },
        {
            duration: '1m',
            target: 0
        }
    ]
}

export default function () {
    http.get('https://test.k6.io');
    sleep(1);
}