function createMenu() {
    const main = document.getElementById('main');
    const screen = document.createElement('div');
    screen.classList.add('screen');
    const menu = document.createElement('div');
    menu.classList.add('menu');
    const form = document.createElement('form');
    form.action = '#';
    form.classList.add('box');
    const input = document.createElement('input');
    input.type = 'text';
    input.classList.add('button');
    input.placeholder = 'Никнейм';
    const button = document.createElement('button');
    button.classList.add('auth');
    button.classList.add('button');
    button.textContent = 'Войти';
    form.appendChild(input);
    form.appendChild(button);
    menu.append(form);
    screen.append(menu);
    main.append(screen);
}

createMenu();