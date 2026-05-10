import { GradientBackground } from './components/ui/paper-design-shader-background';
import HeroSection from './components/shadcn-space/blocks/hero-01/hero';
import Header from './components/shadcn-space/blocks/hero-01/header';

const avatarList = [
  { image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=256&h=256&auto=format&fit=crop" },
  { image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=256&h=256&auto=format&fit=crop" },
  { image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=256&h=256&auto=format&fit=crop" },
  { image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=256&h=256&auto=format&fit=crop" },
];

const navigationData = [
  { title: "Home", href: "#", isActive: true },
  { title: "Services", href: "#" },
  { title: "Portfolio", href: "#" },
  { title: "About", href: "#" },
  { title: "Contact", href: "#" },
];

export function App() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden dark bg-black">
      {/* Background Gradient */}
      <GradientBackground />


      {/* Header & Hero Content */}
      <div className="relative z-10">
        <Header navigationData={navigationData} />
        <HeroSection avatarList={avatarList} />
      </div>
    </div>
  );
}

export default App;
