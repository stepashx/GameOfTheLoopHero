const main = document.getElementById('main')

let data = {
    nicknames: [],
    isBot: []
}

function CreateEnterMenu() {
    const screen = document.createElement('div')
    screen.classList.add('screen')
    const enter_menu = document.createElement('div')
    enter_menu.classList.add('enter_menu')
    const logo = document.createElement('div')
    logo.classList.add('logo')
    const logoImg = document.createElement('img')
    logoImg.src = "images/Logo.png";
    logoImg.alt = "logo";
    logo.append(logoImg);
    const begin_game = document.createElement('div')
    begin_game.classList.add('begin_game')
    const begin_game_img = document.createElement('img')
    begin_game_img.src = "images/enterInGame.png"
    begin_game_img.alt = "enterInGame"
    begin_game_img.classList.add("enter_in_game")
    begin_game.onclick = CreateLobbyMenu
    begin_game.append(begin_game_img)
    enter_menu.append(logo)
    enter_menu.append(begin_game)
    screen.append(enter_menu)
    main.append(screen)
}

function CreateLobbyMenu() {
    const screen = document.createElement('div')
    screen.classList.add('screen')
    const enter_menu = document.createElement('div')
    enter_menu.classList.add('enter_menu')
    const logo_div = document.createElement('div')
    const logo = document.createElement('img')
    logo.src = "images/Logo.png"
    logo_div.append(logo)
    const chooseYourHero = document.createElement('div')
    chooseYourHero.classList.add('choose_your_hero')
    const heroes = document.createElement('div')
    heroes.classList.add("heroes")
    const link = ["./images/femaleCharacter.png",
        "./images/feamaleAfroamericanCharacter.png",
        "./images/maleCharacter.png",
        "./images/maleAfroamericanCharacter.png"]
    for (let i = 0; i < 4; i++) {
        const hero = document.createElement('div')
        hero.classList.add('hero')
        const nickname = document.createElement('div')
        nickname.classList.add('nickname')
        const input = document.createElement('input')
        input.type = "text"
        input.placeholder = "Никнейм"
        input.classList.add("nickname_input")
        nickname.append(input)
        const bot = document.createElement('div')
        bot.classList.add('bot')
        const bot_check = document.createElement('div')
        bot_check.classList.add("bot_check")
        const input_check = document.createElement('input')
        input_check.type = "checkbox"
        const bot_text = document.createElement('div')
        bot_text.classList.add('bot_text')
        bot_text.textContent = "Бот"
        bot_check.append(input_check)
        bot_check.append(bot_text)
        bot.append(bot_check)
        const img = document.createElement('img')
        img.src = link[i]
        img.classList.add('hero_img')
        hero.append(nickname)
        hero.append(bot)
        hero.append(img)
        heroes.append(hero)
    }
    const create_game = document.createElement('div')
    create_game.classList.add('create_game')
    create_game.onclick = () => {
        for (let i = 0; i < 4; i++) {
            if (heroes.children[i].children[0].children[0].value !== "") {
                data['nicknames'][i] = heroes.children[i].children[0].children[0].value
            } else {
                data['nicknames'][i] = "Player" + (i + 1).toString()
            }
            data['isBot'][i] = heroes.children[i].children[1].children[0].children[0].checked
        }
        launch();
    }
    const button = document.createElement('div')
    button.classList.add('button')
    button.classList.add('auth')
    button.textContent = "Создать игру"
    create_game.append(button)
    chooseYourHero.append(heroes)
    chooseYourHero.append(create_game)
    enter_menu.append(logo_div)
    enter_menu.append(chooseYourHero)
    screen.append(enter_menu)
    main.replaceChild(screen, main.children[0])
}

CreateEnterMenu()