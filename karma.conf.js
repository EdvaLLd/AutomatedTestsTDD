module.exports = function(config) {
  config.set({
    // Använd Jasmine som testframework
    frameworks: ['jasmine'], 

    // Filer som Karma ska läsa in och köra tester på
    files: [
      'src/**/*.spec.ts'  // Alla .spec.ts-filer i src-mappen
    ],

    // Preprocessorer för TypeScript
    preprocessors: {
      'src/**/*.ts': ['karma-typescript']  // Bearbeta alla .ts-filer med karma-typescript
    },

    // Webbläsare som Karma ska köra tester i
    browsers: ['ChromeHeadless'],  // Chrome i headless-läge (utan GUI)

    // Konfiguration av webbläsaren (ChromeHeadless)
    customLaunchers: {
      ChromeHeadless: {
        base: 'ChromeHeadless',
        flags: [
          '--no-sandbox',
          '--disable-gpu',
          '--disable-dev-shm-usage',
          '--remote-debugging-port=9222',  // Viktigt för att köra utan grafiskt gränssnitt
          '--headless',  // Se till att köras utan GUI
          '--disable-software-rasterizer',  // Lägg till flagga för att förhindra rasterizer-problem
        ]
      }
    },

    // Rapportformat
    reporters: ['progress'],  // Visar en progressindikator under körning

    // Om testerna ska köras en gång eller om de ska fortsätta köra vid ändringar
    singleRun: true,  // Kör testerna en gång och stäng sedan av Karma

    // Håll inte koll på ändringar av filer, kör testerna endast en gång
    autoWatch: false,

    // Konfiguration för att köra TypeScript-filer i Karma
    karmaTypescriptConfig: {
      tsconfig: './tsconfig.spec.json'  // Peka på TypeScript-konfigurationen för tester
    }
  });
};
