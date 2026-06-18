
export const Formats: import('../sim/dex-formats').FormatList = [
	{
		section: "Potassium",
	},
	{
		name: "Potassium Extended OU",
		mod: 'gen9',
		ruleset: ['Standard NatDex', 'Terastal Clause'],
		banlist: ['Uber', 'AG', 'Moody', 'King\'s Rock', 'Razor Fang','Froakie','Frogadier','Greninja','Greninja-Bond'],
	},
	{
		name: "Potassium Extended Doubles OU",
		mod: 'gen9',
		gameType: 'doubles',
		ruleset: ['Standard Doubles', 'NatDex Mod','Terastal Clause'],
		banlist: ['DUber','Froakie','Frogadier','Greninja','Greninja-Bond'],
	},
	{
		name: "Custom Game",
		mod: 'gen9',
		searchShow: false,
		debug: true,
		battle: { trunc: Math.trunc },
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 100', 'NatDex Mod'],
	},
	{
		name: "Potatium VGC Minimal",

		mod: 'gen9',
		gameType: 'doubles',
		searchShow: false,
		bestOfDefault: true,
		ruleset: ['Flat Rules', '!! Adjust Level = 50', 'VGC Timer', 'Open Team Sheets', 'Force Open Team Sheets', 'Best of = 3'],
		banlist: ['Sub-Legendary','Froakie','Frogadier','Greninja'],
	},
	{
		name: "Potatium VGC Regular",

		mod: 'gen9',
		gameType: 'doubles',
		searchShow: false,
		bestOfDefault: true,
		ruleset: ['Flat Rules', '!! Adjust Level = 50', 'VGC Timer', 'Open Team Sheets', 'Force Open Team Sheets', 'Best of = 3'],
		banlist: ['Froakie','Frogadier','Greninja'],
	},
	{
		name: "Potatium VGC Restricted",

		mod: 'gen9',
		gameType: 'doubles',
		searchShow: false,
		bestOfDefault: true,
		ruleset: ['Flat Rules', '!! Adjust Level = 50', 'VGC Timer', 'Open Team Sheets', 'Limit Two Restricted', 'Force Open Team Sheets', 'Best of = 3', 'Limit Two Restricted'],
		restricted: ['Restricted Legendary', 'Mythical'],
		banlist: ['Froakie','Frogadier','Greninja'],
	},
	
]


