import { defineStore } from "pinia";
import { useElementMiscellaneous } from "~/composable/useElementMiscellaneous";
const { getElement, getElements, createElement, updateElement, deleteElement } =
  useElementMiscellaneous();

export const useElementStore = defineStore("element", {
  state: () => {
    return {
      elements: [] as any[],
      currentElement: { type: "default" },
      element: {} as any,
    };
  },
  persist: true,
  getters: {
    getElement: (state) => state.currentElement || {},
    getStateElements: (state) => state.elements,
  },
  actions: {
    async createElement(element: any) {
      const API_BASE_URL = useRuntimeConfig().public.API_BASE_URL;
      let newElement = await createElement(element, API_BASE_URL);
      this.addElement(newElement);
      return newElement;
    },
    async getElements() {
      const API_BASE_URL = useRuntimeConfig().public.API_BASE_URL;
      let elements = await getElements(API_BASE_URL);
      this.elements = elements;
      this.element = elements[0] || {};
      return elements;
    },
    addElement(element: any) {
      this.elements.push(element);
    },
    setCurrentElement(element: any) {
      this.currentElement = element;
    },
    setDefaultElementById(id: string) {
      console.log("setDefaultElementById", id);
      let element = this.elements.find((element) => element._id === id);
      this.currentElement = element;
    },
  },
});
