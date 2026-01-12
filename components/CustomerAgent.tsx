import { useEffect } from 'react';

declare global {
    interface Window {
        CustomerAgentWidget: any;
    }
}

const CustomerAgent = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://synovially-screwed-phebe.ngrok-free.dev/static/widget.js";
        script.async = true;
        script.onload = () => {
            if (window.CustomerAgentWidget) {
                window.CustomerAgentWidget.init({
                    websiteId: 22,
                    apiUrl: "https://synovially-screwed-phebe.ngrok-free.dev"
                });
            }
        };
        document.body.appendChild(script);

        return () => {
            // Optional: cleanup if needed, but widgets usually stay
        };
    }, []);

    return null;
};

export default CustomerAgent;
