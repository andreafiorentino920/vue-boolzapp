
const app = new Vue({
	el: "#root",
	data: {
		contacts: [
			{
				name: 'Michele',
				avatar: '_1',
				visible: true,
				messages: [
					{
						date: '10/01/2020 15:30:55',
						message: 'Hai portato a spasso il cane?',
						status: 'sent'
					},
					{
						date: '10/01/2020 15:50:00',
						message: 'Ricordati di dargli da mangiare',
						status: 'sent'
					},
					{
						date: '10/01/2020 16:15:22',
						message: 'Tutto fatto!',
						status: 'received'
					}
				],
			},
			{
				name: 'Fabio',
				avatar: '_2',
				visible: true,
				messages: [{
					date: '20/03/2020 16:30:00',
					message: 'Ciao come stai?',
					status: 'sent'
				},
					{
						date: '20/03/2020 16:30:55',
						message: 'Bene grazie! Stasera ci vediamo?',
						status: 'received'
					},
					{
						date: '20/03/2020 16:35:00',
						message: 'Mi piacerebbe ma devo andare a fare la spesa.',
						status: 'received'
					}
				],
			},
			{
				name: 'Samuele',
				avatar: '_3',
				visible: true,
				messages: [{
					date: '28/03/2020 10:10:40',
					message: 'La Marianna va in campagna',
					status: 'received'
				},
					{
						date: '28/03/2020 10:20:10',
						message: 'Sicuro di non aver sbagliato chat?',
						status: 'sent'
					},
					{
						date: '28/03/2020 16:15:22',
						message: 'Ah scusa!',
						status: 'received'
					}
				],
			},
			{
				name: 'Luisa',
				avatar: '_4',
				visible: true,
				messages: [{
					date: '10/01/2020 15:30:55',
					message: 'Lo sai che ha aperto una nuova pizzeria?',
					status: 'sent'
				},
					{
						date: '10/01/2020 15:50:00',
						message: 'Si, ma preferirei andare al cinema',
						status: 'received'
					}
				],
			},
		],
		contactIndex :0,
		nuovoMessaggio:"",
		cercaChat:""
	},
	methods: {
		selezioneChat:function(index){
			this.contactIndex = index;
           },
		invioMessaggio: function(){
                this.contacts[this.contactIndex].messages.push({
                   date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
				   message: this.nuovoMessaggio,
                   status: "sent"
                });
                this.nuovoMessaggio ="";

				setTimeout(() =>{
					this.contacts[this.contactIndex].messages.push({
						date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
				        message: "ok",
                        status: "received"

				});
            },1000);
		},
		ricercaChat(){
			this.contacts.forEach((element) => {
				if(element.name.toLowerCase().includes(this.cercaChat.toLowerCase())){
					element.visible= true;
				}else{
					element.visible= false;
				}
			});
		}
	} 
});


// Ricerca utente: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i
// contatti i l cui nome contiene l e l ettere i nserite (es. Marco, Matteo Martina -> Scrivo
// “mar” rimangono solo Marco e Martina)