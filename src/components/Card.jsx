import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const Card = ({data }) => {
    const navigate = useNavigate()
    
    const card=useRef()
    const h1=useRef()
    const button=useRef()
    const p=useRef()
    const img=useRef()
    useGSAP(()=>{

        gsap.to(img.current,{
            scale:1.05,
            repeat:-1,
            yoyo:true,
            duration:70,
        })
    },[])
    const enter = ()=>{
            const tl = gsap.timeline()
            tl.to(card.current,{
                scale:1.05,
                duration:0.2,
            })

    }
    const leave = ()=>{
            const tl = gsap.timeline()

            tl.to(card.current,{
                scale:1,
                duration:0.2,
            })
    }
    const click = ()=>{
        navigate(`/courses/${data.id}`)

    }
  return (
      <div ref={card} onClick={click} onMouseEnter={enter} onMouseLeave={leave} className="w-[25vw] h-[70vh] relative overflow-hidden shadow-white rounded-xl">
        <img
          src={data.img}
          alt=""
          ref={img}
          className=" object-cover opacity-85 w-full h-[55%]"
        />
        <h1 ref={h1} className="text-lg font-gilroy-reg  uppercase mt-4 mx-2 opacity-60">{data.h1}</h1>
        <p ref={p} className="text-md font-gilroy-reg p-2 uppercase mt-2 line-clamp-3 ">{data.p}</p>
        
        <button ref={button} className="px-8 mx-10 mt-8 py-3 w-[80%] text-md bg-amber-400 text-black font-gilroy-bold rounded-full">Explore more</button>
      </div>
  );
};

export default Card;
