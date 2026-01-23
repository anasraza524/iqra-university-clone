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
        websiteId: 28,
        apiUrl: "https://synovially-screwed-phebe.ngrok-free.dev"
      });
    }
  };
  document.body.appendChild(script);

  return () => {
    document.body.removeChild(script);
  };
}, []);

    return null;
};

export default CustomerAgent;
