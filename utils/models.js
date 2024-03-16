module.exports = () => {
  return {
    name: {
      type: String,
      required: true,
    },

    gendr: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    phone: {
      type: String,
      required: true,
    },

    specialization: {
      type: String,
      required: true,
    },

    title: {
      type: String,
      required: true,
    },

    msg: {
      type: String,
      required: false,
    },

    attend: {
      type: Array,
      required: true
    },

    price: {
      type: String,
      required: true
    },

    avatar: {
      type: String,
      default: "default-profile.jpg",
    },
  };
};
