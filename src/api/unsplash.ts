import axios from 'axios';

export default axios.create({
    baseURL : 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID Tp5CcIPGOp2FQvZcnFDVCJtI8D-EHI7Q-tUzSDaBY34',
    }
})