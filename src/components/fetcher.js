export const dataDomen = 'cp.3data.ru'

export const fetcherMe = async (url, token) => {
    await fetch(url, {
        method: "POST",
        body: JSON.stringify(token)
    }).then(response => response.json())
        .catch(e => console.error(e))
}

export const authFetch = async (linkToAuth, values) => {
    try {
        const response = await fetch(linkToAuth, {
            method: "POST",
            body: JSON.stringify(values)
        });

        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)

        return response.json()
   } catch (e) {
       console.error(e)
   }
}


