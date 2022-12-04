const parseEnv = () => {
  const envVar = process.env;
  const varRss = [];

  for (const key in envVar) {
    if (key.slice(0, 4) === 'RSS_') {
      let tmp = `${key}=${envVar[key]}`;
      varRss.push(tmp);
    }
  }
  console.log(varRss.join('; '));
};

parseEnv();
