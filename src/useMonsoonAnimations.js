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

        gsap.to('.gauge-fill', {
            scaleY:1,
            ease:'none',
            scrollTrigger:{
                trigger:'.app',
                start:'top top',
                end:'bottom bottom',
                scrub:true,
            },
        })

        gsap.to('.hero-title', {
            yPercent:35,
            scale:0.9,
            ease:'none',
            scrollTrigger: {
                trigger:'.hero',
                start:'top top',
                end:'bottom top',
                scrub: true,
            },
        })

        const windowScroll = {
            trigger:'.window-scene',
            start:'top bottom',
            end:'top top',
            scrub:1,
        }

        gsap.to('.window', {
            '--sky-top': '#8a979c',
            '--sky-bottom': '#3e4b53',
            '--cloud': '#6b777d',
            ease:'none',
            scrollTrigger: {...windowScroll, markers: DEBUG},
        })

        gsap.to('.sun', {
            yPercent:140,
            opacity:0.15,
            ease:'none',
            scrollTrigger:{...windowScroll},
        })

        gsap.from('.cloud-1', {
            xPercent:-90,
            ease:'none',
            scrollTrigger:{...windowScroll},
        })

        gsap.from('.cloud-2', {
            xPercent:90,
            ease:'none',
            scrollTrigger:{...windowScroll},
        })
        gsap.from('.cloud-3', {
            yPercent:-200,
            opacity:0,
            ease:'none',
            scrollTrigger: {...windowScroll},
        })

        gsap.to('.rain', {
            opacity:1,
            ease:'none',
            scrollTrigger:{
                trigger:'.window-scene',
                start:'top 25%',
                end :'top top',
                scrub:1,
            },
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