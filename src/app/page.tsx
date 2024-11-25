import * as React from 'react';
import {MainScreen} from "@/components/main-screen";
import Banner from "../components/banner/banner";
import {Smart} from "@/components/smart";
import {Hardware} from "@/components/hardware";
import {Tariffing} from "@/components/tariffing";


export default function Home() {
    return <>
        <MainScreen/>
        <Banner />
        <Smart />
        <Hardware />
        <Tariffing />
    </>
}
