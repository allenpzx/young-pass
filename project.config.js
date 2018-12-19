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

const isBrowser = () => {
    if(typeof window !== undefined && typeof document !== undefined){
        return true
    }
}

const isMobile = () => {

}

export default {
    config,
    isBrowser,
    isMobile
}