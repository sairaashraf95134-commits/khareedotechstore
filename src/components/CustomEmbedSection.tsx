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
                <div style="width:100%;height:400px;display:flex;align-items:center;justify-content:center;background:rgba(139,92,246,0.08);border-radius:12px;border:2px dashed rgba(139,92,246,0.3);">
                  <p style="color:#a78bfa;font-size:1.125rem;text-align:center;padding:2rem;">
                    Paste your custom HTML or iframe embed code here.<br/>
                    <span style="font-size:0.875rem;opacity:0.7;">Edit the <code>dangerouslySetInnerHTML</code> in CustomEmbedSection.tsx</span>
                  </p>
                </div>
              `,
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default CustomEmbedSection;
