import breadcrumbs from "./BreadcrumbsComp";
import cart from "./CartComponent";
import category from "./CategoryComp";
import error from "./ErrorComp";
import filter from "./FilterComp";
import footer from "./FooterComponent";
import header from "./HeaderComp";
import products from "./ProductComponent";
import services from "./ServicesComp";
import subscribe from "./SubscribeComp";

const app = {
  el: "#app",
  components: {
    "breadcrumbs-el": breadcrumbs,
    cart,
    "category-el": category,
    error,
    "filter-el": filter,
    "footer-el": footer,
    "header-el": header,
    products,
    "services-el": services,
    "subscribe-el": subscribe,
  },
  data: {
    userSearch: "",
  },
  methods: {
    getJson(url) {
      return fetch(url)
        .then(result => result.json())
        .catch(error => {

          this.$refs.error.text = error;
        });
    },
    postJson(url, data) {
      return fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then(result => result.json())
        .catch(error => {
          // console.log(error)
          this.$refs.error.text = error;
        });
    },

    putJson(url, data) {

      return fetch(url, {

        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then(result => result.json())
        .catch(error => {
          this.$refs.error.text = error;
        });
    },
    delJson(url, data) {
      return fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then(result => result.json())
        .catch(error => {
          this.$refs.error.text = error;
        });
    },
  },
  mounted() { },
};

export default app;
