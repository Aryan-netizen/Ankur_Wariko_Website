import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";


const Card = ({data }) => {
    const card=useRef()
    const h1=useRef()
    const button=useRef()
    const p=useRef()
    const img=useRef()
    useGSAP(()=>{
        gsap.set([h1.current,p.current,button.current],{
            opacity:0,
            y:0,
        })
        gsap.to(img.current,{
            scale:2,
            repeat:-1,
            yoyo:true,
            duration:70,
        })
    },[])
    const enter = ()=>{
            const tl = gsap.timeline()
            tl.to(card.current,{
                scale:1.1,
                duration:0.2,
            }).to(h1.current,{
                opacity:1,
                duration:0.1,
                y:-2,
            }).to(p.current,{
                opacity:1,
                duration:0.1,
                y:-2,
            }).to(button.current,{
                opacity:1,
                duration:0.1,
                y:-2,
            })

    }
    const leave = ()=>{
            const tl = gsap.timeline()

            tl.to(card.current,{
                scale:1,
                duration:0.2,
            }).to(h1.current,{
                opacity:0,
                duration:0.1,
                y:-2,
            }).to(p.current,{
                opacity:0,
                duration:0.1,
                y:-2,
            }).to(button.current,{
                opacity:0,
                duration:0.1,
                y:-2,
            })

    }
  return (
      <div ref={card} onMouseEnter={enter} onMouseLeave={leave} className="w-[27vw] h-[65vh] relative overflow-hidden text-black">
        <img
          src={data.img}
          alt=""
          ref={img}
          className=" object-cover absolute z-0 top-0 left-0 w-full h-full"
        />
        <h1 ref={h1} className="text-4xl glass-card font-gilroy-bold absolute z-10 p-2 top-0 left-0">{data.h1}</h1>
        <p ref={p} className="p-2 absolute z-10 line-clamp-3 glass-card text-2xl top-60 left-0">
          {data.p}
        </p>
        <button ref={button} className="px-2 py-1 mt-8 mx-4 absolute text-2xl z-10 top-85 left-0 bg-amber-300 border rounded border-amber-50">Explore more</button>
      </div>
  );
};

export default Card;
