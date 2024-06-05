export const dataDomen = 'cp.3data.ru'

export const fetcherMe = async (url) => {
    // const {push} = useRouter()
    const token = {token: localStorage.getItem('jwtToken')}
    try {
        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(token)
        })

        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)
        const jsonResponse = response.json()
        jsonResponse
            .then((result) => {
                console.log(result.status)
                if(result.status === 'auth') {
                    localStorage.removeItem('jwtToken')
                    //push()
            }})
            .catch((e) => console.error(e))
        console.log(jsonResponse)
        return jsonResponse
    } catch (e) {
        console.error(e)
    }
}

export const fetcherMeEdit = async (url, values ) => {
    const token = localStorage.getItem('jwtToken')
    const data = {...values}
    try {
        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify( {data, token})
        })

        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)

        return response.json()
    } catch (e) {
        console.error(e)
    }
}

export const authFetch = async (linkToAuth, values) => {
    try {
        const response = await fetch(linkToAuth, {
            method: "POST",
            body: JSON.stringify(values)
        });

        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)
        const jsonResponse = response.json()
        jsonResponse
            .then((result) => {localStorage.setItem('jwtToken', result.data.value)})
            .catch((e) => console.error(e))
        return jsonResponse
   } catch (e) {
       console.error(e)
   }
}


