<template>
  <v-card>
    <v-layout>
      <v-app-bar color="green" prominent>
        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title>Control Versions</v-toolbar-title>

        <v-spacer></v-spacer>

        <template v-if="$vuetify.display.mdAndUp">
          <v-btn icon="mdi-magnify" variant="text"></v-btn>

          <v-btn icon="mdi-filter" variant="text"></v-btn>
        </template>
      </v-app-bar>

      <v-navigation-drawer
        v-model="drawer"
        :location="$vuetify.display.mobile ? 'bottom' : undefined"
        temporary
      >
        <v-list v-for="item in items" :key="item.title" :items="[item]">
          <v-list-item @click="showTable(item.value)">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-main style="height: 500px">
        <v-card-text v-if="!selectedModule">
          Select the module to modify
        </v-card-text>
        <v-data-table v-else :headers="headers" :items="tableData" hide-actions>
          <template #item="{ item }">
            <tr :key="item.name">
              <td class="text-xs">{{ item.name }}</td>
              <td class="text-xs">{{ item.version }}</td>
              <td class="text-xs">{{ item.type }}</td>
              <td class="text-xs">
                <pre>{{ JSON.stringify(item.properties, null, 2) }}</pre>
              </td>
            </tr>
          </template>
        </v-data-table>
      </v-main>
    </v-layout>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      selectedModule: null,
      items: [
        { title: 'Versions', value: 'versions' },
        { title: 'Histories', value: 'histories' },
        { title: 'Structure', value: 'structure' },
      ],
      headers: [
        { text: 'Name', value: 'name' },
        { text: 'Version', value: 'version' },
        { text: 'Type', value: 'type' },
        { text: 'Properties', value: 'properties' },
      ],
      tableData: [],
    };
  },

  methods: {
    showTable(module) {
      this.selectedModule = module;
    },

    fetchData(module) {
      if (module === 'structure') {
        return [
          {
            name: "Componente Select",
            version: "1.0.0",
            type: "CSelect",
            properties: {
              label: "Texto del campo",
              multiple: false,
              items: [{ text: "Opción 1", value: "val_1" }],
              hint: "Frase informativa",
              persistent_hint: true,
              comments: [],
              "v-model": "data",
              variant: "outlined",
              data: {},
            },
          },
        ];
      } else {
        return []; // Return empty data for other modules
      }
    },
  },
};
</script>

<style scoped>
.text-xs {
  font-size: 0.75rem; /* Adjust font size as needed */
}
</style>
