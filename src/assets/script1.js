class PassWordGenerator {
	constructor() {
		this.charSets = {
			uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
			lowercase: "abcdefghijklmnopqrstuvwxyz",
			numbers: "0123456789",
			symbols: "!@#$%^&*()_+",
		};
		this.wordList = {
			funny: [
				"Bananarama",
				"BoingBoing",
				"BubbleWrap",
				"ChocoLoco",
				"DoodleBug",
				"FunkyMonkey",
				"GoofyGoober",
				"HulaHoop",
				"JellyBelly",
				"LoonyToon",
				"MooMoo",
				"NoodleDoodle",
				"OopsyDaisy",
				"PeekaBoo",
				"QuackQuack",
				"RazzleDazzle",
				"SillySocks",
				"TaterTot",
				"UpsyDaisy",
				"WackyTacky",
				"YoloSwag",
				"ZigZag",
				"WobbleWobble",
				"Bumblebee",
				"GigglePuff",
				"TickleMonster",
				"Fluffernutter",
				"BoogerFace",
				"DizzyWizzy",
				"Snickerdoodle",
				"SqueezyCheese",
				"Chuckleberry",
				"PuddingPop",
				"LumpyDump",
				"SquishyFishy",
				"DoodleSnarf",
				"WiggleWaggle",
				"BorkBork",
				"FizzleWizzle",
				"MuffinTop",
				"WackyWobble",
				"MooJuice",
				"GooberGoof",
				"SizzlePop",
				"PogoStick",
				"TootyFruity",
				"ChocoMuffin",
				"ZoodleDoodle",
				"BlubberNugget",
				"FunkyBunny",
				"WhoopeeCushion",
				"DingleBerry",
				"PineapplePizza",
				"SillyNoodle",
				"ZebraPants",
				"WaffleTaco",
				"TacoTuesday",
				"NoodleMuffin",
				"FizzyLemon",
				"DizzyDoodle",
				"BingoBango",
				"CheeseSneeze",
				"MangoJango",
				"FartSneeze",
				"GigglyBiscuit",
				"SnappyTurtle",
				"MuffinPuffin",
				"SneezyPudding",
				"TunaToaster",
				"JumpyJack",
				"WobbleWaffle",
				"SlappyNoodle",
				"YodelBurger",
				"GibberishGoat",
				"ChonkyCheeks",
				"DoodleToots",
				"WackyPickle",
				"GummyBearHug",
				"TwirlyFry",
				"HiccupFluff",
				"GooeyLouie",
				"ZonkyBop",
				"PogoPanda",
				"LollyGag",
				"NoodleWiggle",
				"ChubbyBunny",
				"GoofyPants",
				"LoopyLemon",
				"BoogieWoogie",
				"DizzyLlama",
				"QuirkyTurkey",
				"SlimeMuffin",
				"TwinkleToes",
				"TaterMcFluff",
				"WackyDucky",
				"BubbleSprout",
				"QuackyMcQuack",
				"MooMooPants",
				"FunkyTater",
				"JellyJammy",
				"SneezyLlama",
				"FuzzyPickle",
				"WobbleSquash",
				"TootyMcBooty",
				"SnortyTurtle",
			],
			cool: [
				"Shadow",
				"Blaze",
				"Vortex",
				"Neon",
				"Stealth",
				"Phantom",
				"Rogue",
				"Glitch",
				"Cipher",
				"Nova",
				"Zenith",
				"Oblivion",
				"Havoc",
				"Specter",
				"Astral",
				"Onyx",
				"Mystic",
				"Hyper",
				"Drift",
				"Titan",
				"Echo",
				"Cyber",
				"Solar",
				"Quantum",
				"Storm",
				"Frost",
				"Ember",
				"Venom",
				"Pulse",
				"Inferno",
				"Striker",
				"Zen",
				"Warp",
				"Flux",
				"Steeler",
				"Mirage",
				"Lunar",
				"Abyss",
				"Stellar",
				"Orion",
				"Nebula",
				"Thunder",
				"Fury",
				"Pyro",
				"Glacier",
				"Spartan",
				"Horizon",
				"Vertex",
				"Tornado",
				"Radiant",
				"Velocity",
				"Catalyst",
				"Exodus",
				"Gravity",
				"Spectra",
				"Nitro",
				"Eclipse",
				"Saber",
				"Raven",
				"ShadowX",
				"Falcon",
				"Aether",
				"Wraith",
				"DragonX",
				"Arctic",
				"Voltage",
				"Infernal",
				"Gladius",
				"Xenon",
				"Helix",
				"Eon",
				"Typhoon",
				"QuantumX",
				"Stratos",
				"Nimbus",
				"Nocturne",
				"Apex",
				"EmberX",
				"Turbo",
				"OblivionX",
				"Arcane",
				"Reaper",
				"Crimson",
				"Phoenix",
				"Juggernaut",
				"Omen",
				"Zero",
				"PulseX",
				"Titanium",
				"Neptune",
				"Ignite",
				"Pandora",
				"Paradox",
				"HavocX",
				"Synth",
				"Circuit",
				"Dagger",
				"Sonic",
				"Tempest",
				"Quasar",
				"Nyx",
				"Zion",
				"Rift",
				"Void",
				"ChaosX",
				"Spectral",
				"Drakon",
				"Zypher",
				"Strider",
				"Celestial",
			],
		};
		this.settings = {
			length: 8,
			uppercase: true,
			lowercase: true,
			numbers: true,
			symbols: true,
			funny: false,
			cool: false,
		};
	}
	updateSettings(newSettings) {
		this.settings = { ...this.settings, ...newSettings };
	}

	getRandomChar(str) {
		return str.charAt(Math.floor(Math.random() * str.length));
	}
	getRandomWord(type) {
		const words = this.wordList[type];
		return words[Math.floor(Math.random() * words.length)];
	}
	generatePassword() {
		let password = "";
		const options = this.getActiveOptions();
		if (this.settings.funny || this.settings.cool) {
			return this.generateWordsPassword();
		}
		return this.generateCharsPassword();
	}

	getActiveOptions() {
		return Object.entries(this.settings)
			.filter(([key, value]) => value && this.charSets[key])
			.map(([key]) => key);
	}
	generateCharsPassword() {
		let charPool = "";
		for (const [key, value] of Object.entries(this.settings)) {
			if (value && this.charSets[key]) {
				charPool += this.charSets[key];
			}
		}
		if (charPool === "") {
			charPool =
				this.charSets.uppercase +
				this.charSets.lowercase +
				this.charSets.numbers +
				this.charSets.symbols;
		}

		let password = "";
		for (let i = 0; i < this.settings.length; i++) {
			password += this.getRandomChar(charPool);
		}
		return password;
	}

	generateWordsPassword() {
		const type = this.settings.funny ? "funny" : "cool";
		let password = this.getRandomWord(type);
		if (password.length < this.settings.length) {
			const remainingLength = this.settings.length - password.length;
			let charPool = "";
			for (const [key, value] of Object.entries(this.settings)) {
				if (value && key !== "funny" && key !== "cool") {
					charPool += this.charSets[key];
				}
			}
			if (charPool) {
				for (let i = 0; i < remainingLength; i++) {
					password += this.getRandomChar(charPool);
				}
			} else {
				const wordChars =
					type === "funny" ? this.wordList.funny : this.wordList.cool;
				for (let i = 0; i < remainingLength; i++) {
					password += this.getRandomWord(wordChars);
				}
			}
		} else if (password.length > this.settings.length) {
			password = password.slice(0, this.settings.length);
		}
		return password;
	}
}
class PasswordGeneratorUI {
	constructor() {
		this.passwordGenerator = new PassWordGenerator();
		this.Elems();
		this.Events();
		this.generatePassword();
	}
	Elems() {
		this.elements = {
			generatedPassword: document.querySelector("#generatedPassword"),
			copyBtn: document.querySelector(".copy-btn"),
			//notification-bar
			notification: document.querySelector(".notification"),
			//length-slider
			lengthSlider: document.querySelector("#lengthSlider"),
			lengthValue: document.querySelector("#lengthValue"),
			//password-options
			generateBtn: document.querySelector(".generate-btn"),
			checkboxes: {
				uppercase: document.querySelector("#uppercase"),
				lowercase: document.querySelector("#lowercase"),
				numbers: document.querySelector("#numbers"),
				symbols: document.querySelector("#symbols"),
				funny: document.querySelector("#funny"),
				cool: document.querySelector("#cool"),
			},
		};
	}
	Events() {
		this.elements.lengthSlider.addEventListener("input", (e) => {
			this.updateLength(e.target.value);
		});
		Object.entries(this.elements.checkboxes).forEach(([key, checkbox]) => {
			checkbox.addEventListener("change", () => {
				if (key === "funny" && checkbox.checked) {
					this.elements.checkboxes.cool.checked = false;
				} else if (key === "cool" && checkbox.checked) {
					this.elements.checkboxes.funny.checked = false;
				}

				this.updateSettings();
			});
		});

		this.elements.generateBtn.addEventListener("click", () =>
			this.generatePassword()
		);
		this.elements.copyBtn.addEventListener("click", () => {
			this.copyToClipboard();
		});
	}
	updateLength(value) {
		this.passwordGenerator.settings.length = parseInt(value);
		this.elements.lengthValue.textContent = value;
	}
	updateSettings() {
		const newSettings = {};
		Object.entries(this.elements.checkboxes).forEach(([key, checkbox]) => {
			newSettings[key] = checkbox.checked;
		});
		this.passwordGenerator.updateSettings(newSettings);
	}

	generatePassword() {
		const password = this.passwordGenerator.generatePassword();
		this.elements.generatedPassword.value = password;
	}

	copyToClipboard() {
		const password = this.elements.generatedPassword.value;
		if (!password) return;

		navigator.clipboard.writeText(password).then(() => {
			this.elements.notification.classList.remove("hidden");
			this.elements.notification.classList.add("flex");
			setTimeout(() => {
				this.elements.notification.classList.remove("flex");
				this.elements.notification.classList.add("hidden");
			}, 3000);
		});
	}
}

document.addEventListener("DOMContentLoaded", () => {
	const passwordApp = new PasswordGeneratorUI();
});
