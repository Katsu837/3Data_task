export const fetcherMe = async (url, token) => {
    await fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(token)
    }).then(response => response.json())
        .catch(e => console.error(e))
}

// export const fetcherAuth = async (url, {login, pwd, token}) => {
//     await fetch(url, {
//         method: "POST",
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({login, pwd, token})
//     }).then(response => response.json())
//         .catch(e => console.error(e))
// }

