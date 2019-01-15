import React from 'react';
import Loadable from 'react-loadable';
import { Skeleton, Button } from 'antd';
const withLoadable = loader => Loadable({
    loader: ()=>loader,
    loading: ({error}) => {
      if(error){
        return <div>[error] - {error} <Button onClick={()=>this.props.history.push('/')}>回到首页</Button></div>
      }else{
        return <Skeleton active size={'large'} rows='20' />
      }
    }
});
export default withLoadable