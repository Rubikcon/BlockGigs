export const baseUrl = "http://localhost:4000"

export const postApi = (URL, data = {}, success = (f) => f, error = (f) => f) => {
    const url = baseUrl + URL
    fetch(url, {
        method: 'POST',
        header: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    }).then((raw) => raw.json())
        .then((response) => {
            if (response.status >= 400) {
                error(response)
            } else success(response)
        })
        .catch((err) => error(err))
}

export const getApi = (URL, success = (f) => f, error = (f) => f, empty = (f) => f) => {
    let url = baseUrl + URL
    fetch(url).then((raw) => raw.json()).then((response) => {
        if (response) {
            success(response)
        } else {
            empty()
        }
    }).catch((err) => {
        error(err)
    })
}

