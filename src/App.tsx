import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState, useEffect } from "react";
import { 
  ArrowRight, 
  Play, 
  Github, 
  Youtube, 
  Users, 
  Clock, 
  Zap,
  Download,
  Settings,
  Code,
  Star,
  GitFork,
  Eye,
  Archive,
  PlayCircle,
  Info,
  HelpCircle,
  ChevronLeft
} from "lucide-react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("neuroverse");
  const [currentPage, setCurrentPage] = useState("home");
  const [githubData, setGithubData] = useState({
    stars: "4",
    forks: "1",
    watchers: "1",
    latestVersion: "v0.6.5.5",
    releaseDate: "5 days ago",
    description: "Open-source Python script for automating stream preservation",
    loading: true
  });

  // Handle URL hash routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1); // Remove the #
      if (hash === 'FAQ-page') {
        setCurrentPage('faq');
      } else {
        setCurrentPage('home');
      }
    };

    // Check hash on initial load
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  // Fetch GitHub repository data
  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const repoResponse = await fetch('https://api.github.com/repos/karstenlee10/Twitch_Stream_To_YouTube');
        const repoData = await repoResponse.json();
        
        const releaseResponse = await fetch('https://api.github.com/repos/karstenlee10/Twitch_Stream_To_YouTube/releases/latest');
        let releaseData: any = null;
        if (releaseResponse.ok) {
          releaseData = await releaseResponse.json();
        }
        
        const formatDate = (dateString: string) => {
          const date = new Date(dateString);
          const now = new Date();
          const diffTime = Math.abs(now.getTime() - date.getTime());
          const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
          
          if (diffDays === 1) return '1 day ago';
          if (diffDays < 30) return `${diffDays} days ago`;
          if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`;
          return `${Math.floor(diffDays / 365)} years ago`;
        };
        
        setGithubData({
          stars: repoData.stargazers_count?.toString() || "4",
          forks: repoData.forks_count?.toString() || "1",
          watchers: repoData.subscribers_count?.toString() || "1",
          latestVersion: releaseData?.tag_name || "v0.6.5.5",
          releaseDate: releaseData?.published_at ? formatDate(releaseData.published_at) : "5 days ago",
          description: repoData.description || "Open-source Python script for automating stream preservation",
          loading: false
        });
      } catch (error) {
        console.error('Error fetching GitHub data:', error);
        setGithubData(prev => ({ ...prev, loading: false }));
      }
    };
    
    fetchGitHubData();
  }, []);

  const navigateToFAQ = () => {
    setCurrentPage('faq');
    window.location.hash = 'FAQ-page';
  };

  const navigateToHome = () => {
    setCurrentPage('home');
    window.location.hash = '';
  };

  const scrollToDetails = (tabId: string) => {
    setActiveTab(tabId);
    const element = document.getElementById('archive-details');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  const neuroVerseStreamers = [
    { name: "Neuro-sama", handle: "Vedal987", episodes: "113", status: "Active", type: "AI VTuber", image: "neuro-square.jpg", playlist: "https://www.youtube.com/playlist?list=PLwS-E6N8LP31cfULqrZEn2n16hve7uiOy", twitchUrl: "https://www.twitch.tv/vedal987" },
    { name: "Cerber", handle: "cerbervt", episodes: "190", status: "Active", type: "Friend", image: "cerber-square.jpg", playlist: "https://www.youtube.com/playlist?list=PLwS-E6N8LP31CA3HBltKCZYcNQl5xSn6J", twitchUrl: "https://www.twitch.tv/cerbervt" },
    { name: "Mini", handle: "minikomew", episodes: "97", status: "Active", type: "Friend", image: "mini-square.jpg", playlist: "https://www.youtube.com/playlist?list=PLwS-E6N8LP33MZqFjCtFzxdfCyTT8979f", twitchUrl: "https://www.twitch.tv/minikomew" },
    { name: "Mega", handle: "megalodonvt", episodes: "33", status: "Active", type: "Friend", image: "mega-square.jpg", playlist: "https://www.youtube.com/playlist?list=PLwS-E6N8LP30r6WkdhOV97Ot3FtCv7FVa", twitchUrl: "https://www.twitch.tv/megalodonvt" },
    { name: "Aquwa", handle: "aquwa", episodes: "10", status: "Active", type: "Friend", image: "aquwa-square.jpg", playlist: "https://www.youtube.com/playlist?list=PLwS-E6N8LP300KVO5vlaHlj-Q4NLKjKMr", twitchUrl: "https://www.twitch.tv/aquwa" },
    { name: "Anny", handle: "not_anny", episodes: "50", status: "Active", type: "Friend", image: "anny-square.jpg", playlist: "https://www.youtube.com/playlist?list=PLwS-E6N8LP31nNpgN42NwGgempVTF8Ayk", twitchUrl: "https://www.twitch.tv/not_anny" },
    { name: "Camila", handle: "camila", episodes: "3", status: "Inactive", type: "Friend", image: "camila-square.jpg", playlist: "https://www.youtube.com/playlist?list=PLwS-E6N8LP30mG6aLpRD51m0-JqKulABY", twitchUrl: "https://www.twitch.tv/camila" },
    { name: "Anny(main)", handle: "anny", episodes: "4", status: "Inactive", type: "Friend", image: "anny-main-square.jpg", playlist: "https://www.youtube.com/playlist?list=PLwS-E6N8LP33GApqj67KErM6gVFpHuM4H", twitchUrl: "https://www.twitch.tv/anny" },
  ];

  const filianData = {
    name: "Filian",
    handle: "filian", 
    episodes: "146",
    subscribers: "592",
    status: "Active",
    type: "VTuber",
    playlist: "https://www.youtube.com/playlist?list=PLGhCz6ouhD-NxSlYTeOdT79aXHiJ-7SAP",
    twitchUrl: "https://www.twitch.tv/filian"
  };

  const archiveProjects = [
    {
      id: "neuroverse",
      title: "NeuroVerse Archive",
      description: "Neuro-sama (AI VTuber) and community",
      subscribers: "607",
      videos: "437",
      creators: "6",
      youtubeUrl: "https://youtube.com/@NeuroVerseUnofficialVODS",
      image: "neuroverse-channel-avatar.jpg",
      primaryColor: "cyan",
      accentColor: "blue"
    },
    {
      id: "filian",
      title: "Filian Archive", 
      description: "Independent VTuber preservation",
      subscribers: "592",
      videos: "146", 
      creators: "1",
      youtubeUrl: "https://youtube.com/@FilianVODSArchive",
      image: "filian-channel-avatar.jpg",
      primaryColor: "purple",
      accentColor: "pink"
    }
  ];

  const features = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Automated Preservation",
      description: "Python script automatically detects and preserves streams for archival"
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: "Multi-streamer Monitoring",
      description: "Simultaneously tracks multiple streamers to ensure nothing is lost"
    },
    {
      icon: <Download className="h-6 w-6" />,
      title: "Community Access",
      description: "Preserves streams in high quality and makes them freely accessible to all"
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Open Source Tool",
      description: "Fully open-source Python automation tool available for anyone to use"
    }
  ];

  if (currentPage === "faq") {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        {/* Navigation */}
        <nav className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Archive className="w-6 h-6 text-cyan-300" />
                <span className="text-xl font-bold text-white">VTuber Archives(Contact Email: neurosamaarchive@gmail.com)</span>
              </div>
              <div className="flex gap-4">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={navigateToHome}
                  className="border-slate-600 hover:bg-slate-700"
                >
                  <ChevronLeft className="w-4 h-4 mr-2" />
                  Back to Home
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href="https://github.com/karstenlee10/Twitch_Stream_To_YouTube" target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    Script
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </nav>

        {/* FAQ Content */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
                  Frequently Asked
                </span>
                <br />
                <span className="text-white/90">Questions</span>
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Common questions about the archiving process, permissions, and technical details
              </p>
            </div>

            <div className="space-y-8">
              {/* Question 1 */}
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-cyan-300 text-xl flex items-start gap-3">
                    <HelpCircle className="w-6 h-6 mt-1 flex-shrink-0" />
                    <span>Why do these annoying "commercial break" screens keep appearing every 15–25 minutes during the archived streams? It really ruins the experience! Just use an adblocker for Twitch!</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="pl-12">
                  <div className="prose prose-invert max-w-none">
                    <p className="text-slate-300 leading-relaxed mb-4">
                      Thank you for your feedback and sorry for the frustration! The reason you're seeing these commercial break screens is due to how I archive the streams. I live-stream the content directly from Twitch to YouTube, and Twitch has a system that inserts these commercial breaks—especially if you're using an adblocker.
                    </p>
                    <p className="text-slate-300 leading-relaxed mb-4">
                      Even with adblockers, Twitch overlays these "commercial break" screens, which unfortunately also get captured in the archive.
                    </p>
                    <p className="text-slate-300 leading-relaxed">
                      The only official way to remove these breaks is to subscribe to <strong className="text-purple-300">Twitch Turbo</strong> or the <strong className="text-purple-300">individual channel</strong>—which removes ads and commercial overlays. Sadly, as an Archiver, I have no way to prevent Twitch from inserting these screens during the live broadcast.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Question 2 */}
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-cyan-300 text-xl flex items-start gap-3">
                    <HelpCircle className="w-6 h-6 mt-1 flex-shrink-0" />
                    <span>I downloaded the VODs after the stream using a VOD downloader, and there were no commercial breaks. Why don't you just upload those instead?</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="pl-12">
                  <div className="prose prose-invert max-w-none">
                    <p className="text-slate-300 leading-relaxed mb-4">
                      Great question! I made and using a live-archiving script so that streams are preserved <strong className="text-green-300">instantly as they happen</strong>, which helps with timely uploads and prevents loss if streams are deleted or muted later.
                    </p>
                    <p className="text-slate-300 leading-relaxed mb-4">
                      Downloading and uploading VODs after the fact is possible, but it can take more time and sometimes VODs get taken down or muted by Twitch before I can save them.
                    </p>
                    <p className="text-slate-300 leading-relaxed">
                      I understand the commercial breaks are frustrating, and I'm always looking for ways to improve the viewing experience. If you have suggestions, feel free to share!
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Question 3 */}
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-cyan-300 text-xl flex items-start gap-3">
                    <HelpCircle className="w-6 h-6 mt-1 flex-shrink-0" />
                    <span>Do you have permission restreaming them?</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="pl-12">
                  <div className="prose prose-invert max-w-none">
                    <p className="text-slate-300 leading-relaxed mb-4">
                      No, But when the original streamer is streaming, on the <strong className="text-cyan-300">NeuroVerse Unofficial VODS</strong> channel I won't publicly stream it - it is done in <strong className="text-yellow-300">unlisted</strong> for the script to work. So the definition of these channels is <strong className="text-cyan-300">VODS/Archive Channels</strong>.
                    </p>
                    <p className="text-slate-300 leading-relaxed">
                      However, the original streamer still can contact me via <strong className="text-purple-300">email or discord</strong> to take it down or do other action.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Question 4 */}
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-cyan-300 text-xl flex items-start gap-3">
                    <HelpCircle className="w-6 h-6 mt-1 flex-shrink-0" />
                    <span>Is this the official source from the streamers?</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="pl-12">
                  <div className="prose prose-invert max-w-none">
                    <p className="text-slate-300 leading-relaxed mb-4">
                      No, This channel is <strong className="text-pink-300">fan made</strong> and you should go to their <strong className="text-green-300">official channel</strong> which is listed in all of the channel's video descriptions.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Question 5 */}
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-cyan-300 text-xl flex items-start gap-3">
                    <HelpCircle className="w-6 h-6 mt-1 flex-shrink-0" />
                    <span>Why is all the archive is on the "live" tab?</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="pl-12">
                  <div className="prose prose-invert max-w-none">
                    <p className="text-slate-300 leading-relaxed mb-4">
                      It is because my script uses <strong className="text-cyan-300">streamlink</strong> and streams it to YouTube so it doesn't take any time processing the video.
                    </p>
                    <p className="text-slate-300 leading-relaxed">
                      Note: Copyright processing is still needed when content gets blocked in all countries.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Question 6 */}
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-cyan-300 text-xl flex items-start gap-3">
                    <HelpCircle className="w-6 h-6 mt-1 flex-shrink-0" />
                    <span>Why don't you just reupload the stream from twitch like other people do?</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="pl-12">
                  <div className="prose prose-invert max-w-none">
                    <p className="text-slate-300 leading-relaxed mb-4">
                      I told some reasons in the previous questions, but other reasons include that I don't need to <strong className="text-yellow-300">upload and download manually</strong> and it is <strong className="text-green-300">faster</strong> than other methods.
                    </p>
                    <p className="text-slate-300 leading-relaxed">
                      Also, I built a project specifically for this purpose, so I don't want to waste it.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Additional Info Card */}
              <Card className="bg-gradient-to-r from-purple-900/20 to-cyan-900/20 border-purple-700/50">
                <CardHeader>
                  <CardTitle className="text-white text-lg flex items-center gap-2">
                    <Info className="w-5 h-5 text-cyan-300" />
                    Additional Information
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-slate-300">
                    <p>
                      <strong className="text-cyan-300">Live Archiving Benefits:</strong> Immediate preservation, no risk of content loss, faster uploads
                    </p>
                    <p>
                      <strong className="text-purple-300">Technical Limitation:</strong> Commercial breaks are inserted by Twitch's infrastructure and cannot be bypassed during live capture
                    </p>
                    <p>
                      <strong className="text-green-300">Future Improvements:</strong> Always exploring new methods to enhance the viewing experience while maintaining preservation quality
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Archive className="w-6 h-6 text-cyan-300" />
              <span className="text-xl font-bold text-white">VTuber Archives</span>
            </div>
            <div className="flex gap-4">
              <Button variant="outline" size="sm" asChild>
                <a href="https://github.com/karstenlee10/Twitch_Stream_To_YouTube" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  Script
                </a>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10" 
          style={{ backgroundImage: `url('cyber-bg-new.jpg')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20" />
        
        <div className="relative container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
                VTuber
              </span>
              <br />
              <span className="text-white/90">Archives</span>
            </h1>
            
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              A archival projects preserving VTuber streams using automated Python tools. 
              Ensuring no stream is ever lost.
            </p>
            
            {/* FAQ Call-to-Action */}
            <div className="mb-12">
              <Button 
                size="lg"
                onClick={navigateToFAQ}
                className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-semibold px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <HelpCircle className="w-5 h-5 mr-3" />
                Archive FAQ - Common Questions
              </Button>
            </div>
          </div>

          {/* Archive Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {archiveProjects.map((project) => (
              <Card key={project.id} className="bg-slate-800/50 border-slate-700 overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <CardTitle className="text-white text-xl">{project.title}</CardTitle>
                    <Badge className="bg-green-600/20 text-green-300 border-green-600/30">
                      Active
                    </Badge>
                  </div>
                  <CardDescription className="text-slate-400">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="aspect-[4/3] relative rounded-lg overflow-hidden max-h-48">
                    <img 
                      src={project.image} 
                      alt={`${project.title} preview`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-cyan-300">{project.subscribers}</div>
                      <div className="text-sm text-slate-400">Subscribers</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-purple-300">{project.videos}</div>
                      <div className="text-sm text-slate-400">Videos</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-300">{project.creators}</div>
                      <div className="text-sm text-slate-400">Creator{project.creators !== '1' ? 's' : ''}</div>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button className="flex-1 bg-red-600 hover:bg-red-700 text-white" asChild>
                      <a href={project.youtubeUrl} target="_blank" rel="noopener noreferrer">
                        <Youtube className="w-4 h-4 mr-2" />
                        Browse Archive
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </a>
                    </Button>
                    <Button 
                      variant="outline" 
                      className="border-slate-600 text-slate-200 hover:bg-slate-700"
                      onClick={() => scrollToDetails(project.id)}
                    >
                      <Info className="w-4 h-4 mr-2" />
                      Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Combined Stats Section */}
      <section className="py-16 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Archive <span className="text-cyan-300">Statistics</span></h2>
            <p className="text-slate-400">Combined metrics across both archival projects</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyan-300 mb-2">1,199</div>
              <div className="text-slate-400">Total Subscribers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-300 mb-2">583</div>
              <div className="text-slate-400">Preserved Videos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-300 mb-2">9</div>
              <div className="text-slate-400">Creators Archived</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-300 mb-2">24/7</div>
              <div className="text-slate-400">Monitoring</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-pink-300 mb-2">2</div>
              <div className="text-slate-400">Archive Projects</div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Archives Section */}
      <section id="archive-details" className="py-20 bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              <span className="text-cyan-300">Archive</span> Details
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Explore the preserved content from each archival project
            </p>
          </div>
          
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 bg-slate-800 border-slate-700">
              <TabsTrigger value="neuroverse" className="data-[state=active]:bg-slate-700">
                NeuroVerse Archive
              </TabsTrigger>
              <TabsTrigger value="filian" className="data-[state=active]:bg-slate-700">
                Filian Archive
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="neuroverse" className="mt-8 animate-tab-fade">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">NeuroVerse Archive</h3>
                <p className="text-slate-400">Neuro-sama (AI VTuber) and Neuro-sama's friends</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {neuroVerseStreamers.map((streamer, index) => (
                  <Card key={index} className="bg-slate-800/50 border-slate-700 hover:border-slate-600 transition-all duration-300 animate-card-stagger">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between mb-2">
                        <CardTitle className="text-white text-lg">{streamer.name}</CardTitle>
                        <Badge 
                          variant={streamer.status === 'Active' ? 'default' : 'secondary'}
                          className={streamer.status === 'Active' 
                            ? 'bg-green-600/20 text-green-300 border-green-600/30' 
                            : 'bg-red-600/20 text-red-300 border-red-600/30'
                          }
                        >
                          {streamer.status}
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <CardDescription className="text-slate-400">
                          <a 
                            href={streamer.twitchUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-purple-300 hover:text-purple-200 transition-colors hover:underline"
                          >
                            @{streamer.handle}
                          </a>
                        </CardDescription>
                        <Badge 
                          variant="outline"
                          className={streamer.type === 'AI VTuber' 
                            ? 'border-cyan-400/30 text-cyan-300 bg-cyan-950/30' 
                            : 'border-purple-400/30 text-purple-300 bg-purple-950/30'
                          }
                        >
                          {streamer.type}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="aspect-[4/3] relative rounded-lg overflow-hidden">
                        <img 
                          src={streamer.image}
                          alt={`${streamer.name} VTuber`}
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-slate-300">
                          <Clock className="w-4 h-4 mr-2" />
                          <span>{streamer.episodes} streams preserved</span>
                        </div>
                        <Button size="sm" variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700" asChild>
                          <a href={streamer.playlist} target="_blank" rel="noopener noreferrer">
                            <PlayCircle className="w-4 h-4 mr-1" />
                            Playlist
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="filian" className="mt-8 animate-tab-fade">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">Filian Archive</h3>
                <p className="text-slate-400">Independent VTuber stream preservation</p>
              </div>
              <div className="max-w-md mx-auto">
                <Card className="bg-slate-800/50 border-slate-700 hover:border-slate-600 transition-colors animate-tab-fade">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between mb-2">
                      <CardTitle className="text-white text-lg">{filianData.name}</CardTitle>
                      <Badge 
                        variant="default"
                        className="bg-green-600/20 text-green-300 border-green-600/30"
                      >
                        {filianData.status}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <CardDescription className="text-slate-400">
                        <a 
                          href={filianData.twitchUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-purple-300 hover:text-purple-200 transition-colors hover:underline"
                        >
                          @{filianData.handle}
                        </a>
                      </CardDescription>
                      <Badge 
                        variant="outline"
                        className="border-pink-400/30 text-pink-300 bg-pink-950/30"
                      >
                        {filianData.type}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="aspect-[4/3] relative rounded-lg overflow-hidden">
                      <img 
                        src="filian-square.jpg" 
                        alt="Filian VTuber"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-slate-300">
                        <Clock className="w-4 h-4 mr-2" />
                        <span>{filianData.episodes} streams preserved</span>
                      </div>
                      <Button size="sm" variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700" asChild>
                        <a href={filianData.playlist} target="_blank" rel="noopener noreferrer">
                          <PlayCircle className="w-4 h-4 mr-1" />
                          Playlist
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              <span className="text-purple-300">Automation</span> Behind the Scenes
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              The technical infrastructure behind this archival projects
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-gradient-to-r from-cyan-500/20 to-purple-500/20">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-white">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-400">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* GitHub Repository Section */}
      <section className="py-20 bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-slate-800/50 border-slate-700 overflow-hidden">
              <CardHeader className="bg-slate-900/50">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-white text-2xl mb-2">
                      <Github className="inline w-6 h-6 mr-2" />
                      Twitch_Stream_To_YouTube
                    </CardTitle>
                    <CardDescription className="text-slate-400">
                      {githubData.description}
                    </CardDescription>
                  </div>
                  <div className="flex items-center gap-4 text-slate-300">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      <span className="text-sm">{githubData.loading ? '...' : githubData.stars}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <GitFork className="w-4 h-4" />
                      <span className="text-sm">{githubData.loading ? '...' : githubData.forks}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      <span className="text-sm">{githubData.loading ? '...' : githubData.watchers}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Python', 'YouTube API', 'Streamlink', 'FFmpeg', 'Selenium', 'Twitch API'].map((tech) => (
                      <Badge key={tech} variant="outline" className="border-slate-600 text-slate-300">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Latest Release</h4>
                  <div className="flex items-center gap-2 text-slate-300">
                    <Badge className="bg-green-600/20 text-green-300 border-green-600/30">
                      {githubData.loading ? 'Loading...' : githubData.latestVersion}
                    </Badge>
                    <span className="text-sm text-slate-400">Released {githubData.loading ? 'Loading...' : githubData.releaseDate}</span>
                  </div>
                </div>
                
                <Button className="w-full bg-slate-700 hover:bg-slate-600 text-white" asChild>
                  <a href="https://github.com/karstenlee10/Twitch_Stream_To_YouTube" target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    View Repository
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-900/50 border-t border-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-white font-semibold mb-4">VTuber Archives(Contact Email: neurosamaarchive@gmail.com)</h3>
            <p className="text-slate-400 mb-6">
              A preservation projects for Neuro-sama (AI VTuber), Neuro-sama's friends, and Filian streams
            </p>
            <div className="flex justify-center gap-6">
              <a 
                href="https://youtube.com/@NeuroVerseUnofficialVODS" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-slate-400 hover:text-red-400 transition-colors"
                title="NeuroVerse Archive"
              >
                <Youtube className="w-6 h-6" />
              </a>
              <a 
                href="https://youtube.com/@FilianVODSArchive" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-slate-400 hover:text-red-400 transition-colors"
                title="Filian Archive"
              >
                <Youtube className="w-6 h-6" />
              </a>
              <a 
                href="https://github.com/karstenlee10/Twitch_Stream_To_YouTube" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-slate-400 hover:text-white transition-colors"
                title="Automation Script"
              >
                <Github className="w-6 h-6" />
              </a>
              <button 
                onClick={navigateToFAQ}
                className="text-slate-400 hover:text-cyan-300 transition-colors"
                title="FAQ - Common Questions About Archives"
              >
                <HelpCircle className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
