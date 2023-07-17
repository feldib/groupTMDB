export async function fetching2(url, stateFunction) {
    try {
        let response = await fetch(url)
        let decode = await response.json()
        await new Promise(resolve => setTimeout(resolve, 1000))
        stateFunction(decode)
    } catch (err) {
        console.log('error is ' + err)
    }
}