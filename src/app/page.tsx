import * as React from 'react';
import {MainScreen} from "@/components/main-screen";
import Banner from "../components/banner/banner";
import {Smart} from "@/components/smart";
import {Hardware} from "@/components/hardware";
import {Tariffing} from "@/components/tariffing";
import {Prices} from "@/components/prices";
import {Reliability} from "@/components/reliability";
import {RamImage} from "@/components/ram-image";
import {Deploy} from "@/components/deploy";
import {FreeYear} from "@/components/free-year";
import { Faq } from "../components/faq";
import AnimatedLine from "@/components/banner/animated-line";


export default function Home() {
    return <>
        <MainScreen/>
        <AnimatedLine />
        <Banner />
        <Smart />
        <Hardware />
        {/*<Tariffing />*/}
        {/*<Prices />*/}
        {/*<Reliability/>*/}
        {/*<RamImage />*/}
        {/*<Faq />*/}
        {/*<Deploy/>*/}
        {/*<FreeYear/>*/}
    </>
}
