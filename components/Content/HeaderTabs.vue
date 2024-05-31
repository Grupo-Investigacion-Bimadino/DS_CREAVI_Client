<template>
    <div class="header-tabs">
      <nav>
        <ul>
          <li v-for="(tab, index) in tabs" :key="index" :class="{ 'active': activeTab === index }">
            <nuxt-link :to="tab.route">{{ tab.label }}</nuxt-link>
          </li>
        </ul>
      </nav>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        activeTab: 0,
        tabs: [
          { label: 'Home', route: '/index' },
          { label: 'About', route: '/about' },
          { label: 'Page 2', route: '/page2' }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .header-tabs {
    background-color: #f0f0f0;
    padding: 10px;
  }
  
  nav ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
  }
  
  nav li {
    margin-right: 10px;
    flex-grow: 1; /* Esta propiedad hará que las pestañas crezcan dinámicamente */
  }
  
  nav a {
    text-decoration: none;
    color: #333;
    padding: 5px 10px;
    border-radius: 5px;
    transition: background-color 0.3s;
  }
  
  nav a:hover {
    background-color: #ccc;
  }
  
  .active a {
    font-weight: bold;
  }
  </style>