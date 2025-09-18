// plopfile.js (ESM)
export default function (plop) {
  plop.setGenerator('component', {
    description: 'Generate a React component with JSX + CSS Module',
    prompts: [
      { type: 'input', name: 'name', message: 'Component name:' },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/Components/{{pascalCase name}}/{{pascalCase name}}.jsx',
        templateFile: 'plop-templates/component.hbs',
        skipIfExists: true
      },
      {
        type: 'add',
        path: 'src/Components/{{pascalCase name}}/{{pascalCase name}}.css',
        templateFile: 'plop-templates/style.hbs',
        skipIfExists: true
      },
    ],
  });
}
