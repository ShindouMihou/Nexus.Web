import {useEffect} from "react";
import {html} from "@/lib/renderer/markdown";
import 'highlight.js/styles/github-dark.min.css'
import hljs from 'highlight.js';
import kotlin from 'highlight.js/lib/languages/kotlin';

hljs.registerLanguage('kotlin', kotlin);

export default function Codeblock({ code }: { code: string }) {
    useEffect(() => hljs.initHighlighting(), [])
    return (
        <div className={"p-8 flex flex-col"}>
            <div className={"bg-black rounded-lg border border-stone-800 my-4 max-w-4xl lg:h-64 overflow-scroll"}>
                <div className={"mkdown"} dangerouslySetInnerHTML={{ __html: html(code) }}>
                </div>
            </div>
        </div>
    )
}