import client from '../api/client';

export const sendMessage = ({ textMessage }) => {
    return client('/api/send-message', { body: { textMessage } }
    );
};
