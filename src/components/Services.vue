<template>
  <section
    id="services"
    class="hide-overflow"
  >
    <v-layout accent>
      <v-flex
        hidden-sm-and-down
        md6
      >
        <v-img
          :src="require('@/assets/computer.jpg')"
          height="100%"
        />
      </v-flex>
      <v-flex
        xs12
        md6
        text-xs-center
        pa-5
      >
        <v-layout
          align-center
          justify-center
          fill-height
          wrap
        >
          <v-flex xs12>
            <base-bubble-2
              style="transform: translateX(55%)"
            />
            <base-heading class="info--text">
              What can I do for you ?
            </base-heading>

            <base-text class="mb-5">
              Currently not much but feel free to reach me if you have any business enquiries<br>

            </base-text>
          </v-flex>
          <v-flex
            v-for="(service, i) in services"
            :key="i"
            md6
            text-xs-center
            mb-3
          >

              <v-img
                light
                width="75px"
                :src="require('@/assets/' + service.img)"
              />
           
            <base-text>
              <div
                class="mb-2"
                v-text="service.name"
              />
              <div v-html="service.blurb" />
            </base-text>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </section>
</template>

<script>
export default {
  data: () => ({
    services: [
      {
        name: 'PWA',
        img: 'pwa.png',
        blurb: 'Rliable, Fast, Engaging Progressive Web Apps'
      },
      {
        name: 'VUE JS',
        img: 'vue.png',
        blurb: 'The Progressive JavaScript Framework'
      },
      {
        name: 'NODE JS',
        img: 'node1.png',
        blurb: 'Fast deployable backend services'
      },
      {
        name: 'PYTHON',
        img: 'python.png',
        blurb: 'AI and Smart Analitics'
      }
    ]
  })
}
</script>
