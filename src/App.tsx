import Grainient from './components/Grainient';
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
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Grainient */}
      <div className="absolute inset-0 -z-10">
        <Grainient
          color1="#FF6E00"
          color2="#CC5500"
          color3="#c74408ff"
          timeSpeed={0.25}
          colorBalance={0}
          warpStrength={1}
          warpFrequency={5}
          warpSpeed={2}
          warpAmplitude={50}
          blendAngle={0}
          blendSoftness={0.05}
          rotationAmount={500}
          noiseScale={2}
          grainAmount={0.1}
          grainScale={2}
          grainAnimated={false}
          contrast={1.5}
          gamma={1}
          saturation={1}
          centerX={0}
          centerY={0}
          zoom={0.9}
        />
      </div>


      {/* Header & Hero Content */}
      <div className="relative z-10">
        <Header navigationData={navigationData} />
        <HeroSection avatarList={avatarList} />
      </div>
    </div>
  );
}

export default App;
