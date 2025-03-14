export const useElementMiscellaneous = () => {
  interface Element {
    _id: string;
    name: string;
    version: string;
    type: string;
    properties: {};
    data: {};
    components: [];
    createdBy: string;
    trunk: string;
    versions: [];
  }

  const getElement = async (id: string, API_BASE_URL: string) => {
    // ! desestructure fetch { data, refresh, pending } = await useFetch('/api/hello')
    const response = await fetch(`${API_BASE_URL}/elements/${id}`);
    const data = await response.json();
    return data;
  };

  const getElements = async (API_BASE_URL: string) => {
    const response = await fetch(`${API_BASE_URL}/elements`);
    const data = await response.json();
    return data;
  };

  const createElement = async (element: Element, API_BASE_URL: string) => {
    const response = await fetch(`${API_BASE_URL}/elements`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(element),
    });
    const data = await response.json();
    return data;
  };

  const updateElement = async (element: Element, API_BASE_URL: string) => {
    const response = await fetch(`${API_BASE_URL}/elements/${element._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(element),
    });
    const data = await response.json();
    return data;
  };

  const deleteElement = async (id: string, API_BASE_URL: string) => {
    const response = await fetch(`${API_BASE_URL}/elements/${id}`, {
      method: "DELETE",
    });
    const data = await response.json();
    return data;
  };

  const getElementByName = async (name: string, API_BASE_URL: string) => {
    const response = await fetch(`${API_BASE_URL}/elements/name/${name}`);
    const data = await response.json();
    return data;
  };

  return {
    getElement,
    getElements,
    createElement,
    updateElement,
    deleteElement,
    getElementByName,
  };
};
