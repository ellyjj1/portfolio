import { useEffect } from 'react';
import '@n8n/chat/style.css';
import { createChat } from '@n8n/chat';

export const N8nChat = () => {
	useEffect(() => {
		createChat({
			webhookUrl: 'https://primary-production-e6ad.up.railway.app/webhook/5aa95500-d5b6-472f-912b-70ab3238f602/chat'
		});
	}, []);

	return (<div></div>);
};