import { defineStore } from "pinia";

export const useAppStore = defineStore("app", {
  state: () => {
    return {
      drawer: false,
      //pasar a propertiePanel
      showProperties: false,
      PanelButtons: false,
    };
  },
  persist: true,
  getters: {
    getDrawer: (state) => state.drawer,
    getShowProperties: (state) => state.showProperties,
    getPanelButtons: (state) => state.PanelButtons,
  },
  actions: {
    toggleDrawer() {
      this.drawer = !this.drawer;
    },
    hideDrawer() {
      this.drawer = false;
    },
    toggleShowProperties() {
      this.showProperties = !this.showProperties;
    },
    setStatusProperties(value: boolean){    
      this.showProperties = value;
    },
    setShowProperties() {
      this.showProperties = true;
    },
    hideProperties() {      
      this.showProperties = false;
    },
    openProperties() {      
      this.showProperties = true;
    },
    showPanelButtons() {
      this.PanelButtons = true;
    },
    hidePanelButtons() {
      this.PanelButtons = false;
    },
  },
});
