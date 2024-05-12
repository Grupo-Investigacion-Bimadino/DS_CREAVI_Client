import { defineStore } from "pinia";
export const usePropertiePanelStore = defineStore("propertiePanel", {
  state: () => {
    return {
      elementTemp: {},
    };
  },
  persist: true,
  getters: {
    getElementTemp: (state) => state.elementTemp,
  },
  actions: {
    setElementTemp(element: any) {
      this.elementTemp = element;
    },
  },
});
