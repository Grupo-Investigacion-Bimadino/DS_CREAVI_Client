export const useMiscellaneous = () => {

    interface Element {
        _id: string,
        name: string,
        version: string,
        type: string,
        properties: {},
        data: {},
        components: [],
        createdBy: string,
        trunk: string,
        versions: []
    }

    const config = useRuntimeConfig();
    const API_BASE_URL = config.public.API_BASE_URL;

    const getElement = async (id: string) => {
        // ! desestructure fetch { data, refresh, pending } = await useFetch('/api/hello')        
        const response = await fetch(`${API_BASE_URL}/elements/${id}`);
        const data = await response.json();
        return data;
    }

    const getElements = async () => {
        const response = await fetch(`${API_BASE_URL}/elements`);
        const data = await response.json();
        return data;
    }

    const createElement = async (element: Element) => {
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

    const updateElement = async (element: Element) => {
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

    const deleteElement = async (id: string) => {
        const response = await fetch(`${API_BASE_URL}/elements/${id}`, {
            method: 'DELETE',
        });
        const data = await response.json();
        return data;
    }

    return { getElement, getElements, createElement, updateElement, deleteElement };
}