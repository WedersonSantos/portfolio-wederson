import Image from "next/image";
import { projectVisuals } from "@/data/project-visuals";
import { Icon } from "@/components/ui/Icon";

export function ProjectVisual({ slug, compact = false }: { slug: string; compact?: boolean }) {
  const visual = projectVisuals[slug];
  if (!visual) return null;
  const { crop } = visual;
  return (
    <figure className={`project-visual${compact ? " project-visual-compact" : ""}`}>
      <div className="project-image-window" style={{ aspectRatio: crop ? `${crop.width} / ${crop.height}` : `${visual.width} / ${visual.height}` }}>
        <Image
          src={visual.src}
          alt={visual.alt}
          width={visual.width}
          height={visual.height}
          sizes={compact ? "(max-width: 800px) calc(100vw - 40px), (max-width: 1100px) 220px, 280px" : "(max-width: 800px) calc(100vw - 40px), (max-width: 1100px) calc(100vw - 64px), 1240px"}
          className={crop ? "project-capture is-cropped" : "project-capture"}
          style={crop ? {
            width: `${visual.width / crop.width * 100}%`,
            left: `${-crop.left / crop.width * 100}%`,
            top: `${-crop.top / crop.height * 100}%`,
          } : undefined}
        />
      </div>
      <figcaption>
        <span className="visual-label">{visual.label}</span>
        {!compact && <><p>{visual.caption}</p><a className="visual-open" href={visual.src} target="_blank" rel="noopener noreferrer">Abrir imagem <Icon name="arrow" /><span className="sr-only">(abre em nova aba)</span></a></>}
      </figcaption>
    </figure>
  );
}
