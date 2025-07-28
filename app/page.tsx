import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Download,
  Github,
  MessageCircle,
  Radio,
  Code2,
  Zap,
  Palette,
  GitBranch,
  Play,
  FileText,
  Star,
  Users,
  Terminal,
  Settings,
  ChevronRight,
  Sparkles,
  Shield,
  Rocket,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { ScreenshotSlider } from "@/components/screenshot-slider"
import { MobileNavButton } from "@/components/mobile-drawer"

export default function HomePage() {
  const features = [
    {
      icon: <Code2 className="h-8 w-8" />,
      title: "Multiple Languages",
      description: "Support for 15+ programming languages including Java, Kotlin, Python, JavaScript, and more",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Lightning Fast",
      description: "Optimized for Android with smooth scrolling, instant response, and minimal resource usage",
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      icon: <Play className="h-8 w-8" />,
      title: "Run & Compile",
      description: "Execute Python & PHP scripts, compile Java, Kotlin, TypeScript and more directly on device",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: <GitBranch className="h-8 w-8" />,
      title: "Git Integration",
      description: "Full Git support with version control, branching, and seamless collaboration features",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Custom Themes",
      description: "Beautiful material design with unlimited customization and community themes",
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Smart Auto-save",
      description: "Intelligent auto-save with conflict resolution and backup management",
      gradient: "from-red-500 to-pink-500",
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Advanced File System",
      description: "Powerful file management with HTML, SVG, PNG support and system integration",
      gradient: "from-teal-500 to-blue-500",
    },
    {
      icon: <Terminal className="h-8 w-8" />,
      title: "Built-in Compilers",
      description: "Sass/SCSS, Less, TypeScript, JSX compilers with real-time error detection",
      gradient: "from-orange-500 to-red-500",
    },
  ]

  const languages = [
    { name: "HTML", color: "bg-orange-500" },
    { name: "CSS", color: "bg-blue-500" },
    { name: "JavaScript", color: "bg-yellow-500" },
    { name: "TypeScript", color: "bg-blue-600" },
    { name: "Python", color: "bg-green-500" },
    { name: "PHP", color: "bg-purple-500" },
    { name: "Java", color: "bg-red-500" },
    { name: "Kotlin", color: "bg-orange-600" },
    { name: "Swift", color: "bg-orange-400" },
    { name: "C++", color: "bg-blue-700" },
    { name: "C#", color: "bg-purple-600" },
    { name: "Ruby", color: "bg-red-600" },
    { name: "Shell", color: "bg-gray-600" },
    { name: "Markdown", color: "bg-gray-500" },
    { name: "Go", color: "bg-cyan-500" },
    { name: "Sass/SCSS", color: "bg-pink-500" },
    { name: "Zig", color: "bg-yellow-600" },
  ]

  const screenshots = [
    { src: "/images/screenshot1.jpg", alt: "Ghost IDE Code Editor", title: "Smart Code Editor" },
    { src: "/images/screenshot2.jpg", alt: "File Explorer", title: "File Management" },
    { src: "/images/screenshot3.jpg", alt: "Terminal Integration", title: "Integrated Terminal" },
    { src: "/images/screenshot4.jpg", alt: "Theme Customization", title: "Custom Themes" },
  ]

  const stats = [
    { number: "15+", label: "Languages Supported" },
    { number: "10+", label: "Built-in Compilers" },
    { number: "100%", label: "Free & Open Source" },
    { number: "24/7", label: "Community Support" },
  ]

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
      {/* Animated Background - Lower z-index */}
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(120,119,198,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.1),transparent_50%)]"></div>
      </div>

      {/* Main Content - Lower z-index than mobile nav */}
      <div className="relative z-10">
        {/* Header */}
        <header className="relative border-b border-white/10 bg-black/80 backdrop-blur-xl sticky top-0 z-40">
          <div className="container mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Image
                  src="/images/logo.png"
                  alt="Ghost IDE Logo"
                  width={48}
                  height={48}
                  className="rounded-xl shadow-2xl"
                />
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl blur opacity-30"></div>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Ghost IDE
                </h1>
                <p className="text-sm text-gray-400">Fast Editor for Android</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <Link
                href="#features"
                className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-105"
              >
                Features
              </Link>
              <Link
                href="#screenshots"
                className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-105"
              >
                Screenshots
              </Link>
              <Link
                href="#community"
                className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-105"
              >
                Community
              </Link>
              <Button
                asChild
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 border-0 shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
              >
                <Link href="https://github.com/HanzoDev1375/Ghostide/releases/latest">
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </Link>
              </Button>
            </nav>
            <MobileNavButton />
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative py-32 px-6">
          <div className="container mx-auto text-center">
            <div className="mb-12 relative">
              <div className="relative inline-block">
                <Image
                  src="/images/logo.png"
                  alt="Ghost IDE Logo"
                  width={160}
                  height={160}
                  className="mx-auto rounded-3xl shadow-2xl"
                />
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-3xl blur-xl opacity-30 animate-pulse"></div>
              </div>
            </div>

            <div className="mb-8">
              <Badge className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-white mb-6 px-4 py-2">
                <Sparkles className="h-4 w-4 mr-2" />
                Open Source Android IDE
              </Badge>
            </div>

            <h1 className="text-6xl md:text-8xl font-black mb-8 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent leading-tight">
              Ghost IDE
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 mb-6 font-light">Fast, Powerful Code Editor for Android</p>
            <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
              The ultimate mobile development environment with support for 15+ programming languages, built-in
              compilers, and Git integration. Code anywhere, anytime with professional-grade tools.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-sm uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-xl px-12 py-4 rounded-2xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 border-0 group"
              >
                <Link href="https://github.com/HanzoDev1375/Ghostide/releases/latest">
                  <Download className="h-6 w-6 mr-3 group-hover:animate-bounce" />
                  Download Latest
                  <ChevronRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 hover:text-white text-xl px-12 py-4 rounded-2xl bg-transparent backdrop-blur-sm transition-all duration-300"
              >
                <Link href="https://github.com/HanzoDev1375/Ghostide">
                  <Github className="h-6 w-6 mr-3" />
                  View Source
                </Link>
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-lg">
              <div className="flex items-center text-white/80">
                <Star className="h-5 w-5 mr-2 text-yellow-400" />
                Open Source
              </div>
              <div className="flex items-center text-white/80">
                <Shield className="h-5 w-5 mr-2 text-green-400" />
                Secure & Private
              </div>
              <div className="flex items-center text-white/80">
                <Rocket className="h-5 w-5 mr-2 text-blue-400" />
                Lightning Fast
              </div>
            </div>
          </div>
        </section>

        {/* Screenshots Section */}
        <section id="screenshots" className="relative py-32 px-6">
          <div className="container mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                See Ghost IDE in Action
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Experience the power and elegance of professional mobile development
              </p>
            </div>

            <ScreenshotSlider screenshots={screenshots} />
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="relative py-32 px-6">
          <div className="container mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Powerful Features
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Everything you need for professional mobile development in one powerful IDE
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="group bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl backdrop-blur-sm relative overflow-hidden"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  ></div>
                  <CardContent className="p-8 relative z-10">
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.gradient} mb-6 shadow-lg`}>
                      <div className="text-white">{feature.icon}</div>
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-white">{feature.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Supported Languages */}
        <section className="relative py-32 px-6">
          <div className="container mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Supported Languages
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Code in your favorite programming languages with full syntax highlighting and IntelliSense
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {languages.map((language, index) => (
                <Badge
                  key={index}
                  className="bg-white/10 border border-white/20 text-white hover:bg-white/20 px-6 py-3 text-base font-medium rounded-xl backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg relative group overflow-hidden"
                >
                  <div
                    className={`absolute inset-0 ${language.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                  ></div>
                  <span className="relative z-10">{language.name}</span>
                </Badge>
              ))}
            </div>
          </div>
        </section>

        {/* Community Section */}
        <section id="community" className="relative py-32 px-6">
          <div className="container mx-auto text-center">
            <div className="mb-20">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Join the Community
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Connect with thousands of developers, get help, and stay updated with the latest features
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="group bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl backdrop-blur-sm relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-10 relative z-10">
                  <div className="inline-flex p-6 rounded-3xl bg-gradient-to-br from-blue-500 to-cyan-500 mb-8 shadow-2xl">
                    <MessageCircle className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Telegram Group</h3>
                  <p className="text-gray-400 mb-8 text-lg">
                    Join our active community for discussions, support, and collaboration
                  </p>
                  <Button
                    asChild
                    className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-lg px-8 py-3 rounded-xl border-0 shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                  >
                    <Link href="https://t.me/ghost_web_ide">
                      <Users className="h-5 w-5 mr-2" />
                      Join Group
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="group bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl backdrop-blur-sm relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-10 relative z-10">
                  <div className="inline-flex p-6 rounded-3xl bg-gradient-to-br from-green-500 to-emerald-500 mb-8 shadow-2xl">
                    <Radio className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Telegram Channel</h3>
                  <p className="text-gray-400 mb-8 text-lg">
                    Get the latest updates, announcements, and feature releases
                  </p>
                  <Button
                    asChild
                    className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-lg px-8 py-3 rounded-xl border-0 shadow-lg hover:shadow-green-500/25 transition-all duration-300"
                  >
                    <Link href="https://t.me/Ghostwebide">
                      <Radio className="h-5 w-5 mr-2" />
                      Follow Channel
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Custom Themes Section */}
        <section className="relative py-32 px-6">
          <div className="container mx-auto text-center">
            <div className="mb-16">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Custom Themes
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Personalize your coding experience with unlimited customization and beautiful community themes
              </p>
            </div>

            <Button
              asChild
              className="bg-white/10 border-2 border-purple-500/50 text-white hover:bg-purple-500/20 hover:border-purple-400 px-10 py-4 text-lg rounded-xl backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
            >
              <Link href="https://github.com/HanzoDev1375/ghosttheme">
                <Palette className="h-5 w-5 mr-3" />
                Learn Theme Creation
                <ChevronRight className="h-5 w-5 ml-2" />
              </Link>
            </Button>
          </div>
        </section>

        {/* Download Section */}
        <section className="relative py-32 px-6">
          <div className="container mx-auto text-center">
            <div className="mb-16">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Ready to Start Coding?
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Download Ghost IDE now and experience the future of mobile development
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-xl px-12 py-4 rounded-2xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 border-0 group"
              >
                <Link href="https://github.com/HanzoDev1375/Ghostide/releases/latest">
                  <Download className="h-6 w-6 mr-3 group-hover:animate-bounce" />
                  Download Latest Release
                  <ChevronRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 hover:text-white text-xl px-12 py-4 rounded-2xl bg-transparent backdrop-blur-sm transition-all duration-300"
              >
                <Link href="https://github.com/HanzoDev1375/Ghostide">
                  <Github className="h-6 w-6 mr-3" />
                  Source Code
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative border-t border-white/10 bg-black/80 backdrop-blur-xl py-16 px-6">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center mb-12">
              <div className="flex items-center space-x-4 mb-8 md:mb-0">
                <div className="relative">
                  <Image
                    src="/images/logo.png"
                    alt="Ghost IDE Logo"
                    width={48}
                    height={48}
                    className="rounded-xl shadow-2xl"
                  />
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl blur opacity-30"></div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Ghost IDE</h3>
                  <p className="text-gray-400">Open Source Android IDE</p>
                </div>
              </div>

              <div className="flex items-center space-x-8">
                <Link
                  href="https://github.com/HanzoDev1375/Ghostide"
                  className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
                >
                  <Github className="h-6 w-6" />
                </Link>
                <Link
                  href="https://t.me/ghost_web_ide"
                  className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
                >
                  <MessageCircle className="h-6 w-6" />
                </Link>
                <Link
                  href="https://t.me/Ghostwebide"
                  className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
                >
                  <Radio className="h-6 w-6" />
                </Link>
              </div>
            </div>

            <div className="pt-8 border-t border-white/10 text-center">
              <p className="text-gray-400 text-lg">&copy; 2025 Ghost IDE. Open source project under MIT License.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
