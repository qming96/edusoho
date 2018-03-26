// import 'babel-polyfill';
import 'jquery';
import * as cd from 'codeages-design';
import '!style-loader!css-loader!less-loader!codeages-design/src/less/codeages-design.less';
import Api from './api';

class LtcSDK {
  constructor() {
    this.options = {};
    this.handler = {};
    this.isVerify = false;
  }

  passport() {
    // 需替换成真实的验证机制
    // if (this.options.appId == '123456') {
    //   console.log('验证成功');
    // } else {
    //   throw new Error('验证身份失败');
    // }
  
    if (this.options.apiList instanceof Array) {
      this.options.apiList.forEach((item) => {
        if (!this[item]) {
          throw new Error('不存在 ' + item + ' 接口');
        }
      });
    }

    this.isVerify = true;
  }

  verify() {
    if (!this.isVerify) {
      throw new Error('请先调用config方法，验证身份');
    }
  }

  config(options) {
    let DEFAULTS = {
      apiList: [],
      appId: null,
    }

    Object.assign(this.options, DEFAULTS, options);
  
    this.passport();
  
    return this;
  }

  getApi(options) {
    this.verify();
    return Api(options);
  }

  getUi() {
    this.verify();
    return cd;
  }

  getMessenger() {
    const on = (channel = 'task-events', callback) => {
      window.addEventListener('message', (e) => {
        if (e.data.channel === channel) {
          if (typeof callback === 'function') {
            callback(e.data)
          }
        }
      });
    }

    const emit = (data, origin = '*') => {
      window.parent.postMessage(
        Object.assign({channel: 'activity-events'}, data), 
        origin
      );
    }
    
    return {
      emit,
      on
    }
  }
}

let ltcsdk = new LtcSDK();

module.exports = window.ltcsdk = ltcsdk;