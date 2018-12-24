import React from 'react';
import Footer from '../components/footer.jsx';
import CommonCarousel from '../components/common-carousel.jsx';
import { message } from 'antd';
import axios from 'axios';
import '../asset/css/about.css';
export default class About extends React.Component {

    handleFile = () => {
        message.loading('文件上传成功', 2000);
        const file = document.querySelector('#order-file') || this.orderFile;
        const info = document.querySelector('.sub-info');
        info.innerText = `文件名称: ${file.files[0].name}`;
    }

    handleForm = order => {
        document.getElementById(`order${order === 1 ? 2 : 1}`).classList.remove('show');
        const t = document.getElementById(`order${order}`);
        t.classList.contains('show')
        ? t.classList.remove('show')
        : t.classList.add('show');
    }

    handleSubmit =() => {
            const name = document.querySelector('#order-name').value || this.orderName.value;
            const phone = document.querySelector('#order-phone').value;
            const file = document.querySelector('#order-file') || this.orderFile;
            const sizeM = file.files[0].size / 1024 / 1024;

            // console.log(name, phone, file.files[0], sizeM);
            // <from enctype='multipart/form-data'>
            // 文件上传必须使用此编码格式
            // console.log(file.files[0])

            if (sizeM > 10) {
                alert('文件大小不能超过10M')
            }else if(name.replace(' ', '') === ''){
                message.destroy()
                message.loading('请填写姓名', 2000);
            }else if(phone.length > 13 || phone.length < 7){
                message.destroy()
                message.loading('请填写正确的手机号', 2000);
            }else if(file.files.length < 1){
                message.destroy()
                message.loading('请上传简历', 2000);
            }else {

                const fd = new FormData();
                fd.append('file', file.files[0]);
                fd.append('phone_number', phone);
                fd.append('name',name);

                axios(`https://api.heyyoung.com.cn/api/v1/send-cv`, {
                    method: 'POST',
                    body: fd
                }).then(res=>{
                    if(res.status === 200){
                        message.destroy()
                        message.loading('提交成功请耐心等待', 2000);
                    }

                }).catch(err=>{
                    message.destroy()
                    message.loading(`提交错误:${err}, 请刷新重试或联系小黑羊客服`, 2000);
                    throw err
                })
            }
 
    }


