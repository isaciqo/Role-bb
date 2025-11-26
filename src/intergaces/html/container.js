const awilix = require('awilix');
const { Lifetime, InjectionMode } = awilix;

const container = awilix.createContainer({
    injectionMode: InjectionMode.PROXY
});

// Carregar os módulos conforme a estrutura fornecida
container.loadModules(
    [
        'src/app/operation/**/*.js',
        'src/app/services/**/*.js',
        'src/intergaces/html/presentation/**/*.js'
    ],
    {
        formatName: 'camelCase',
        resolverOptions: {
            injectionMode: InjectionMode.PROXY
        }
    }
);

module.exports = container;