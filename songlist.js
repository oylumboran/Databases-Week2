
var iTunes = [

{
artist: "Bob Dylan", 
genre: ["Rock", "Alternative"], 
albums: 
	[
	{
	title:"Greatest Hits",
	songs:["Song 1", "Song 2"]
	},
	
	{
	title:"Things have changed",
	songs:["Song 1", "Song 2"]
	}
	]
},

{
artist: "Pink Floyd", 
genre: ["Rock", "Alternative"], 
albums: 
	[
	{
	title:"Have a Cigar",
	songs:["Song 3", "Song 4"]
	}
	]
}

];

document.write('<div>');
for(var i=0;i<iTunes.length;i++) {
	var artistMetaData = iTunes[i];
	for(var j=0;j<artistMetaData.genre.length;j++) {
			var genre = artistMetaData.genre[j];
			document.write(genre);
			console.log(genre);
	}
}
	
/*for(var i=0;i<iTunes.length;i++) {
	var artistMetaData = iTunes[i];
	document.write('<div id="showsongs">' + artistMetaData.artist + '</div>');
	console.log(artistMetaData.artist);
	
	for(var j=0;j<artistMetaData.genre.length;j++) {
		var genre = artistMetaData.genre[j];
		document.write(genre);
		console.log(genre);
	}
	
	for(var k=0;k<artistMetaData.albums.length;k++) {
		var album = artistMetaData.albums[k];
		document.write(album.title);
		console.log(album.title);
		
		for(var g=0;g<album.songs.length;g++) {
			var song = album.songs[g];
			document.write(song);
			console.log(song);
		}
	}
}*/
document.write('</div>');