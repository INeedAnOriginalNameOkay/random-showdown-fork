
export const Formats: import('../sim/dex-formats').FormatList = [
	{
		section: "Potassium",
	},
	{
		name: "Potassium Extended OU",
		mod: 'gen9',
		ruleset: ['Standard NatDex', 'Evasion Abilities Clause'],
		banlist: ['Uber', 'AG', 'Moody', 'King\'s Rock', 'Razor Fang', 'Terastal Clause'],
	},
	{
		name: "Potassium Extended Doubles OU",
		mod: 'gen9',
		gameType: 'doubles',
		ruleset: ['Standard Doubles', 'NatDex Mod','Evasion Abilities Clause'],
		banlist: ['DUber', 'Terastal Clause'],
	},

	
]
