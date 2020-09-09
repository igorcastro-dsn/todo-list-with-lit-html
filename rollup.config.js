import copy from 'rollup-plugin-copy';

const copyConfig = {
    targets: [
      { src: 'src/css', dest: 'dist' },
      { src: 'src/js', dest: 'dist' },
      { src: 'src/*.html', dest: 'dist' },
      { src: 'src/*.css', dest: 'dist' },
      { src: 'src/*.js', dest: 'dist' },
    ],
  };

const config = {
  input: 'src/todo-list.js',
  output: {
    dir: 'dist',
    format: 'es',
  },
  plugins: [
    copy(copyConfig),
  ],
  preserveEntrySignatures: false,
};

export default config;