const parseArgs = () => {
  const args = process.argv;
  const props = [];

  args.map((el, i) => {
    if (el.slice(0, 2) === '--') {
      props.push(`${el} is ${args[i + 1]}`);
    }
  });

  console.log(props.join(' ,'));
};

parseArgs();
