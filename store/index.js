import Vuex from "vuex";
import _ from "lodash";

const createStore = () => {
  return new Vuex.Store({
    state: {
      songs: [
        {
          Number: 100,
          title: "Bad Romance",
          Artist: "Lady Gaga"
        },
        {
          Number: 101,
          title: "Fake Plastic Trees",
          Artist: "Radiohead"
        },
        {
          Number: 102,
          title: "These Dreams",
          Artist: "Heart"
        },
        {
          Number: 103,
          title: "By the Time You Get to Phoenix",
          Artist: "Glenn Campbell"
        },
        {
          Number: 104,
          title: "My Sharona",
          Artist: "The Knack"
        },
        {
          Number: 105,
          title: "Party's Over",
          Artist: "Willie Nelson"
        },
        {
          Number: 106,
          title: "Why Can't This Be Love",
          Artist: "Van Halen"
        },
        {
          Number: 107,
          title: "",
          Artist: "Human League"
        },
        {
          Number: 108,
          title: "Crazy Little Thing Called Love",
          Artist: "Queen"
        },
        {
          Number: 109,
          title: "Without You",
          Artist: "Nillson"
        },
        {
          Number: 110,
          title: "Like a Rock",
          Artist: "Bob Seger"
        },
        {
          Number: 111,
          title: "Two Sparrows in a Hurricane",
          Artist: "Tanya Tucker"
        },
        {
          Number: 112,
          title: "Paint it Black",
          Artist: "Rolling Stones"
        },
        {
          Number: 113,
          title: "Sloop John B",
          Artist: "Beach Boys"
        },
        {
          Number: 114,
          title: "Midnight In Montgomery",
          Artist: "Alan Jackson"
        },
        {
          Number: 115,
          title: "Baby's Got Ahold on Me",
          Artist: "Nitty Gritty Dirt Band"
        },
        {
          Number: 116,
          title: "Love title",
          Artist: "The Cure"
        },
        {
          Number: 117,
          title: "Baker Street",
          Artist: "Gerry Raferty"
        },
        {
          Number: 118,
          title: "Maybe It was Memphis",
          Artist: "Pam Tillis"
        },
        {
          Number: 119,
          title: "Can't Keep a Good Man Down",
          Artist: "Alabama"
        },
        {
          Number: 120,
          title: "7th Chamber",
          Artist: "Wu Tang Clan"
        },
        {
          Number: 121,
          title: "Go Your Own Way",
          Artist: "Fleetwood Mac"
        },
        {
          Number: 122,
          title: "This Must Be the Place (Na�ve Melody)",
          Artist: "Talking Heads"
        },
        {
          Number: 123,
          title: "Your Love",
          Artist: "Outfield"
        },
        {
          Number: 124,
          title: "Head Over Heels",
          Artist: "Tears for Fears"
        },
        {
          Number: 125,
          title: "Rhinestone Cowboy",
          Artist: "Glenn Campbell"
        },
        {
          Number: 126,
          title: "Ruby Tuesday",
          Artist: "Rolling Stones"
        },
        {
          Number: 127,
          title: "Louie Louie",
          Artist: ""
        },
        {
          Number: 128,
          title: "Islands in the Stream",
          Artist: "Dolly Parton/Kenny Rogers"
        },
        {
          Number: 129,
          title: "Drive",
          Artist: "The Cars"
        },
        {
          Number: 130,
          title: "Africa",
          Artist: "Toto"
        },
        {
          Number: 131,
          title: "Lukenback, TX",
          Artist: "Waylon Jennings"
        },
        {
          Number: 132,
          title: "Don't Let the Sun Go Down on Me",
          Artist: "Sir Elton John"
        },
        {
          Number: 133,
          title: "Sink the Bismark",
          Artist: "Johnny Horton"
        },
        {
          Number: 134,
          title: "The Way You Move",
          Artist: "Outkast"
        },
        {
          Number: 135,
          title: "Attitude Adjustment",
          Artist: "Hank Williams Jr"
        },
        {
          Number: 136,
          title: "Dancing Queen",
          Artist: "ABBA"
        },
        {
          Number: 137,
          title: "Tusk",
          Artist: "Fleetwood Mac"
        },
        {
          Number: 138,
          title: "Hey Jude",
          Artist: "Beatles"
        },
        {
          Number: 139,
          title: "Summer of 69",
          Artist: "Bryan Adams"
        },
        {
          Number: 140,
          title: "Dead Leaves on the Dirty Ground",
          Artist: "White Stripes"
        },
        {
          Number: 141,
          title: "Walk This Way",
          Artist: "Run DMC"
        },
        {
          Number: 142,
          title: "Last Dance With Mary Jane",
          Artist: "Tom Petty"
        },
        {
          Number: 143,
          title: "Simple Kind of Life",
          Artist: "No Doubt"
        },
        {
          Number: 144,
          title: "Bawitabada",
          Artist: "Kid Rock"
        },
        {
          Number: 145,
          title: "Love Shack",
          Artist: "B52s"
        },
        {
          Number: 146,
          title: "Fight For Your Right",
          Artist: "Beastie Boys"
        },
        {
          Number: 147,
          title: "Danger Zone",
          Artist: "Kenny Loggins"
        },
        {
          Number: 148,
          title: "Wannabe",
          Artist: "Spice Girls"
        },
        {
          Number: 149,
          title: "Express Yourself",
          Artist: "NWA"
        },
        {
          Number: 150,
          title: "Saw Here Standing There",
          Artist: "Beatles"
        },
        {
          Number: 151,
          title: "Lyin Eyes",
          Artist: "Eagles"
        },
        {
          Number: 152,
          title: "Band on the Run",
          Artist: "Wings"
        },
        {
          Number: 153,
          title: "Mr. Tamborine Man",
          Artist: "Byrds"
        },
        {
          Number: 154,
          title: "Born to Be Wild",
          Artist: "Steppenwolf"
        },
        {
          Number: 155,
          title: "Who Will Stop the Rain",
          Artist: "Creedence Clearwater Revival"
        },
        {
          Number: 156,
          title: "Nights in White Satin",
          Artist: "Moody Blues"
        },
        {
          Number: 157,
          title: "Black Dog",
          Artist: "Led Zepplin"
        },
        {
          Number: 158,
          title: "Goodbye Stranger",
          Artist: "Supertramp"
        },
        {
          Number: 159,
          title: "Funkytown",
          Artist: "LIPPS, INC"
        },
        {
          Number: 160,
          title: "We Will Rock You",
          Artist: "Queen"
        },
        {
          Number: 161,
          title: "El Paso",
          Artist: "Marty Robbins"
        },
        {
          Number: 162,
          title: "Dancing in the Dark",
          Artist: "Bruce Springsteen"
        },
        {
          Number: 163,
          title: "Wreck of the Edmund  Fitzgerald",
          Artist: "Gordon Lightfoot"
        },
        {
          Number: 164,
          title: "Hit Me With Your Best Shot",
          Artist: "Pat Benetar"
        },
        {
          Number: 165,
          title: "Everything That Glitters is Not Gold",
          Artist: "Dan Seals"
        },
        {
          Number: 166,
          title: "Livin on a Prayer",
          Artist: "Bon Jovi"
        },
        {
          Number: 167,
          title: "Hold Me",
          Artist: "Fleetwood Mac"
        },
        {
          Number: 168,
          title: "Don't Do Me Like That",
          Artist: "Tom Petty"
        },
        {
          Number: 169,
          title: "Every Breath You Take",
          Artist: "Police"
        },
        {
          Number: 170,
          title: "Stayin Alive",
          Artist: "BeeGees"
        },
        {
          Number: 171,
          title: "Goodbye Yellow Brick Road",
          Artist: "Sir Elton John"
        },
        {
          Number: 172,
          title: "Roxanne",
          Artist: "Police"
        },
        {
          Number: 173,
          title: "Hot Rod Lincoln",
          Artist: "Jim Varney"
        },
        {
          Number: 174,
          title: "Runaway Train",
          Artist: "Roseanne Cashe"
        },
        {
          Number: 175,
          title: "Live and Let Die",
          Artist: "Wings"
        },
        {
          Number: 176,
          title: "Walkin After Midnight",
          Artist: "Patsy Cline"
        },
        {
          Number: 177,
          title: "In the Air Tonight",
          Artist: "Phil Collins"
        },
        {
          Number: 178,
          title: "18 Wheels and Dozen Roses",
          Artist: "Kathy Mattea"
        },
        {
          Number: 179,
          title: "Delta Dawn",
          Artist: "Tanya Tucker"
        },
        {
          Number: 180,
          title: "Burning Down the House",
          Artist: "Talking Heads"
        },
        {
          Number: 181,
          title: "Take Me Home Country Roads",
          Artist: "John Denver"
        },
        {
          Number: 182,
          title: "Sweet Home Alabama",
          Artist: "Lynyrd Skynyrd"
        },
        {
          Number: 183,
          title: "She Loves You",
          Artist: "Beatles"
        },
        {
          Number: 184,
          title: "Just Dropped In (To See What Condition My Condition Was In)",
          Artist: "First Edition"
        },
        {
          Number: 185,
          title: "Bohemian Rhapsody",
          Artist: "Queen"
        },
        {
          Number: 186,
          title: "Night Rider",
          Artist: "C.W. McCall"
        },
        {
          Number: 187,
          title: "Battle of  New Orleans",
          Artist: "Johnny Horton"
        },
        {
          Number: 188,
          title: "Rebel Rebel",
          Artist: "David Bowie"
        },
        {
          Number: 189,
          title: "Too Much Time on My Hands",
          Artist: "Styx"
        },
        {
          Number: 190,
          title: "When Doves Cry",
          Artist: "Prince"
        },
        {
          Number: 191,
          title: "I Touch Myself",
          Artist: "DiVinyls"
        },
        {
          Number: 192,
          title: "Brilliant Disguise",
          Artist: "Bruce Springsteen"
        },
        {
          Number: 193,
          title: "California Girls",
          Artist: "Beach Boys"
        },
        {
          Number: 194,
          title: "Get Right Back (To Where  We Started From)",
          Artist: "Maxine Nightingale"
        },
        {
          Number: 195,
          title: "Summertime Blues",
          Artist: "Alan Jackson"
        },
        {
          Number: 196,
          title: "Ghostbusters",
          Artist: "Ray Parker Jr"
        },
        {
          Number: 197,
          title: "Scarecrow",
          Artist: "John Mellencamp"
        },
        {
          Number: 198,
          title: "Under Pressure",
          Artist: "Queen/David Bowie"
        },
        {
          Number: 199,
          title: "Rosanna",
          Artist: "Toto"
        },
        {
          Number: 200,
          title: "Paparazzi",
          Artist: "Lady Gaga"
        },
        {
          Number: 201,
          title: "The Bends",
          Artist: "Radiohead"
        },
        {
          Number: 202,
          title: "Shell Shock",
          Artist: "Heart"
        },
        {
          Number: 203,
          title: "Gentle on my Mind / Wichita Lineman",
          Artist: "Glen Campbell"
        },
        {
          Number: 204,
          title: "Let me Out",
          Artist: "The Knack"
        },
        {
          Number: 205,
          title: "Always on my Mind",
          Artist: "Willie Nelson"
        },
        {
          Number: 206,
          title: "Get Up",
          Artist: "Van Halen"
        },
        {
          Number: 207,
          title: "",
          Artist: "Human League"
        },
        {
          Number: 208,
          title: "Spread your Wings",
          Artist: "Queen"
        },
        {
          Number: 209,
          title: "My and My Arrow",
          Artist: "Nillson"
        },
        {
          Number: 210,
          title: "Livin Inside My Heart",
          Artist: "Bob Seger"
        },
        {
          Number: 211,
          title: "Danger Ahead",
          Artist: "Tanya Tucker"
        },
        {
          Number: 212,
          title: "The Last Time",
          Artist: "Rolling Stones"
        },
        {
          Number: 213,
          title: "",
          Artist: "Beach Boys"
        },
        {
          Number: 214,
          title: "Chasin Neon Rainbow",
          Artist: "Alan Jackson"
        },
        {
          Number: 215,
          title: "Fishin in the Dark",
          Artist: "Nitty Gritty Dirt Band"
        },
        {
          Number: 216,
          title: "",
          Artist: "The Cure"
        },
        {
          Number: 217,
          title: "",
          Artist: "Gerry Raferty"
        },
        {
          Number: 218,
          title: "Shake the Sugar Tree",
          Artist: "Pam Tillis"
        },
        {
          Number: 219,
          title: "If It Ain'T Dixie",
          Artist: "Alabama"
        },
        {
          Number: 220,
          title: "Clan In the Front",
          Artist: "Wu Tang Clan"
        },
        {
          Number: 221,
          title: "Silver Springs",
          Artist: "Fleetwood Mac"
        },
        {
          Number: 222,
          title: "This Must Be the Place (Na�ve Melody)",
          Artist: "Talking Heads"
        },
        {
          Number: 223,
          title: "61 Seconds",
          Artist: "Outfield"
        },
        {
          Number: 224,
          title: "When in Love with A Blind  Man",
          Artist: "Tears for Fears"
        },
        {
          Number: 225,
          title: "Love Light",
          Artist: "Glen Campbell"
        },
        {
          Number: 226,
          title: "Let's Spend the Night Together",
          Artist: "Rolling Stones"
        },
        {
          Number: 227,
          title: "Twist and Shout",
          Artist: ""
        },
        {
          Number: 228,
          title: "I Will Always Love You",
          Artist: "Dolly Parton"
        },
        {
          Number: 229,
          title: "Hello Again",
          Artist: "The Cars"
        },
        {
          Number: 230,
          title: "Good For you",
          Artist: "Toto"
        },
        {
          Number: 231,
          title: "Belle of the Ball",
          Artist: "Wayon Jennings"
        },
        {
          Number: 232,
          title: "Sick City",
          Artist: "Sir Elton John"
        },
        {
          Number: 233,
          title: "Same Old Tale",
          Artist: "Johnny Horton"
        },
        {
          Number: 234,
          title: "Instrumental",
          Artist: "Outkast"
        },
        {
          Number: 235,
          title: "All My Rowdy Friends",
          Artist: "Hank Williams Jr"
        },
        {
          Number: 236,
          title: "Fernando",
          Artist: "ABBA"
        },
        {
          Number: 237,
          title: "Never Make Me Cry",
          Artist: "Fleetwood Mac"
        },
        {
          Number: 238,
          title: "Revolution",
          Artist: "Beatles"
        },
        {
          Number: 239,
          title: "Best is Yet to Come",
          Artist: "Bryan Adams"
        },
        {
          Number: 240,
          title: "Stop Breaking Down",
          Artist: "White Stripes"
        },
        {
          Number: 241,
          title: "King of Rock",
          Artist: "Run DMC"
        },
        {
          Number: 242,
          title: "The  Waiting",
          Artist: "Tom Petty"
        },
        {
          Number: 243,
          title: "Ex-Girlfriend",
          Artist: "No Doubt"
        },
        {
          Number: 244,
          title: "Cowboy",
          Artist: "Kid  Rock"
        },
        {
          Number: 245,
          title: "Channel 2",
          Artist: "B52s"
        },
        {
          Number: 246,
          title: "Paul Revere",
          Artist: "Beastie Boys"
        },
        {
          Number: 247,
          title: "I'm Gonna Do It Right",
          Artist: "Kenny Loggins"
        },
        {
          Number: 248,
          title: "Bumper to Bumper",
          Artist: "Spice Girls"
        },
        {
          Number: 249,
          title: "Straight Outta Compton",
          Artist: "NWA"
        },
        {
          Number: 250,
          title: "Blue Angel",
          Artist: "Beatles"
        },
        {
          Number: 251,
          title: "Too Many Hands",
          Artist: "Eagles"
        },
        {
          Number: 252,
          title: 1985,
          Artist: "Wings"
        },
        {
          Number: 253,
          title: "All I Really Want To Do",
          Artist: "Byrds"
        },
        {
          Number: 254,
          title: "Magic Carpet Ride",
          Artist: "Steppenwolf"
        },
        {
          Number: 255,
          title: "Travelin Band",
          Artist: "Creedence Clearwater Revival"
        },
        {
          Number: 256,
          title: "Cities",
          Artist: "Moody Blues"
        },
        {
          Number: 257,
          title: "Misty Mountain Hop",
          Artist: "Led Zepplin"
        },
        {
          Number: 258,
          title: "Quiet Moments",
          Artist: "Supertramp"
        },
        {
          Number: 259,
          title: "All Night Dancing",
          Artist: "LIPPS, INC"
        },
        {
          Number: 260,
          title: "We Are The Champions",
          Artist: "Queen"
        },
        {
          Number: 261,
          title: "San Angelo",
          Artist: "Marty Robbins"
        },
        {
          Number: 262,
          title: "Dancing in the Dark",
          Artist: "Bruce Springsteen"
        },
        {
          Number: 263,
          title: "Life of Ruins",
          Artist: "Gordon Lightfoot"
        },
        {
          Number: 264,
          title: "Prisoner of Love",
          Artist: "Pat Benetar"
        },
        {
          Number: 265,
          title: "Everything that Glitters is Not Gold",
          Artist: "Dan Seals"
        },
        {
          Number: 266,
          title: "Wild in the Street",
          Artist: "Bon Jovi"
        },
        {
          Number: 267,
          title: "Gypsy",
          Artist: "Fleetwood Mac"
        },
        {
          Number: 268,
          title: "Casa Dega",
          Artist: "Tom Petty"
        },
        {
          Number: 269,
          title: "Miracle by Numbers",
          Artist: "Police"
        },
        {
          Number: 270,
          title: "If I Don't Have You",
          Artist: "BeeGees"
        },
        {
          Number: 271,
          title: "Young Man's Blues",
          Artist: "Sir Elton John"
        },
        {
          Number: 272,
          title: "Roxanne",
          Artist: "Police"
        },
        {
          Number: 273,
          title: "Ballad Jed Clampet",
          Artist: "Jim Varney"
        },
        {
          Number: 274,
          title: "Seven Year Ache",
          Artist: "Roseanne Cash"
        },
        {
          Number: 275,
          title: "I Lie Around",
          Artist: "Wings"
        },
        {
          Number: 276,
          title: "Crazy Arms",
          Artist: "Patsy Cline"
        },
        {
          Number: 277,
          title: "In the Air Tonight",
          Artist: "Phil Collins"
        },
        {
          Number: 278,
          title: "Like a Hurricane",
          Artist: "Kathy Mattea"
        },
        {
          Number: 279,
          title: "Somebody Buy This Cowgirl a Beer",
          Artist: "Tanya Tucker"
        },
        {
          Number: 280,
          title: "Burning Down the House",
          Artist: "Talking Heads"
        },
        {
          Number: 281,
          title: "Poems, Promises, Prayers",
          Artist: "John Denver"
        },
        {
          Number: 282,
          title: "Saturday Night Special",
          Artist: "Lynyrd Skynyrd"
        },
        {
          Number: 283,
          title: "I'll Get You",
          Artist: "Beatles"
        },
        {
          Number: 284,
          title: "Shadow in the Corner of My Mind",
          Artist: "First Edition"
        },
        {
          Number: 285,
          title: "I'm In Love with My Car",
          Artist: "Queen"
        },
        {
          Number: 286,
          title: "Around the world with the Rubber Duck",
          Artist: "C.W. McCall"
        },
        {
          Number: 287,
          title: "All for the Love of a Girl",
          Artist: "Johnny Horton"
        },
        {
          Number: 288,
          title: "Queen Bitch",
          Artist: "David Bowie"
        },
        {
          Number: 289,
          title: "Queen of Spades",
          Artist: "Styx"
        },
        {
          Number: 290,
          title: "17 Days",
          Artist: "Prince"
        },
        {
          Number: 291,
          title: "Follow Through",
          Artist: "DiVinyls"
        },
        {
          Number: 292,
          title: "Lucky Man",
          Artist: "Bruce Spingsteen"
        },
        {
          Number: 293,
          title: "Good Vibrations",
          Artist: "Beach Boys"
        },
        {
          Number: 294,
          title: "What You Do",
          Artist: "Maxine Nightingale"
        },
        {
          Number: 295,
          title: "Hole in the Wall",
          Artist: "Alan Jackson"
        },
        {
          Number: 296,
          title: "Instrumental",
          Artist: "Ray Parker Jr"
        },
        {
          Number: 297,
          title: "Pretty Ballerina",
          Artist: "John Mellencamp"
        },
        {
          Number: 298,
          title: "Soul Brother",
          Artist: "Queen"
        },
        {
          Number: 299,
          title: "It�s a Feeling",
          Artist: "Toto"
        }
      ]
    },
    getters: {
      all: state => {
        return state.songs;
      },
      artists: state => {
        var sorted = _.sortBy(state.songs, "Artist");
        var a = _.groupBy(sorted, "Artist");
        return a;
      }
    },
    mutations: {
      increment(state) {
        state.counter++;
      }
    }
  });
};

export default createStore;
