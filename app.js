const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: ' ',
      confirmedName: '',
    };
  },
  methods: {
    // Event modifier
    submitForm() {
      alert('Submitted!');
    },
    confirmInput() {
      this.confirmedName = this.name;
    },
    // native event object
    setName(event, lastName) {
      this.name = event.target.value + ' ' + lastName;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    },
  },
});

app.mount('#events');
