const generateContainer = async (toolbox, containerName) => {
  const {
    parameters,
    print,
    template: { generate },
    strings,
    filesystem
  } = toolbox;
  const { isBlank, pascalCase, kebabCase } = strings;
  const {
    first: paramName,
    options: { p, path }
  } = parameters;

  // validation
  if (!containerName && isBlank(paramName)) {
    print.info(`${toolbox.runtime.brand} generate container <name>\n`);
    print.info('A name is required.');
    return;
  }

  const tempName = containerName || paramName;
  const name = pascalCase(tempName);
  const filename = kebabCase(tempName);
  const base = p || path;
  const folder = `src/containers${base ? `/${base}` : ''}/${filename}`;

  // verify the component doesn't exist already
  if (filesystem.exists(folder) === 'dir') {
    print.error(`Container ${print.colors.yellow(name)} already exists.`);
    return;
  }

  await generate({
    target: `${folder}/index.jsx`,
    template: 'container.ejs',
    props: { name }
  });

  print.info(`Generated container ${print.colors.yellow(name)}`);
};

module.exports = generateContainer;
