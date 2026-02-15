import { useEffect,useState } from "react";
import { GridScan } from "@/components/ui/Loader.tsx";
import k26_logo from"@/assets/K'26_Logo.png";

type GridScanLoaderProps = {
  onFinish?: () => void;
};

export default function GridScanLoader({ onFinish }: GridScanLoaderProps) {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHidden(true);
      onFinish?.();
    }, 4000);

    return () => clearTimeout(timer);
  }, [onFinish]);

  if (hidden) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black">
      <div className="absolute inset-0">
        <GridScan
          sensitivity={0.55}
          lineThickness={1}
          linesColor="#392e4e"
          gridScale={0.1}
          scanColor="#FF9FFC"
          scanOpacity={0.4}
          enablePost
          bloomIntensity={0.6}
          chromaticAberration={0.002}
          noiseIntensity={0.01}
          scanDuration={1.5}
        />
      </div>

      <img
        src={k26_logo}
        alt="Loader Logo"
        className="relative z-10 w-[60vw] max-w-[700px] object-contain"
      />
    </div>
  );
}
