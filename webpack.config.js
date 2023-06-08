import path from 'path';


module.exports = {
  entry: './test.ts',
  output:{
    path: path.join(__dirname,'dist'),
    filename: 'bundle.js',
  },
  module:{
    rules:[
      {
        test: [/\.ts$/, /\.tsx$/],
        use: ['babel-loader','ts-loader']
      }
    ]
  },
  resolve:{
    extensions:['.ts',',tsx'],
  }

}