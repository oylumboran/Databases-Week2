//var genrediv = $(".genre");


var iTunes = [

{
genre: "Alternative", 
albums: 
	[
	{
	artist: "Architecture in Helsinki",
	title:"In Case We Die",
	image: "img/Alt/01.jpg",
	songs:["Neverevereverdid", "It's 5!", "Tiny Paintings", "Wishbone", "Maybe You Can Owe Me"]
	},
	
	{
	artist: "Broken Bells",
	title:"Broken Bells",
	image: "img/Alt/02.jpg",
	songs:["The High Road", "Vaporize", "Your Head Is on Fire", "The Ghost Inside"]
	},
	
	{
	artist: "Feist",
	title:"The Reminder",
	image: "img/Alt/03.jpg",
	songs:["So Sorry", "I Feel It All", "My Moon My Man", "The Park"]
	},
	
	{
	artist: "Gorillaz",
	title:"Plastic Beach",
	image: "img/Alt/04.jpg",
	songs:["Plastic Beach", "Orchestral Intro", "Welcome to the World", "White Flag"]
	},
	
	{
	artist: "Grizzly Bear",
	title:"Veckatimest",
	image: "img/Alt/05.jpg",
	songs:["Southern Point", "Two Weeks", "All We Ask", "Fine for Now"]
	},
	
	{
	artist: "M.I.A.",
	title:"Arular",
	image: "img/Alt/06.jpg",
	songs:["Banana", "Pull Up the People", "Bucky Done Gun", "Sunshowers"]
	},
	
	{
	artist: "Nouvelle Vague",
	title:"Bande a Part",
	image: "img/Alt/07.jpg",
	songs:["The Killing Moon", "Ever Fallen In Love", "Dance With Me", "Don't Go"]
	},
	
	{
	artist: "Beck",
	title:"Guero",
	image: "img/Alt/08.jpg",
	songs:["E-Pro", "Que Onda Guero", "Girl", "Missing"]
	}
	]
},

{	
genre: "Classical", 
albums:
	[
	{
	artist: "Alois Posch",
	title:"Schubert Trout Quintet",
	image: "img/Class/01.jpg",
	songs:["Piano Quintet in A, Allegro vivace", "Piano Quintet in A, Andante", "Piano Quintet in A 'The Trout', Scherzo", "Piano Quintet in A,  Tema con variazioni", "Piano Quintet in A, Finale"]
	},
	
	{
	artist: "Maurizio Pollini",
	title:"Beethoven Piano Sonatas: Moonlight & Pastorale",
	image: "img/Class/02.jpg",
	songs:["Andante", "Allegro", "Adagio"]
	}
	]
},

{	
genre: "Electronic", 
albums:
	[
	{
	artist: "Brazilian Girls",
	title:"Brazilian Girls",
	image: "img/Elec/01.jpg",
	songs:["Homme", "Don't Stop", "Lazy Lover", "Corner Store"]
	},
	
	{
	artist: "Air",
	title:"Moon Safari",
	image: "img/Elec/02.jpg",
	songs:["La Femme d'Argent", "Sexy Boy", "All I Need", "Kelly Watch the Stars"]
	},
	
	{
	artist: "Nightmares on Wax",
	title:"In a Space Outta Sound",
	image: "img/Elec/03.jpg",
	songs:["Passion", "The Sweetest", "Flip Ya Lid", "Pudpots"]
	}
	]
},

{	
genre: "Funk/Soul", 
albums:
	[
	{
	artist: "Gnarls Barkley",
	title:"Brazilian Girls",
	songs:["Charity Case", "Going On", "Open Book", "Surprise"]
	}
	]
},

{	
genre: "Hip Hop/Rap", 
albums:
	[
	{
	artist: "Gnarls Barkley",
	title:"St. Elsewhere",
	songs:["Go-Go Gadget Gospel", "Crazy", "St. Elsewhere", "Gone Daddy Gone"]
	},
	
	{
	artist: "Kanye West",
	title:"Kanye",
	songs:["Stronger", "Wake Up Mr. West", "Heard 'Em Say", "Touch The Sky"]
	},
	
	{
	artist: "Jurassic 5",
	title:"Power In Numbers",
	songs:["This Is", "Freedom", "If You Only Knew", "Break"]
	}
	
	]
},

{	
genre: "Pop", 
albums:
	[
	{
	artist: "Antony & The Johnsons",
	title:"I Am A Bird Now",
	songs:["Hope There's Someone", "My Lady Story", "For Today I Am a Boy", "Free At Last"]
	},
	
	{
	artist: "Martha Wainwright",
	title:"I Know You're Married, But I've Got Feelings Too",
	songs:["Bleeding All Over You", "You Cheated Me", "Jesus and Mary", "Comin' Tonight"]
	},
	
	{
	artist: "Guillemots",
	title:"Through the Windowpane",
	songs:["Little Bear", "Made Up Lovesong", "If The World Ends", "Redwings"]
	}
	
	]
},

{	
genre: "Rock", 
albums:
	[
	{
	artist: "Audioslave",
	title:"Out Of Exile",
	songs:["Out Of Exile", "Be Yourself", "Doesn't Remind Me", "The Worm"]
	},
	
	{
	artist: "Bob Dylan",
	title:"Lovesick",
	songs:["She Belongs To Me", "To Ramona", "Love Sick", "Sugar Baby"]
	},
	
	{
	artist: "David Bowie",
	title:"Reality",
	songs:["Pablo", "Try Some", "Days", "Reality"]
	},
	
	{
	artist: "Elliott Smith",
	title:"Figure 8",
	songs:["Son Of Sam", "Junk Bond", "LA", "Happiness"]
	},
	
	{
	artist: "Rufus Wainwright",
	title:"Rufus Wainwright",
	songs:["Foolish Love", "Danny Boy", "April Fools", "Baby"]
	},	
	
	{
	artist: "Slowdive",
	title:"Souvlaki",
	songs:["Alison", "Machine Gun", "40 Days", "Sing"]
	},

	{
	artist: "Beth Orton",
	title:"Central Reservation",
	songs:["Stolen Car", "Sweetest Decline", "Couldn't Cause Me Harm", "So Much More"]
	}	
	
	]
},
];

