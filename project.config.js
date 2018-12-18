const devConfig = {
    baseUrl: 'http://localhost:9093',
    origin: '',
    https: true
}

const prodConfig = {
    baseUrl: 'http://localhost:9094',
    origin: '',
    https: true
}

const config = process.env.NODE_ENV === 'production' ? prodConfig : devConfig;
export default config