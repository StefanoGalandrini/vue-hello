const app = Vue.createApp({
	data() {
		return {
			title: "Castelli famosi d'Irlanda",
			cover: {
				imgSource: "img/copertina.jpg",
				text: "Copertina del disco",
			},
			castle: {
				imgSource: "img/castello.jpg",
				text: "Il Moydrum Castle, fra Dublino e Galway",
			},
		};
	},
});

app.mount("#app");
