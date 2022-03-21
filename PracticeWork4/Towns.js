let town = {
    name:"",
    longitude:0,
    latitude:0,

    createTown(data){
        this.name = data.split(' | ')[0];
        this.longitude = parseInt(data.split(' | ')[1]).toFixed(2);
        this.latitude = parseInt(data.split(' | ')[2]).toFixed(2);
    },

    showInfTown(dataArray){
        for (let i = 0; i < dataArray.length; i++) {
            town.createTown(dataArray[i]);
            console.log(`town: '${town.name}' latitude: '${town.latitude}' longitude: '${town.longitude}'`);    
        }
    }

}
town.showInfTown(["Moscow | 55.65454 | 45.33224", "Bejing | 32.3 | 89.432423"]);