<template>
  <section
    id="welcome"
    class="hide-overflow"
  >
    <v-layout>
      <v-flex
        hidden-sm-and-down
        md6
      >
        <v-img
          :src="require('@/assets/quentin1.jpg')"
          height="100vh"
          position="center bottom"
        />
      </v-flex>

      <v-flex
        xs12
        md6
        align-content-space-between
        layout
        :pa-5="$vuetify.breakpoint.smAndDown"
        wrap
      >
        <base-bubble-1
          style="transform: rotate(180deg) translateY(25%)"
        />

        <v-layout
          align-center
          justify-center
        >
          <v-flex
            xs10
            md6
           :mt-5="$vuetify.breakpoint.smAndDown"
           :pt-5="$vuetify.breakpoint.smAndDown"

          >
            <base-heading>Hi I'm Quentin !</base-heading>
            <base-text>
               <br>
              Quentin Marechal, French software engineer for 4 years living in Dublin. <br>
              When I got something in mind I go at it hawfull and hard or I go home.
              I'm a big fan of Bob Ross, Gordon Ramsey, and Paddy Losty.
            </base-text>
            <base-btn class="mt-4">
              Learn More!
            </base-btn>
          </v-flex>
        </v-layout>

        <base-bubble-2
          style="transform: rotate(180deg) translate(-200px, -15%)"
        />
      </v-flex>
    </v-layout>
  </section>
</template>
