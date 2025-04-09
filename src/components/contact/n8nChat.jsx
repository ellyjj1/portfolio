import { useEffect } from 'react';
import '@n8n/chat/style.css';
import { createChat } from '@n8n/chat';

export const N8nChat = () => {
	useEffect(() => {
		createChat({
			webhookUrl: 'https://jingjing.app.n8n.cloud/webhook/e0f13c3c-2455-4a81-a2e3-de0c23df4215/chat'
		});
	}, []);

	return (<div></div>);
};