(function () {
  let terminal;
  let lastInteraction;
  let lastCommandInteraction;
  let inactivityTime = 10 * 1000;
  let commands = {
    help: `
Help: Lista commandos disponibles
> help
> about
> blog
> contact
`,
    about: `
Hola! me llamo Aitor Aznar Álvarez y me dedico a implementar soluciones de desarrollo a problemas de la vida real. 
Si quieres saber más ve a la sección [[!guib;#aaffa7;black;;#about]About]
`,
    blog: `
Puedes ver mis posts en la sección [[!guib;#aaffa7;black;;#blog]Blog]
`,
    contact: `
Puedes poner en contacto conmigo por [[!guib;#1da1f2;black;;https://twitter.com/aitoraznara]Twitter] o [[!guib;tomato;black;;mailto:aitor@aitoraznar.com]Email]
`
  };

  let TerminalCommandsHandler = (command, terminal) => {
    if (command !== '') {
      lastInteraction = Date.now();

      if (commands[command]) {
        lastCommandInteraction = Date.now();
        terminal.echo(new String(commands[command]));
        return;
      }

      try {
        var result = window.eval(command);
        if (result !== undefined) {
          terminal.echo(new String(result));
        }
      } catch(e) {
        terminal.error(new String(e));
      }
    } else {
      terminal.echo('');
    }
  }

  let isUserInactive = () => {
    if (!lastInteraction) {
      return true;
    }

    return (lastInteraction + (inactivityTime) < Date.now());
  }

  let checkForInactivity = () => {
    if (isUserInactive()) {
      //terminal.echo('Te veo paradete');
    }
  }

  let TerminalCommands = ($terminalContainer) => {
    let terminalHeight = window.innerHeight - (window.innerHeight * 0.30);

    jQuery(function($, undefined) {
      terminal = $terminalContainer.terminal(TerminalCommandsHandler, {
        greetings: 'JavaScript Web Interpreter (Escribe "help" para ver los comandos disponibles)',
        name: 'js_demo',
        height: terminalHeight,
        prompt: 'js> ',
        anyLinks: true
      });
    });

    $terminalContainer.on('click focus keyup', () => { lastInteraction = Date.now(); });
    setInterval(checkForInactivity, inactivityTime);
  }

  window.TerminalCommands = TerminalCommands;
})();