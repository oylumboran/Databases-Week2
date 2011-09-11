//var genrediv = $(".genre");


var iTunes = [

{
genre: "Alternative", 
albums: 
	[
	{
	artist: "Architecture in Helsinki",
	title:"In Case We Die",
	songs:["Neverevereverdid", "It's 5!", "Tiny Paintings", "Wishbone", "Maybe You Can Owe Me"]
	},
	
	{
	artist: "Broken Bells",
	title:"Broken Bells",
	songs:["The High Road", "Vaporize", "Your Head Is on Fire", "The Ghost Inside"]
	},
	
	{
	artist: "Feist",
	title:"The Reminder",
	songs:["So Sorry", "I Feel It All", "My Moon My Man", "The Park"]
	},
	
	{
	artist: "Gorillaz",
	title:"Plastic Beach",
	songs:["Plastic Beach", "Orchestral Intro", "Welcome to the World", "White Flag"]
	},
	
	{
	artist: "Grizzly Bear",
	title:"Veckatimest",
	songs:["Southern Point", "Two Weeks", "All We Ask", "Fine for Now"]
	},
	
	{
	artist: "M.I.A.",
	title:"Arular",
	songs:["Banana", "Pull Up the People", "Bucky Done Gun", "Sunshowers"]
	},
	
	{
	artist: "Nouvelle Vague",
	title:"Bande a Part",
	songs:["The Killing Moon", "Ever Fallen In Love", "Dance With Me", "Don't Go"]
	},
	
	{
	artist: "Beck",
	title:"Guero",
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
	songs:["Piano Quintet in A, Allegro vivace", "Piano Quintet in A, Andante", "Piano Quintet in A 'The Trout', Scherzo", "Piano Quintet in A,  Tema con variazioni", "Piano Quintet in A, Finale"]
	},
	
	{
	artist: "Maurizio Pollini",
	title:"Beethoven Piano Sonatas: Moonlight & Pastorale",
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
	songs:["Homme", "Don't Stop", "Lazy Lover", "Corner Store"]
	},
	
	{
	artist: "Air",
	title:"Moon Safari",
	songs:["La Femme d'Argent", "Sexy Boy", "All I Need", "Kelly Watch the Stars"]
	},
	
	{
	artist: "Nightmares on Wax",
	title:"In a Space Outta Sound",
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

document.write('<div id="alternative">' + iTunes[0].genre + '<ul>');

var alternative = iTunes[0];
for(var i=0; i<alternative.albums.length; i++) {
	var album = alternative.albums[i];
	/*console.log(genre.albums.length);
	console.log(album.title);*/
	document.write('<li>' + album.title + '</li>');
	document.write('<ul>');
	
	for(var j=0; j<album.songs.length; j++) {
		var song = album.songs[j];
		console.log(song.title);
		document.write('<li>' + song + '</li>');
	}
	
	
	console.log(album.songs.length);
	
}
document.write('<ul>');


/*for(var i=0; i<iTunes.length; i++) {

	var genres = iTunes[i];
	console.log(genres.genre);
	
	for(var k=0; k<genres.albums.length; k++){
	
		var album = genres.albums[k];
		console.log(album.title);
		console.log(album.artist);
		}
	console.log(" ");
	
	
	var size = genres.albums.length;
	document.write(size);
	document.write("   ");
	
//	genre.css("width",size*10+"px"); 
	
}*/
document.write('</div>');
	
//	}