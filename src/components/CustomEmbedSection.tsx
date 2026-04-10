import { useEffect } from "react";

const CustomEmbedSection = () => {
  useEffect(() => {
    // Inject custom styles for df-messenger
    const style = document.createElement("style");
    style.textContent = `
      df-messenger {
        --df-messenger-bot-message: #1e1b4b;
        --df-messenger-button-titlebar-color: #4f46e5;
        --df-messenger-chat-background-color: #0f0d1a;
        --df-messenger-font-color: #e2e8f0;
        --df-messenger-send-icon: #818cf8;
        --df-messenger-user-message: #3730a3;
        --df-messenger-input-box-color: #1e1b4b;
        --df-messenger-input-font-color: #e2e8f0;
        --df-messenger-minimized-chat-close-icon-color: #fff;
        --df-messenger-titlebar-font-color: #fff;
        --df-messenger-chat-border-radius: 1rem;
        --df-messenger-chat-window-height: 450px;
        --df-messenger-chat-window-width: 370px;
        z-index: 9999;
        position: fixed;
        bottom: 16px;
        right: 16px;
      }
      df-messenger .chat-wrapper {
        border-radius: 1rem;
        box-shadow: 0 8px 32px rgba(79, 70, 229, 0.25);
      }
    `;
    document.head.appendChild(style);

    // Load Dialogflow Messenger script
    const script = document.createElement("script");
    script.src =
      "https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1";
    script.async = true;
    document.body.appendChild(script);

    // Create df-messenger element
    const messenger = document.createElement("df-messenger");
    messenger.setAttribute("intent", "WELCOME");
    messenger.setAttribute("chat-title", "Khareedo Support");
    messenger.setAttribute("agent-id", "91d374e0-bcda-4c7b-ab34-be685e44ea5f");
    messenger.setAttribute("language-code", "en");
    document.body.appendChild(messenger);

    return () => {
      style.remove();
      script.remove();
      messenger.remove();
    };
  }, []);

  return null;
};

export default CustomEmbedSection;
