const app = Vue.createApp({
	data() {
		return {
			title: "Castelli famosi d'Irlanda",
			img1src: "img/copertina.jpg",
			img2src: "img/castello.jpg",
			textCover: "Copertina del disco",
			textCastle: "il Moydrum Castle, fra Dublino e Galway",
		};
	},
});

app.mount("#app");
