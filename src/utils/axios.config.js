import axios from 'axios';
import { message } from 'antd';

axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    message.loading('正在加载...', 0);
    return config;
}, function (error) {
    // Do something with request error
    message.loading('请尝试刷新或联系客服...', 0)
    return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Do something with response data
    message.destroy()
    return response;
}, function (error) {
    // Do something with response error
    message.loading('请尝试刷新或联系客服...', 0)
    return Promise.reject(error);
});