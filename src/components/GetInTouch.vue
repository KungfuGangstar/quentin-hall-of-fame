<template>
  <section
    id="get-in-touch"
    class="hide-overflow"
  >
    <v-layout
      info
      white--text
    >

      <v-flex
        xs12
        md6
        pa-5
      >
        <base-bubble-1 />
        <base-heading class="mb-5">
          Get In Touch
        </base-heading>

        <v-sheet
          max-width="600"
          color="transparent"
        >
          <v-text-field
            v-model="name"
            color="info"
            label="Name"
            solo
            flat
          />
          <v-text-field
            v-model="subject"
            color="info"
            label="Subject"
            solo
            flat
          />
          <v-textarea
          v-model="message"
            color="info"
            label="Message"
            solo
            flat
          />
        <v-btn large :href="mailto">Send</v-btn>
        </v-sheet>
      </v-flex>
            <v-flex
        hidden-sm-and-down
        md6
      >
        <v-img
          :src="require('@/assets/contact.png')"
          height="100%"
        />
      </v-flex>
    </v-layout>
  </section>
</template>

<script>
  export default {
    data: () => ({
      name: "",
      subject: "",
      message: ""
    }),
    computed:{
      mailto(){
        return  "mailto:" + "qmarechal@hotmail.fr?body="+this.message+"&subject="+this.name+ " " + this.subject
      }
    }
  }
</script>
