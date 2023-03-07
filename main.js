const app = Vue.createApp({
    data() {
        return {
            message: "Sitio seleccionado",
            siteSelect: "",
            sites: [
                {
                    name: "Lima",
                    src: "./assets/lima.jpg"
                },
                {
                    name: "Cusco",
                    src: "./assets/cusco.jpg",
                    style: "item-1"
                },
                {
                    name: "Moguegua",
                    src: "./assets/moquegua.jpg"
                }
            ],
        }
    },
    methods: {
        select(site, i) {
            this.siteSelect = site.name;
            [this.sites[1].name, site.name] = [site.name,this.sites[1].name];
            [this.sites[1].src, site.src] = [site.src, this.sites[1].src];
        }
    }
})

app.mount('#app');