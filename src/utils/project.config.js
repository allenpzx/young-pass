const devConfig = {
    baseUrl: 'http://localhost:9093',
    origin: '',
    https: true,
    CDN_IMAGE_HOST: 'cdn.youngpass.cn'
}

const prodConfig = {
    baseUrl: 'http://localhost:9093',
    origin: '',
    https: true,
    CDN_IMAGE_HOST: 'cdn.youngpass.cn'
}

const config = process.env.NODE_ENV === 'production' ? prodConfig : devConfig;

const isMobile = () => {
    if (typeof window.orientation !== 'undefined') {
        return true
    }else{
        return false
    }
}

export default {
    ...config,
    isMobile
}