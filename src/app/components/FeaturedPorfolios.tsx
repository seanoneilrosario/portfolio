'use client'

import manilife from "../../../public/images/manilife.png";
import megaphone from "../../../public/images/megaphone.png";
import profin from "../../../public/images/profin.png";
import onyx from "../../../public/images/onyx.png";
import branco from "../../../public/images/branco.png";
import lehlo from "../../../public/images/lehlo.png";
import bedtime_beauty from "../../../public/images/bedtime_beauty.png";
import rawbuzz from "../../../public/images/rawbuzz.png";
import vapelabs from "../../../public/images/vapelabs.png";
import quick_rx from "../../../public/images/quick_rx.png";
import tabuu from "../../../public/images/tabuu.png";
import vscript from "../../../public/images/vscript.png";
import svs from "../../../public/images/svs.png";
import quithero from "../../../public/images/quithero.png";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue
} from "framer-motion";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance - 550]);
}

function Image({ id, link, index }: any) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 400);
  const img_count = index+1;
  const text_link = link.replace("https://", "");
  const text_link2 = text_link.replace("/", "");
  const final_text_link = text_link2.replace("-nicolaslavrov-nicolas-lavrov-studio", "");
  return (
    <div className="parallax_img_wrap">
      <a target="_blank" href={link} ref={ref}>
        <span className="absolute top-[-33px] right-[20px]">{final_text_link}</span>
        <img src={id.src} alt={id.alt} />
      </a>
      <motion.h2 style={{ y }}>{`#0${img_count}`}</motion.h2>
    </div>
  );
}

export default function FeaturedPorfolios() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

   const image_with_links = [
        {
            'image': manilife,
            'link': 'https://mani-life.com/'
        }, 
        {
            'image': megaphone,
            'link': 'https://megaphone.com.au/'
        }, 
        {
            'image': profin,
            'link': 'https://profin.vercel.app/'
        },
        {
            'image': onyx,
            'link': 'https://onyxlondon.com/'
        },
        {
            'image': branco,
            'link': 'https://brancocapital.co.uk/'
        },
        {
            'image': lehlo,
            'link': 'https://lehlointeriors.com/'
        },
        {
            'image': bedtime_beauty,
            'link': 'https://bedtime-beauty.com/'
        },
        {
            'image': rawbuzz,
            'link': 'https://eatrawbuzz.com/'
        },
        {
            'image': vapelabs,
            'link': 'https://vapelabs.com.au/'
        },
        {
            'image': quick_rx,
            'link': 'https://quickrx.com.au/'
        },
        {
            'image': tabuu,
            'link': 'https://tabuu.com.au/'
        },
        {
            'image': vscript,
            'link': 'https://www.v-scripts.com.au/'
        },
        {
            'image': svs,
            'link': 'https://svsmedical.com.au/'
        },
        {
            'image': quithero,
            'link': 'https://www.quithero.com.au/'
        }
    ];

    return (
        <div className="mt-[100px] md:mt-[150px]">
            {image_with_links.map((image, index) => (
                <Image key={index} id={image.image} index={index} link={image.link} />
            ))}
            <motion.div className="progress" style={{ scaleX }} />
        </div>
    );
}
