const CustomEmbedSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent mb-4">
            Featured Content
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Check out our latest featured content and updates
          </p>
        </div>

        <div className="glass-card p-6 sm:p-8 rounded-2xl">
          {/* Replace the content below with your custom HTML or iframe embed */}
          <div
            className="w-full min-h-[400px] rounded-xl overflow-hidden"
            dangerouslySetInnerHTML={{
              __html: `
                <script src="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1"></script>
                <df-messenger
                  intent="WELCOME"
                  chat-title="Khareedo_Support_Bot"
                  agent-id="91d374e0-bcda-4c7b-ab34-be685e44ea5f"
                  language-code="en"
                ></df-messenger>
              `,
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default CustomEmbedSection;
