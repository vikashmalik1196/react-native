import { API_URL } from '@env'

const _apiHost = API_URL
async function request(
    url,
    params,
    method = 'GET',
    isSSLPinningEnabled = true,
) {
    const options = {
        method,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            params,
        ),
    }

    if (params) {
        if (method === 'GET') {
            url += '?' + objectToQueryString(params)
        } else {
            options.body = JSON.stringify(params)
        }
    }
    console.log('_apiHost: ', JSON.stringify(_apiHost + url))
    const response = await fetch(_apiHost + url, options).catch(handleError)

    if (response.status !== 200) {
        return handleError('The server responded with an unexpected status.')
    }
    const result = await response.json()
    console.log("Result@@@", result)
    return result
}


function objectToQueryString(obj) {
    return Object.keys(obj)
        .map(key => key + '=' + obj[key])
        .join('&')
}

function handleError(message) {
    return {
        status: 'error',
        message,
    }
}

function get(url, params, isSSLPinningEnabled) {
    return request(url, params, 'GET', isSSLPinningEnabled)
}

function create(url, params, isSSLPinningEnabled) {
    return request(url, params, 'POST', isSSLPinningEnabled)
}

function update(url, params, isSSLPinningEnabled) {
    return request(url, params, 'PUT', isSSLPinningEnabled)
}

function remove(url, params, isSSLPinningEnabled) {
    return request(url, params, 'DELETE', isSSLPinningEnabled)
}

export default {
    get,
    create,
    update,
    remove,
    handleError,
}
