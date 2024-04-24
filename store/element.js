import { defineStore } from "pinia";
import { useMiscellaneous } from "~/composable/useMiscellaneous";
const { getElement, getElements, createElement, updateElement, deleteElement } = useMiscellaneous();

export const useElementStore = defineStore("element", {
  state: () => {
    return {
      elements: [],
      currentElement: { type: "default" },
    };
  },
  persist: true,
  getters: {
    getElement: (state) => state.currentElement,
    getStateElements: (state) => state.elements,
  },
  actions: {
    async createElement(element) {
      let newElement = await createElement(element);
      this.addElement(newElement);
      return newElement;
    },
    async getElements() {
      let elements = await getElements();
      this.elements = elements;
      this.element = elements[0] || {};
      return elements;
    },
    addElement(element) {
      this.elements.push(element);
    },
    setCurrentElement(element) {
      this.currentElement = element;
    },
    getElementById(id) {
      return this.elements.find((element) => element._id === id);
    },
  },
});
