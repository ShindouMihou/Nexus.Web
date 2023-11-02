import {html} from "@/lib/renderer/markdown";
import 'highlight.js/styles/github-dark.min.css'

export default function Markdown({ file }: { file: string }) {
    return (
        <div className={"mkdown"} dangerouslySetInnerHTML={{ __html: html(file) }}>
        </div>
    )
}