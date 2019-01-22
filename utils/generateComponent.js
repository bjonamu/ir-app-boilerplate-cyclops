const generateComponent = async (toolbox, componentName) => {
  const {
    parameters,
    print,
    strings: { isBlank, pascalCase, kebabCase },
    filesystem,
    ignite
  } = toolbox;
  const {
    first: paramName,
    options: { c }
  } = parameters;

  // validation
  if (!componentName && isBlank(paramName)) {
    print.info(`${toolbox.runtime.brand} generate component <name>\n`);
    print.info('A name is required.');
    return;
  }

  const name = pascalCase(componentName || paramName);
  const filename = kebabCase(componentName || paramName);
  const folder = `src/components/${filename}`;

  // verify the component doesn't exist already
  if (filesystem.exists(folder) === 'dir') {
    print.error(`Component ${print.colors.yellow(name)} already exists.`);
    return;
  }

  // Default to a stateless component
  let template = 'stateless.ejs';

  // controlled component
  if (c) {
    template = 'controlled.ejs';
  }

  const jobs = [
    {
      template,
      target: `${folder}/index.jsx`
    },
    {
      template: 'story.ejs',
      target: `${folder}/${filename}.story.jsx`
    }
  ];

  await ignite.copyBatch(toolbox, jobs, { name });

  filesystem.append(
    'src/components/index.js',
    `\nexport { default as ${name} } from './${filename}';`
  );

  print.info(`Generated component ${print.colors.yellow(name)}`);
};

module.exports = generateComponent;
