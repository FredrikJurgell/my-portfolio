import Head from 'next/head';
import { useEffect, useState, useContext, useRef } from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import About from '../components/About';
import Projects from '../components/Projects';
import Resume from '../components/Resume';
import Footer from '../components/Footer';
import Recommendation from '../components/Recommendation';
import CodeShowcase from '../components/CodeShowcase';
import { DarkModeContext } from '../context/DarkModeContext';

export default function Home() {
  const [isVisible, setIsVisible] = useState({
    about: false,
    projects: false,
    resume: false,
    recommendation: false,
    codeShowcases: false,
  });

  const { darkMode, setDarkMode } = useContext(DarkModeContext);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const resumeRef = useRef(null);
  const recommendationRef = useRef(null);
  const codeShowcaseRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const codeShowcasesRef = useRef(null);

  const codeSamples = [
    {
      language: 'JavaScript',
      code: `async waitForGPT(thread, assistant, instruction, interaction) {
      try {
        const run = await this.openai.beta.threads.runs.create(thread.id, {
          assistant_id: assistant.id,
          instructions: instruction,
        });
  
        let runStatus = await this.openai.beta.threads.runs.retrieve(thread.id, run.id);
  
        // Polling mechanism to see if runStatus is completed
        let isAvailable = true;
        let attempts = 0;
        while (runStatus.status !== 'completed' && attempts < 15) {
          if (this.dF) {
            this.dF.feedbackToDiscord(interaction, \`runStatus: \${runStatus.status}...\`);
          }
          runStatus = await this.openai.beta.threads.runs.retrieve(thread.id, run.id);
  
          // Check for requires_action status (tool call required)
          if (runStatus.status === 'requires_action') {
            if (isAvailable) {
            // Flow information
              console.log('\n\n\nCalled on attempt:', attempts, '\n\n\n', 'available:', isAvailable, '\n\n\n');
              isAvailable = false;
              await this.useTool(runStatus, thread, run, interaction);
              await this.getLatestMessage(thread.id);
              isAvailable = true;
              console.log(runStatus);
              continue;
            }
          }
  
          // Check for failed, cancelled, or expired status
          if (['failed', 'cancelled', 'expired'].includes(runStatus.status)) {
            console.log(
              \`Run status is '\${runStatus.status}'. Unable to complete request.\`,
            );
            break;
          }
          console.log('runStatus:', runStatus.status);
          // Loop timer for 3 second
          await new Promise((resolve) => setTimeout(resolve, 3000));
          attempts++;
        }
  
        // Get the latest message
        const latestMessage = await this.getLatestMessage(thread.id);
        console.log('Latest message:', latestMessage?.content[0]?.text ?? 'No content found');
        if (latestMessage?.content[0]?.text?.value !== undefined) {
          if (this.dF) {
            this.dF.feedbackToDiscord(interaction, 'Done!');
          }
          return latestMessage.content[0].text.value;
        }
        else {
          if (this.dF) {
            this.dF.feedbackToDiscord(interaction, 'An error occurred');
          }
          return 'An error occurred while processing your request.';
        }
      }
      catch (error) {
        console.error('Error in waitForGPT:', error);
        if (this.dF) {
          await interaction.followUp(
            'An error occurred while processing your request.',
          );
        }
      }
    }` },
    {
      language: 'JavaScript',
      code: `async login (req, res, next) {
        try {
          const user = await UserModel.authenticate(req.body.username, req.body.password);
    
          const payload = {
            username: user.username,
            email: user.email,
            userId: user._id
          };
    
          // Create the access token with the shorter lifespan.
          const accessToken = jwt.sign(payload, Buffer.from(process.env.ACCESS_TOKEN_SECRET, 'base64'), {
            algorithm: 'RS256',
            expiresIn: process.env.ACCESS_TOKEN_LIFE
          });
    
          res
            .status(201)
            .json({
              access_token: accessToken,
              userId: payload.userId,
              links: [
                {
                  rel: 'profile',
                  href: \`${'${req.protocol}'}://${'${req.get("host")}'}/api/v1/users/${'${user._id}'}\`
                }
              ]
            });
        } catch (error) {
          // Authentication failed.
          const err = createError(401, 'Credentials invalid or not provided.');
          next(err);
        }
      }`
    },
    {
      language: 'Java',
      code: `public void fit(float[][] X, int[] y) {
    numFeatures = X[0].length;
    int numSamples = X.length;

    // Initialize data structures
    for (int i = 0; i < numSamples; i++) {
      int label = y[i];
      classCounts.put(label, classCounts.getOrDefault(label, 0) + 1);

      if (!featureSums.containsKey(label)) {
        featureSums.put(label, new ArrayList<>(Collections.nCopies(numFeatures, 0.0f)));
        featureSquaredSums.put(label, new ArrayList<>(Collections.nCopies(numFeatures, 0.0f)));
      }

      for (int j = 0; j < numFeatures; j++) {
        float featureValue = X[i][j];
        featureSums.get(label).set(j, featureSums.get(label).get(j) + featureValue);
        featureSquaredSums.get(label).set(j, featureSquaredSums.get(label).get(j) + featureValue * featureValue);
      }
    }

    for (Integer label : classCounts.keySet()) {
      classProbabilities.put(label, (float) classCounts.get(label) / numSamples);
    }
  }` },
    {
      language: 'csharp',
      code: `public async Task AddData(IEnumerable<Data> datas)
        {
            var index = "imdbdata";
            var batchSize = 200;
            var shipped = 0;

            while (datas.Skip(shipped).Take(batchSize).Any())
            {
                var batch = datas.Skip(shipped).Take(batchSize);
                var response = await elasticClient.BulkAsync(b => b.CreateMany(batch).Index(index));
                shipped += batchSize;
            }
        }`
    }
  ];

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedDarkMode = localStorage.getItem('darkMode');
      const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      const initialDarkMode = savedDarkMode !== null ? savedDarkMode === 'true' : prefersDarkMode;
      setDarkMode(initialDarkMode);
      if (initialDarkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }

      const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleThemeChange = (e) => {
        setDarkMode(e.matches);
      };
      darkModeMediaQuery.addEventListener('change', handleThemeChange);
      return () => darkModeMediaQuery.removeEventListener('change', handleThemeChange);
    }
  }, [setDarkMode]);

  useEffect(() => {
    const sections = [
      { ref: aboutRef, key: 'about' },
      { ref: projectsRef, key: 'projects' },
      { ref: resumeRef, key: 'resume' },
      { ref: recommendationRef, key: 'recommendation' },
      { ref: codeShowcaseRefs[0], key: 'codeShowcase1' },
      { ref: codeShowcaseRefs[1], key: 'codeShowcase2' },
      { ref: codeShowcaseRefs[2], key: 'codeShowcase3' },
      { ref: codeShowcaseRefs[3], key: 'codeShowcase4' },
    ];

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible((prevState) => ({
            ...prevState,
            [entry.target.id]: true,
          }));
        } else {
          setIsVisible((prevState) => ({
            ...prevState,
            [entry.target.id]: false,
          }));
        }
      });
    }, { threshold: 0.1 });

    sections.forEach(({ ref }) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      sections.forEach(({ ref }) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, [codeShowcaseRefs]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('darkMode', darkMode);
      if (darkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={`${darkMode ? 'dark' : ''} flex flex-col min-h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 snap-y snap-mandatory overflow-y-scroll scroll-smooth transition-colors duration-500 relative z-0`}>
      <Head>
        <title>Portfolio | Fredrik Jurgell</title>
        <meta name="description" content="Welcome to my portfolio website" key="description" />
      </Head>
      <Navbar isVisible={isVisible} toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <Header />

      <div className="container mx-auto grid grid-cols-9 gap-6 relative">
        {/* Left column */}
        <div className="hidden md:col-span-2 md:flex flex-col gap-24 mt-24 relative z-20">
          {/* Code showcases on left */}
          {codeSamples.slice(0, 2).map((sample, index) => (
            <div
              key={index}
              id={`codeShowcase${index * 2 + 1}`}
              ref={codeShowcaseRefs[index * 2]}
              className={`hover:scale-105 transform transition-transform duration-500 ease-in-out animate-fade-in transform transition-all duration-500 grid-item transition-all duration-500 w-[300px] h-[${30 + index * 5}vh] hover:w-[500px] hover:border hover:border-gray-300 rounded-lg`}
              style={{ left: 0, marginTop: `${index % 2 === 0 ? index * 800 + 300 : index * 2000}px` }}
            >
              <CodeShowcase isVisible={isVisible[`codeShowcase${index * 2 + 1}`]} initialCodeOption={sample.language.toLowerCase()} codeLanguage={sample.language} codeSamples={{ [sample.language.toLowerCase()]: sample.code }} />
            </div>
          ))}
        </div>

        {/* Main content column */}
        <div className="col-span-9 md:col-span-5 flex flex-col gap-8 w-full relative z-10 pr-10 pl-10">
          {/* About Me */}
          <div className={`w-full max-w-none mx-auto flex justify-center ${isVisible.about ? 'opacity-100' : 'opacity-0'} transition-opacity duration-700`}>
            <section id="about" ref={aboutRef} className="hover:scale-105 transform transition-transform duration-500 ease-in-out animate-fade-in transform transition-all duration-500 my-10 md:my-20">
              <div className="w-full max-w-4xl p-6 md:p-10 bg-white rounded-lg shadow-xl transform transition-all duration-700 opacity-100 translate-y-0 snap-start snap-always dark:bg-gray-800 dark:text-gray-200 relative z-30">
                <About isVisible={isVisible.about} />
              </div>
            </section>
          </div>

          {/* Projects */}
          <div className={`w-full max-w-none mx-auto flex justify-center ${isVisible.projects ? 'opacity-100' : 'opacity-0'} transition-opacity duration-700`}>
            <section id="projects" ref={projectsRef} className="hover:scale-105 transform transition-transform duration-500 ease-in-out animate-fade-in transform transition-all duration-500 my-10 md:my-20">
              <div className="w-full max-w-4xl p-6 md:p-10 bg-white rounded-lg shadow-xl transform transition-all duration-700 opacity-100 translate-y-0 snap-start snap-always dark:bg-gray-800 dark:text-gray-200 relative z-30">
                <Projects isVisible={isVisible.projects} />
              </div>
            </section>
          </div>

          {/* Resume */}
          <div className={`w-full max-w-none mx-auto flex justify-center ${isVisible.resume ? 'opacity-100' : 'opacity-0'} transition-opacity duration-700`}>
            <section id="resume" ref={resumeRef} className="hover:scale-105 transform transition-transform duration-500 ease-in-out animate-fade-in transform transition-all duration-500 my-10 md:my-20">
              <div className="w-full max-w-4xl p-6 md:p-10 bg-white rounded-lg shadow-xl transform transition-all duration-700 opacity-100 translate-y-0 snap-start snap-always dark:bg-gray-800 dark:text-gray-200 relative z-30">
                <Resume isVisible={isVisible.resume} />
              </div>
            </section>
          </div>

          {/* Recommendations */}
          <div className={`w-full max-w-none mx-auto flex justify-center ${isVisible.recommendation ? 'opacity-100' : 'opacity-0'} transition-opacity duration-700`}>
            <section id="recommendation" ref={recommendationRef} className="hover:scale-105 transform transition-transform duration-500 ease-in-out animate-fade-in transform transition-all duration-500 my-10 md:my-20">
              <div className="w-full max-w-4xl p-6 md:p-10 bg-white rounded-lg shadow-xl transform transition-all duration-700 opacity-100 translate-y-0 snap-start snap-always dark:bg-gray-800 dark:text-gray-200 relative z-30">
                <Recommendation isVisible={isVisible.recommendation} />
              </div>
            </section>
          </div>
        </div>

        {/* Right column */}
        <div className="hidden md:col-span-2 md:flex flex-col relative z-20">
          {/* Code showcases on right */}
          {codeSamples.slice(2, 4).map((sample, index) => (
            <div
              key={index + 4}
              id={`codeShowcase${index * 2 + 2}`}
              ref={codeShowcaseRefs[index * 2 + 1]}
              className={`hover:scale-105 transform transition-transform duration-500 ease-in-out animate-fade-in transform transition-all duration-500 grid-item transition-all duration-500 w-[300px] h-[${45 + index * 5}vh] hover:w-[500px] hover:border hover:border-gray-300 rounded-lg`}
              style={{ right: 0, marginTop: `${Math.min(index * 1000 + (index % 2 === 0 ? 200 : 900), 3000)}px` }}
            >
              <CodeShowcase isVisible={isVisible[`codeShowcase${index * 2 + 2}`]} initialCodeOption={sample.language.toLowerCase()} codeLanguage={sample.language} codeSamples={{ [sample.language.toLowerCase()]: sample.code }} />
            </div>
          ))}
        </div>
      </div>

      <div id="codeShowcases" ref={codeShowcasesRef} className="w-full p-4 mt-10 md:mt-20 md:hidden">
        <button
          onClick={() => setIsVisible((prev) => ({ ...prev, codeShowcases: !prev.codeShowcases }))}
          className="w-full p-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-500"
        >
          {isVisible.codeShowcases ? 'Hide Code Showcases' : 'Show Code Showcases'}
        </button>

        {isVisible.codeShowcases && (
          <div className="mt-6 grid grid-cols-1 gap-4">
            {codeSamples.map((sample, index) => (
              <div key={index} className="p-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
                <CodeShowcase 
                  isVisible={true} 
                  codeLanguage={sample.language} 
                  initialCodeOption={sample.language.toLowerCase()} 
                  codeSamples={{ [sample.language.toLowerCase()]: sample.code }} 
                />
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
