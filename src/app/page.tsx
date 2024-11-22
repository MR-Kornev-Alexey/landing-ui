import * as React from 'react';
import {MainScreen} from "@/components/main-screen";
import Banner from "../components/banner/banner";
import {Smart} from "@/components/smart";


export default function Home() {
    return <>
        <MainScreen/>
        <Banner />
        <Smart />
    </>
}