//function showSongs(){

document.write('<div id="musiclist">');

/*console.log(iTunes[0]);
console.log(iTunes[0].albums[0]);*/



function alternative(){
document.write('<div id="alternative">'+'<ul>');
var alternative = iTunes[0];
for(var i=0; i<alternative.albums.length; i++) {
	var album = alternative.albums[i];
	/*console.log(genre.albums.length);
	console.log(album.title);*/
	document.write('<li>' + album.title + '</li>');
	document.write('<li class="firstitem">'+'<img src="' + album.image + '">');
	
	document.write('<ul class="songs">');
	
	for(var j=0; j<album.songs.length; j++) {
		
		var song = album.songs[j];
		console.log(song.title);
		document.write('<li>' + song + '</li>');
		
	}
	document.write('</ul>');
	document.write('</li>' );
	
	console.log(album.songs.length);
	
}
document.write('<ul>');
document.write('</div>');
}




function classical(){
document.write('<div id="classical">' + '<ul>');
var classical = iTunes[1];
for(var i=0; i<classical.albums.length; i++) {
	var album = classical.albums[i];
	/*console.log(genre.albums.length);
	console.log(album.title);*/
	document.write('<li class="firstitem">'+'<img src="' + album.image + '">'+'</li>' );
	document.write('<li>' + album.title + '</li><ul class="songs">');
	
	
	for(var j=0; j<album.songs.length; j++) {
		var song = album.songs[j];
		console.log(song.title);
		document.write('<li>' + song + '</li>');
	}
	document.write('</ul>');
	
	
	console.log(album.songs.length);
	
}
document.write('<ul>');
document.write('</div>');

}




function electronic(){
document.write('<div id="electronic">' + '<ul>');
var electronic = iTunes[2];
for(var i=0; i<electronic.albums.length; i++) {
	var album = electronic.albums[i];
	/*console.log(genre.albums.length);
	console.log(album.title);*/
	document.write('<li class="firstitem">'+'<img src="' + album.image + '">'+'</li>' );
	document.write('<li>' + album.title + '</li><ul class="songs">');
	
	
	for(var j=0; j<album.songs.length; j++) {
		var song = album.songs[j];
		console.log(song.title);
		document.write('<li>' + song + '</li>');
	}
	document.write('</ul>');
	
	
	console.log(album.songs.length);
	
}
document.write('<ul>');
document.write('</div>');

}

