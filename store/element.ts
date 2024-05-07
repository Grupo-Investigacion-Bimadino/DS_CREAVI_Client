import { defineStore } from "pinia";
import { useMiscellaneous } from "~/composable/useMiscellaneous";
const { getElement, getElements, createElement, updateElement, deleteElement } = useMiscellaneous();
const config = useRuntimeConfig();
const API_BASE_URL = config.public.API_BASE_URL;



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
    getElement: (state) => state.currentElement,
    getStateElements: (state) => state.elements,
  },
  actions: {
    async createElement(element:any) {
      let newElement = await createElement(element, API_BASE_URL);
      this.addElement(newElement);
      return newElement;
    },
    async getElements() {
      let elements = await getElements(API_BASE_URL);
      this.elements = elements;
      this.element = elements[0] || {};
      return elements;
    },
    addElement(element : any) {
      this.elements.push(element);
    },
    setCurrentElement(element: any) {
      this.currentElement = element;
    },
    getElementById(id: string) {
      return this.elements.find((element) => element._id === id);
    },
  },
});
