import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import {useGSAP} from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP)

const DEBUG = true

export function useMonsoonAnimations(scope){
    useGSAP(() => {
        gsap.from('.hero > *', {
            y:40,
            opacity:0,
            duration:1.2,
            ease:'power3.out',
            stagger:0.15,
        })

        gsap.utils.toArray('.section-head').forEach((head) => {
            gsap.from(head.children, {
                y:50,
                duration:1,
                opacity:0,
                ease:'power3.out',
                stagger:0.12,
                scrollTrigger:{
                    trigger:head,
                    start:'top 80%',
                    end:'bottom 60%',
                    markers: DEBUG,
                },
            })
        })

        gsap.utils.toArray('.moment').forEach((moment) => {
            gsap.from(moment, {
                y:40,
                opacity:0,
                duration:0.8,
                ease:'power2.out',
                scrollTrigger:{
                    trigger:moment,
                    start:'top 70%',
                    end:'bottom 30%',
                    toggleActions:'play reverse play reverse',
                    markers:DEBUG,
                },
            })
        })

        gsap.set('.sign', {y:60, opacity:0})

        ScrollTrigger.batch('.sign', {
            start:'top 85%',
            onEnter: (batch) =>
                gsap.to(batch, {
                    y:0,
                    opacity:1,
                    duration:0.9,
                    ease:'power3.out',
                    stagger:0.12,
                    overwrite:true,
                }),
                onLeaveBack: (batch) => 
                    gsap.to(batch, {
                        y:60,
                        opacity:0,
                        duration:0.6,
                        ease:'power2.in',
                        stagger:0.08,
                        overwrite:true,
                    }),
        })

        gsap.from ('.outro > *', {
            y:40,
            opacity:0,
            duration:1.2,
            ease:'power3.out',
            stagger:0.2,
            scrollTrigger: {
                trigger:'.outro',
                start:'top 60%',
            },
        })
    },{scope})
}