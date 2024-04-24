const runtimeConfig = useRuntimeConfig();
const API_BASE_URL = runtimeConfig.public.API_BASE_URL;

async function getElement(id) {
    const response = await fetch(`${API_BASE_URL}/elements/${id}`);
    const data = await response.json();
    return data;
}

async function getElements() {
    const response = await fetch(`${API_BASE_URL}/elements`);
    const data = await response.json();
    return data;
}

async function createElement(element) {
    console.log('JSON', JSON.stringify(element));
    const response = await fetch(`${API_BASE_URL}/elements`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(element),
    });
    const data = await response.json();
    return data;
}

async function updateElement(element) {
    const response = await fetch(`${API_BASE_URL}/elements/${element._id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(element),
    });
    const data = await response.json();
    return data;
}

async function deleteElement(id) {
    const response = await fetch(`${API_BASE_URL}/elements/${id}`, {
        method: 'DELETE',
    });
    const data = await response.json();
    return data;
}
