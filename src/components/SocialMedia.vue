<template>
  <div>
    <v-btn
      v-for="(item, i) in items.slice(0, large ? items.length : 3)"
      :key="i"
      fab
      class="ma-2"
      :large="large"
      color="info"
      :href="item.href"
      :target="item.external ? '_blank' : ''"
    >
      <v-icon
        dark
        v-text="item.icon"
      />
    </v-btn>
  </div>
</template>

<script>
export default {
  props: {
    large: {
      type: Boolean,
      default: false
    }
  },

  data: () => ({
    items: [

      {
        name: 'Linkedin',
        icon: 'fa-linkedin',
        href: "https://www.linkedin.com/in/quentin-mar%C3%A9chal-a0a860a9/",
        external :true
      },
      {
        name: 'Github',
        icon: 'fa-github',
        href: "https://github.com/KungfuGangstar",
        external :true
      },
      {
        name: 'Email',
        icon: 'mdi-email',
        href: "#get-in-touch"
      },
            {
        name: 'Twitter',
        icon: 'mdi-twitter',
        href: "https://twitter.com/KngF_D",
        external :true
      },
    ]
  })
}
</script>
