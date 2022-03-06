<template>
  <div>
    [LIST OF HOME HERE]
    <h2 class="text-xl bold">Add a Home</h2>
    <form @submit.prevent="onSubmit" class="form">
      Images: <br />
      <input type="text" v-model="home.images[0]" class="w-3/4" /> <br />
      <input type="text" v-model="home.images[1]" class="w-3/4" /> <br />
      <input type="text" v-model="home.images[2]" class="w-3/4" /> <br />
      <input type="text" v-model="home.images[3]" class="w-3/4" /> <br />
      <input type="text" v-model="home.images[4]" class="w-3/4" /> <br />
      Title: <br />
      <input type="text" v-model="home.title" class="w-60" /> <br />
      Description: <br />
      <textarea v-model="home.description" class="w-104"></textarea><br />
      Note: <br />
      <textarea v-model="home.note" class="w-104"></textarea><br />
      Features: <br />
      <input type="text" v-model="home.features[0]" /><br />
      <input type="text" v-model="home.features[1]" /><br />
      <input type="text" v-model="home.features[2]" /><br />
      <input type="text" v-model="home.features[3]" /><br />
      <input type="text" v-model="home.features[4]" /><br />
      Price Per Night <br />
      <input type="number" v-model="home.pricePerNight" class="w-14" /><br />
      Guests / Rooms / Beds / Baths <br />
      <input type="number" v-model="home.guests" class="w-14" />
      <input type="number" v-model="home.bedrooms" class="w-14" />
      <input type="number" v-model="home.Beds" class="w-14" />
      <input type="number" v-model="home.bethrooms" class="w-14" /><br />
      <input
        type=""
        ref="locationSelector"
        autocomplete="off"
        placeholder="Select a location"
        @changed="changed"
      /><br />
      Anddress:
      <input type="text" v-model="home.location.address" class="w-60" /><br />
      City:
      <input type="text" v-model="home.location.city" class="w-26" /><br />
      State:
      <input type="text" v-model="home.location.state" class="w-26" /><br />
      Postal Code:
      <input
        type="text"
        v-model="home.location.postalCode"
        class="w-26"
      /><br />
      Country:
      <input type="text" v-model="home.location.country" class="w-26" /><br />
      <button class="border px-4 py-2 border-gray-400">Add</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      home: {
        title: '',
        description: '',
        note: '',
        pricePerNight: '',
        guests: '',
        bedrooms: '',
        beds: '',
        bathrooms: '',
        features: ['', '', '', '', ''],
        location: {
          address: '',
          city: '',
          state: '',
          postalCode: '',
          country: '',
        },
        _geoloc: {
          lat: '',
          lng: '',
        },
        images: [
          'https://images.unsplash.com/photo-1501183638710-841dd1904471?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
          'https://images.unsplash.com/photo-1505691723518-36a5ac3be353?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
          'https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80',
          'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
          'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        ],
      },
    };
  },

  mounted() {
    this.$maps.makeAutoComplete(this.$refs.locationSelector, ['address']);
  },

  methods: {
    changed(event) {
      const addressParts = event.detail.address_components;
      const street =
        this.getAddressPart(addressParts, 'street_number')?.short_name || '';
      const route =
        this.getAddressPart(addressParts, 'route')?.short_name || '';

      this.home.location.address = `${street} ${route}`;
      this.home.location.city =
        this.getAddressPart(addressParts, 'administrative_area_level_2')
          ?.short_name || '';
      this.home.location.state =
        this.getAddressPart(addressParts, 'administrative_area_level_1')
          ?.long_name || '';
      this.home.location.country =
        this.getAddressPart(addressParts, 'country')?.short_name || '';
      this.home.location.postalCode =
        this.getAddressPart(addressParts, 'postal_code')?.short_name || '';

      const geo = event.detail.geometry.location;
      this.home._geoloc.lat = geo.lat();
      this.home._geoloc.lng = geo.lng();
    },

    getAddressPart(parts, type) {
      return parts.find((part) => part.types.includes(type));
    },

    async onSubmit() {
      await fetch('/api/homes', {
        method: 'POST',
        body: JSON.stringify(this.home),
        headers: {
          'Content-Type': 'application/json',
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.form input,
.form textarea {
  @apply p-1 m-1 bg-gray-200;
}
</style>
