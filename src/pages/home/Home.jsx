const Home = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="px-10 py-20">
        <div id="hero" className="flex justify-between items-stretch gap-16">
          {/* Left Side - What I Do */}
          <div className="flex-1">
            <div className="text-5xl font-black pb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              What I Do?
            </div>
            <div className="flex flex-col gap-6 text-2xl leading-relaxed">
              <div className="flex items-start gap-4">
                <div className="text-white text-3xl">•</div>
                <div>
                  <span className="font-bold">Build novel technologies</span> and like to keep up with emerging technologies.
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-white text-3xl">•</div>
                <div>
                  <span className="font-bold">Solve complex technical problems</span> with optimal and scalable solutions.
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-white text-3xl">•</div>
                <div>
                  <span className="font-bold">Analyse large datasets to find insights</span> and build solutions.
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-white text-3xl">•</div>
                <div>
                  <span className="font-bold">Partner with startups</span> to achieve the next breakthrough.
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-white text-3xl">•</div>
                <div>
                  <span className="font-bold">Full-stack Product Development</span> from concept to deployment across web, mobile, and cloud platforms.
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-white text-3xl">•</div>
                <div>
                  <span className="font-bold">AI & Machine Learning integration</span> to automate processes and unlock intelligent capabilities.
                </div>
              </div>
            </div>
          </div>

          {/* Vertical Divider */}
          <div className="border-l-2 border-white min-h-full" />

          {/* Right Side - Highlights */}
          <div className="flex-1">
            <div className="text-5xl font-black pb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Highlights
            </div>
            <div className="flex flex-col gap-6 text-2xl leading-relaxed">
              <div className="flex items-start gap-4">
                <div className="text-white text-3xl">•</div>
                <div>
                  <span className="font-bold">Technical Lead</span> at KD Innovation & Incubation Centre
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-white text-3xl">•</div>
                <div>
                  <span className="font-bold">Academic Researcher</span> contributing to technology and interdisciplinary papers
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-white text-3xl">•</div>
                <div>
                  <span className="font-bold">Upcoming Co-Inventor & Co-Founder</span> of a Vehicle-to-Everything solution
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-white text-3xl">•</div>
                <div>
                  <span className="font-bold">Harvard University</span> certified professional
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-white text-3xl">•</div>
                <div>
                  <span className="font-bold">University of Helsinki</span> certified developer
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-white text-3xl">•</div>
                <div>
                  <span className="font-bold">Creator of a new</span> creditworthiness assessment tool
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="px-10 pb-20">
        <div className="text-center border-t-2 border-white pt-16 opacity-90">
          <div className="text-3xl font-bold mb-6">
            Let me Help You With Your Technical Problems
          </div>
          <div className="text-xl mb-8 text-gray-300">
            Book a free consultation now below and let's talk!
          </div>
          <button className="text-2xl font-black border-2 border-white py-4 px-8 hover:bg-white hover:text-black">
            Work with Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