    render() {

        const Wave = () => {
            const W = window && window.innerWidth;
            const H = window && window.innerHeight;
            const svgH = H * 0.2
            return (
                <svg
                    id='about-svg'
                    fill='rgba(0,0,0,0)'
                    width={W}
                    height={svgH}
                >
                    <path
                        fill='white'
                        stroke='white'
                        strokeWidth='1px'
                        d={`
                            M0 0
                            C${W * 0.25} ${svgH * 0.618} ${W * 0.75} ${svgH * 0.618} ${W} 00
                            L${W} ${svgH}
                            L0 ${svgH}
                            Z
                        `}
                    />
                </svg>
            )
        }

        const RadiusRect = ({ order }) => {
            return (
                <div id={`order${order}`} className='radius-rect'>
                    <div className='pc-triangle-up'></div>
                    <div className='label'>
                        姓名<i>*</i> <input ref={x=>this.orderName=x} id='order-name' type='text' />
                    </div>
                    <div className='label'>
                        手机<i>*</i> <input id='order-phone' type='text' />
                    </div>
                    <div className='label file'>
                        简历<i>*</i>
                        <div className='styled-file-input'>
                            <input onChange={this.handleFile} ref={x => this.orderFile = x} id='order-file' type='file' placeholder='+' accept={''} />
                            <div className='fake-input'>+</div>
                        </div>
                    </div>
                    <div className='sub-info'>支持PDF、WORD、PPT、JPG等格式, 不超过10MB</div>
                    {/* <div style={{width: '100%', textAlign: 'center'}} id='file-info'></div> */}
                    <button onClick={this.handleSubmit} className='submit'>提交</button>
                </div>
            )
        }

        return (
            <div className='pc-about'>
                        <div className='content-1'>
                            <h1>关于我们</h1>

                            <h3>YoungPass是中国首家独立运营的学生特权集合平 台，由全90后来自全球各高校的年轻人创立。</h3>
                            <h3>我们致力于找到品牌与青年学生之间良性优质的互 动机制，</h3>
                            <h3>一方面为优质的品牌沉淀青年客群、拉长 品牌客户的消费生命周期，</h3>
                            <h3>一方面为学生群体争取 到各种各样高价值、低门槛的消费福利及娱乐活动 机会。</h3>
                        </div>
                        <Wave />
                        <div className='content-under-wave'>
                            <h1>“除了好好学习 还要热爱生活！”</h1>

                            <h4>我们期待由学生创造的YoungPass</h4>
                            <h4>可以惠及我们的同龄人们</h4>
                            <h4>在念书的日子里也享受到丰富精彩的生活</h4>
                            <h4>尽情享受旅行、购物、娱乐、美食等</h4>
                            <h4>用有限的生活费发现无限的新体验</h4>
                        </div>

                        <div className='conetent-2'>
                            <CommonCarousel />
                        </div>

                        <div className='about-content-3'>
                            <h1>加入我们</h1>
                            <h3>公司氛围团结、快节奏、活泼、脑洞大</h3>
                            <div className='about-info'>
                                <div className='about-item'>
                                    <h2>市场部</h2>
                                    <p>
                                        我们需要你<br />
                                        头脑灵活，路子野！<br />
                                        能在有限时间内发掘有效的大学生市场推广<br />
                                        门道和渠道。 丢掉老套的方法，深度挖掘和<br />
                                        塑造自己都会接纳和喜爱的推广方式。<br />
                                        <br />
                                        能说会道，擅社交！<br />
                                        能在与各个合作推广方的交流中有效表达沟<br />
                                        通，达成1+1>2的合作推广。 合作推广方涵<br />
                                        盖：大型学生组织、社媒推广服务商等。<br />
                                        <br />
                                        敢想敢拼，有抱负！<br />
                                        你所有靠谱和不靠谱的想法都将有实践的可<br />
                                        能，所以你要敢想敢做， 并敢于接受社会反<br />
                                        馈的激励和打击！<br />
                                        <br />
                                        活力四射，够年轻！<br />
                                        我们不接受二十几岁却想着平淡无奇、得过<br />
                                        且过的成员加入。 二十几岁的肉体还不够，<br />
                                        我们要二十几岁的灵魂！<br />
                                    </p>
                                    <button onClick={() => this.handleForm(1)}>申请职位</button>
                                    <RadiusRect order={1} />
                                </div>
                                <div className='about-item'>
                                    <h2>品牌管理</h2>
                                    <p>
                                        我们需要你 <br />
                                        头脑灵活，路子野！<br />
                                        不要局限在定式思维里，已学习到的可以受 <br />
                                        用于未来的工作，但绝不仅仅于此。<br />
                                        <br />
                                        工作效率高，能力强！<br />
                                        善于分析与观察，有独立见解，能按指标高<br />
                                        质量地完成团队leader给的任务。<br />
                                        <br />
                                        关心时尚，够敏锐！<br />
                                        熟悉国内外时尚品牌，对年轻人喜爱的品牌<br />
                                        尤其敏感，有创造力和创新精神。<br />
                                        <br />
                                        活力四射，够年轻！<br />
                                        我们不接受二十几岁却想着平淡无奇、得过<br />
                                        且过的成员加入。 二十几岁的肉体还不够，<br />
                                        我们要二十几岁的灵魂！<br />
                                    </p>
                                    <button onClick={() => this.handleForm(2)}>申请职位</button>
                                    <RadiusRect order={2} />
                                </div>
                            </div>
                        </div>
                        <Footer />
                </div>
        )
    }
}