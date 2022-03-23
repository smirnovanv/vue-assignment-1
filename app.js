const app = Vue.createApp({
  data() {
    return {
      name: 'Nataly',
      age: 32,
      pictureURL: 'https://picsum.photos/200/300',
      text: 'Hello, world!',
    };
  },
  methods: {
    getAgeInFuture() {
      return this.age + 5;
    },
  },
});

app.mount('#assignment');
