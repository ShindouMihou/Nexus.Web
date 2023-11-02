export default function Header() {
    return (
        <div className={`sticky top-0`}>
            <div className={"flex flex-row justify-between items-center bg-black bg-opacity-40 backdrop-blur mx-8 py-4"}>
                <a href={"/"} className={"text-2xl font-bold uppercase button-hover"}>Nexus.</a>
            </div>
        </div>
    )
}