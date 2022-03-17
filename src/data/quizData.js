const quizData = [
	{
		title: 'Harry Potter',
		image: 'hpImage',
		cardClass: 'hpCard',
		id: 'harrypotter',
		questions: [
			{
				qIndex: 0,
				question: "What do Hermione's parents do for a living?",
				correctAns: 'Dentists',
				multChoice: [
					'Green Grocers',
					'Dentists',
					'Bankers',
					'Chiropractors',
					'Drill Manufacturers',
				],
			},
			{
				qIndex: 1,
				question:
					'Which of these was not a monster that Harry faced in the maze in the Third Task of the Triwizard Tournament?',
				correctAns: 'Grindylow',
				multChoice: ['Sphinx', 'Skrewt', 'Boggart', 'Grindylow', 'Spider'],
			},
			{
				qIndex: 2,
				question: "What is Percy's Owl's Name?",
				correctAns: 'Hermes',
				multChoice: ['Hermes', 'Errol', 'Abraxas', 'Arnold', 'Roonil'],
			},
			{
				qIndex: 3,
				question: "What form was Ernie Macmillan's Patronus?",
				correctAns: 'Boar',
				multChoice: ['Hare', 'Otter', 'Thestral', 'Rat', 'Boar'],
			},
			{
				qIndex: 4,
				question:
					'Who of the following was never a member of the Order of the Phoenix?',
				correctAns: 'Horace Slughorn',
				multChoice: [
					'Nymphadora Tonks',
					'Severus Snape',
					'Horace Slughorn',
					'Elphias Doge',
					'Aberforth Dumbledore',
				],
			},
			{
				qIndex: 5,
				question: "What is Dean Thomas' favorite Football (soccer) team?",
				correctAns: 'West Ham United',
				multChoice: [
					'West Ham United',
					'Wolverhampton Wanderers',
					'Manchester United',
					'Everton',
					'A.F.C. Richmond',
				],
			},
			{
				qIndex: 6,
				question: "How many O.W.L.'s did Hermione receive?",
				correctAns: '10',
				multChoice: ['11', '14', '13', '10', '21'],
			},
			{
				qIndex: 7,
				question: 'What street does Severus Snape live on?',
				correctAns: "Spinner's End",
				multChoice: [
					'Privet Drive',
					'Mongolia Crescent',
					"Spinner's End",
					'Charring Cross Road',
					'Grimmauld Place',
				],
			},
			{
				qIndex: 8,
				question:
					'What model broomstick does Ron receive in Order of the Phoenix?',
				correctAns: 'Cleansweep Eleven',
				multChoice: [
					'Nimbus Two-Thousand',
					'Cleansweep Eleven',
					'Comet Two-Sixty',
					'Shooting Star',
					'Bluebottle',
				],
			},
			{
				qIndex: 9,
				question: 'How many staircases are there at Hogwarts?',
				correctAns: '142',
				multChoice: ['68', '394', '188', '208', '142'],
			},
		],
	},
	{
		title: 'Star Wars',
		image: 'swImage',
		cardClass: 'swCard',
		id: 'starwars',
		questions: [
			{
				qIndex: 0,
				question: 'What model is the Millennium Falcon?',
				correctAns: 'Corellian YT-1300f Light Freighter',
				multChoice: [
					'Corellian CR90 Corvette',
					'Kuat EF76 Nebulon-B Escort Frigate',
					'Corellian YT-1300f Light Freighter',
					'ST-70 Assault Ship',
					'Corellian VCX0-100 Light Freighter',
				],
			},
			{
				qIndex: 1,
				question: 'What is the name of the Wookie home planet?',
				correctAns: 'Kashyyyk',
				multChoice: ['Endor', 'Kashyyyk', 'Ilum', 'Dathomir', 'Crait'],
			},
			{
				qIndex: 2,
				question: 'What species is Ahsoka Tano?',
				correctAns: 'Togruta',
				multChoice: ['Togruta', 'Zabrak', "Twi'lek", 'Rodian', 'Iktochi'],
			},
			{
				qIndex: 3,
				question: 'On which planet did Darth Vader establish his base?',
				correctAns: 'Mustafar',
				multChoice: ['Crait', 'Jedha', 'Naboo', 'Utapau', 'Mustafar'],
			},
			{
				qIndex: 4,
				question:
					'According to Dexter Jettser in Attack of the Clones, what do the analysis droids at the Jedi temple focus on?',
				correctAns: 'Symbols',
				multChoice: [
					'Smell',
					'Materials',
					'Particulate Matter',
					'Symbols',
					'Digital Cookies',
				],
			},
			{
				qIndex: 5,
				question:
					"What cell number is Leah Organa in when Luke and Han rescue her from the Death Star (Hint: It is also Finn's Stormtrooper ID number)?",
				correctAns: '2187',
				multChoice: ['7567', '5555', '2187', '2224', '1409'],
			},
			{
				qIndex: 6,
				question: "What is Luke Skywalker's callsign at the Battle of Yavin?",
				correctAns: 'Red-5',
				multChoice: ['Blue-2', 'Red-5', 'Green-7', 'Black-Leader', 'Gold-1'],
			},
			{
				qIndex: 7,
				question:
					'Which was not a ship taking part in the Rebel attack over Endor?',
				correctAns: 'K-Wing',
				multChoice: ['X-Wing', 'Y-Wing', 'B-Wing', 'A-Wing', 'K-Wing'],
			},
			{
				qIndex: 8,
				question:
					'What creature do Tusken Raiders ride in the deserts of Tatooine?',
				correctAns: 'Bantha',
				multChoice: ['Tauntaun', 'Bantha', 'Acklay', 'Grinjer', 'Boga'],
			},
			{
				qIndex: 9,
				question: "Which Sith Lord created the 'Rule of Two'?",
				correctAns: 'Darth Plagueis',
				multChoice: [
					'Darth Bane',
					'Darth Revan',
					'Darth Sidious',
					'Darth Tyranus',
					'Darth Plagueis',
				],
			},
		],
	},
	{
		title: 'Lord of the Rings',
		image: 'lotrImage',
		cardClass: 'lotrCard',
		id: 'lordoftherings',
		questions: [
			{
				qIndex: 0,
				question: 'What is the name of the innkeep at The Prancing Pony?',
				correctAns: 'Barliman Butterbur',
				multChoice: [
					'Barliman Butterbur',
					'Tom Bombadil',
					'Farmer Maggot',
					'Fatty Bolger',
					'Bill Ferny',
				],
			},
			{
				qIndex: 1,
				question: "What was the name of Sauron's fortress in Mordor?",
				correctAns: 'Barad-Dur',
				multChoice: [
					'Orthanc',
					'Barad-Dur',
					'Cirith Ungol',
					'Dor Lomon',
					'Angrod',
				],
			},
			{
				qIndex: 2,
				question:
					"Who wrote the poem 'All that is gold does not glitter, Not all those who wander are lost'?",
				correctAns: 'Bilbo Baggins',
				multChoice: [
					'Thorin Oakenshield',
					'Arwen Undomiel',
					'Bilbo Baggins',
					'Merry Brandybuck',
					'Luthien Tinuviel',
				],
			},
			{
				qIndex: 3,
				question:
					'What is the name of the Great River that the Fellowship rows down after leaving Lothlorien?',
				correctAns: 'Anduin',
				multChoice: ['Celduin', 'Isen', 'Bruinen', 'Anduin', 'Entwash'],
			},
			{
				qIndex: 4,
				question:
					"Who cut the One Ring from Sauron's hand during the Battle of the Last Alliance?",
				correctAns: 'Isildur',
				multChoice: ['Elendil', 'Arathorn', 'Beren', 'Isildur', 'Elrond'],
			},
			{
				qIndex: 5,
				question: 'Who is Shelob the last child of?',
				correctAns: 'Ungoliant',
				multChoice: ['Melkor', 'Yavanna', 'Melian', 'Nienna', 'Ungoliant'],
			},
			{
				qIndex: 6,
				question: "What is the name of Gandalf's sword?",
				correctAns: 'Glamdring',
				multChoice: ['Anduril', 'Orcrist', 'Glamdring', 'Gurthang', 'Herugrim'],
			},
			{
				qIndex: 7,
				question: "What is the date of Bilbo's and Frodo's birthday?",
				correctAns: 'September 22nd',
				multChoice: [
					'September 22nd',
					'October 24th',
					'August 1st',
					'April 9',
					'June 18th',
				],
			},
			{
				qIndex: 8,
				question:
					'At the end of Return of the King, who bore the Three Elvish Rings?',
				correctAns: 'Elrond, Galadriel, and Gandalf',
				multChoice: [
					'Aragorn, Arwen, and Galadriel',
					'Bilbo, Cidan, and Celebrimbor',
					'Galadriel, Celeborn, and Glorfindel',
					'Elrond, Galadriel, and Gandalf',
					'Vilya, Nenya, and Narya',
				],
			},
			{
				qIndex: 9,
				question:
					'How old is Frodo when he sets out from the Shire with the Ring?',
				correctAns: '50',
				multChoice: ['25', '33', '41', '50', '67'],
			},
		],
	},
	{
		title: 'Game of Thrones',
		image: 'gotImage',
		cardClass: 'gotCard',
		id: 'gameofthrones',
		questions: [
			{
				qIndex: 0,
				question: "Who was Jon Snow's father?",
				correctAns: 'Rhaegar Targaryen',
				multChoice: [
					'Gerold Hightower',
					'Rhaegar Targaryen',
					'Robert Baratheon',
					'Eddard Stark',
					'Balon Greyjoy',
				],
			},
			{
				qIndex: 1,
				question: 'To which house was Maester Aemon born?',
				correctAns: 'Targaryen',
				multChoice: ['Targaryen', 'Tyrell', 'Hightower', 'Dayne', 'Stark'],
			},
			{
				qIndex: 2,
				question: "What was the actual name of the 'Mad King'?",
				correctAns: 'Aerys II',
				multChoice: [
					'Aegon IV',
					'Aenys I',
					'Jaehaerys I',
					'Viserys II',
					'Aerys II',
				],
			},
			{
				qIndex: 3,
				question: 'In which town is the Citadel where Maesters train?',
				correctAns: 'Oldtown',
				multChoice: [
					'Braavos',
					'Oldtown',
					'Molestown',
					'Fairmarket',
					'White Harbor',
				],
			},
			{
				qIndex: 4,
				question:
					"What does a Valyrian Steel link signify on a Maester's chain?",
				correctAns: 'Higher Mysteries',
				multChoice: [
					'Warcraft',
					'Medicine',
					'Ravenry',
					'Higher Mysteries',
					'Astronomy',
				],
			},
			{
				qIndex: 5,
				question:
					'Who did Robb Stark execute for killing the Lannister prisoners?',
				correctAns: 'Rickard Karstark',
				multChoice: [
					'Wendel Manderly',
					'Robin Flint',
					'Donnel Locke',
					'Smalljon Umber',
					'Rickard Karstark',
				],
			},
			{
				qIndex: 6,
				question: 'What is the name of the sword of House Dayne?',
				correctAns: 'Dawn',
				multChoice: ['Heartsbane', 'Ice', 'Dawn', 'Dark Sister', 'Blackfyre'],
			},
			{
				qIndex: 7,
				question: 'Which is not an aspect of The Seven?',
				correctAns: 'The Child',
				multChoice: [
					'The Stranger',
					'The Crone',
					'The Smith',
					'The Child',
					'The Warrior',
				],
			},
			{
				qIndex: 8,
				question: 'Where are people infected with Greyscale sent?',
				correctAns: 'Valyria',
				multChoice: ['Valyria', 'Braavos', 'Astapor', 'Lhazar', 'Qarth'],
			},
			{
				qIndex: 9,
				question: "What was the name of Aegon the Conqueror's dragon?",
				correctAns: 'Balerion',
				multChoice: ['Seasmoke', 'Meraxes', 'Dreamfyre', 'Balerion', 'Vhagar'],
			},
		],
	},
	{
		title: 'Marvel Cinematic Universe',
		image: 'mcuImage',
		cardClass: 'mcuCard',
		id: 'mcu',
		questions: [
			{
				qIndex: 0,
				question: 'Which high school does Peter Parker attend?',
				correctAns: 'Midtown School of Science and Technology',
				multChoice: [
					'Queens High School for the Sciences',
					'Midtown School of Science and Technology',
					'Staten Island Technical High School',
					'Brooklyn Technical High School',
					'Bronx High School of Science',
				],
			},
			{
				qIndex: 1,
				question:
					'At the end of Iron Man, what material is the Iron Man suit made from?',
				correctAns: 'Gold-Titanium Alloy',
				multChoice: [
					'Cubic Zirconium',
					'Chrome-plated Iron',
					'Vibranium',
					'Gold-Titanium Alloy',
					'Nickel-Cobalt Alloy',
				],
			},
			{
				qIndex: 2,
				question: 'What New Mexico town does Thor arrive in?',
				correctAns: 'Puente Antiguo',
				multChoice: [
					'San Ysidro',
					'Puente Antiguo',
					'Alamogordo',
					'Folsom',
					'Jemez Springs',
				],
			},
			{
				qIndex: 3,
				question:
					'What was the name of the boat on which Captain America first fights Batroc?',
				correctAns: 'Lemurian Star',
				multChoice: [
					'USS Emerson',
					'S.S. Recovery',
					'Lemurian Star',
					'Conquistador',
					'HMS Albion',
				],
			},
			{
				qIndex: 4,
				question: 'What is the name of the Kree homeworld?',
				correctAns: 'Hala',
				multChoice: ['Contraxia', 'Alfheim', 'Morag', 'Hala', 'Spartax'],
			},
			{
				qIndex: 5,
				question:
					'What is the name of the prison that the Guardians of the Galaxy escape from?',
				correctAns: 'The Kyln',
				multChoice: [
					'The Kyln',
					'The Milano',
					'The Raft',
					'The Fridge',
					'The Slingshot',
				],
			},
			{
				qIndex: 6,
				question: 'In which order does Thanos assemble the Infinity Stones?',
				correctAns: 'Power-Space-Reality-Soul-Time-Mind',
				multChoice: [
					'Soul-Time-Mind-Reality-Space-Power',
					'Time-Space-Power-Soul-Space-Mind',
					'Reality-Space-Time-Mind-Soul-Power',
					'Mind-Power-Reality-Soul-Space-Time',
					'Power-Space-Reality-Soul-Time-Mind',
				],
			},
			{
				qIndex: 7,
				question:
					"What is the name of the Dora Milaje who helped Bucky Barnes remove Hydra's programming?",
				correctAns: 'Ayo',
				multChoice: ['Nomble', 'Ayo', 'Yama', 'Okoye', 'Xoliswa'],
			},
			{
				qIndex: 8,
				question:
					'In how many Marvel Cinematic Universe films has Nick Fury appeared?',
				correctAns: '11',
				multChoice: ['4', '8', '19', '11', '14'],
			},
			{
				qIndex: 9,
				question:
					"In Black Widow, Yelena mistakenly calls Alexei by which superhero's name?",
				correctAns: 'Crimson Dynamo',
				multChoice: [
					'Crimson Dynamo',
					'Northstar',
					'Sasquach',
					'Darkstar',
					'Sputnik',
				],
			},
		],
	},
	{
		title: 'Dungeons & Dragons',
		image: 'ddImage',
		cardClass: 'ddCard',
		id: 'd&d',
		questions: [
			{
				question: 'When can monsters use Legendary Actions?',
				correctAns: "At the end of any other creature's turn",
				multChoice: [
					'At any point during its turn',
					'At the beginning of its own turn',
					"At the end of any other creature's turn",
					'On player turns immediately after being attacked',
					'At the beginning of each round',
				],
			},
			{
				question: 'Unicorns are immune to which damage type?',
				correctAns: 'Poison',
				multChoice: ['Poison', 'Fire', 'Necrotic', 'Cold', 'Acid'],
			},
			{
				question:
					'Which of the following is not a Metamagic option for Sorcerers?',
				correctAns: 'Beguiling Spell',
				multChoice: [
					'Distant Spell',
					'Quickened Spell',
					'Twinned Spell',
					'Heightened Spell',
					'Beguiling Spell',
				],
			},
			{
				question:
					'At what spell slot level does Dispel Magic work automatically?',
				correctAns: '4',
				multChoice: ['8', '5', '4', '2', '7'],
			},
			{
				question: 'At what age do Tortles reach adulthood?',
				correctAns: '15',
				multChoice: ['27', '21', '15', '5', '39'],
			},
			{
				question:
					'What effect does 4 levels of Exhaustion have on a character?',
				correctAns: 'Hit Point Maximum Halved',
				multChoice: [
					'Hit Point Maximum Halved',
					'Disadvantage on Ability Checks',
					'Speed Reduced to 0',
					'Speed Halved',
					'Disadvantage on Attack Rolls and Saving Throws',
				],
			},
			{
				question: 'How many wildshapes can a Druid use per day at level 18?',
				correctAns: '2',
				multChoice: ['4', '2', '9', '18', '12'],
			},
			{
				question: 'At what level can a Cleric use Divine Intervention?',
				correctAns: '10',
				multChoice: ['5', '18', '15', '10', '20'],
			},
			{
				question: 'What bonus does 3/4 cover give?',
				correctAns: '+5 bonus to AC and Dexterity Saving Throws',
				multChoice: [
					'Cannot be targeted by attack or spell',
					'+2 bonus to AC and Dexterity Saving Throws',
					'+3 to Stealth Ability Checks',
					'-5 to perception checks to see the character',
					'+5 bonus to AC and Dexterity Saving Throws',
				],
			},
			{
				question:
					"Which card from the Deck of Many Things has this effect: 'Every magic item you wear or carry disintegrates. Artifacts in your possession aren't destroyed but do vanish?",
				correctAns: 'Talons',
				multChoice: ['Talons', 'Flames', 'Moon', 'Vizier', 'Comet'],
			},
		],
	},
];

export default quizData;
