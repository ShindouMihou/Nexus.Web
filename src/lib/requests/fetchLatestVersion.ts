export const fetchLatestVersion = async (): Promise<string> => {
    type LatestBuildResponse = {
        version: string
    }
    const response = (await fetch('https://jitpack.io/api/builds/pw.mihou/Nexus/latest'))
    const body: LatestBuildResponse = await response.json()
    return body.version
}