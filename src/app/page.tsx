"use client";

import Homepage from '@/markdown/Homepage.md'
import Markdown from "@/components/Markdown";
import {inter} from "@/app/fonts";
import {useEffect, useState} from "react";
import {fetchLatestVersion} from "@/lib/requests/fetchLatestVersion";

export default function Home() {
    let [latestVersion, setLatestVersion] = useState(`\${latest-version}`)
    useEffect(() => {
        fetchLatestVersion().then(setLatestVersion)
    }, [])
    return (
        <>
            <div className="w-full bg-repeat heropattern-graphpaper-zinc-900/50 bg-5">
                <div className={"flex flex-col p-8 min-w-full align-middle justify-center lg:text-center lg:items-center pt-24 gap-4"}>
                    <h1 className={"font-bold text-5xl max-w-4xl leading-tight md:leading-normal text-bg-clip gradient-teal-lime"}>
                        A Discord Bot Framework.
                    </h1>
                    <p className={"font-light text-xl max-w-3xl text-gray-200 leading-loose"}>
                        Nexus is a Java-Kotlin Discord Bot framework on top of Javacord that is used to build incredibly
                        simpler and performant Discord bots with ease.
                    </p>
                    <div className={"flex flex-row gap-4 py-2 pb-32"}>
                        <a href={"#installation"} className={"bg-white text-black rounded-md py-2 px-4 button-hover"}>Install</a>
                        <a href={"https://github.com/ShindouMihou/Nexus/wiki"} rel={"external"} target={"_blank"} className={"bg-zinc-900 rounded-md py-2 px-6 button-hover"}>Documentations</a>
                    </div>
                </div>
            </div>
            <div className={"p-0.2 border border-stone-800"}/>
            <div className={`${inter.className} p-8`}>
                <Markdown file={Homepage.replaceAll('\${latest-version}', latestVersion)}></Markdown>
            </div>
        </>
    )
}
