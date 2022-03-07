const quizData = [
	{
		catTitle: 'Harry Potter',
		catImage: 'hpImage',
		questions: [
			{
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
				question:
					'Which of these was not a monster that Harry faced in the maze in the Third Task of the Triwizard Tournament?',
				correctAns: 'Grindylow',
				multChoice: ['Sphinx', 'Skrewt', 'Boggart', 'Grindylow', 'Spider'],
			},
			{
				question: "What is Percy's Owl's Name?",
				correctAns: 'Hermes',
				multChoice: ['Hermes', 'Errol', 'Abraxas', 'Arnold', 'Roonil'],
			},
			{
				question: "What form was Ernie Macmillan's Patronus?",
				correctAns: 'Boar',
				multChoice: ['Hare', 'Otter', 'Thestral', 'Rat', 'Boar'],
			},
			{
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
				question: "How many O.W.L.'s did Hermione receive?",
				correctAns: '10',
				multChoice: ['11', '14', '13', '10', '21'],
			},
			{
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
				question: 'How many staircases are there at Hogwarts?',
				correctAns: '142',
				multChoice: ['68', '394', '188', '208', '142'],
			},
		],
  },
  {
    catTitle: "Star Wars",
    catImage: 'swImage',
    questions: [
      {
        question: 'What model is the Millennium Falcon?',
        correctAns: 'Corellian YT-1300f Light Freighter',
        multChoice: ["Corellian CR90 Corvette", "Kuat EF76 Nebulon-B Escort Frigate", "Corellian YT-1300f Light Freighter", "ST-70 Assault Ship", "Corellian VCX0-100 Light Freighter"],
      },
      {
        question: "What is the name of the Wookie home planet?",
        correctAns: 'Kashyyyk',
        multChoice: ["Endor", "Kashyyyk", "Ilum", "Dathomir", "Crait"],
      },
      {
        question: 'What species is Ahsoka Tano?',
        correctAns: 'Togruta',
        multChoice: ["Togruta", "Zabrak", "Twi'lek", "Rodian", "Iktochi"],
      },
      {
        question: 'On which planet did Darth Vader establish his base?',
        correctAns: "Mustafar",
        multChoice: ["Crait", "Jedha", "Naboo", "Utapau", "Mustafar"],
      },
      {
        question: 'According to Dexter Jettser in Attack of the Clones, what do the analysis droids at the Jedi temple focus on?',
        correctAns: 'Symbols',
        multChoice: ["Smell", "Materials", "Particulate Matter", "Symbols", "Digital Cookies"],
      },
      {
        question: "What cell number is Leah Organa in when Luke and Han rescue her from the Death Star (Hint: It is also Finn's Stormtrooper ID number)?",
        correctAns: "2187",
        multChoice: ["7567", "5555", "2187", "2224", "1409"],
      },
      {
        question: "What is Luke Skywalker's callsign at the Battle of Yavin?",
        correctAns: "Red-5",
        multChoice: ["Blue-2", "Red-5", "Green-7", "Black-Leader", "Gold-1"],
      },
      {
        question: "Which was not a ship taking part in the Rebel attack over Endor?",
        correctAns: "K-Wing",
        multChoice: ["X-Wing", "Y-Wing", "B-Wing", "A-Wing", "K-Wing"],
      },
      {
        question: "What creature do Tusken Raiders ride in the deserts of Tatooine?",
        correctAns: "Bantha",
        multChoice: ["Tauntaun", "Bantha", "Acklay", "Grinjer", "Boga"],
      },
      {
        question: "Which Sith Lord created the 'Rule of Two'?",
        correctAns: "Darth Plagueis",
        multChoice: ["Darth Bane", "Darth Revan", "Darth Sidious", "Darth Tyranus", "Darth Plagueis"],
      },
    ]
  },
  {
    catTitle: "Lord of the Rings",
    catImage: 'lotrImage',
    questions: [
      {
        question: "What is the name of the innkeep at The Prancing Pony?",
        correctAns: "Barliman Butterbur",
        multChoice: ["Barliman Butterbur", "Tom Bombadil", "Farmer Maggot", "Fatty Bolger", "Bill Ferny"],
      },
      {
        question: "What was the name of Sauron's fortress in Mordor?",
        correctAns: "Barad-Dur",
        multChoice: ["Orthanc", "Barad-Dur", "Cirith Ungol", "Dor Lomon", "Angrod"],
      },
      {
        question: "Who wrote the poem 'All that is gold does not glitter, Not all those who wander are lost'?",
        correctAns: "Bilbo Baggins",
        multChoice: ["Thorin Oakenshield", "Arwen Undomiel", "Bilbo Baggins", "Merry Brandybuck", "Luthien Tinuviel"],
      },
      {
        question: "What is the name of the Great River that the Fellowship rows down after leaving Lothlorien?",
        correctAns: "Anduin",
        multChoice: ["Celduin", "Isen", "Bruinen", "Anduin", "Entwash"],
      },
      {
        question:  "Who cut the One Ring from Sauron's hand during the Battle of the Last Alliance?",
        correctAns: "Isildur",
        multChoice:  ["Elendil", "Arathorn", "Beren", "Isildur", "Elrond"],
      },
      {
        question: "Who is Shelob the last child of?",
        correctAns: "Ungoliant",
        multChoice: ["Melkor", "Yavanna", "Melian", "Nienna", "Ungoliant"],
      },
      {
        question: "What is the name of Gandalf's sword?",
        correctAns: "Glamdring",
        multChoice:  ["Anduril", "Orcrist", "Glamdring", "Gurthang", "Herugrim"],
      },
      {
        question: "What is the date of Bilbo's and Frodo's birthday?",
        correctAns: "September 22nd",
        multChoice: ["September 22nd", "October 24th", "August 1st", "April 9", "June 18th"],
      },
      {
        question: "At the end of Return of the King, who bore the Three Elvish Rings?",
        correctAns: "Elrond, Galadriel, and Gandalf",
        multChoice: ["Aragorn, Arwen, and Galadriel", "Bilbo, Cidan, and Celebrimbor", "Galadriel, Celeborn, and Glorfindel", "Elrond, Galadriel, and Gandalf", "Vilya, Nenya, and Narya"],
      },
      {
        question: "How old is Frodo when he sets out from the Shire with the Ring?",
        correctAns: "50",
        multChoice: ["25", "33", "41", "50", "67"],
      },
    ]
  },
  {
    catTitle: "Game of Thrones",
    catImage: 'gotImage',
    questions: [
      {
        question: "Who was Jon Snow's father?",
        correctAns: "Rhaegar Targaryen",
        multChoice: ["Gerold Hightower", "Rhaegar Targaryen", "Robert Baratheon", "Eddard Stark", "Balon Greyjoy"],
      },
      {
        question: "To which house was Maester Aemon born?",
        correctAns: "Targaryen",
        multChoice: ["Targaryen", "Tyrell", "Hightower", "Dayne", "Stark"],
      },
      {
        question: "What was the actual name of the 'Mad King'?",
        correctAns: "Aerys II",
        multChoice: ["Aegon IV", "Aenys I", "Jaehaerys I", "Viserys II", "Aerys II"],
      },
      {
        question: "In which town is the Citadel where Maesters train?",
        correctAns: "Oldtown",
        multChoice: ["Braavos", "Oldtown", "Molestown", "Fairmarket", "White Harbor"],
      },
      {
        question: "What does a Valyrian Steel link signify on a Maester's chain?",
        correctAns: "Higher Mysteries",
        multChoice: ["Warcraft", "Medicine", "Ravenry","Higher Mysteries", "Astronomy"],
      },
      {
        question: "Who did Robb Stark execute for killing the Lannister prisoners?",
        correctAns: "Rickard Karstark",
        multChoice: ["Wendel Manderly", "Robin Flint", "Donnel Locke", "Smalljon Umber", "Rickard Karstark"],
      },
      {
        question: "What is the name of the sword of House Dayne?",
        correctAns: "Dawn",
        multChoice: ["Heartsbane", "Ice", "Dawn", "Dark Sister", "Blackfyre"],
      },
      {
        question: "Which is not an aspect of The Seven?",
        correctAns: "The Child",
        multChoice: ["The Stranger", "The Crone", "The Smith", "The Child", "The Warrior"],
      },
      {
        question: "Where are people infected with Greyscale sent?",
        correctAns: "Valyria",
        multChoice: ["Valyria", "Braavos", "Astapor", "Lhazar", "Qarth"],
      },
      {
        question: "What was the name of Aegon the Conqueror's dragon?",
        correctAns: "Balerion",
        multChoice: ["Seasmoke", "Meraxes", "Dreamfyre", "Balerion", "Vhagar"],
      },
    ]
  },
  {
    catTitle: "Marvel Cinematic Universe",
    catImage: 'mcuImage',
    questions: [
      {
        question: '',
        correctAns: '',
        multChoice: [],
      },
      {
        question: '',
        correctAns: '',
        multChoice: [],
      },
      {
        question: '',
        correctAns: '',
        multChoice: [],
      },
      {
        question: '',
        correctAns: '',
        multChoice: [],
      },
      {
        question: '',
        correctAns: '',
        multChoice: [],
      },
      {
        question: '',
        correctAns: '',
        multChoice: [],
      },
      {
        question: '',
        correctAns: '',
        multChoice: [],
      },
      {
        question: '',
        correctAns: '',
        multChoice: [],
      },
      {
        question: '',
        correctAns: '',
        multChoice: [],
      },
      {
        question: '',
        correctAns: '',
        multChoice: [],
      },
    ]
  },
  {
    catTitle: "Dungeons & Dragons",
    catImage: 'ddImage',
    questions: [
      {
        question: '',
        correctAns: '',
        multChoice: [],
      },
      {
        question: '',
        correctAns: '',
        multChoice: [],
      },
      {
        question: '',
        correctAns: '',
        multChoice: [],
      },
      {
        question: '',
        correctAns: '',
        multChoice: [],
      },
      {
        question: '',
        correctAns: '',
        multChoice: [],
      },
      {
        question: '',
        correctAns: '',
        multChoice: [],
      },
      {
        question: '',
        correctAns: '',
        multChoice: [],
      },
      {
        question: '',
        correctAns: '',
        multChoice: [],
      },
      {
        question: '',
        correctAns: '',
        multChoice: [],
      },
      {
        question: '',
        correctAns: '',
        multChoice: [],
      },
    ]
  },
];

export {
  quizData
}  
