import { useEffect } from "react";

const CustomEmbedSection = () => {
  useEffect(() => {
    // Load Dialogflow Messenger script
    const script = document.createElement("script");
    script.src =
      "https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1";
    script.async = true;
    document.body.appendChild(script);

    // Create df-messenger element
    const messenger = document.createElement("df-messenger");
    messenger.setAttribute("intent", "WELCOME");
    messenger.setAttribute("chat-title", "Khareedo_Support_Bot");
    messenger.setAttribute("agent-id", "91d374e0-bcda-4c7b-ab34-be685e44ea5f");
    messenger.setAttribute("language-code", "en");
    messenger.setAttribute(
      "style",
      "position: fixed; bottom: 16px; right: 16px; z-index: 9999;"
    );
    document.body.appendChild(messenger);

    return () => {
      script.remove();
      messenger.remove();
    };
  }, []);

  return null;
};

export default CustomEmbedSection;
